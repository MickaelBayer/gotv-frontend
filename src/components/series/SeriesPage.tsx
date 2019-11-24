import React, { useEffect } from "react";
import SeriesCard from "./SerieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Dispatch, bindActionCreators } from "redux";
import { CatSerieActionTypes } from "../../store/modules/catSerie/catSerie.type";
import { AppState } from "../../store";
import { getAllCatSeries } from "../../store/modules/catSerie/catSerie.action";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState) => ({
	catSeries: state.catSerie.catSeries,
	isLoading: state.catSerie.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<CatSerieActionTypes>) => ({
	getAllCatSeries: bindActionCreators(getAllCatSeries, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SeriesPage: React.FunctionComponent<Props> = (props) => {
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

	useEffect(() => {
		props.getAllCatSeries();
	}, []);

	return (
		<div className="container d-block">
			{props.isLoading ? <Spinner animation="border" /> :
				props.catSeries.filter(catserie => catserie.cae_series.length > 0).map((category, i) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);