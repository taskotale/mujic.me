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
				<>{displayContent}</>
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
	let techUsed = [];
	if (contentObj.tech) {
		techUsed = contentObj.tech.map((element) => {
			const listElement = [];
			listElement.push(
				<object
					className="icon"
					type="image/svg+xml"
					data={element}
					key={element}
				></object>
			);
			return listElement;
		});
	}
	let features = [];
	if (contentObj.features) {
		features = contentObj.features.map((element) => {
			const listElement = [];
			listElement.push(<li key={element}>{element}</li>);
			return listElement;
		});
	}

	return (
		<div>
			<div className="display-projects">
				<div>
					{contentObj.name && <h1>{contentObj.name}</h1>}
					{contentObj.desc && (
						<p className="project-description">{contentObj.desc}</p>
					)}
					{contentObj.tech && (
						<div>
							Tech Used:
							<div className="tech-list">{techUsed}</div>
						</div>
					)}
				</div>
				<div>
					{contentObj.features && <ul className="project-features"><h3>Features:</h3> {features}</ul>}</div>
			</div>
			<div>
				{isValidHttpUrl(contentObj.link) && (
					<a href={contentObj.link}>Check out the live version!</a>
				)}
				{!isValidHttpUrl(contentObj.link) && <a>Currently not deployed</a>}
			</div>
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
