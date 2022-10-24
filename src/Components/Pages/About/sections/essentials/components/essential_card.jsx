const EssentialCard = props => {
	return (
		<figure className="essentials_card">
			<img src={props.imgSrc} alt="" className="essentials_img" />
			<figcaption className="essentials_caption">
				<h3 className="essentials_title">{props.title}</h3>
				<p className="essentials_description">{props.description}</p>
			</figcaption>
		</figure>
	)
}

export default EssentialCard