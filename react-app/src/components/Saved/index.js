import React from "react";
import API from "../../utils/API";

class Saved extends React.Component {

    state = {
        gifts: [],
        recipients: [],
        titles: [],
        prices: [],
        links: []
    }

    componentDidMount() {
        API.getSavedGifts().then(response => {

            this.setState({gifts: response.data.gifts});

        }).catch(err => {
            console.log(err);
        })
    }

    deleteGift = id => {
        API.deleteGift(id).then(function(response) {
            document.getElementById(id).innerHTML = "DELETED"
        }).catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 font-custom text-left">
                        <a href="/profile" className="display-4"><i className="fas fa-long-arrow-alt-left"></i> Back</a>
                    </div>
                </div>

                {this.state.gifts.map(gift => (
                    <div className="row mb-5 mt-5 justify-content-center font-custom flip-in-hor-bottom" id="gift-result">
                        <div className="col-lg-5 mb-2">
                            <img src={gift.image} alt="gift" id="gift-image" />
                        </div>
                        <div className="col-lg-6 text-left">
                            <div className="row">
                                <div className="col-10">
                                    <h3 className="float-left text-primary" id="gift-name">{gift.title}</h3>
                                </div>
                                <div className="col-2">
                                    <h3 className="float-right text-success" id="gift-price">{gift.price}</h3>
                                </div>
                                <div className="col-12">
                                    <a href={gift.link} target="blank" id="gift-link" className="btn btn-primary btn-block btn-lg">Take me to it!</a>
                                    <button className="btn btn-outline-danger btn-lg mt-2 float-right" id={gift._id} onClick={() => this.deleteGift(gift._id)}>Delete Gift! <i className="fas fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        </div>    
                    </div>
                ))}

            </div>
        )
    }
}

export default Saved;