import React from "react";

function Question() {
    return(
        <div>
            <form className="font-custom mt-3">
                <div className="row">
                    <div className="col-4">
                        <label for="occassion" className="text-primary">What's the occasion?</label>
                        <div className="input-group">
                            <input type="text" name="occassion" className="form-control" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" id="button-addon2">Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <label for="interests" className="text-success">What are they into?</label>
                        <div className="input-group">
                            <input type="text" name="interests" className="form-control" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-success" type="button" id="button-addon2">Next</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label for="price" className="text-warning">Have a budget?</label>
                            <input type="range" name="price" className="custom-range" id="customRange1"/>
                            <button className="btn btn-outline-warning float-right">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Question;