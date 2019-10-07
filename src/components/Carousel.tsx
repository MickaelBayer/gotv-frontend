import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Serie } from '../models/serie';

const serie1 = {id: 1,
                name: "BIP",
                pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
                urlImgage : "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
              }
const serie2 = {id: 1,
                name: "BOP",
                pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
                urlImgage : "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
              }
const serie3 = {id: 1,
                name: "BUP",
                pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
                urlImgage : "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
              }
const serie4 = {id: 1,
                name: "BAP",
                pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
                urlImgage : "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
              }

export default class Slider extends React.Component<{}, { series: Serie[] }> {

  constructor(props: any) {
    super(props);
    this.state = {
      series: new Array(),
    };
  }
  
  componentWillMount(){
    // fetch les séries à mettre dans le caroussel.
    // mise à jour des props.
    const my_series = [serie1, serie2, serie3, serie4];
    this.setState({series: my_series})
  }

  generateSlider(){
    const items = [];
    this.state.series.forEach(element => {
      items.push(
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {element.urlImgage}
            alt= {element.name}
          />
          <Carousel.Caption>
            <h3>{element.name}</h3>
            <p>{element.pitch}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    console.log(items)

    return items;
  }

  
  render() {
    return (
      <Carousel>
        {this.generateSlider()}
      </Carousel>
    )
  }
}