import React from "react";
import { Serie } from "../../models/serie.model";
import { Chip, makeStyles } from '@material-ui/core';
import "../../styles/components/serie.scss";
import { Rating } from "@material-ui/lab";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  root: {
    borderRadius: "inherit",
    marginBottom: "5px"
  },
  colorSecondary: {
    backgroundColor: "#B40C25",
  },
});

const SeriesCard: React.FunctionComponent<{ serie: Serie }> = (props) => {
  const classes = useStyles();
  return (
    <div className="serie-card">
      <img src={props.serie.see_poster_path} className="img-gradiant"></img>
      <div className="info-serie">
        <h3>{props.serie.see_name}</h3>
        <div>
          {props.serie.see_average_mark > 0 ?
            <Rating value={props.serie.see_average_mark} precision={0.5} readOnly /> :
            <Chip label="Pas encore noté !" color="secondary" icon={<StarBorderIcon />} classes={{ root: classes.root, colorSecondary: classes.colorSecondary }} />}
        </div>
        {props.serie.see_categories.map((categorie, i) => {
          return (<Chip size="small" key={i} label={categorie.cae_label} />)
        })}
        <p>{props.serie.see_overview}</p>
      </div>
    </div>
  );
}

export default SeriesCard;
