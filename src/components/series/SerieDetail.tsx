import { Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import accountUser from "../../assets/user_account.png"
import { useParams } from "react-router";
import Iframe from 'react-iframe';
import { ISerieVideo, SerieVideo } from "../../models/serieVideo.model";
import SerieVideoService from "../../services/api/entities/serieVideo.service";
import { ISerie } from "../../models/serie.model";
import SerieService from "../../services/api/entities/serie.service";
import { Chip } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import Carousel from "react-multi-carousel";
import { IUser } from "../../models/user.model";

const SerieDetail: React.FunctionComponent<{ user: IUser }> = (props) => {
	let { see_id } = useParams();
	const initialStateSerieVideo: ISerieVideo[] = [new SerieVideo("", "", "", "")];
	const initialStateSerie: ISerie = { see_id: 1, see_name: "", see_tmdb_id: 1, see_poster_path: "", see_overview: "", see_backdrop_path: "", see_first_air_date: "", see_original_country: "", see_original_lang: "", see_categories: [], see_votes: [] };
	const [serieVideos, setSerieVideos] = useState(initialStateSerieVideo);
	const [serie, setSerie] = useState(initialStateSerie);

	const responsive = {
		desktop: {
			items: 1,
			breakpoint: { max: 3000, min: 1024 }
		}
	};

	async function fetchSerie() {
		const serieService = new SerieService();
		const serieVideoService = new SerieVideoService();
		serieService.get(Number(see_id)).then(res => {
			serieVideoService.getVideos(res.see_tmdb_id).then(res => {
				setSerieVideos(res);
			})
			setSerie(res);
			console.log(props.user);
		})
	}

	useEffect(() => {
		fetchSerie();
	}, [])

	return (
		<React.Fragment>
			<header className="overview-header" style={{ backgroundImage: `url(${serie.see_backdrop_path})` }}>
				<Container>
					<div className="header-player">
						<Carousel responsive={responsive}>
							{serieVideos.filter(serieVideo => serieVideo.type === "Trailer").map((serieVideo, i) => {
								return (
									<Iframe url={`http://www.youtube.com/embed/${serieVideo.key}?enablejsapi=1`} width="640px" height="560px" key={i} />
								)
							})}
						</Carousel>
					</div>
					<h1 className="title title-serie">{serie.see_name}</h1>
				</Container>
			</header>
			<Container>
				<Row>
					<Col>
						<div className="d-flex align-items-center my-3">
							<Rating value={5} readOnly className="mr-3" />
							{serie.see_categories.map((categorie, i) => {
								return (<Chip size="small" key={i} label={categorie.cae_label} className="details-chip" />)
							})}
						</div>
						<p>{serie.see_overview}</p>
					</Col>
				</Row>
				<h4 className="title title-small">{serie.see_votes.length} Commentaires</h4>
				{serie.see_votes.map((vote, i) => {
					return (
						<div className="details-comment" key={i}>
							<img className="details-comment-avatar" src={accountUser} />
							<div className="details-comment-body">
								<span className="details-comment-author">{vote.voe_user.usr_pseudo}</span>
								<Rating value={vote.voe_mark} size="small" precision={0.5} readOnly className="details-comment-rating" />
								<span className="details-comment-date">{vote.created_at}</span>
								<div className="details-comment-text">
									<div>
										<p>{vote.voe_comment}</p>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</Container>
		</React.Fragment>
	);
}

export default SerieDetail;
