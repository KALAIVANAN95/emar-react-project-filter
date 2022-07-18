import React from "react";
import Products from "./Products";

const Home = () => {

    return (
        <>

            <div className="hero">
                <div className="card bg-dark text-white border-0">
                    <img src="/assets/banner.jpg" className="card-img" alt="background-image" height='550px' />
                    <div className="card-img-overlay d-flex justify-content-center flex-column">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text fead fs-2">CHECK OUT ALL THE TRANDS</p>
                        </div>
                    </div>
                </div>
            <Products />
            </div>



        </>
    );
}

export default Home;