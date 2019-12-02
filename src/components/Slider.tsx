import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/components/slider.scss";
import { Serie, ISerie } from '../models/serie.model';
import { AppState } from "../store";
import { SerieActionTypes } from "../store/modules/serie/serie.type";
import { getAllSeries, getBestSeries} from "../store/modules/serie/serie.action";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state: AppState) => ({
  series: state.series.series,
  isLoading: state.series.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<SerieActionTypes>) => ({
  getAllSeries: bindActionCreators(getAllSeries, dispatch),
  getBestSeries: bindActionCreators(getBestSeries, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Slider: React.FunctionComponent<Props> = (props) => {

  const arrowIcon = <span aria-hidden="true" className="carousel-control-next-icon"></span>;

  useEffect(() => {
    props.getBestSeries();
  }, []);

  function compareAverage(a: Serie, b: Serie) {
    if (a.see_average_mark < b.see_average_mark) return 1;
    if (b.see_average_mark < a.see_average_mark) return -1;
    return 0;
  }

  function generateSlider() {
    const items = [] as any;
    let i: number = 0;
    let my_series: ISerie[] = [];
    for (let e in props.series) {
        my_series.push(props.series[e]);
    };
    my_series.forEach(element => {
      items.push(
        <Carousel.Item key={i}>
          <Link to={{ pathname: `serie/${element.see_id}`, state: { serie: element } }}>
            <img
              className="d-block w-100 img-carousel"
              src={element.see_backdrop_path}
              alt={element.see_name}
              title={element.see_name}
            />
          </Link>
        </Carousel.Item>
      );
      i++;
      if (i > 9) {
        return items;
      }
    });
    return items;
  }

  return (
    <div className="div-carousel">
      <Carousel nextIcon={arrowIcon} indicators={false} >
        {generateSlider()}
      </Carousel>
      <div className="site-title">
        GoTV Series
        <hr />
      </div>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
