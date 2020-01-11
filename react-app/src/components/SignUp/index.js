import React from "react";

function SignUp() {
    return(
        <div>
            <div className="row justify-content-center font-custom">
                <div className="col-lg-4 text-left">
                    <h1 className="display-3 text-center">S I G N U P</h1>
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="password"/>
                        </div>
                        <button className="btn btn-block btn-lg btn-primary">Submit</button>
                        <a href="/" className="btn btn-block btn-secondary"><i class="fas fa-caret-left"></i> Back</a>
                    </form>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;