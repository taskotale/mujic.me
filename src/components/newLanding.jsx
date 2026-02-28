import { useEffect, useRef, useState } from 'react';
import '../styles/newLanding.css';
import { array } from 'prop-types';

export default function NewLanding({ links }) {

	return (
		<div className="nl-main" >
			<div className="nl-container">
				<div className="nl-name">Tahir Mujic</div>
				<div className="nl-picture">2dsadasdasd</div>
				<div className="nl-projects">3</div>
				<div className="nl-about">4dasdasdasd</div>
				<div className="nl-contact">asdasdasdasddasd5</div>
			</div>
		</div>
		)
}

NewLanding.propTypes = {
	links: array,
};
