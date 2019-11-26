import { Row, Col, Container, Button, Modal, Spinner, Form } from "react-bootstrap";
import React, { useState, useEffect, ChangeEvent } from "react";
import accountUser from "../../assets/user_account.png";
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
import { postSerieVote, getSerie } from "../../store/modules/serie/serie.action";
import { ISerie } from "../../models/serie.model";
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
	serieVideos: state.serieVideo.serieVideos,
	serie: state.serie.serie,
	serieisLoading: state.serie.isLoading,
	serieVideosisLoading: state.serieVideo.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes | SerieVideoActionTypes>) => ({
	getSerieVideos: bindActionCreators(getSerieVideos, dispatch),
	postSerieVote: bindActionCreators(postSerieVote, dispatch),
	getSerie: bindActionCreators(getSerie, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { user: IUser };

const SerieDetail: React.FunctionComponent<Props> = (props) => {
	const { see_id } = useParams();
	const serie: ISerie = useLocation().state.serie;
	const initialStateVotes = { voe_usr_id: props.user.usr_id, voe_see_id: props.serie.see_id, voe_comment: "" };
	const [vote, setVotes] = useState(initialStateVotes);
	const [votemark, setVotesMark] = useState({ voe_mark: 0 });
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const classes = useStyles();

	const responsive = {
		desktop: {
			items: 1,
			breakpoint: { max: 3000, min: 1024 }
		}
	};

	const handleChange = (field: string) => (event: ChangeEvent<any>) => {
		event.preventDefault()
		if (field == "voe_mark") {
			setVotesMark({ voe_mark: Number(event.target.value) } as any);
		} else {
			setVotes({ [field]: event.target.value } as any);
		}
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		props.postSerieVote({
			voe_see_id: props.serie.see_id,
			voe_usr_id: props.user.usr_id,
			voe_comment: vote.voe_comment,
			voe_mark: votemark.voe_mark
		});
		handleClose();
	}

	useEffect(() => {
		props.getSerie(Number(see_id));
		props.getSerieVideos(serie.see_tmdb_id);
	}, [show]);

	return (
		<React.Fragment>
			<header className="overview-header" style={{ backgroundImage: `url(${props.serie.see_backdrop_path})` }}>
				<Container>
					<div className="header-player">
						<Carousel responsive={responsive}>
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
								<React.Fragment>
									<Button variant="primary" onClick={handleShow} className="btnVote">
										Voter
									</Button>
									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Voter pour {props.serie.see_name}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form>
												<Form.Group>
													<Form.Label>Note :</Form.Label>
													<div>
														<Rating value={votemark.voe_mark} name="simple-controlled"
															onChange={handleChange("voe_mark")} />
													</div>
												</Form.Group>
												<Form.Group>
													<Form.Label>Commentaires :</Form.Label>
													<Form.Control
														as="textarea"
														value={vote.voe_comment}
														onChange={handleChange("voe_comment")}
													/>
												</Form.Group>
											</Form>
										</Modal.Body>
										<Modal.Footer>
											<Button type="submit" className="btnVote" onClick={handleSubmit}>
												Voter !
										</Button>
										</Modal.Footer>
									</Modal>
								</React.Fragment>
							}
						</div>
						<p>{props.serie.see_overview}</p>
					</Col>
				</Row>
				<h4 className="title title-small">{props.serie.see_votes.length} Commentaires</h4>
				{props.serie.see_votes.map((vote, i) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetail);
