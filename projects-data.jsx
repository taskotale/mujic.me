import flaskSVG from './src/static/icons/flask.svg'
import pythonSVG from './src/static/icons/python.svg'
import bootstrapSVG from './src/static/icons/bootstrap-logo.svg'
import jquerySVG from './src/static/icons/jquery.svg'
import sqliteSVG from './src/static/icons/sqlite.svg'
import reactSVG from './src/static/icons/react.svg'
import cssSVG from './src/static/icons/css-3.svg'
import jsSVG from './src/static/icons/javascript-js.svg'
import viteSVG from './src/static/icons/Vitejs-logo.svg'
import vercelSVG from './src/static/icons/vercel.svg'
import htmlSVG from './src/static/icons/HTML5.svg'

const cvMaker = {
	name: 'CV Maker',
	tech: [reactSVG, jsSVG , cssSVG, viteSVG, vercelSVG],
	link: 'https://cv-maker-tahir-mujics-projects.vercel.app/',
	desc: 'I needed a CV so I build an app that is able to change quickly sections in my resume and download it as PDF',
	features: [
		'Quick change of any field in resume',
		'Unlimited addition of highlight sections like skills, languages...',
		'Customizable name of highlights',
		'Change color scheme',
		'Side preview on wider screens',
		'Change layout(coming soon)',
	],
};
const bookshelfApp = {
	name: 'Bookshelf App',
	tech: [flaskSVG, pythonSVG, bootstrapSVG, jquerySVG, sqliteSVG],
	link: 'http://taskotale.pythonanywhere.com/',
	desc: 'Promised my mom that I will find a way to know where are her books! \n Still adapting for deployment',
	features: [
		'Cataloging all owned books',
        'Keep track of borrowed and already red books',
		'Organizing per book location per room and exact shelf',
		'Search with ISBN, barcode image or simply by name',
        'Automatic addition of book cover and details',
        'Easy find on Amazon and Google Books'
	],
};

const deskHelp = {
	name: 'DeskHelp',
	desc: 'My friend developer gave me the idea to make a program that could help bridge some basic tasks.'
}

const myBlog = {
	name: 'Undecided yet 🤔',
	desc: "I'm planning to showcase a website, potentially a clone, but my primary focus is to start documenting my journey in software development and explore topics that interest me in general."
}

const game = {
	name: 'Tic Tac Toe',
	desc: 'One of the first things that I ever made that I like and proud of after making the logic for invincible computer player. I will revisit this to make it look nicer and run smoother.',
	tech: [htmlSVG, cssSVG, jsSVG]
}

const projectsData = {
	front: deskHelp,
	back: game,
	right: cvMaker,
	left: bookshelfApp,
	top: myBlog,
	bottom:
		'First click buttons on the side, than you can click again on the cube!',
};

export default projectsData;

