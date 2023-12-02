const project_data = [
    {
        title: 'My Portfolio Website',
        description: [
            `class SteamApp {

            _constructor() {
            __this.type = 'web application';
            __this.purpose = 'personal experience';
            __this.dateStarted = 'september 2022';
            _} 

            _getDescription() {
            __String description = \`
            ___A web application built to interact with the public Steam API
            ___in order to extract profile data and display it in a desired
            ___format which draws attention to achievements within steam games.
            __\`;

            __return description;
            _}
            }`.replaceAll('_', '\xa0\xa0')
        ],
        links: [
            { title: 'github', link: 'https://github.com/rgreenan55/my-portfolio' },
        ],
        tags: ['react', 'javascript', 'html', 'css'],
        pictures: [],
    },
    {
        title: 'Steam Profile Viewing Website',
        description: [
            `class SteamApp {

            _constructor() {
            __this.type = 'web application';
            __this.purpose = 'personal experience';
            __this.dateStarted = 'september 2022';
            _} 

            _getDescription() {
            __String description = \`
            ___A web application built to interact with the public Steam API
            ___in order to extract profile data and display it in a desired
            ___format which draws attention to achievements within steam games.
            __\`;

            __return description;
            _}
            }`.replaceAll('_', '\xa0\xa0')
        ],
        links: [
            { title: 'github_ui', link: 'https://github.com/Steam-Application/steam-app' },
            { title: 'github_api', link: 'https://github.com/Steam-Application/steam-app-api' },
            { title: 'steam_api', link: 'https://partner.steamgames.com/doc/api' },
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