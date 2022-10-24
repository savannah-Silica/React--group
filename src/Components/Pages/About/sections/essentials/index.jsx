import EssentialCard from './components/essential_card'
import imgSrc1 from '../../../../../Assets/essentials/telescope.png';
import imgSrc2 from '../../../../../Assets/essentials/work-process.png';

const Essentials = () => {
	const data = [
		{ imgSrc: imgSrc1, title: 'Vision', description: `Make as many people able to contribute to Open-source in however way possible and write clean code` },
		{ imgSrc: imgSrc2, title: 'Mission', description: 'Make contribution to Open-source easy for everyone' },
	]

	const cards = data.map((v, i) => <EssentialCard key={i} imgSrc={v.imgSrc} title={v.title} description={v.description} />)

	return (
		<>
			<h2 className="essentials_main">Essentials</h2>
			<p className="essentials_sub">What Keeps Us Together As a Community</p>
			<div className="essentials_cards">
				{cards}
			</div>
			<p className="essentials_projects-link">View our Projects &rsaquo;</p>
		</>
	)
}

export default Essentials