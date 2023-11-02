import { string } from 'prop-types';
import '../styles/sideNav.css';
import { object } from 'prop-types';

export default function SideNav({ side, goTo }) {
	const name = 'side-nav-container ' + side;

	// not using this currently

	// const next = side ==='top'? 'landing-main' : side === 'right' ? 'testDiv' : side === 'bottom' ? 'testDiv2' : 'testDiv1'
	// const click = () => {
	//     const currentPage = document.getElementsByClassName(current)
	//     const nextPage = document.getElementsByClassName(next)
	//     nextPage[0].className = next + ' move-in-' + side

	//     currentPage[0].className = current + ' move-out-' + side

	//     setNextPage(next)
	// }

	const moveTo = () => {
		goTo.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={name}>
			<button
				className="btn-side "
				onClick={() => {
					moveTo();
				}}
			>
				I
			</button>
		</div>
	);
}

SideNav.propTypes = {
	side: string,
	goTo: object,
};
