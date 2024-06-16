import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMongodb, SiTypescript, SiPrisma, SiVite } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiAmazonec2 } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const redux = <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 100 100"><g fill="#764ABC"><path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" /><path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" /><path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" /></g></svg>

const AWS_EC2 = <svg className="rounded-md" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-EC2_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path><path d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z" fill="#FFF"></path></g></svg>

const AWS_S3 = <svg className="rounded-md" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-S3-Standard_32_svg__a"><stop stop-color="#1B660F" offset="0%"></stop><stop stop-color="#6CAE3E" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-S3-Standard_32_svg__a)"></path><path d="M30.074 22.671l.2-1.301c1.703 1.016 1.735 1.444 1.732 1.46-.004.003-.308.24-1.932-.159zm-10.185-3.733a.995.995 0 01-.992.994.994.994 0 010-1.99c.547 0 .992.448.992.996zm7.869 12.33c0 .123-.495.31-.93.478l-.445.17c-.475.189-1.037.359-1.669.504-1.576.366-3.75.585-5.817.585-5.503 0-8.435-1.009-8.439-1.798L8.256 13.57c1.899 1.452 5.8 2.382 10.641 2.382 4.63 0 9.364-.897 11.584-2.472l-1.366 8.92c-2.871-.874-6.392-2.56-8.132-3.398l-.105-.05.002-.015c0-1.098-.89-1.99-1.983-1.99a1.988 1.988 0 00-1.983 1.99c0 1.097.89 1.99 1.983 1.99.733 0 1.367-.407 1.71-1.002 1.806.868 5.41 2.591 8.356 3.468l-1.205 7.874zm-8.86-23.273c6.676 0 11.857 1.86 11.894 3.465l-.024.148c-.27 1.579-5.352 3.35-11.87 3.35-6.388 0-10.71-1.725-10.89-3.375l-.015-.12c.023-1.678 4.397-3.468 10.904-3.468zm11.538 12.318l1.344-8.76c.001-.026.006-.05.006-.076C31.786 8.674 25.233 7 18.897 7 12.003 7 7 8.883 7 11.477l.003.061 2.468 19.73c0 2.6 7.852 2.732 9.426 2.732 2.137 0 4.394-.228 6.04-.61a12.74 12.74 0 001.81-.548l.432-.167c.844-.321 1.57-.598 1.564-1.331l1.18-7.684c.655.158 1.197.24 1.63.24.58-.001.973-.143 1.21-.428a.982.982 0 00.219-.832c-.127-.681-.923-1.405-2.546-2.327z" fill="#FFF"></path></g></svg>

const AWS_EBS = <svg className="rounded-md" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Elastic-Beanstalk_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Elastic-Beanstalk_32_svg__a)"></path><path d="M25.5 22.594c0-.82-.673-1.486-1.5-1.486s-1.5.667-1.5 1.486c0 .818.673 1.485 1.5 1.485s1.5-.667 1.5-1.485M20 17.148c.827 0 1.5-.667 1.5-1.485 0-.82-.673-1.486-1.5-1.486s-1.5.667-1.5 1.486c0 .818.673 1.485 1.5 1.485m-5 5.94c.827 0 1.5-.666 1.5-1.485 0-.818-.673-1.485-1.5-1.485s-1.5.667-1.5 1.485c0 .82.673 1.486 1.5 1.486m11.5-.495c0 1.195-.86 2.195-2 2.424v3.516a.498.498 0 01-.5.496h-3.5V32h-1v-5.94H15a.498.498 0 01-.5-.496v-1.536c-1.14-.23-2-1.23-2-2.425 0-1.364 1.121-2.475 2.5-2.475s2.5 1.111 2.5 2.475c0 1.196-.86 2.196-2 2.425v1.041h4v-6.982c-1.14-.23-2-1.23-2-2.424 0-1.365 1.121-2.476 2.5-2.476s2.5 1.111 2.5 2.476c0 1.195-.86 2.195-2 2.424v9.952h3v-3.02c-1.14-.23-2-1.23-2-2.425 0-1.365 1.121-2.476 2.5-2.476s2.5 1.111 2.5 2.476m7.5-2.525c0 3.686-2.776 5-5.375 5v-.99c1.315 0 4.375-.391 4.375-4.01 0-2.708-2.079-3.69-3.823-4.036a.497.497 0 01-.401-.456c-.127-2.122-1.378-2.876-2.41-2.876-.698 0-1.353.33-1.796.905a.513.513 0 01-.471.19.497.497 0 01-.395-.32c-.4-1.074-.975-1.974-1.705-2.673-1.88-1.805-4.452-2.293-6.878-1.308-2.017.813-3.595 3.162-3.595 5.35 0 .242.016.485.045.722a.495.495 0 01-.376.541C10.002 16.401 8 17.3 8 20.031c0 .092.005.181.009.266.121 2.133 2.002 3.782 4.285 3.782h.206v.99h-.206c-2.813 0-5.133-2.06-5.282-4.688A6.686 6.686 0 017 20.03c0-3.166 2.223-4.346 3.539-4.766a6.517 6.517 0 01-.013-.42c0-2.604 1.813-5.298 4.217-6.267 2.805-1.14 5.779-.573 7.951 1.514a7.758 7.758 0 011.651 2.332c1.734-1.391 4.968-.815 5.396 2.719 2.75.662 4.259 2.4 4.259 4.926" fill="#FFF"></path></g></svg>

