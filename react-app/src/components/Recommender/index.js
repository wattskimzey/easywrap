import React from "react";

class Recommender extends React.Component {

    state = {
        currentQuestion: 1
    }

    nextQuestion = () => {

        if (this.state.currentQuestion === 1) {
            document.getElementById("q2").classList.remove("d-none");
            
            this.setState({currentQuestion: 2});
        } 
        
        else if (this.state.currentQuestion === 2) {
            document.getElementById("q3").classList.remove("d-none");
        }

    }

    submitQuestions = (e) => {
        e.preventDefault();
        document.getElementById("gift-result").classList.remove("d-none");
    }

    render() {
        return(
            <div>
                {/* QUESTIONS */}
                <form className="font-custom mt-3">
                    <div className="row mb-3">
                        <div className="col-lg-4 slide-in-right" id="q1">
                            <label htmlFor="occassion" className="text-primary">What's the occasion?</label>
                            <div className="input-group">
                                <input type="text" name="occassion" className="form-control"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 slide-in-right d-none" id="q2">
                            <label htmlFor="interests" className="text-success">What are they into?</label>
                            <div className="input-group">
                                <input type="text" name="interests" className="form-control" />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="button" onClick={this.nextQuestion}>Next</button>
                                </div>
                            </div>
    
                        </div>
                        <div className="col-lg-4 slide-in-right d-none" id="q3">
                            <div className="form-group">
                                <label htmlFor="price" className="text-warning">Have a budget?</label>
                                <input type="range" name="price" className="custom-range" id="customRange1"/>
                                <button className="btn btn-outline-warning float-right" onClick={this.submitQuestions}>Submit</button>
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
                            <div className="col-12">
                                <a href="#" className="btn btn-primary btn-block btn-lg">Want it?</a>
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