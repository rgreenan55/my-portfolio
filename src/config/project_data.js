const project_data = [
    {
        title: 'Steam Profile Viewing App',
        description: [
            `class SteamApp {` + '\n\n' +
            
            `constructor() {` + '\n' +
            '\xa0\xa0' + `this.type = 'web application';` + '\n' +
            '\xa0\xa0' + `this.purpose = 'personal experience';` + '\n' +
            '\xa0\xa0' + `this.dateCreated = 'september 2022';` + '\n' +
            `}` + '\n\n' +

            `getDescription() {` + '\n' +
            '\xa0\xa0' + `String description = \`` + '\n' +
            '\xa0\xa0\xa0' + `A web application built to interact with the public Steam API` + '\n' +
            '\xa0\xa0\xa0' + `in order to extract profile data and display it in a desired` + '\n' +
            '\xa0\xa0\xa0' + `format which draws attention to achievements within steam games.` + '\n' +
            '\xa0\xa0' + `\`;` + '\n\n' +
            '\xa0\xa0' + `return description;` + '\n' +
            `}` + '\n\n' +
            `}` + '\n'
        ],
        links: [
            { title: 'git_app_ui', link: 'https://github.com/Steam-Application/steam-app' },
            { title: 'git_app_api', link: 'https://github.com/Steam-Application/steam-app-api' },
            { title: 'steam_api', link: 'https://partner.steamgames.com/doc/api' },
            { title: 'material_ui', link: 'https://mui.com/material-ui/' }
        ],
        tags: ['react', 'javascript', 'html', 'css'],
        pictures: [],
    },
    {
        title: 'Mobile App that is Mobile',
        description: [],
        links: [{ title: '', link: '' }],
        tags: ['', '', ''],
        pictures: [],
    },
    {
        title: 'Game of Game Town',
        description: [],
        links: [{ title: '', link: '' }],
        tags: ['', '', ''],
        pictures: [],
    },
    {
        title: 'Website of Websitington',
        description: [],
        links: [{ title: '', link: '' }],
        tags: ['', '', ''],
        pictures: [],
    }
]

export default project_data;