const AWS_53 = <svg className="rounded-md"  height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-Route-53_32_svg__a"><stop stop-color="#4D27A8" offset="0%"></stop><stop stop-color="#A166FF" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-Route-53_32_svg__a)"></path><path d="M24.024 20.314c.343.317.514.74.514 1.272 0 .58-.208 1.042-.624 1.388-.416.345-.977.518-1.68.518a4.112 4.112 0 01-1.647-.354v-.71c.643.214 1.193.32 1.648.32.448 0 .794-.101 1.036-.302.242-.2.363-.488.363-.86 0-.715-.452-1.072-1.355-1.072a8.13 8.13 0 00-.842.044v-.585l1.86-2.03h-2.622v-.726h3.607v.7l-1.826 1.932a.447.447 0 01.089-.009h.088c.584 0 1.048.159 1.391.474m-5.147-.154c.359.336.54.8.54 1.39 0 .58-.21 1.049-.63 1.405-.42.358-.972.537-1.656.537a4.09 4.09 0 01-1.692-.354v-.71c.655.214 1.216.32 1.683.32.448 0 .793-.102 1.032-.306.239-.204.36-.498.36-.882 0-.42-.113-.725-.338-.913-.224-.189-.59-.284-1.099-.284-.366 0-.823.03-1.373.09v-.587l.169-2.65h3.233v.727h-2.489l-.116 1.8c.326-.06.618-.09.878-.09.638 0 1.138.17 1.498.507m6.653 6.462c-2.242.403-4.207 1.313-5.53 2.059-1.323-.746-3.288-1.656-5.53-2.06-.627-.112-3.755-.764-3.755-2.558 0-.836.301-1.392.877-2.385.696-1.2 1.562-2.693 1.562-4.848 0-1.528-.399-2.996-1.187-4.368l.25-.306c2.61 1.293 5.533 1.118 7.783-.304 2.25 1.421 5.173 1.597 7.783.304l.25.306c-.788 1.372-1.188 2.84-1.188 4.368 0 2.155.866 3.648 1.563 4.848.576.993.876 1.549.876 2.385 0 1.794-3.127 2.446-3.754 2.559m2.312-9.792c0-1.454.41-2.849 1.22-4.146a.502.502 0 00-.036-.58l-.726-.893a.497.497 0 00-.63-.123c-1.134.627-2.319.945-3.518.945-1.448 0-2.714-.39-3.868-1.19a.502.502 0 00-.568 0c-1.155.8-2.42 1.19-3.868 1.19-1.2 0-2.384-.318-3.52-.945a.495.495 0 00-.628.123l-.726.893a.5.5 0 00-.036.58c.809 1.297 1.219 2.692 1.219 4.146 0 1.887-.791 3.25-1.428 4.347-.626 1.08-1.011 1.798-1.011 2.886 0 2.524 3.502 3.348 4.575 3.54 2.246.404 4.207 1.356 5.456 2.084a.493.493 0 00.502 0c1.25-.728 3.21-1.68 5.455-2.083 1.074-.193 4.575-1.017 4.575-3.541 0-1.088-.384-1.806-1.01-2.886-.637-1.096-1.429-2.46-1.429-4.347M26.01 29.297c-2.822.507-5.19 2.016-6.01 2.588-.82-.572-3.188-2.08-6.01-2.588-1.406-.252-5.992-1.376-5.992-5.234 0-1.606.631-2.696 1.244-3.75.587-1.013 1.195-2.06 1.195-3.483 0-2.217-1.265-3.791-1.913-4.452.676-.821 2.314-2.818 3.147-3.89 1.263 1.18 2.728 1.824 4.177 1.824 1.61 0 2.942-.65 4.152-2.036 1.21 1.387 2.543 2.036 4.152 2.036 1.449 0 2.914-.643 4.176-1.824.833 1.072 2.472 3.069 3.148 3.89-.649.66-1.913 2.235-1.913 4.452 0 1.423.608 2.47 1.195 3.483.612 1.054 1.244 2.144 1.244 3.75 0 3.858-4.587 4.982-5.992 5.234m5.611-9.485c-.57-.98-1.06-1.828-1.06-2.982 0-2.43 1.892-4.004 1.912-4.02a.503.503 0 00.07-.705c-.03-.037-3.066-3.716-3.759-4.668a.497.497 0 00-.768-.047c-1.16 1.24-2.532 1.924-3.864 1.924-1.471 0-2.63-.656-3.756-2.128a.516.516 0 00-.793 0c-1.126 1.472-2.285 2.128-3.755 2.128-1.332 0-2.704-.683-3.864-1.924a.497.497 0 00-.768.047c-.693.952-3.728 4.63-3.76 4.668a.502.502 0 00.072.705c.019.016 1.911 1.575 1.911 4.02 0 1.154-.49 2.001-1.061 2.982C7.732 20.926 7 22.188 7 24.062c0 3.127 2.546 5.451 6.813 6.217 3.19.574 5.857 2.597 5.883 2.617a.499.499 0 00.608 0c.026-.02 2.694-2.043 5.883-2.617C30.453 29.513 33 27.19 33 24.063c0-1.875-.732-3.137-1.379-4.25" fill="#FFF"></path></g></svg>


