import React from "react";
import SerieService from "../../services/api/entities/serie.service";
import { Serie } from "../../models/serie.model";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Series extends React.Component<{}, { series: Serie[] }> {
    private serieService: SerieService;

    constructor(props: React.Component) {
        super(props);
        this.serieService = new SerieService();
        this.state = {
            series: [] as any
        }
    }

    componentDidMount() {
        this.serieService.getAll().then(data => {
            this.setState({ series: data });
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <div>{this.state.series.map(serie => {
                        return (
                            <Col xs={6} md={4}>
                                <Image src={serie.see_poster_path} rounded />
                            </Col>
                        )
                    })}</div>
                </Row>
            </Container>
        );
    }

}