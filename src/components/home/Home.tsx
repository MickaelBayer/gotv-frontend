import React, { useEffect } from "react";
import Slider from "../Slider";
import "../../styles/components/home.scss";
import winner from "../../assets/winner.png";
import experts from "../../assets/experts.png";
import { Container, Row, Col } from "react-bootstrap";
import { Serie, ISerie } from '../../models/serie.model';
import { Dispatch, bindActionCreators } from "redux";
import { SerieActionTypes } from "../../store/modules/serie/serie.type";
import { AppState } from "../../store";
import { getAllSeries, getBestSeries } from "../../store/modules/serie/serie.action";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import plus_de_series from '../../assets/plus_de_series.svg';
import { Rating } from "@material-ui/lab";
import { Chip, makeStyles } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Josette from '../../assets/Josette.png';
import JeanMich from '../../assets/JeanMich.png';
import Francis from '../../assets/Francis.png';
import JeanClaude from '../../assets/JeanClaude.png';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    root: {
        borderRadius: "inherit",
        marginBottom: "5px"
    },
    colorSecondary: {
        backgroundColor: "transparent",
    },
});

const mapStateToProps = (state: AppState) => ({
    series: state.series.series,
    isLoading: state.series.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes>) => ({
    getAllSeries: bindActionCreators(getAllSeries, dispatch),
    getBestSeries: bindActionCreators(getBestSeries, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Home: React.FunctionComponent<Props> = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.getBestSeries();
    }, []);

    function compareAverage(a: Serie, b: Serie) {
        if (a.see_average_mark < b.see_average_mark) return 1;
        if (b.see_average_mark < a.see_average_mark) return -1;
        return 0;
    }

    function getBackdrop(i: number): string {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let postersUrl: string[] = [];
        my_series.forEach(e => {
            postersUrl.push(e.see_backdrop_path);
        });
        return postersUrl[i];
    }

    function getPoster(i: number): string {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let postersUrl: string[] = [];
        my_series.forEach(e => {
            postersUrl.push(e.see_poster_path);
        });
        postersUrl[i] = postersUrl[i].replace("w200", "w500");
        return postersUrl[i];
    }

    function getName(i: number): string {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let names: string[] = [];
        my_series.forEach(e => {
            names.push(e.see_name);
        });
        return names[i];
    }

    function getId(i: number): number {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let ids: number[] = [];
        my_series.forEach(e => {
            ids.push(e.see_id);
        });
        return ids[i];
    }

    function getSerie(i: number): Serie {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let series: Serie[] = [];
        my_series.forEach(e => {
            series.push(e);
        });
        return series[i];
    }

    function getAverage(i: number): number {
        let my_series: ISerie[] = [];
        for (let e in props.series) {
            my_series.push(props.series[e]);
        };
        let avg: number[] = [];
        my_series.forEach(e => {
            avg.push(e.see_average_mark);
        });
        return avg[i];
    }

    return (
        <div id="home">
            <Slider />
            <div className="home">
                <div className="top10_1">
                    <div className="winner">
                        <img src={winner} alt="Top 10" width="300" className="responsive"></img>
                    </div>
                    <br />
                    <div className="winner">
                        <Link to={{ pathname: `serie/${getId(0)}`, state: { serie: getSerie(0) } }}>
                            <img src={getPoster(0)} id="img_num_1" width="1000" className="responsive" title={getName(0)}></img>
                        </Link>
                        <div>
                            {getAverage(0) > 0 ?
                                <Rating value={getAverage(0)} precision={0.5} readOnly style={{ marginTop: '10px' }} /> :
                                <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                        </div>
                        <Link to={{ pathname: `serie/${getId(0)}`, state: { serie: getSerie(0) } }}>
                            <p className="title_number_1"><span style={{ color: "yellow" }}>1.</span> {getName(0)}</p>
                        </Link>
                    </div>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sed ipsum non finibus. Nulla lacinia sapien mollis turpis condimentum volutpat. Morbi finibus lectus est, eu ultrices leo molestie et. Donec orci ante, ornare eu neque vel, volutpat ultricies risus. Ut eleifend sem in volutpat dapibus. Curabitur vel ultrices tellus, at tristique augue. Nunc ornare mi lorem, eget molestie tellus volutpat consectetur. Cras condimentum, ex finibus tincidunt suscipit, nisl justo dignissim nisl, sit amet condimentum diam elit sagittis sapien. Aenean pulvinar ante dui, sollicitudin sollicitudin ligula interdum a. Proin quis urna ac sem rhoncus rutrum. Sed aliquam ex dui, eget dignissim mi mattis quis. In tortor velit, finibus nec dictum in, sollicitudin sit amet metus. Morbi a tellus accumsan nisi pharetra pulvinar ac in lectus. Quisque enim lacus, iaculis sed venenatis ut, facilisis in arcu. Aliquam eleifend orci a tortor ultricies ullamcorper.
                    </p>
                    <br />
                </div>
                <div className="top10_2">
                    <Container>
                        <Row className="row_top10_2">
                            <Link to={{ pathname: `serie/${getId(1)}`, state: { serie: getSerie(1) } }} className="special-a">
                                <img src={getBackdrop(1)} className="img-overlay-wrap" title={getName(1)} />
                                <div className="average">
                                    {getAverage(1) > 0 ?
                                        <Rating value={getAverage(1)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(1) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>2</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>2</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(2)}`, state: { serie: getSerie(2) } }} className="special-a">
                                <img src={getBackdrop(2)} className="img-overlay-wrap" title={getName(2)} />
                                <div className="average">
                                    {getAverage(2) > 0 ?
                                        <Rating value={getAverage(2)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(2) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>3</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>3</span></div>}
                            </Link>
                        </Row>
                        <Row className="row_top10_2">
                            <Link to={{ pathname: `serie/${getId(3)}`, state: { serie: getSerie(3) } }} className="special-a">
                                <img src={getBackdrop(3)} className="img-overlay-wrap" title={getName(3)} />
                                <div className="average">
                                    {getAverage(3) > 0 ?
                                        <Rating value={getAverage(3)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(3) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>4</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>4</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(4)}`, state: { serie: getSerie(4) } }} className="special-a">
                                <img src={getBackdrop(4)} className="img-overlay-wrap" title={getName(4)} />
                                <div className="average">
                                    {getAverage(4) > 0 ?
                                        <Rating value={getAverage(4)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(4) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>5</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>5</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(5)}`, state: { serie: getSerie(5) } }} className="special-a">
                                <img src={getBackdrop(5)} className="img-overlay-wrap" title={getName(5)} />
                                <div className="average">
                                    {getAverage(5) > 0 ?
                                        <Rating value={getAverage(5)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(5) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>6</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>6</span></div>}
                            </Link>
                        </Row>
                        <Row className="row_top10_2">
                            <Link to={{ pathname: `serie/${getId(6)}`, state: { serie: getSerie(6) } }} className="special-a">
                                <img src={getBackdrop(6)} className="img-overlay-wrap" title={getName(6)} />
                                <div className="average">
                                    {getAverage(6) > 0 ?
                                        <Rating value={getAverage(6)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(6) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>7</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>7</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(7)}`, state: { serie: getSerie(7) } }} className="special-a">
                                <img src={getBackdrop(7)} className="img-overlay-wrap" title={getName(7)} />
                                <div className="average">
                                    {getAverage(7) > 0 ?
                                        <Rating value={getAverage(7)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(7) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>8</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>8</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(8)}`, state: { serie: getSerie(8) } }} className="special-a">
                                <img src={getBackdrop(8)} className="img-overlay-wrap" title={getName(8)} />
                                <div className="average">
                                    {getAverage(8) > 0 ?
                                        <Rating value={getAverage(8)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(8) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>9</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>9</span></div>}
                            </Link>
                            <Link to={{ pathname: `serie/${getId(9)}`, state: { serie: getSerie(9) } }} className="special-a">
                                <img src={getBackdrop(9)} className="img-overlay-wrap" title={getName(9)} />
                                <div className="average">
                                    {getAverage(9) > 0 ?
                                        <Rating value={getAverage(9)} precision={0.5} readOnly className="star-top10" /> :
                                        <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
                                </div>
                                {getAverage(9) > 0 ?
                                    <div className="title_number_x_star"><span style={{ color: "grey" }}>10</span></div> :
                                    <div className="title_number_x"><span style={{ color: "grey" }}>10</span></div>}
                            </Link>
                        </Row>
                        <Row className="row_top10_2">
                            <Link to={{ pathname: `series` }} className="special-a">
                                <img src={plus_de_series} className="img-overlay-wrap" title="Les séries" />
                            </Link>
                        </Row>
                    </Container>
                    <br />
                </div>
                <div className="expert_panel">
                    <div className="expert-img">
                        <img src={experts} id="experts-img" alt="L'expertise en caoutchouc !" width="300" className="responsive"></img>
                    </div>
                    <div id="experts">
                        <Container>
                            <Row>
                                <Col className="experts-tag">
                                    <div>
                                        <img src={Josette} width="200" className="img-experts-wrap" title="Josette"></img>
                                        <div className="expert-name vertical-name">Josette</div>
                                        <div className="barre-verticale-droite"></div>
                                        <div className="barre-verticale-gauche"></div>
                                        <div className="expert-cat">
                                            <span className="expert-star"><Icon style={{ fontSize: 30 }}>star</Icon></span> Animation
                                        </div>
                                    </div>
                                </Col>
                                <Col className="experts-tag">
                                    <div>
                                        <img src={JeanMich} width="200" className="img-experts-wrap" title="Jean-Michel"></img>
                                        <div className="expert-name horizontal-name">Jean-Michel</div>
                                        <div className="barre-horizontale-haute"></div>
                                        <div className="barre-horizontale-basse"></div>
                                        <div className="expert-cat">
                                            <span className="expert-star"><Icon style={{ fontSize: 30 }}>star</Icon></span> Dramatique
                                        </div>
                                    </div>
                                </Col>
                                <Col className="experts-tag">
                                    <img src={Francis} width="200" className="img-experts-wrap" title="Francis"></img>
                                    <div className="expert-name vertical-name">Francis</div>
                                    <div className="barre-verticale-droite"></div>
                                    <div className="barre-verticale-gauche"></div>
                                    <div className="expert-cat">
                                        <span className="expert-star"><Icon style={{ fontSize: 30 }}>star</Icon></span> Action
                                    </div>
                                </Col>
                                <Col className="experts-tag">
                                    <img src={JeanClaude} width="200" className="img-experts-wrap" title="Jean-Claude"></img>
                                    <div className="expert-name horizontal-name">Jean-Claude</div>
                                    <div className="barre-horizontale-haute"></div>
                                    <div className="barre-horizontale-basse"></div>
                                    <div className="expert-cat">
                                        <span className="expert-star"><Icon style={{ fontSize: 30 }}>star</Icon></span> Comédie
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
