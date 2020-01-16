import React from "react";
import API from "../../utils/API";

class Recommender extends React.Component {

    state = {
        gifts: [],
        currentQuestion: 1,
        occasion: "",
        interests: "",
        budget: 20
    }

    nextQuestion = () => {

        if (this.state.currentQuestion === 1) {
            document.getElementById("q2").classList.remove("d-none");
            
            this.setState({currentQuestion: 2});
        } 
        else if (this.state.currentQuestion === 2) {
            document.getElementById("q3").classList.remove("d-none");
            this.setState({currentQuestion: 3});
        }
        else if (this.state.currentQuestion === 3) {
            document.getElementById("q4").classList.remove("d-none");
        }

    }

    submitQuestions = (e) => {
        e.preventDefault();
        document.getElementById("gift-result").classList.remove("d-none");
        this.getGifts();
    }

    // Handle Question Inputs
    handleBudget = event => {
        this.setState({budget: event.target.value});
    }
    handleInterests = event => {
        this.setState({interests: event.target.value});
    }
    handleOccassion = event => {
        this.setState({occasion: event.target.value});
    }

    getGifts = () => {
        API.getSearchGift(this.state.interests)
          .then((response) =>{
            console.log(response.data)
            // this.setState({
            //   gifts: response.data
            // })
            
        }
          )
          .catch(error => console.log(error));
      };

    render() {
        return(
            <div>
                {/* QUESTIONS */}
                <form className="font-custom mt-3">
                    <div className="row mb-3">
                        <div className="col-lg-3 slide-in-right" id="q1">
                            <label htmlFor="occasion" className="text-primary">Who's it for?</label>
                            <div className="input-group">
                                <input type="text" name="occasion" className="form-control" value={this.state.occasion} onChange={this.handleOccassion} />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 slide-in-right d-none" id="q2">
                            <label htmlFor="occasion" className="text-success">What's the occasion?</label>
                            <div className="input-group">
                                <input type="text" name="occasion" className="form-control" value={this.state.occasion} onChange={this.handleOccassion} />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 slide-in-right d-none" id="q3">
                            <label htmlFor="interests" className="text-warning">What are they into?</label>
                            <div className="input-group">
                                <input type="text" name="interests" className="form-control" value={this.state.interests} onChange={this.handleInterests} />
                                <div className="input-group-append">
                                    <button className="btn btn-warning" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
    
                        </div>
                        <div className="col-lg-3 slide-in-right d-none" id="q4">
                            <div className="form-group">
                                <label htmlFor="buget" className="text-danger">Have a budget?</label>
                                <input type="range" name="buget" className="custom-range slider" min="1" max="1000" value={this.state.budget} id="budget" onChange={this.handleBudget} />
                                <p className="float-left budget-value">${this.state.budget} </p>
                                <button className="btn btn-outline-danger float-right" onClick={this.submitQuestions}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>


                {/* GIFT RESULTS */}
                <div className="row mb-5 justify-content-center font-custom flip-in-hor-bottom d-none" id="gift-result">

                    {/* Picture of Gift */}
                    <div className="col-lg-5 mb-2">
                        {/* Mobile name and price */}
                        <h2 className="d-lg-none float-left">Name</h2>
                        <h2 className="d-lg-none float-right">$55.99</h2>
                        <img src="https://via.placeholder.com/500x300" alt="gift" />
                    </div>

                    {/* Name + Description + Price */}
                    <div className="col-lg-6 text-left">
                        <div className="row">
                            <div className="col-12 d-none d-lg-block">
                                <h2 className="display-4 float-left">Name</h2>
                                <h2 className="display-4 float-right">$55.99</h2>
                            </div>
                            <div className="col-12 text-center description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col-12">
                                <a href="/" className="btn btn-primary btn-block btn-lg">Want it?</a>
                                <button className="btn btn-danger btn-block btn-lg">Nah, next gift</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommender;