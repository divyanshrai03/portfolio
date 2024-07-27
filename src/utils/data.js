import Bg1 from '../assets/images/frontend-icon.png';
import Bg2 from '../assets/images/backend-icon.png';
import Bg3 from '../assets/images/tools-icon.png';
import Bg4 from '../assets/images/softskills-icon.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: Bg1, width: 50, height: 50,
        skills: [
            { skill: "HTML5", percentage: "90%"},
            { skill: "CSS3 (Sass/SCSS)", percentage: "90%"},
            { skill: "JavaScript", percentage: "75%"},
            { skill: "React.js", percentage: "80%"},
        ],
    },

    {
        title: "Backend",
        icon:Bg2,
        skills: [
            { skill: "NodeJs", percentage: "35%"},
            { skill: "MongoDB", percentage: "70%"},
            { skill: "ExpressJs", percentage: "60%"},
            
        ],
    },

    {
        title: "Tools",
        icon:Bg3,
        skills: [
            { skill: "Git & GitHub", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "90%"},
            { skill: "Webpack", percentage: "60%"},
            { skill: "Responsive Design", percentage: "70%"},
        ],
    },

    {
        title: "SoftSkills",
        icon:Bg4,
        skills: [
            { skill: "Problem-Solving Abilities", percentage: "85%"},
            { skill: "Time Management", percentage: "90%"},
            { skill: "Teamwork", percentage: "90%"},
            { skill: "Communication Skills", percentage: "90%"},
        ],
    },
];


export const WORK_EXPERIENCE = [
    {
        title: "Worked as FrontEnd Developer in ONDC - BUILD FOR BHARAT",
        date: "January 2024 - February 2024",
        responsibilities: [
            "Spearheaded the development of an E-Commerce platform uniquely designed to cater to users with limited technical proficiency.",
            "Successfully incorporated intuitive features, including a chatbot for efficient customer support and advanced 360-degree product viewing capabilities.",
            "Skillfully integrated cutting-edge AR technology to deliver engaging and immersive product experiences for users.",
            "Maintained a strong focus on improving overall usability and accessibility to ensure a seamless experience for a wide range of users.",
        ]
    },

    {
        title: "Participated in HackOut'24 organized at IIT MADRAS.",
        date: "November 2023",
        responsibilities: [
            "Created a specialized website for daily wage workers, facilitating job connections based on skills.",
            "Addresses immediate employment needs by providing a unique resource tailored to this demographic.",
            "Fills a significant gap in the market by offering a specialized platform for daily wage laborers.",
            "Continuously drives the platform's growth to empower individuals seeking job opportunities effectively",
        ]
    },

    {
        title: "Started Web Dev Journey as FrontEnd Developer in SIH",
        date: "September 2023",
        responsibilities: [
            "Developed a cutting-edge website for real-time vehicle tracking, offering precise monitoring capabilities.",
            "Leveraged the OpenStreetMap API to provide users with accurate location updates and comprehensive vehicle details.",
            "Enhanced user experience by integrating advanced technology for seamless vehicle monitoring and data access.",
            "Stands out for utilizing open-source mapping data and a commitment to delivering reliable tracking services to users.",
        ]
    },
];
