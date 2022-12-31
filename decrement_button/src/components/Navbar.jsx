import React, { Component } from 'react';
//stateless Functional Component
const Navbar=({totalCounters})=>{
  console.log('Navbar-Rendered');
  return (
    <>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <span className='badge badge-pill badge-secondary'>
        {totalCounters}
      </span>
    </div>
  </nav>
  </>
);

}
// class Navbar extends Component {
//     render() {
       
//     }
// }

export default Navbar;
