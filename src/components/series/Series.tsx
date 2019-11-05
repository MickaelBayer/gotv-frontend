import React from "react";
import { Serie } from "../../models/serie.model";
import SerieService from "../../services/api/entities/serie.service";

export class Series extends React.Component {
    private series: Serie[] = [];
    private serieService: SerieService;

    constructor(props: React.Component) {
        super(props);
        this.serieService = new SerieService();
        this.getSeries();
    }

    getSeries() {
        this.serieService.getAll().then(data => {
            this.series = data;
        });
    }

    render() {
        console.log(this.series)
        return (
            <div>{this.series.map(serie => {
                return (<div>{serie.see_name}</div>)
            })}</div>
        );
    }

}