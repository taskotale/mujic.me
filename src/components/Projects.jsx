import '../styles/projects.css';
import Cube from './Cube';
import { useState } from 'react';
import { func, object } from 'prop-types';

export default function Projects({ pointer, setModal }) {
	const [showSide, setShowSide] = useState('cube show-bottom');
	const [selectedSide, setSelectedSide] = useState(null);

	//changes sides from side menu
	const handleChangeSide = (side) => {
		const scene = document.getElementsByClassName('scene');
		scene[0].className = 'scene scale';
		setTimeout(function () {
			scene[0].className = 'scene';
		}, 1000);

		setSelectedSide(side);
		setShowSide('cube show-' + side);
	};

	return (
		<div className="projects-container" ref={pointer}>
			<div className="cube-wrapper">
				<Cube showSide={showSide} setModal={setModal} />
			</div>
			<div className="project-nav">
				<div>
					<label className="button-label">
						<input
							type="radio"
							name="side"
							value="left"
							checked={selectedSide === 'left'}
							onChange={(e) => handleChangeSide(e.target.value)}
							className="visually-hidden"
						/>
						<span className="button-text">Bookshelf</span>
					</label>

					<label className="button-label">
						<input
							type="radio"
							name="side"
							value="right"
							checked={selectedSide === 'right'}
							onChange={(e) => handleChangeSide(e.target.value)}
							className="visually-hidden"
						/>
						<span className="button-text">CV maker</span>
					</label>
					<label className="button-label">
						<input
							type="radio"
							name="side"
							value="front"
							checked={selectedSide === 'front'}
							onChange={(e) => handleChangeSide(e.target.value)}
							className="visually-hidden"
						/>
						<span className="button-text">1 Coming soon...</span>
					</label>
					<label className="button-label">
						<input
							type="radio"
							name="side"
							value="top"
							checked={selectedSide === 'top'}
							onChange={(e) => handleChangeSide(e.target.value)}
							className="visually-hidden"
						/>
						<span className="button-text">2 coming soon...</span>
					</label>
					<label className="button-label">
						<input
							type="radio"
							name="side"
							value="back"
							checked={showSide === 'back'}
							onChange={(e) => handleChangeSide(e.target.value)}
							className="visually-hidden"
						/>
						<span className="button-text">3 coming soon...</span>
					</label>
				</div>
			</div>
		</div>
	);
}

Projects.propTypes = {
	pointer: object,
	setModal: func,
};
