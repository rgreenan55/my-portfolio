const jobs_data = [
    {
        title: 'Sonrai Security (Canada) Inc.',
        subtitle: 'Software Engineer — Co-op Student',
        link: 'https://sonraisecurity.com/',
        dates: ['Sep 2022 — May 2023'],
        description: `
            During my work term at Sonrai Security, I was independently assigned the task of developing
            an extensive repository that would automated the existing deployment processes of Sonrai's cloud
            security systems. 
            <br/>
            Previously, these tasks were performed manually - in both testing and for actual 
            implementation - which would take up to an entire day's work, or longer, to accomplish.
            <br/>
            By utilizing Python and Pytests, I was able to develop a sequence of tests that would
            establish a connection to aws/azure/gcp, deploy the required tools to the cloud network,
            then perform a security scan of that network. Once completed, the tests would retrieve the
            scan results, and evaluate it for anomalies.
            <br/>
            The results due to my work automating this task reduced an entire day of work
            to about 2-3 hours of automated tests. Not only improving upon the previous time
            taken to perform the task, but removing the need for manual implementation.

        `,
        tags: ['python', 'pytest', 'cloud', 'aws', 'azure', 'gcp', 'graphql', 'circleci']
    },
    {
        title: 'Terris (Formerly: 3D Planeta)',
        subtitle: 'Software Engineer — Co-op Student',
        link: 'https://www.terrisei.com/',
        dates: ['Jan 2021 — Aug 2021'],
        description: `
            Terris was my first step towards working within the field of Software Engineering. With minimal experience
            I began by using this opportunity to soak in as much knowledge as possible, and then pouring it back into
            the company. The first few months were slow to begin, as I was learning a new language, tools and 
            software. But once I got myself grounded, I began working on larger and larger tasks.
            <br/>
            My responsibilities were varying as any Sprint would involve working with various different areas of the
            codebase. Some tasks were focused on UI design, such as implementing a new feature or improving upon components.
            Other tasks involved delving into the backend and fixing up algorithms and SQL calls.
            <br/>
            My biggest contributions came towards the end of my work term where I began overhauling the navigation and pages
            of the main web application. I began modularizing many of the components that were reused, as well as improving
            upon the caching of the application in order to retain data.
            <br/>
            I was also assigned a research and implementation task that would allow the users to select a given area on a map
            and the GPS coordinates would ping various satellite photo repositories in order to provide the user a selection of
            spatial imagery of the location. This was implemented using Leaflet and Leaflet Draw.
        `,
        tags: ['javascript', 'reactjs', 'html', 'css', 'mysql']
    },
    /*
    {
        title: 'Example',
        subtitle: 'Position Title',
        link: 'https://www.google.ca/',
        dates: ['Jan 2077 - Dec 2077'],
        description: `

        `,
        links: [
            { title: 'Youtube', link: 'https://www.youtube.com/'}
        ],
        tags: ['this', 'is', 'a', 'tag', ':)']
    }
    /**/
]

export default jobs_data;