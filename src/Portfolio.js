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
	subtitle: ' Note -  API(Projects) might take a bit longer time to load as hosted on free web services',
	projectCards: [
		{
			title: 'Landing Page Using ReactJS + Tailwind CSS',
			subtitle: `The web application is made using HTML, ReactJS, Tailwind CSS. Application Hosted on Netlify`,
			image: require('./images/landing page.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/oplopr01/landing-page-react-tailwind',
				},
				{
					name: 'Live Demo',
					url: 'https://landing-page-tailwind-react-lakhan.netlify.app/',
				},
			],
		},
		{
			title: 'Random Password Generater',
			subtitle: ` Randome Password Generater: made using HTML, CSS, JavaScript. 
		 features like setting length of the password, button to copy the appeared passwords `,
			image: require("./images/pass generator project.png"),
			direction: 'right',
			footerLink: [
				
				{
					name: 'Live Demo',
					url: 'https://fantastic-croissant-b0c9d0.netlify.app/',
				},
			],
		},
		{
			title: 'Digital Clock',
			subtitle: ` Digital Clock : made using HTML, CSS, JavaScript. 
		 features like showing current time on UI`,
			image: require("./images/digital clock.png"),
			direction: 'right',
			footerLink: [
				{
					name: 'Live Demo',
					url: 'https://stately-lollipop-dc563e.netlify.app/',
				},
				
			],
		},
		{
			title: 'Payroll System Project- Core Java',
			subtitle: `Used Java OOPs core concepts. Encapsulation, Inheritance, and Abstraction for this Project`,
			image: require('./images/payroll project.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/oplopr01/learning-core-java/tree/fb4c7000ad879e43aad947e2ae4707b293f2a7de/javaProjects/Payroll%20system%20Project',
				},
			],
		},
		{
			title: 'Registration Form',
			subtitle: ` This is a MERN application utilizing the MERN technologies to perform CRUD (create, read, update, delete) operations. built UI using ReactJS, Handling user request via ExpressJS and NodeJS, and storing and reading data from MongoDB server `,
			image: require("./images/mern project.png"),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/oplopr01/MERN-project1-employee-registration-form',
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
				skillName: 'NodeJs',
				imgSrc: 'https://img.icons8.com/color/50/000000/nodejs.png',
			},			{
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
			value: 'BTM layout stage 2, Banglore, Karnataka 560105 ',
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
}
