import { Row, Col, Container, Button, Modal, Spinner, Form } from "react-bootstrap";
import React, { useState, useEffect, ChangeEvent } from "react";
import accountUser from "../../assets/user_account.png";
import { useLocation } from "react-router";
import Iframe from 'react-iframe';
import { Chip } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import Carousel from "react-multi-carousel";
import { IUser } from "../../models/user.model";
import { ISerie } from "../../models/serie.model";
import { AppState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import { SerieVideoActionTypes } from "../../store/modules/serieVideo/serieVideo.type";
import { getSerieVideos } from "../../store/modules/serieVideo/serieVideo.action";
import { connect } from "react-redux";
import { postVote } from "../../store/modules/vote/vote.action";
import { AuthenticationService } from "../../services/api/authentication.service";

const mapStateToProps = (state: AppState) => ({
	serieVideos: state.serieVideo.serieVideos,
	isLoading: state.serieVideo.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<SerieVideoActionTypes>) => ({
	getSerieVideos: bindActionCreators(getSerieVideos, dispatch),
	postVote: bindActionCreators(postVote, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { user: IUser };

const SerieDetail: React.FunctionComponent<Props> = (props) => {
	const serie: ISerie = useLocation().state.serie;
	const initialStateVotes = { voe_usr_id: props.user.usr_id, voe_see_id: serie.see_id, voe_comment: "" };
	const [vote, setVotes] = useState(initialStateVotes);
	const [votemark, setVotesMark] = useState({ voe_mark: 0 });
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
		props.postVote({
			voe_see_id: serie.see_id,
			voe_usr_id: props.user.usr_id,
			voe_comment: vote.voe_comment,
			voe_mark: votemark.voe_mark
		});
		handleClose();
	}

	useEffect(() => {
		props.getSerieVideos(serie.see_tmdb_id);
	}, []);

	return (
		<React.Fragment>
			<header className="overview-header" style={{ backgroundImage: `url(${serie.see_backdrop_path})` }}>
				<Container>
					<div className="header-player">
						<Carousel responsive={responsive}>
							{props.isLoading ? <Spinner animation="border" /> :
								props.serieVideos.filter(serieVideo => serieVideo.type === "Trailer").map((serieVideo, i) => {
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
							<Rating value={5} readOnly className="mr-2" />
							{serie.see_categories.map((categorie, i) => {
								return (<Chip size="small" key={i} label={categorie.cae_label} className="details-chip mr-1" />)
							})}
							{AuthenticationService.isAuth() &&
								<React.Fragment>
									<Button variant="primary" onClick={handleShow} className="btnVote">
										Voter
									</Button>
									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Voter pour {serie.see_name}</Modal.Title>
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

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetail);
