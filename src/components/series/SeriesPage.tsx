import React from "react";
import SerieService from "../../services/api/entities/serie.service";
import { Serie } from "../../models/serie.model";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SeriesCard } from "./SerieCard";

export class SeriesPage extends React.Component<{}, { series: Serie[] }> {
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
            <div>
                <div className="album py-5">
                    <Container>
                        <Row>
                            {this.state.series.map(serie => {
                                return (
                                    <SeriesCard serie={serie} />
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}