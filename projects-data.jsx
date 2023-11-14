const cvMaker = {
	name: 'CV Maker',
	tech: ['React', 'CSS', 'Vite', 'Vercel'],
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
	tech: ['Flask', 'Python', 'Bootstrap', 'JQuery', 'SQLite'],
	link: 'Currently not deployed',
	desc: 'Promised my mom that I will find a way to know where are her books!',
	features: [
		'Cataloging all owned books',
        'Keep track of borrowed books',
        'Check if you already read the book',
		'Organizing per book location per room and exact shelf',
		'Search with ISBN',
		'Search with barcode picture',
        'Search by name',
        'Automatic addition of book cover and details',
		'Personal  accounts',
		'Search in Google online database for details',
        'Easy find on Amazon and Google Books'
	],
};

const projectsData = {
	front: 'https://google.com',
	back: '1',
	right: cvMaker,
	left: bookshelfApp,
	top: '4',
	bottom:
		'First click buttons on the side, than you can click again on the cube!',
};

export default projectsData;
