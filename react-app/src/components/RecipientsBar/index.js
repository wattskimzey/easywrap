import React from "react";

function RecipientsBar() {
    return(
        <div className="row border-bottom border-light text-left py-2 font-custom">
            <div className="col-12 border-bottom border-light mb-2">
                <h5 className="pl-3">Saved Recipients <i class="fas fa-users"></i></h5>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-1 text-center">
                        <div className="recipient"><i className="fas fa-user-circle fa-2x"></i></div>
                        <a href="#" className="text-light">Person</a>
                    </div>
                    <div className="col-1 text-center">
                        <div className="recipient"><i className="fas fa-user-circle fa-2x"></i></div>
                        <a href="#" className="text-light">Person</a>
                    </div>
                    <div className="col-1 text-center">
                        <div className="recipient"><i className="fas fa-user-circle fa-2x"></i></div>
                        <a href="#" className="text-light">Person</a>
                    </div>
                    <div className="col-1 text-center">
                        <div className="recipient"><i className="fas fa-user-circle fa-2x"></i></div>
                        <a href="#" className="text-light">Person</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipientsBar;