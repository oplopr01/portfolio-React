const greeting = {
    display: true,
    username: 'Lakhan Rathore',
    title: "Hi I'm",
    subTitle: '',
};

const aboutMe = {
	display: true,
    title: 'About Me',
    subTitle: 'An aspiring Software Developer / Full Stack Web Developer 🚀 having an experience of building Web with JavaScript / Reactjs and some other  libraries and frameworks .',
	skills: [
		'⚡ Proficient in programming language Java(OOPS + Exception Handling + Collection Framwork) and JavaScript',
		'⚡ Familiarity with web development technologies HTML, CSS,React.js,JavaScript, MERN stack',
		'⚡ Familiarity with RESTful APIs React Hooks and working of modern authorization mechanisms, such as JSON Web Token',
		'⚡ Ability to work in a collaborative team environment and adapt to changing environment',
		'⚡ Good analytical and problem-solving skills',
		'⚡ Experience working with version control systems such as Git/Github and dataBases like MongoDb,MySql/Oracle',
		'⚡ Experience in software development life cycle (SDLC) and agile methodologies',
	],
};


const projects = {
	display: true,
	title: 'Projects 🏆  ',
	subtitle: '',
	projectCards: [
		// {
		// 	title: 'Landing Page Using ReactJS + Tailwind CSS',
		// 	subtitle: `The web application is made using HTML, ReactJS, Tailwind CSS. Application Hosted on Netlify`,
		// 	image: require('./images/landing page.png'),
		// 	direction: 'left',
		// 	footerLink: [
		// 		{
		// 			name: 'Source Code',
		// 			url: 'https://github.com/oplopr01/landing-page-react-tailwind',
		// 		},
		// 		{
		// 			name: 'Live Demo',
		// 			url: 'https://landing-page-tailwind-react-lakhan.netlify.app/',
		// 		},
		// 	],
		// },
		{
			title: ' Resale Item Application | Albertsons',
			subtitle:[ ` Contributed to an existing production application through bug fixes, minor enhancements, and
unit test case writing. `, `Worked with enterprise-scale React codebases, following established development and Git
workflows.`,`Supported feature validation through local and lower environment testing. `],
			image: require("./images/resale.png"),
			direction: 'right',
			footerLink: [
				
				// {
				// 	name: 'Live Demo',
				// 	url: 'https://fantastic-croissant-b0c9d0.netlify.app/',
				// },
			],
		},
		{
			title: '  Fresh Item Project',
			subtitle:[ ` Core frontend developer for a new product built from scratch, actively involved from initial
development stages to feature delivery `, `Took ownership of delivering assigned user stories on time, ensuring dependent stories could
progress without blockers.`,`Worked closely with Backend and UI/UX teams to clarify requirements, integrate APIs, and
translate designs into functional React components. `,`Handled code deployment and testing across multiple environments, ensuring stability before
promoting builds to higher environments.
`,`Presented feature demos to QA teams and Product Owners`,`Conducted development smoke testing in lower environments prior to QA validation and deployments`, ` This project significantly improved problem-solving, ownership, and confidence while working
under real delivery pressure.
`],
			image: require("./images/fresh.png"),
			direction: 'right',
			footerLink: [
			],
		},
		{
			title: ' Code Sync-Up Activity',
			subtitle:[ `Played a key role in synchronizing Resale Item application code into the Fresh Item repository,
ensured feature stability across modules.`,`Served Responsibilities :- Syncing codebases, resolving conflicts and Verifying features integrity`, `Leading multiple rounds of development smoke testing and consolidating test results`, `Merging stable changes into the main development branch`, `Operated under high-pressure timelines, requiring quick analysis, confident decision-making,
and close collaboration with multiple team members.`, `This activity significantly strengthened technical confidence, decision-making ability, and
collaboration skills typically expected at a higher responsibility level `],
			image: require("./images/mern project.png"),
			direction: 'right',
			footerLink: [
			],
		},
		{
			title: 'Insurance & Reinsurance Policy and Claims Management System. (Personal Project)',
			subtitle:[`Built a full-stack MERN application for managing insurance policies, claims, and automatic
reinsurance risk allocation.`, `Developed Node.js and Express REST APIs with JWT authentication and role-based access
control (RBAC) for secure system access.`,`Created a modular React frontend with feature-based components, multi-step policy
creation forms, and dashboards connected to backend APIs`],
			image: require("./images/insurance.png"),
			direction: 'right',
			footerLink: [
				
				{
					name: 'Live Demo',
					url: 'https://fantastic-croissant-b0c9d0.netlify.app/',
				},
			],
		},
	],
};


