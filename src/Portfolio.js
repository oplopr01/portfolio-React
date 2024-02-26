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
			title: 'Blood Donation Web Application',
			subtitle: `The web application is made using MERN stack styled with CSS, font-awesome.
			The web application included features such as users registration and functionality to find compatible donors.
			The project was built using a combination of front-end and back-end technologies such as HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB.
			Application Hosted on Render.com`,
			image: require('./images/bld.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211',
				},
				{
					name: 'Live Demo',
					url: 'https://blddonnerwebapp.onrender.com',
				},
			],
		},
		{
			title: 'Personal Task Manager',
			subtitle: `Web application is made using ReactJs and styled using material-ui
			Features of the app are create, update, edit and delete goals. Add labels to goal, Start a timer to track the time spent for goal, timer keeps running even when the window is closed.
			Filter goals by hashtag and/or text, and sort goals by time spent per goal
			View a Bar graph that displays the amount of time spent per goal.`,
			image: require('./images/task.png'),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/Personal-task-manager',
				},
				{
					name: 'Live Demo',
					url: 'https://imaginative-haupia-00def5.netlify.app/',
				},
			],
		},
		{
			title: 'Bank Management System',
			subtitle: ` The project aimed to simulate a basic bank management system that would streamline banking operations like sending and receiving money.
			The bank management system included features such as viewing all customers bank balance , sending and receiving money with some special checks 
			The project was developed using modern web development technologies such as React.js,Express.js,MongoDb,Node.js.`,
			image: require('./images/bank.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/bankmanagement',
				},
				{
					name: 'Live Demo',
					url: 'https://bankfrontend.onrender.com',
				},
			],
		},{
			title: 'React Blog Application',
			subtitle: `The project aimed to develop a modern blog application using ReactJS, a popular JavaScript library for building user interfaces, to create an interactive and dynamic blogging platform.
			The blog application included features such as user authentication and authorization, blog post by the registered users with image , creation , editing/deleting of blog , Changing of username passoword etc.
			The project was developed using ReactJS for front-end development, along with other related technologies such as Redux for state management, Axios for API communication, and MongoDb for user authentication and data storage.
			The project showcased strong technical skills in ReactJS and related technologies, demonstrating the ability to create interactive web applications with modern UI/UX design. It could be highlighted as a successful project that showcases proficiency in front-end development and user-centric design. `,
			image: require('./images/blog.png'),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/reactblog',
				},
				{
					name: 'Live Demo',
					url: 'https://blogfrontend-p3q6.onrender.com/',
				},
			],
		},
		{
			title: 'PlayStore Data Analysis',
			subtitle: `Performed a comprehensive analysis of Play Store data to gain
			insights into user behavior, app trends, and other key metrics
			Used Kaggle to collect data on Play Store apps. The data was then
			cleaned and analyzed using various statistical and ML techniques
			The project utilized Python programming language and various
			libraries such as Pandas, NumPy, and Matplotlib.
			The project uncovered trends, like the most popular app categories,
			impact of app ratings on downloads and many more `,
			image: require("./images/dataanalysis.png"),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/playstoreEDA',
				},
				
			],
		},
		{
			title: 'Teligram Bot using Node.js',
			subtitle: `This is a self created teligram bot to send response on some predefined message like \n
			"hi" will send greeting from bot and "/postwikidata" will send some random wikipedia post. Other predefine response can also be added.`,
			image: require("./images/teligram_bot.png"),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/Ritesh9211/teligramchatbot/tree/main',
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
	CodingSection,
	trainingsInfo,
}
