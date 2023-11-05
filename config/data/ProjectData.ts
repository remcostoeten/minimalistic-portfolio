export const ProjectData = [
    {
        title: 'HTML To React/TypeScript converter',
        description: 'A tool to convert HTML to JSX/TSX. I tend to do a lot of UI prototyping work and got tired of having to wait for the Cloudflare anti-bot loadings on other converters, so I decided to build my own. \n\nThis tool allows you to convert any HTML (including SVGs!) to either JSX or TSX. It supports NextJS app router with client-side flags. It is also possible to generate a fully functioning component with or without props.',
        url: 'https://remcostoeten.com/html-to-jsx',
        labels: ['React', 'TypeScript', 'NextJS', 'TailwindCSS', 'Context', "Regex"],
    },
    {
        title: "Visual Studio Code recreated in React",
        description: "Why you ask? I have the same question... This was one of my probably 50 UI's I've created in the past year which was going to be my portfolio site, but I eventually got sick of it. The landing page is very cool though, in my opinion, so it's worth showcasing.\n\n There is one tool in there which is a tool that allows extracting URLs based on certain strings. Again, a tool which I use and I'd rather host myself. But like all, it still has some bugs and is not perfect. But it works... somewhat.", url: 'https://vsc.remcostoeten.com',
        labels: ['TypeScript', 'NextJS', 'TailwindCSS', "SCSS"],

    },
    {
        title: "Server side kanban board",
        description: "This is a kanban board which is server side rendered. It is build with NextJS, TypeScript, Firebase as the database. This was one of my first projects ever created (without any tutorial!). It has authentication which then redirectsd to a kanban board with multiple lanes like we know from *excuses my language* Jira. Also supports drag and drop off the tasks inbetween lanes and such. Loads of features to add but i've called it a day for that project.",
        url: 'https://kanban.remcostoeten.com',
        labels: ['DnD', 'TypeScript', 'NextJS', 'TailwindCSS', 'Authentication', "Firebase"],
    }
];