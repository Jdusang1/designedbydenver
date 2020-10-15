import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Japan from "../assets/IMG_6917.JPG";
import Thailand from "../assets/IMG_9025.JPG";
import Nz from "../assets/IMG_3927.JPG"

function Home() {
    return (

        <>
            <Header />
            <div className="container-fluid">
                <div className="row justify-content-around no-gutters">
                    <div className="col-4">
                        <a href={"/about"}><div src={Japan} className="card-img fluid rounded-0" id="home-photo1">
                            <h2>About</h2>

                        </div></a>
                    </div>


                    <div className="col-4">
                        <a href={"/portfolio"}> <div src={Thailand} className="card-img fluid rounded-0" id="home-photo2">
                            <h2>Portfolio</h2>

                        </div></a>
                    </div>
                    <div className="col-4">
                        <a href={"/contact"}> <div src={Nz} className="card-img fluid rounded-0" id="home-photo3">

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