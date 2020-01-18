import React from "react";
import API from "../../utils/API";

function randomNum(){return Math.floor(Math.random() * 5 + 1)}

class GiftBubble extends React.Component {

    state = {
        gift: ""
    }

    componentDidMount() {
        this.nextGift();
      }

    nextGift = () => {
        let num = randomNum();
        API.getHomeGift()
        .then(response => {
            document.getElementById("loading-home").classList.remove("d-none");
            document.getElementById("gift-bubble").classList.add("d-none");

            var link = response.data[num].link.split("Link:");
            document.getElementById("gift-link").href = link[1];

            var imageSrc = response.data[num].img.split("Image: ");
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
                    <a href="/" target="blank" id="gift-link" className="btn btn-lg btn-block btn-light py-3 rounded rounded-pill home-btns">Want it?</a>
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    <a href="/login" className="btn btn-lg btn-block btn-light py-3 rounded rounded-pill home-btns">Show me more!</a>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row position-relative">
                <p className="font-custom2">Easy Wrap makes choosing a gift super easy! Just type in what the giftee is into. Easy Wrap will suggest a nice gift, and you can either click to purchase or choose another gift.  It's that easy!</p>
            </div>

        </div>
    )
    }
}

export default GiftBubble;