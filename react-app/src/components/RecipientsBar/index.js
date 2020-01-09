import React from "react";

function RecipientsBar() {
    return(
        <div className="font-custom">
        <div className="row pb-0">
            <div className="col-8 text-right">
                <h5 className="pl-2 text-left">Saved Recipients <i class="fas fa-users"></i></h5>
            </div>
            <div className="col-4 text-right">
                <button className="btn btn-sm btn-primary">Add Recipient</button>
            </div>
        </div>
            <div className="row border-bottom border-light py-2 mt-2 border-top">
                <div className="col-1 text-center">
                    <a href="#" className="text-light"><i className="fas fa-user"></i> Person</a>
                </div>
                <div className="col-1 text-center">
                    <a href="#" className="text-light"><i className="fas fa-user"></i> Person</a>
                </div>
                <div className="col-1 text-center">
                    <a href="#" className="text-light"><i className="fas fa-user"></i> Person</a>
                </div>
                <div className="col-1 text-center">
                    <a href="#" className="text-light"><i className="fas fa-user"></i> Person</a>
                </div>
            </div>
        </div>
    )
}

export default RecipientsBar;