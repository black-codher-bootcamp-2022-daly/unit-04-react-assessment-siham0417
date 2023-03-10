import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {
  return (
    <div id="header">
        <h1>About</h1>
        <div id="breadcrumb">
          <Link to="/"> Home </Link> |
          <Link to="/about"> About </Link> |
          <Link to="/basket" id="basketlink"> Basket: {props.basketCount} item{props.basketCount===1?"":"s"}</Link>
        </div>
        <h2 className="page">Welcome to the Music Store.</h2>
        <div>Browse the iTunes store for media you are interested in. Add to your basket and keep track of costs.</div>
    </div>
  )
}


export default About;