import React from "react";
import API from "../../utils/API";

class Recommender extends React.Component {

    state = {
        gifts: [],
        currentQuestion: 1,
        recipient: "",
        interests: "",
        // budget: 20,
        giftNumber: 0
    }

    nextQuestion = () => {

        if (this.state.currentQuestion === 1) {
            document.getElementById("q2").classList.remove("d-none");
            
            this.setState({currentQuestion: 2});
        } 
        // else if (this.state.currentQuestion === 2) {
        //     document.getElementById("q3").classList.remove("d-none");
        //     this.setState({currentQuestion: 3});
        // }
    }

    displayResult = (data) => {
        document.getElementById("loading").classList.add("d-none");

        var title = data[this.state.giftNumber].title.split("Title:");
        document.getElementById("gift-name").innerHTML = title[1];

        var price = data[this.state.giftNumber].price.split("Price:");
        document.getElementById("gift-price").innerHTML = price[1];

        var link = data[this.state.giftNumber].link.split("Link:");
        document.getElementById("gift-link").href = link[1];

        var imageSrc = data[this.state.giftNumber].img.split("Image: ");
        document.getElementById("gift-image").src = imageSrc[1];

        document.getElementById("gift-result").classList.remove("d-none");

        console.log(this.state.giftNumber);
        this.setState({giftNumber: this.state.giftNumber+1});
        console.log(this.state.giftNumber);
    }

    // Handle Question Inputs
    // handleBudget = event => {
    //     this.setState({budget: event.target.value});
    // }
    handleInterests = event => {
        this.setState({interests: event.target.value});
    }
    handleRecipient = event => {
        this.setState({recipient: event.target.value});
    }

    getGifts = e => {
        e.preventDefault();
        document.getElementById("loading").classList.remove("d-none");
        document.getElementById("gift-result").classList.add("d-none");
        console.log("working");

        API.getSearchGift(this.state.interests)
          .then((response) =>{
            console.log(response.data);
            this.displayResult(response.data);
        }
          )
          .catch(error => console.log(error));
      };

    resetGiftNumber = () => {
        this.setState({giftNumber: 0});
    }

    saveGift = () => {
        API.saveGift(
            this.state.recipient, 
            document.getElementById("gift-name").innerHTML, 
            document.getElementById("gift-price").innerHTML, 
            document.getElementById("gift-image").src, 
            document.getElementById("gift-link").href).then(function() {
                document.getElementById("save-gift").innerHTML = "SAVED";
            });
    }

    render() {
        return(
            <div className="container">
                {/* QUESTIONS */}
                <form className="font-custom mt-3" onSubmit={this.getGifts}>
                    <div className="row mb-3">
                        <div className="col-lg-6 slide-in-right" id="q1">
                            <label htmlFor="recipient" className="text-primary">Who's it for?</label>
                            <div className="input-group">
                                <input type="text" name="recipient" className="form-control" value={this.state.recipient} onChange={this.handleRecipient} />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 slide-in-right d-none" id="q2">
                            <label htmlFor="interests" className="text-warning">What are they into?</label>
                            <div className="input-group">
                                <input type="text" name="interests" className="form-control" value={this.state.interests} onChange={this.handleInterests} />
                                <div className="input-group-append">
                                    <button className="btn btn-warning" onClick={this.resetGiftNumber} type="submit">Submit</button>
                                </div>
                            </div>
    
                        </div>
                        {/* <div className="col-lg-4 slide-in-right d-none" id="q3">
                            <div className="form-group">
                                <label htmlFor="buget" className="text-danger">Have a budget?</label>
                                <input type="range" name="buget" className="custom-range slider" min="1" max="1000" value={this.state.budget} id="budget" onChange={this.handleBudget} />
                                <p className="float-left budget-value">${this.state.budget} </p>
                                <button className="btn btn-outline-danger float-right" type="submit">Submit</button>
                            </div>
                        </div> */}
                    </div>
                </form>

                {/* Loading dots */}
                <div className="row d-none" id="loading">
                    <div className="col-12 mt-3">
                        <img src={"https://wpamelia.com/wp-content/uploads/2018/11/loading-hourglass.gif"} className="rounded rounded-pill" alt="loading" />
                    </div>
                </div>


                {/* GIFT RESULTS */}
                <div className="row mb-5 mt-5 justify-content-center font-custom flip-in-hor-bottom d-none" id="gift-result">

                    {/* Picture of Gift */}
                    <div className="col-lg-5 mb-2">
                        {/* Mobile name and price */}
                        {/* <h2 className="d-lg-none float-left">Name</h2> */}
                        {/* <h2 className="d-lg-none float-right">$55.99</h2> */}
                        <img src="https://via.placeholder.com/500x300" alt="gift" id="gift-image" />
                    </div>

                    {/* Name + Description + Price */}
                    <div className="col-lg-6 text-left">
                        <div className="row">
                            <div className="col-10">
                                <h3 className="float-left text-primary" id="gift-name">Name</h3>
                            </div>
                            <div className="col-2">
                                <h3 className="float-right text-success" id="gift-price">5.99</h3>
                            </div>
                            <div className="col-12">
                                <a href="/" target="blank" id="gift-link" className="btn btn-primary btn-block btn-lg">Want it?</a>
                                <button className="btn btn-danger btn-block btn-lg" onClick={this.getGifts}>Nah, next gift!</button>
                                <button className="btn btn-outline-success btn-lg mt-2 float-right" id="save-gift" onClick={this.saveGift}>Save Gift <i className="fas fa-thumbs-up"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommender;