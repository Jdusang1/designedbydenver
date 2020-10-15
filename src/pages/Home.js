import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return (

        <>
            <Header />
            <div className="container-fluid">
                <div className="row justify-content-around no-gutters">
                    <div className="col-4">
                        <a href={"/about"}><div className="card-img fluid rounded-0" id="home-photo1">
                            <h2>About</h2>

                        </div></a>
                    </div>


                    <div className="col-4">
                        <a href={"/portfolio"}> <div className="card-img fluid rounded-0" id="home-photo2">
                            <h2>Portfolio</h2>

                        </div></a>
                    </div>
                    <div className="col-4">
                        <a href={"/contact"}> <div className="card-img fluid rounded-0" id="home-photo3">

                            <h2>Contact</h2>

                        </div></a>
                    </div>
                </div>



            </div>
            <Footer />

        </>
    )
}

export default Home;