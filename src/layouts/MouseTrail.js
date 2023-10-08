// Used this Guide to Create This Component
// Some modification in order to work with React
// https://tympanus.net/codrops/2019/09/24/crafting-stylised-mouse-trails-with-ogl/
import React from "react";
import { Color, Polyline, Renderer, Transform, Vec3 } from 'ogl';
import { vertex, colors } from '../config/mouse_trail.js';

// adding two canvas for some reason.
const MouseTrail = () => {
  const canvasDiv = React.useRef(null)
  const canvas = React.useRef(null)

  React.useEffect(() => {
    if (document.getElementById('canvas-div').children.length < 1) { // Required to prevent two canvas being added.
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      //  Canvas Setup
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      const renderer = new Renderer({ dpr: 2 });
      const gl = renderer.gl
      
      gl.canvas.id = 'canvas';
      gl.canvas.ref = canvas;
      gl.canvas.style.position = 'absolute';
      gl.canvas.style.top = 0;
      gl.canvas.style.left = 0;
      gl.canvas.style.zIndex = -1;

      canvasDiv.current.innerHTML = ''
      canvasDiv.current.appendChild(gl.canvas);
      gl.clearColor(0.9, 0.9, 0.9, 1);
      const scene = new Transform();

      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      //  Lines Setup
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      const lines = colors.map((color, i) => {
        const line = {
          points: [],
          spring: (0.07-((i+1)*.005)),
          friction: (0.9-((i+1)*.05)),
          mouseVelocity: new Vec3(),
          mouseOffset: new Vec3(-0.02+(0.01*i))
        }

        for (let j = 0; j < 20; j++) {
          line.points.push(new Vec3());
        }

        line.polyline = new Polyline(gl, {
          points: line.points,
          vertex,
          uniforms: {
            uColor: { value: new Color(color) },
            uThickness: { value: 40 },
          },
        })
        
        line.polyline.mesh.setParent(scene);
        return line;
      });

      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      //  Handling Page Resize
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        lines.forEach(line => line.polyline.resize());
      }
      window.addEventListener('resize', resize);
      resize();

      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      //  Handling Mouse Position
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      const mouse = new Vec3();
      const updateMouse = (event) => {
        const tmp = {}
        // Touch Screen || Mouse
        tmp.x = event.pageX || (event?.changedTouches ? event?.changedTouches[0]?.pageX : null);
        tmp.y = event.pageY || (event?.changedTouches ? event?.changedTouches[0]?.pageY : null);

        mouse.set(
          (((tmp.x / gl.renderer.width) * 2) - 1),
          (((tmp.y / gl.renderer.height) * (-2)) + 1),
          0
        )
      }

      // Event Listeners for Mouse/Touch Screen
      if ("intouchstart" in window) {
        // touch screen devices
        window.addEventListener("touchstart", updateMouse);
        window.addEventListener("touchmove", updateMouse);
      } else {
        // mouse devices
        window.addEventListener("mousemove", updateMouse);
      }

      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      //  Updates Page Frame
      // ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
      const update = () => {
        requestAnimationFrame(update);

        // 'Eases' points towards eachother
        lines.forEach(line => {
          for (let i = line.points.length-1; i>= 0; i--) {
            if (!i) {
              // Ease the first point to the mouse
              const tmp = new Vec3()
              tmp.copy(mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring);
              line.mouseVelocity.add(tmp).multiply(line.friction)
              line.points[i].add(line.mouseVelocity)
            } else {
              // Ease other points to their previous point
              line.points[i].lerp(line.points[i-1], 0.9); 
            }
          }
          line.polyline.updateGeometry();

          renderer.render({ scene });
        });
      }
      requestAnimationFrame(update);
    }
  });

  return (
    <div
      ref={canvasDiv}
      id='canvas-div'
    />
  )
}

export default MouseTrail;