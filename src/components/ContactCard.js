import React from "react";
import { Row, Col, Card } from 'reactstrap';
import "./ContactCard.css"

const ContactCard = () => {
    return (
        <div>
            <Row>
                <Col xs="6">
                    <Card id="motto">
                        <li>Experience</li>
                        <li>Adventure</li>
                        <li>Design</li>
                        <li>Life</li>
                    </Card>
                </Col>
                <Col>
                    <Card id="contact-info">
                        {/* <li>Designed by Denver</li> */}

                        <li>Denver, CO</li>

                        <li>United States of America</li>

                        <li><a href="JohnDusang1@gmail.com">John@designedbydenver.com</a></li>

                    </Card>

                </Col>



            </Row>
        </div>

    )
}
export default ContactCard;