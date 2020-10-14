import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterWrapper = styled.div`

#footer{
  text-align: center;
  padding-top: 25px;
}
.icon{
    color: black;
    

}



`



// import { FaLinkedin } from "react-icons/fa"

function Footer() {

    return (
        <FooterWrapper>
            <div id="footer">
                <a id="git" target="_blank" href={"https://github.com/Jdusang1"}><FaGithub style={{ color: "black" }} size={"32px"} paddingTop={"5px"} /></a>
                <a id="linked" target="_blank" href={"https://www.linkedin.com/in/john-dusang-2b768b1ab/"}><FaLinkedin style={{ color: "black" }} size={"32px"} /></a>
            </div>
        </FooterWrapper>
    )
}

export default Footer;