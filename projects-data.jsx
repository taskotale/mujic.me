import flaskSVG from './src/static/icons/flask.svg';
import pythonSVG from './src/static/icons/python.svg';
import bootstrapSVG from './src/static/icons/bootstrap-logo.svg';
import jquerySVG from './src/static/icons/jquery.svg';
import sqliteSVG from './src/static/icons/sqlite.svg';
import reactSVG from './src/static/icons/react.svg';
import cssSVG from './src/static/icons/css-3.svg';
import jsSVG from './src/static/icons/javascript-js.svg';
import viteSVG from './src/static/icons/Vitejs-logo.svg';
import vercelSVG from './src/static/icons/vercel.svg';
import htmlSVG from './src/static/icons/HTML5.svg';

const cvMaker = {
	name: 'CV Maker',
	tech: [reactSVG, jsSVG, cssSVG, viteSVG, vercelSVG],
	link: 'https://cv-maker-tahir-mujics-projects.vercel.app/',
	desc: 'Instead of manually editing text documents every time I needed a tailored resume, I built a modular system. It allows me to dynamically update data points, swap configurations, and instantly generate a clean PDF.',
	features: [
		'Real-time modular editing for all data fields',
		'Dynamic generation of highlight sections (skills, languages)',
		'Customizable data mapping and naming conventions',
		'Adjustable color schemes and themes',
		'Live side-by-side preview on wider viewports',
		'Scalable architecture for upcoming layout swaps',
	],
};

const bookshelfApp = {
	name: 'Bookshelf App',
	tech: [flaskSVG, pythonSVG, bootstrapSVG, jquerySVG, sqliteSVG],
	link: 'http://taskotale.pythonanywhere.com/',
	desc: 'My mom was losing track of her physical library, so I built a digital inventory management system. It maps physical space to a digital database to keep a strict log of her collection. (Currently adapting for a new deployment).',
	features: [
		'Granular spatial tracking (Room > Bookshelf > Exact Shelf)',
		'Logistics tracking for borrowed and finished books',
		'Automated metadata and cover fetching via API',
		'Multi-input search query (ISBN, barcode image, or text)',
		'External API hooks to Amazon and Google Books',
	],
};

const deskHelp = {
	name: 'DeskHelp',
	desc: 'A workflow tool built to bridge the gap between repetitive basic tasks. It acts as a digital assistant, optimizing the small operational bottlenecks in daily computer use.',
};

const myBlog = {
	name: 'System Logs 🤔',
	desc: "I collect a lot of 'useless' knowledge and dive deep into how things work. This will be the digital notebook where I document my technical logic, software experiments, and the operational systems I explore.",
};

const game = {
	name: 'Tic Tac Toe',
	desc: 'One of my earliest projects, built purely to figure out the logic behind an "invincible" computer opponent. It was my first real dive into algorithms and predicting behavior. Next up: refactoring the UI to match the precision of the logic.',
	tech: [htmlSVG, cssSVG, jsSVG],
};

const projectsData = {
	front: deskHelp,
	back: game,
	right: cvMaker,
	left: bookshelfApp,
	top: myBlog,
	bottom:
		'Select a project from the navigation, then click the cube to see how it works.',
};

export default projectsData;
