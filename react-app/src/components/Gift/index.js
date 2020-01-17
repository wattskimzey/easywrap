import React from "react";
import API from "../../utils/API";

class Gift extends React.Component {

    // componentDidMount() {
    //     API.getHomeGift()
    // }

    render() {
        return(
            <div>
                <div className="row mb-5 justify-content-center font-custom">

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

export default Gift;