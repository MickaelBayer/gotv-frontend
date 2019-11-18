import React, { useState, useEffect } from "react";
import SeriesCard from "./SerieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CatSerie } from "../../models/catSerie.model";
import CatSerieService from "../../services/api/entities/catSerie.service";

export const SeriesPage: React.FunctionComponent = (props) => {
	const initialState: CatSerie[] = [{ cae_id: 1, cae_id_tmdb: 1, cae_label: "", cae_series: [] }]
	const [catSeries, setCatSeries] = useState(initialState);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	async function fetchCatSeries() {
		const catSerieService = new CatSerieService();
		catSerieService.getAll().then(res => {
			setCatSeries(res);
		});
	}

	useEffect(() => { fetchCatSeries() }, [])

	return (
		<div className="container d-block">
			{catSeries.filter(catserie => catserie.cae_series.length > 0).map((category, i) => {
				return (
					<React.Fragment key={i}>
						<h1>{category.cae_label}</h1>
						<Carousel responsive={responsive}>
							{category.cae_series.map((serie, i) => {
								return (
									<SeriesCard serie={serie} key={i} />
								)
							})}
						</Carousel>
					</React.Fragment>
				)
			})}
		</div>
	);
}