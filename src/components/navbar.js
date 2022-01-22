import React from "react";
class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#">
              07's Cart
            </a>
            <div className="nav_right d-flex">
            <h4 className="text-white lead m fw-bolder" >Items:{this.props.len}</h4>
            <h4 className="text-white lead mx-4 fw-bolder" >Total:{this.props.tAmount}</h4>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
