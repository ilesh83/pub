import React from "react";
import Slider from "../includes/Slider";
import { Link } from "react-router-dom";
import Vmc from "./Includes/Vmc";
import Akshay1 from "../Images/music-grid.jpg";
import ntr1 from "../Images/food-grid.jpg";
import Prabhas1 from "../Images/liquor-grid.jpg";
import Footer from './Includes/Footer';



function Homepage() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Our Pub</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. 
              </p>
              <Link to="/aboutus" className="btn btn-warning shadow">
                Readmore
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Vmc />

      <section className="section bg-c-dark border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
            <div className="card shadow">
            <img src={Akshay1} className="w-100 border-bottom" />                              
                <div className="card-body">
                  <h6>Music</h6>
                  <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
               </div>
              </div>
              </div>
              <div className="col-md-4 ">
            <div className="card shadow">
            <img src={Prabhas1} className="w-100 border-bottom" />                              
                <div className="card-body">
                  <h6>Drink </h6>
                  <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
               </div>
              </div>
              </div>
              <div className="col-md-4 ">
            <div className="card shadow">
            <img src={ntr1} className="w-100 border-bottom" />                              
                <div className="card-body">
                  <h6>Food</h6>
                  <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
               </div>
              </div>
              </div>
              </div>
              </div>
      </section>
      <Footer/>
    </div>
  );
}
export default Homepage;
