import { Row, Col, Container, Spinner } from "react-bootstrap";
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import Iframe from 'react-iframe';
import { Chip, Tooltip, makeStyles } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import Carousel from "react-multi-carousel";
import { IUser } from "../../models/user.model";
import { AppState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import { SerieVideoActionTypes } from "../../store/modules/serieVideo/serieVideo.type";
import { getSerieVideos } from "../../store/modules/serieVideo/serieVideo.action";
import { connect } from "react-redux";
import { AuthenticationService } from "../../services/api/authentication.service";
import { SerieActionTypes } from "../../store/modules/serie/serie.type";
import { getSerie } from "../../store/modules/serie/serie.action";
import { ISerie } from "../../models/serie.model";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SerieComment from "./SerieComment";
import SerieVoteModal from "./SerieVoteModal";
import { getSerieCasts } from "../../store/modules/serieCast/serieCast.action";
import { SerieCastActionTypes } from "../../store/modules/serieCast/serieCast.type";

const useStyles = makeStyles({
	root: {
		borderRadius: "inherit",
		marginRight: "10px",
		boxShadow: "0 .5rem 0.5rem rgba(0, 0, 0, .15)"
	},
	colorSecondary: {
		backgroundColor: "#B40C25",
	},
});

const mapStateToProps = (state: AppState) => ({
	serieCasts: state.serieCast.serieCasts,
	serieVideos: state.serieVideo.serieVideos,
	serie: state.serie.serie,
	serieisLoading: state.serie.isLoading,
	serieVideosisLoading: state.serieVideo.isLoading,
	votes: state.vote.votes,
	votesisLoading: state.vote.isLoading,
})

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes | SerieVideoActionTypes | SerieCastActionTypes>) => ({
	getSerieVideos: bindActionCreators(getSerieVideos, dispatch),
	getSerieCasts: bindActionCreators(getSerieCasts, dispatch),
	getSerie: bindActionCreators(getSerie, dispatch),
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { user: IUser };

const SerieDetail: React.FunctionComponent<Props> = (props) => {
	const { see_id } = useParams();
	const serie: ISerie = useLocation().state.serie;
	const classes = useStyles();

	const responsiveVideo = {
		desktop: {
			items: 1,
			breakpoint: { max: 3000, min: 1024 }
		}
	};

	const responsiveCast = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
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
		props.getSerie(Number(see_id));
		props.getSerieVideos(serie.see_tmdb_id);
		props.getSerieCasts(serie.see_tmdb_id);
	}, []);

	return (
		<React.Fragment>
			<header className="overview-header" style={{ backgroundImage: `url(${props.serie.see_backdrop_path})` }}>
				<Container>
					<div className="header-player">
						<Carousel responsive={responsiveVideo}>
							{props.serieVideosisLoading ? <Spinner animation="border" /> :
								props.serieVideos.filter(serieVideo => serieVideo.type === "Trailer").map((serieVideo, i) => {
									return (
										<Iframe url={`http://www.youtube.com/embed/${serieVideo.key}?enablejsapi=1`} width="640px" height="560px" key={i} />
									)
								})}
						</Carousel>
					</div>
					<h1 className="title title-serie">{props.serie.see_name}</h1>
				</Container>
			</header>
			<Container>
				<Row>
					<Col>
						<div className="d-flex align-items-center my-3">
							{props.serie.see_average_mark > 0 ? <Tooltip title={props.serie.see_average_mark}>
								<div>
									<Rating value={props.serie.see_average_mark} precision={0.5} readOnly className="mr-2" />
								</div>
							</Tooltip> : <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
							{props.serie.see_categories.map((categorie, i) => {
								return (<Chip size="small" key={i} label={categorie.cae_label} className="details-chip mr-1" />)
							})}
							{AuthenticationService.isAuth() &&
								<SerieVoteModal user={props.user} serie={props.serie} />
							}
						</div>
						<p>{props.serie.see_overview}</p>
						<Carousel responsive={responsiveCast}>
							{props.serieCasts.map((serieCast, i) => {
								return (
									<div className="cast-card" key={i}>
										<img src={`https://image.tmdb.org/t/p/w185//${serieCast.profile_path}`} className="img-gradiant"></img>
										<div className="actor-name">
											<h3>{serieCast.name}</h3>
											<p>{serieCast.character}</p>
										</div>
									</div>
								)
							})}
						</Carousel>
					</Col>
				</Row>
				<SerieComment serie={serie} />
				<br /><br />
			</Container>
		</React.Fragment>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetail);
