import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';
import { Row, Col, Card } from 'reactstrap';
import { BsPlusCircle } from "react-icons/bs"
import "./aboutcard.css"


const AboutCard = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Card >
                        <h1>Who I Am</h1>
                        {/* <span><BsPlusCircle /></span> */}
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card id="who">
                        <p>I am firm believer that time is best spent doing something you love. No need to waste energy on things that don't suite your lifestyle. Go out there and get outside your comfort zone! I live an active and adventure filled lifestyle making the most of every opportunity I get.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Card >
                        <h1>What I do</h1>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col >
                    <Card id="what"><p>
                        I bring a strong set of skills and values to any environment. Whether that be by my knowledge built around full stack Javascript development or my 15 plus years of experience in customer service. Building relationships that result in customer satisfaction, retention, and increased sales. Or my proven organizational and time management skills, consistently exceeding established goals while supporting day to day operations. I believe that a positive easy going attitude along with heavy drive has and will allow me to succeed.
                    </p>
                    </Card>

                </Col>

            </Row>
            <Row>
                <Col >
                    <Card>
                        <h1>Where I Want To Go</h1>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col >
                    <Card id="where">
                        <p>I would like to see myself in a position where I am able to remain creative and express my ideas through multiple platforms. Whether that be building websites and applications or developing marketing and branding blueprints for products, business and individuals.</p>
                    </Card>

                </Col>
            </Row>

        </div >
    )
}

export default AboutCard