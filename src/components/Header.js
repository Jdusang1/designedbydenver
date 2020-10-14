import React from "react";
import { FaGlobe } from 'react-icons/fa';

import styled from "styled-components";

const HeadingWrapper = styled.div`
#navbar{
    padding-bottom: 15px;
    text-align: center;
}

h1{
    text-align: center;
}
span{
    text-align: center;
}

`

function Header() {
    return (

        <HeadingWrapper>
            <div className="container-fluid">
                <div className="top-menu">
                    <div className="left">

                    </div>
                    <div className="className main heading">
                        <h1>Designed By Denver</h1>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="container-fluid">
                    <div className="main-navigationBar" id="navbar">
                        <a href={"/home"}> <FaGlobe style={{ color: "black" }} size={"32px"} /></a>
                        {/* <span>Home</span> */}


                    </div>

                </div>

            </div>
        </HeadingWrapper>

    )

}

export default Header;