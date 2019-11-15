import React from "react";
import Slider from "../Slider";
import "../../styles/components/home.scss";
import winner from "../../assets/winner.png"


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Slider />
                <div className="home">
                    <div className="top10">
                        <div className="winner">
                            <img src={winner} alt="Top 10" height="200" width="200"></img>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sed ipsum non finibus. Nulla lacinia sapien mollis turpis condimentum volutpat. Morbi finibus lectus est, eu ultrices leo molestie et. Donec orci ante, ornare eu neque vel, volutpat ultricies risus. Ut eleifend sem in volutpat dapibus. Curabitur vel ultrices tellus, at tristique augue. Nunc ornare mi lorem, eget molestie tellus volutpat consectetur. Cras condimentum, ex finibus tincidunt suscipit, nisl justo dignissim nisl, sit amet condimentum diam elit sagittis sapien. Aenean pulvinar ante dui, sollicitudin sollicitudin ligula interdum a. Proin quis urna ac sem rhoncus rutrum. Sed aliquam ex dui, eget dignissim mi mattis quis. In tortor velit, finibus nec dictum in, sollicitudin sit amet metus. Morbi a tellus accumsan nisi pharetra pulvinar ac in lectus. Quisque enim lacus, iaculis sed venenatis ut, facilisis in arcu. Aliquam eleifend orci a tortor ultricies ullamcorper.
                        </p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sed ipsum non finibus. Nulla lacinia sapien mollis turpis condimentum volutpat. Morbi finibus lectus est, eu ultrices leo molestie et. Donec orci ante, ornare eu neque vel, volutpat ultricies risus. Ut eleifend sem in volutpat dapibus. Curabitur vel ultrices tellus, at tristique augue. Nunc ornare mi lorem, eget molestie tellus volutpat consectetur. Cras condimentum, ex finibus tincidunt suscipit, nisl justo dignissim nisl, sit amet condimentum diam elit sagittis sapien. Aenean pulvinar ante dui, sollicitudin sollicitudin ligula interdum a. Proin quis urna ac sem rhoncus rutrum. Sed aliquam ex dui, eget dignissim mi mattis quis. In tortor velit, finibus nec dictum in, sollicitudin sit amet metus. Morbi a tellus accumsan nisi pharetra pulvinar ac in lectus. Quisque enim lacus, iaculis sed venenatis ut, facilisis in arcu. Aliquam eleifend orci a tortor ultricies ullamcorper.
                    </p>
                </div>
                
            </div>
        )
    }
}
