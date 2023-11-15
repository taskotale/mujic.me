import { useState, useRef, useEffect } from 'react';
import Landing from './components/Landing.jsx';
import Projects from './components/Projects.jsx';
import Modal from './components/Modal.jsx';

function App() {
	const [modal, setModal] = useState(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	useEffect(() => {
		if (modal) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
		return () => document.body.classList.remove('no-scroll');
	}, [modal]);

	return (
		<div className="no-scroll">
			{modal && <Modal content={modal} closeModal={setModal} />}
			<div
				onClick={() => ref1.current.scrollIntoView({ behavior: 'smooth' })}
				ref={ref1}
			>
				<Landing links={[ref2, ref3, ref4]} />
			</div>
			<Projects pointer={ref2} modal={modal} setModal={setModal} />
			<div ref={ref3} id="2" className="test">
				3
			</div>
			<div ref={ref4} id="3" className="test">
				4
			</div>
		</div>
	);
}

export default App;
