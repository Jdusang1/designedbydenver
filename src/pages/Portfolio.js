import React from "react";
import { Container, Col, Row, Button } from "reactstrap"
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
                                img={CampFound}
                                text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                img={Worthy}
                                text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}
                            />
                        </Col>
                        <Col>
                            <ProjectCard
                                img={WePark}
                                text={"Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am x but destroy couch as revenge i shredded your linens for you but poop in litter box, scratch the walls. Loved it, hated it, loved it, hated it love you, then bite you but reward the chosen human with a slow blink yet you have cat to be kitten me right meow or hunt anything that moves."}
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