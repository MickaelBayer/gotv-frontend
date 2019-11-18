import { Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Iframe from 'react-iframe';
import { ISerieVideo, SerieVideo } from "../../models/serieVideo.model";
import SerieVideoService from "../../services/api/entities/serieVideo.service";
import { ISerie } from "../../models/serie.model";
import SerieService from "../../services/api/entities/serie.service";
import { Chip } from "@material-ui/core";
import { Rating } from '@material-ui/lab';

const SerieDetail: React.FunctionComponent = () => {
    let { see_id } = useParams();
    const initialStateSerieVideo: ISerieVideo[] = [new SerieVideo("", "", "", "")];
    const initialStateSerie: ISerie = { see_id: 1, see_name: "", see_tmdb_id: 1, see_poster_path: "", see_overview: "", see_backdrop_path: "", see_first_air_date: "", see_original_country: "", see_original_lang: "", see_categories: [] };
    const [serieVideos, setSerieVideos] = useState(initialStateSerieVideo);
    const [serie, setSerie] = useState(initialStateSerie);

    async function fetchSerie() {
        const serieService = new SerieService();
        const serieVideoService = new SerieVideoService();
        serieService.get(Number(see_id)).then(res => {
            serieVideoService.getVideos(res.see_tmdb_id).then(res => {
                console.log(res)
                setSerieVideos(res);
            })
            setSerie(res);
        })
    }

    useEffect(() => {
        fetchSerie();
    }, [])

    return (
        <Row>
            <Col>
                {serieVideos.map((serieVideo, i) => {
                    return (
                        <Iframe url={`http://www.youtube.com/embed/${serieVideo.key}?enablejsapi=1`} width="100%" height="340px" key={i} className="p-4 details-video" />
                    )
                })}
            </Col>
            <Col>
                <h3 className="mt-3">{serie.see_name}</h3>
                <div className="d-flex align-items-center my-3">
                    <Rating value={5} readOnly className="mr-3" />
                    {serie.see_categories.map((categorie, i) => {
                        return (<Chip size="small" key={i} label={categorie.cae_label} className="details-chip" />)
                    })}
                </div>
                <p>{serie.see_overview}</p>
            </Col>
        </Row>
    );
}

export default SerieDetail;
