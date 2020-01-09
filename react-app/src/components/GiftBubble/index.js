import React from "react";

function GiftBubble() {
    return(
        <div>
            <div className="row justify-content-center align-items-center">
                <div className="col-3 text-center">
                    <button className="btn btn-transparent"><i className="fas fa-play left-arrow" /></button>
                </div>
                <div className="col-5 gift-bubble rounded rounded-circle">
                </div>
                <div className="col-3 text-center">
                    <button className="btn btn-transparent"><i className="fas fa-play right-arrow" /></button>
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

export default GiftBubble;