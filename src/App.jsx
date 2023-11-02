import { useEffect, useState, useRef } from 'react';
import Landing from './components/Landing.jsx';
import SideNav from './components/SideNav.jsx';
import Projects from './components/Projects.jsx';
import Modal from './components/Modal.jsx';

function App() {
	const [modal, setModal] = useState(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	return (
		<>
			{modal && <Modal content={modal} closeModal={setModal} />}
			<div
				onClick={() => ref1.current.scrollIntoView({ behavior: 'smooth' })}
				ref={ref1}
			>
				<Landing />
			</div>
			<div className="side-btns">
				<SideNav side="right" goTo={ref2} />
				<SideNav side="bottom" goTo={ref3} />
				<SideNav side="left" goTo={ref4} />
			</div>
			<Projects pointer={ref2} setModal={setModal} />
			<div ref={ref3} id="2" className="test">
				3
			</div>
			<div ref={ref4} id="3" className="test">
				4
			</div>
		</>
	);
}

export default App;
