import React from "react";

function Login() {
    return(
        <div>
            <div className="row justify-content-center font-custom">
                <div className="col-lg-4 text-left">
                    <h1 className="display-3 text-center">L O G I N</h1>
                    <form action="/api/auth/login" method="POST" >
                        <div className="form-group">
                            <input className="form-control" type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="password"/>
                        </div>
                        <button className="btn btn-block btn-lg btn-primary">Submit</button>
                        <a href="/" className="btn btn-block btn-secondary"><i className="fas fa-caret-left"></i> Back</a>
                    </form>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Login;