//     <RiTailwindCssFill className='size-6' key={0} />,
//     <IoLogoJavascript className='size-6' key={0} />,
//     <FaReact className='size-6' key={0} />,
//     <SiTypescript className='size-5'/>,
//     <SiNextdotjs className='size-6' key={0} />,
//     <FaNodeJs className='size-6' />,
//     <SiExpress className='size-6' />,
//     <SiMongodb className='size-6' />,
//     <BiLogoPostgresql className='size-6' />,
//     <FaDocker className='size-6' />,
//     <FaHtml5 className='size-6' />,
//     <FaCss3Alt className='size-6' />,
//     <FaGitAlt className='size-6' />




export const skills = [
    {
        title: "Front End",
        skills: [

            [<RiTailwindCssFill className='size-6' key={0}/>],
            [<IoLogoJavascript className='size-6' key={0} />],
            [<FaReact className='size-6' key={0} />],
            [<SiTypescript className='size-5'  key={0}/>],
            [<SiNextdotjs className='size-6' key={0} />],
            // ["State Management",  <BiLogoRedux className="size-6" /> ],
            [<BiLogoRedux className="size-6"  key={0}/>] ,
            [<FaHtml5 className='size-6' key={0} />],
            [<FaCss3Alt className='size-6' key={0} />],
            // [<BiLogoRedux className="size-6" />]
        ]
    },
    {
        title: "Backend and Database",
        skills: [
            [<FaNodeJs className='size-6' key={0} />],
            [<SiExpress className='size-6' key={0} />],
            [<SiMongodb className='size-6' key={0} />],
            [<BiLogoPostgresql className='size-6' key={0} />]
        ]
    },
    {
        title: "Programming Language",
        skills: [

            [<FaJava className='size-6' key={0} />],
            [<IoLogoJavascript className='size-6' key={0} />],
            [<SiTypescript className='size-5'  key={0}/>],
            // ["Familiar Languages",<FaPython className='size-6' key={0}/>],
        ]
    },
    {
        title: "Tools",
        skills: [
            [<FaDocker className='size-6' key={0} />],
            [<SiPrisma className="size-5"  key={0}/>],
            [<FaGitAlt className='size-6' key={0} />],
            [<FaAws className='size-6' key={0} />, AWS_EC2, AWS_S3, AWS_EBS, AWS_53],
            // [<FaGitAlt className='size-6' key={0} />, <SiTypescript className='size-5' />, <SiTypescript className='size-5' />, <SiTypescript className='size-5' />, <SiTypescript className='size-5' />],
        ]
    },

]

