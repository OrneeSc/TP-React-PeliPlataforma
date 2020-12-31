import React from "react";
import { Link } from "react-router-dom";

import "./carrouselCards.scss";

export default function CardItem({ dataItem }) {
	return (
		<Link to={`/pelicula`}>
			<div
				className='grid-card'
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w200/${dataItem.poster_path})`,
				}}
			></div>
			<h2 className='subtitle'>{dataItem.title}</h2>
		</Link>
	);
}
