import React from "react";
import { Card, CardImg, CardBody, CardText, NavLink } from "reactstrap";
import styled from "styled-components";
import CircleImage from "./CircleImage";

const CardWrapper = styled.article`
  .card {
    margin-top: 15px;
    border: 2px solid black;
    height: 600px;
    

  }

  :hover {
    box-shadow: 0 4px 8px 0 #3f5961, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 10px auto;
    
  }
  
  .nav-link{
    justify-content: center;
    text-align: center;
  }

`

const ProjectCard = (props) => {
  return (

    <CardWrapper>
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>

          <CardText>{props.text}</CardText>

        </CardBody>

        <NavLink href="www.google.com">Link To Live Site</NavLink>
        <NavLink href={props.text}>Link To Github</NavLink>
      </Card>
    </CardWrapper>

  )
};

export default ProjectCard;