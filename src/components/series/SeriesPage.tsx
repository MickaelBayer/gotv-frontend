import React from "react";
import Container from 'react-bootstrap/Container';
import { SeriesCard } from "./SerieCard";
import CatSerieService from "../../services/api/entities/catSerie.service";
import { CatSerie } from "../../models/catSerie.model";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class SeriesPage extends React.Component<{}, { catSeries: CatSerie[] }> {
    private catSerieService: CatSerieService;

    constructor (props: React.Component) {
        super(props);
        this.catSerieService = new CatSerieService();
        this.state = {
            catSeries: [] as any
        }
    }

    componentDidMount() {
        this.catSerieService.getAll().then(data => {
            this.setState({ catSeries: data });
        });
    }

    render() {
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
        return (
            <div>
                <div className="album py-5">
                    <Container>

                        {this.state.catSeries.map((category, i) => {
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
                    </Container>
                </div>
            </div >
        );
    }

}