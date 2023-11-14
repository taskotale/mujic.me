import { useRef } from 'react';
import '../styles/modal.css';
import { any, func } from 'prop-types';

export default function Modal({ content, closeModal }) {
	const outsideDiv = useRef(null);
	let displayContent = 'Error';

	typeof content == 'string'
		? (displayContent = content)
		: (displayContent = parseContent(content));

	return (
		<div
			className="modal"
			onClick={(e) => {
				if (!outsideDiv.current.contains(e.target)) closeModal(false);
			}}
		>
			<div className="modal-window" ref={outsideDiv}>
				<div>{displayContent}</div>
				<button onClick={() => closeModal(false)}>Back</button>
			</div>
		</div>
	);
}

Modal.propTypes = {
	content: any,
	closeModal: func,
};

const parseContent = (contentObj) => {
	const techUsed = contentObj.tech.map((element) => {
		const listElement = [];
		listElement.push(<li key={element}>{element}</li>);
		return listElement;
	});
	const features = contentObj.features.map((element) => {
		const listElement = [];
		listElement.push(<li key={element}>{element}</li>);
		return listElement;
	});

	return (
		<div className="display-projects">
			{contentObj.name && <h1>{contentObj.name}</h1>}
			<p>{contentObj.desc}</p>
			<ul>
				Tech Used:
				{techUsed}
			</ul>
			{features && <ul>Features: {features}</ul>}
			{isValidHttpUrl(contentObj.link) && <a href={contentObj.link}>Check out the live version!</a>}
			{!isValidHttpUrl(contentObj.link) && <a>{contentObj.link}</a>}
		</div>
	);
};

function isValidHttpUrl(string) {
	let url;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return url.protocol === 'http:' || url.protocol === 'https:';
}
