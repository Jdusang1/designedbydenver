import React from "react";
import { Container, Col, Row, NavLink } from "reactstrap"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import WePark from "../assets/We-Park .jpg";
import CampFound from "../assets/Campfound.jpg";
import Worthy from "../assets/Worthy-Origin.jpg";


function Portfolio() {
    return (
        <>
            <>
                <Header />
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <ProjectCard
                                img={Worthy}
                                text={"Worthy Origin is an app where users can gather more information on the environmental impact of their grocery items. Users can search for food items to see what green house gas emissions are associated with each product. Users can also search for a local farmers market and login to create their own save-able grocery list. This grocery list will gives a total green house gas emissions for the entire list."}

                            />
                            <NavLink href={"www.google.com"}></NavLink>
                        </Col>
                        <Col>
                            <ProjectCard
                                img={Worthy}
                                text={"Worthy Origin is an app where users can gather more information on the environmental impact of their grocery items. Users can search for food items to see what green house gas emissions are associated with each product. Users can also search for a local farmers market and login to create their own save-able grocery list. This grocery list will gives a total green house gas emissions for the entire list."}
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                img={CampFound}
                                text={"This project was built for users to be able to track and log there experiences at desired campgrounds. Whether keeping track of places that you've been or places you would like to go, Campfound allowed you to do so. It also incorporates an API that would provide users with the ability to find random campsites by a searched state code. If you enjoyed or hated a campsite you are able to leave a review for your records incase you ever find yourself looking for a place to spend a few days in the wilderness and don't know where to go, Campfound is there to help make that decision."}

                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <ProjectCard
                                img={WePark}
                                text={"We park was built to allow users to find information surrounding the national parks in America. Giving the capability to search for all national parks by state code and returning information on closings, restrictions, activities, entrance fee's and son on. Weather forecasts were available as well as directions to the selected national park."}

                            />
                        </Col>
                    </Row>

                </Container>
                <Footer />
            </>

        </>
    )
}

export default Portfolio;