import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardText, CardImg } from 'reactstrap';
import Hotspring from "../assets/hotsprings edit.jpg"
import Profile from "../assets/profile_Fotor.png"
import styled from "styled-components"
import "./BannerImg.css"

const BannerWrapper = styled.div`
img{
    max-width: 100%;
    height: 400px;
    object-fit: scale-down;
}
`
const BannerImg = () => {
    return (
        <BannerWrapper>
            <div>
                <Card>

                    <CardImg src={Profile} alt="Card image cap" />

                </Card>
            </div>
        </BannerWrapper>
    );
};

export default BannerImg;