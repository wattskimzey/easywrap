import React from "react";
import API from "../../utils/API";

class GiftBubble extends React.Component {

    state = {
        gift: ""
    }

    componentDidMount() {
        this.nextGift();
      }

    nextGift = () => {
        API.getHomeGift()
        .then(response => {
            document.getElementById("loading-home").classList.remove("d-none");
            document.getElementById("gift-bubble").classList.add("d-none");

            var imageSrc = response.data[0].img.split("Image: ");
            document.getElementById("gift-bubble").src = imageSrc[1];

            document.getElementById("gift-bubble").classList.remove("d-none");
            document.getElementById("loading-home").classList.add("d-none");
        })
        .catch(error => {
          console.log(error)
        })
    }

    render(){
    return(
        <div>
            <div className="row justify-content-center align-items-center">
                <div className="col-3 text-center">
                    <button className="btn btn-transparent" onClick={this.nextGift}><i className="fas fa-play left-arrow" /></button>
                </div>
                <div className="col-5 gift-bubble rounded rounded-circle">
                    <img id="gift-bubble" className="d-none" src={"https://assurancemortgage.com/wp-content/uploads/2019/06/loading.gif"} alt="gift" />
                    <img id="loading-home" src={"https://assurancemortgage.com/wp-content/uploads/2019/06/loading.gif"} alt="gift" />
                </div>
                <div className="col-3 text-center">
                    <button className="btn btn-transparent" onClick={this.nextGift}><i className="fas fa-play right-arrow" /></button>
                </div>
            </div>

            <div className="row position-relative">
                <div className="col-1"></div>
                <div className="col-2">
                    <button className="btn btn-lg btn-block btn-light py-3 rounded rounded-pill home-btns">Want More?</button>
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    <button className="btn btn-lg btn-block btn-light py-3 rounded rounded-pill home-btns">Love It?</button>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
    }
}

export default GiftBubble;