const skillsSection = {
    display: true,
    title: 'Skills & Proficiency',
    subTitle: 'Good Problem solver and a fine web Developer',

	softwareSkills1: {
		
		languages : [
			{
				skillName: 'Java (OOPS)',
				imgSrc: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-java-computer-programming-flaticons-flat-flat-icons.png'
			},
		],

		webDev: [
			{
				skillName: 'HTML5',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png'
			},
			{
				skillName: 'CSS3',
				imgSrc: 'https://img.icons8.com/color/55/000000/css3.png',
			},
			{
				skillName: 'Bootstrap5',
				imgSrc: 'https://img.icons8.com/color/50/000000/bootstrap.png',
			},
			{
				skillName: 'Material-UI',
				imgSrc: "https://img.icons8.com/color/48/null/material-ui.png",
			},
			{
				skillName: 'Javascript',
				imgSrc: 'https://img.icons8.com/color/50/000000/javascript--v1.png'
			},
			{
				skillName: 'React.Js',
				imgSrc: 'https://img.icons8.com/plasticine/50/000000/react.png',
			},
			{
				skillName: 'RTK',
				imgSrc: 'https://img.icons8.com/color/50/000000/redux.png',
			},
			{
				skillName: 'NodeJs',
				imgSrc: 'https://img.icons8.com/color/50/000000/nodejs.png',
			},			
			{
				skillName: 'REST APIs',
				imgSrc: 'https://img.icons8.com/color/50/000000/api.png',
			},			
			{
				skillName: 'GraphQL',
				imgSrc: 'https://img.icons8.com/color/50/000000/graphql.png',
			},			
			{
				skillName: 'MongoDB',
				imgSrc: 'https://img.icons8.com/color/50/000000/mongodb.png',
			},
			{
				skillName: 'MySql',
				imgSrc: 'https://img.icons8.com/color/48/null/mysql-logo.png',
			},
		],
		
		toolsAndPlatforms: [
			{
				skillName: 'Git/GitHub',
				imgSrc: 'https://img.icons8.com/color/50/000000/git.png',
			},
			{
				skillName: 'VS-Code',
				imgSrc: 'https://img.icons8.com/color/48/000000/visual-studio--v1.png'
			},
			{
				skillName: 'Netlify',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
			},
			{
				skillName: 'Linux',
				imgSrc: "https://img.icons8.com/ios-glyphs/30/null/linux.png"
			},
			{
				skillName: 'Copilot',
				imgSrc: "https://img.icons8.com/?size=100&id=s6BMuiR0tvY2&format=png&color=000000"
			},
			{
				skillName: 'Open AI',
				imgSrc: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000"
			},
		],
		corporateMethodologies: [
			{
				skillName: 'JIRA',
				imgSrc: 'https://img.icons8.com/color/50/000000/jira.png',
			},
			{
				skillName: 'Confluence',
				imgSrc: 'https://img.icons8.com/color/50/000000/confluence.png'
			},
			{
				skillName: 'Agile (Scrum)',
				imgSrc: 'https://img.icons8.com/?size=100&id=aPFPvI9iSUKn&format=png&color=000000',
			},			
		],
	},
};


const techStack = {
	viewSkillBars: true,
	experience: [
		{
			Stack: 'Frontend / Design',
			progressPercentage: '80%',
		},
		{
			Stack: 'Backend',
			progressPercentage: '70%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '60%',
		},
	],
};


const educationInfo = {
	display: true,
	schools: [
		{
			schoolName: 'Government Engineering College Bilaspur, CSVTU Bhilai',
			logo: require('./images/hnbgu_logo.webp'),
			subHeader: 'B.Tech in Information Technology',
			duration: 'August 2018 - July 2022',
			desc: '8.2 CGPA',
		},
		{
			schoolName: `Sarashwati Sishu Mandir Sakti`,
			logo: require('./images/schoollogo.png'),
			subHeader: 'PCMB- 80% in XII and 83% in X',
			duration: 'April 2017 - April 2018 (XII)',
			desc: '',
		},
	],
};

const trainingsInfo = {
	display:true,
	training:[
		{
			companyName:"Full Stack Web Development, MERN + Java + SQL",
			start:"2/09/2023",
			end:"01/03/2024",
			role:"JSpider BTM Branch, Banglore",
			desc: [  " JSpider full stack training institute helped me to upskill myself on Java Programming language, sharpen my hands on Frontend development and to understand complex concepts of JavaScript & ReactJS ","Lerned the web application responsiveness to run apps on phone, tab, PC screen with better UI experience.",
		"Lerned to Break pages into components in order to make efficient and reusable code.","Learned Testing of backend API's of the web application using postman.","Trained on TechStack  - ReactJs, MongoDB, NodeJs, ExpressJs, Java,SQL, and Github."]
		}
	]
}
const corporateExperience = {
	display:true,
	experience:[
		{
			companyName:"UST Global",
			start:"1/04/2024",
			end:"Currently Working",
			role:"FrontEnd Developer 1 (ReactJS)",
			desc: [  " Worked on Item Setup and Item Modernization initiatives for Albertsons to improve store item onboarding accuracy.","Designed and developed modular, reusable React components",
		"Integrated frontend components with REST APIs and GraphQL","Wrote and maintained unit tests using Jest to ensure stability and regression coverage (Best usage of AI agents, copilot and chatGPT).","TCollaborated with backend, QA, and product teams in an Agile environment.", "Participated in sprint ceremonies, client demos, and backlog grooming sessions.", "Worked in a secure VDI claud-based enterprise development environment."]
		}
	]
}

const contactMe = {
	display: true,
	title: 'Get in Touch 😄',
	subTitle: '',
	contact : [
		{
			contactField: 'Name',
			value: 'Lakhan Rathore',
			icon: 'https://img.icons8.com/fluency/50/000000/change-user-male.png',
		},
		{
			contactField: 'Current Address',
			value: 'Trivandrum, Keralam',
			icon: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-address-user-interface-flatart-icons-flat-flatarticons.png',
		},
		{
			contactField: 'E-Mail',
			value: 'lakhanrathore.10.100@gmail.com',
			icon: 'https://img.icons8.com/fluency/50/000000/gmail-new.png',
		},
		{
			contactField: 'Mobile / WhatsApp',
			value: '+91 9516668168',
			icon: 'https://img.icons8.com/color/50/000000/phone.png',
		},
	],
	username: 'Lakhan Rathore',
	address: 'Sakti, Chhattishgarh 495689',
	email: 'lakhanrathore.10.100@gmail.com',
	mobile: '+91 9516668168',
};


export {
    greeting,
    aboutMe,
	contactMe,
    skillsSection,
	techStack,
	educationInfo,
	projects,
	trainingsInfo,
	corporateExperience
}
