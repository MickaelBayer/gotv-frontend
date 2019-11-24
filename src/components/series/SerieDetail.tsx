import { Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import accountUser from "../../assets/user_account.png"
import { useLocation } from "react-router";
import Iframe from 'react-iframe';
import { ISerieVideo, SerieVideo } from "../../models/serieVideo.model";
import SerieVideoService from "../../services/api/entities/serieVideo.service";
import { Chip } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import Carousel from "react-multi-carousel";
import { IUser } from "../../models/user.model";
import { ISerie } from "../../models/serie.model";

const SerieDetail: React.FunctionComponent<{ user: IUser }> = (props) => {
	const serie: ISerie = useLocation().state.serie;
	const initialStateSerieVideo: ISerieVideo[] = [new SerieVideo("", "", "", "")];
	const initialStateVotes = { voe_usr_id: props.user.usr_id, voe_see_id: serie.see_id, voe_mark: 0, voe_comment: "" };
	const [serieVideos, setSerieVideos] = useState(initialStateSerieVideo);
	const [votes, setVotes] = useState(initialStateVotes);

	const responsive = {
		desktop: {
			items: 1,
			breakpoint: { max: 3000, min: 1024 }
		}
	};

	async function fetchSerie() {
		const serieVideoService = new SerieVideoService();
		serieVideoService.getVideos(serie.see_tmdb_id).then(res => {
			setSerieVideos(res);
		})
	}

	useEffect(() => {
		fetchSerie()
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
