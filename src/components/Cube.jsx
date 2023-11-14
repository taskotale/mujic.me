import '../styles/cube.css';
import { string } from 'prop-types';
import { func } from 'prop-types';

export default function Cube({ showSide, setModal }) {
	// code necessary to make cube work by itself

	// const [showSide, setShowSide] = useState('cube show-')

	// const changeSide = (side) => {
	//     const scene = document.getElementsByClassName('scene')
	//     scene[0].className = 'scene scale'
	//     setTimeout(function(){
	//         scene[0].className = 'scene'
	//     },1000)
	//     setShowSide('cube show-' + side)
	// }

	const links = {
		front: 'https://google.com',
		back: '1',
		right: 'CV Maker',
		left: 'Bookshelf app',
		top: '4',
		bottom:
			'First click buttons on the side, than you can click again on the cube!',
	};

	const touchBump = () => {
		let side = showSide.split('-');
		setModal(links[side[1]]);
	};

	return (
		<>
			<div className="scene" onClick={() => touchBump()}>
				<div className={showSide}>
					<div className="cube__face cube__face--front">
						<span className="cube-text-wrapper">DeskHelp</span>
						<hr/>
						<span className="cube-text-content">coming soon</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
					<div className="cube__face cube__face--back">
						<span className="cube-text-wrapper">Back</span>
						<hr/>
						<span className="cube-text-content">Build your pdf downloadable CV</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
					<div className="cube__face cube__face--right">
						<span className="cube-text-wrapper">CV Maker</span>
						<hr/>
						<span className="cube-text-content">Build your pdf downloadable CV</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
					<div className="cube__face cube__face--left">
						<span className="cube-text-wrapper">Bookshelf</span>
						<hr/>
						<span className="cube-text-content">Web App to keep track of your books</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
					<div className="cube__face cube__face--top">
						<span className="cube-text-wrapper">Top</span>
						<hr/>
						<span className="cube-text-content">Build your pdf downloadable CV</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
					<div className="cube__face cube__face--bottom">
						<span className="cube-text-wrapper">Click</span>
						<hr/>
						<span className="cube-text-content">Build your pdf downloadable CV</span>
						<span className="cube-text-foot">Click for more...</span>
					</div>
				</div>
			</div>

		</>
	);
}

Cube.propTypes = {
	showSide: string,
	setModal: func,
};
