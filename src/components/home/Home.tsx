import React from "react";
import Slider from "../Slider";
import "../../styles/components/home.scss";
import winner from "../../assets/winner.png"
import hexagone from "../../assets/hexagone.svg"
import experts from "../../assets/experts.png"
import { Container, Row, Col } from "react-bootstrap"

const serie1 = {
    id: 1,
    name: "BIP",
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
    urlImgage: "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
}
const serie2 = {
    id: 2,
    name: "BOP",
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
    urlImgage: "https://image.tmdb.org/t/p/original/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg"
}
const serie3 = {
    id: 3,
    name: "BUP",
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
    urlImgage: "https://image.tmdb.org/t/p/original/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg"
}
const serie4 = {
    id: 4,
    name: "BAP",
    pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada leo vitae accumsan ornare. Mauris vitae placerat leo. Mauris facilisis sodales tincidunt. Aenean dignissim ullamcorper ligula, in dignissim risus interdum in. Curabitur volutpat ante lacus, in congue augue cursus vel. Praesent consectetur non lacus at dictum. Fusce porttitor pharetra elementum.",
    urlImgage: "https://image.tmdb.org/t/p/original/2XWhIg0aWX83ntm5Oq8w15vfB9c.jpg"
}

const my_series = [serie1, serie2, serie3, serie4];

const map = new DOMParser().parseFromString(hexagone, 'text/xml').getElementsByTagName('svg')[0]
console.log(map);

export default class Home extends React.Component {


    render() {
        return (
            <div id="home">
                <Slider />
                <div className="home">
                    <div className="top10_1">
                        <div className="winner">
                            <img src={winner} alt="Top 10" width="300" className="responsive"></img>
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
                                <img src={serie1.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie2.urlImgage} className="img-overlay-wrap"/>
                            </Row>
                            <Row className="row_top10_2">
                                <img src={serie3.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie1.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie4.urlImgage} className="img-overlay-wrap"/>
                            </Row>
                            <Row className="row_top10_2">
                                <img src={serie1.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie2.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie3.urlImgage} className="img-overlay-wrap"/>
                                <img src={serie4.urlImgage} className="img-overlay-wrap"/>
                            </Row>
                            <Row className="row_top10_2">
                                <img src={serie4.urlImgage} className="img-overlay-wrap"/>
                            </Row>
                        </Container>
                    </div>
                    <div className="expert-triangle-top"></div>
                    <div className="expert_panel">
                        <div className="expert-img">
                            <img src={experts} id="experts-img" alt="L'expertise en caoutchouc !" width="300" className="responsive"></img>
                        </div>
                        <span id="experts">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sed ipsum non finibus. Nulla lacinia sapien mollis turpis condimentum volutpat. Morbi finibus lectus est, eu ultrices leo molestie et. Donec orci ante, ornare eu neque vel, volutpat ultricies risus. Ut eleifend sem in volutpat dapibus. Curabitur vel ultrices tellus, at tristique augue. Nunc ornare mi lorem, eget molestie tellus volutpat consectetur. Cras condimentum, ex finibus tincidunt suscipit, nisl justo dignissim nisl, sit amet condimentum diam elit sagittis sapien. Aenean pulvinar ante dui, sollicitudin sollicitudin ligula interdum a. Proin quis urna ac sem rhoncus rutrum. Sed aliquam ex dui, eget dignissim mi mattis quis. In tortor velit, finibus nec dictum in, sollicitudin sit amet metus. Morbi a tellus accumsan nisi pharetra pulvinar ac in lectus. Quisque enim lacus, iaculis sed venenatis ut, facilisis in arcu. Aliquam eleifend orci a tortor ultricies ullamcorper.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