export const projects = [
    {
        title: "URL Shortner",
        description: " URL shortener designed for efficiency and ease of use. Built on Next.js and leveraging Prisma for optimal database interactions, URL Shortener provides both a sleek, user-friendly interface. This application is designed to make URL shortening a seamless part of your workflow.",
        githubLink: "https://github.com/UTHRATHITHAN/URLshortener",
        liveLink: "https://url-shortener-live.vercel.app/",
        skillsUsed: [
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill className='size-5' />,
            },
            {
                name: "Typescript",
                icon: <SiTypescript className='size-4' />
            },
            {
                name: "Next JS",
                icon: <SiNextdotjs className='size-5' />
            },
            {
                name: "Postgres",
                icon: <BiLogoPostgresql className='size-5' />
            },
            {
                name: "Prisma",
                icon: <SiPrisma className="size-5" />
            }
        ]
    },
    {
        title: "Crypto-Currency Price Tracker",
        description: "This project is a React.js-based application that allows users to track the latest prices, market cap, and volume information for various cryptocurrencies in real-time. Our goal is to provide crypto enthusiasts and investors with an easy-to-use, intuitive interface for monitoring their favorite digital currencies.",
        githubLink: "https://github.com/UTHRATHITHAN/Crypto-Currency-Price-Tracker",
        liveLink: "https://crypto-currency-price-tracker.vercel.app/",
        skillsUsed: [
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill className='size-5' />,

            },
            {
                name: "Vite",
                icon: <SiVite className='size-4' />,
            },
            {
                name: "React",
                icon: <FaReact className='size-5' />,
            }
        ]
    },
    {
        title: "Rentify",
        description: "Rentify, a web application built using Next JS and Node JS to streamline the rental process by offering features such as Property listings, Live like count and many more feature to  improve the user Experience.",
        githubLink: "https://github.com/UTHRATHITHAN/Presidio_Assignment",
        liveLink: "https://presidio-assignment-one.vercel.app/",
        skillsUsed: [
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill className='size-5' />,
            },
            {
                name: "Typescript",
                icon: <SiTypescript className='size-4' />
            },
            {
                name: "Next JS",
                icon: <SiNextdotjs className='size-5' />
            },
            {
                name: "Postgres",
                icon: <BiLogoPostgresql className='size-5' />
            },
            {
                name: "Prisma",
                icon: <SiPrisma className="size-5" />
            },
            {
                name: "Node JS",
                icon: <FaNodeJs className='size-5' />
            },
            {
                name: "Express",
                icon: <SiExpress className='size-5' />
            },
        ]
    }
];

export const CONSTANTS = {
    CURRENTLY_LEARNING: "Python",
    GOOGLE_DRIVE_VIEW: "https://drive.google.com/file/d/1xhB7yyo5cnViaVkWKypmOcrqWX76LN8n/view?usp=sharing",
    GOOGLE_DRIVE_DOWNLOAD: "https://drive.usercontent.google.com/uc?id=1xhB7yyo5cnViaVkWKypmOcrqWX76LN8n&export=download",
    GITHUB_LINK: "https://github.com/UTHRATHITHAN",
    LINKEDIN_LINK: "https://www.linkedin.com/in/uthrathithan/",
    MAIL_ID: "mailto:m.uthrathithan@gmail.com",
    TWITTER_LINK: "https://x.com/Uthrathithan_M",
    LEETCODE_LINK: "https://leetcode.com/u/uthrathithan/",

}


