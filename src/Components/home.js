import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';


function Home() {
  const [home,setHome]=useState(false);
  const closeHome=()=>{
      setHome(false);
  }
  const getHome=()=>{
      setHome(true);
  }
  if(home===false){
  return (   
     <div className="container-fluid">
        <div className="row" id="row">
            <div className="col-3" id="logo">
                <span id="close" onClick={closeHome}>x</span>
                <img src={"/logo.jpg"} alt="logo" height="90" weidth="90"/>
            </div>
            <div className="col-6" id="description">
                <h2 id="title-app-button" onClick={getHome}>Title App</h2>
                <ReactStars count={5} onChange={""} size={24} activeColor="#ffd700" className="stars"/>
                <h5>Free-Download the app</h5>
            </div>
            <div className="col-3" id="get-button">
                <button className="btn btn-success" id="button"><b>Get</b></button>
            </div>
       </div>
       <div className="row" id="row2">
            <div className="col-1"></div>
            <div className="col-10">
                <h2 className="Buy-now-button">Buy now & save 75%</h2></div>
            <div className="col-1"></div>
        </div>
       <div className="row" id="row3">
            <div className="col-2"></div>
            <div className="col-8">
                <label>1</label>
                <label>7</label>
                <label>25</label>
                <label>6</label>
            </div>
            <div className="col-2"></div>
        </div>
    </div>
  );
  }
  else{
    return(
    <div>
    <div className="container-fluid">
      <div className="row" id="row">
        <div className="col-3" id="logo">
            <span id="close" onClick={closeHome}>x</span>
            <img src={"/logo.jpg"} alt="logo" height="90" weidth="90"/>
        </div>
        <div className="col-6" id="description">
            <h2 id="title-app-button" onClick={getHome}>Title App</h2>
            <ReactStars count={5} onChange={""} size={24} activeColor="#ffd700" className="stars"/>
            <h5>Free-Download the app</h5>
        </div>
        <div className="col-3" id="get-button">
            <button className="btn btn-success" id="button"><b>Get</b></button>
        </div>
      </div>
      <div className="row" id="row">
        <div className="col-3" id="logo">
            <img src={"/logo.jpg"} alt="logo" height="120" weidth="120"/>
        </div>
        <div className="col-6" id="description">
            <h2 id="title-app-button">Option 1</h2>
            <ReactStars count={5} onChange={""} size={24} activeColor="#ffd700" className="stars"/>
            <h5>Description 1</h5>
        </div>
        <div className="col-3" id="get-button">
            <button className="btn btn-success" id="button"><b>Get</b></button>
        </div>
      </div>
    </div>
    <div className="row" id="row">
        <div className="col-3" id="logo">
            <img src={"/logo.jpg"} alt="logo" height="120" weidth="120"/>
        </div>
        <div className="col-6" id="description">
            <h2 id="title-app-button">Option 2</h2>
            <ReactStars count={5} onChange={""} size={24} activeColor="#ffd700" className="stars"/>
            <h5>Description 2</h5>
        </div>
        <div className="col-3" id="get-button">
            <button className="btn btn-success" id="button"><b>Get</b></button>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
