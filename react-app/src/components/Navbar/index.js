import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a className="navbar-brand pl-3 pb-0" href="/">Easy Wrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pr-5">
                    <li className="nav-item active">
                        <a className="nav-link text-success link" href="/login"><i className="fas fa-user-plus fa-2x"></i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <form action="/api/auth/logout" method="POST">
                            <button className="nav-link btn btn-transparent text-danger link red-btn"><i className="fas fa-user-times fa-2x"></i> <span className="sr-only">(current)</span></button>
                        </form>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar;