import styled from "styled-components";

export const Nav = styled.div`
    flex-flow: column nowrap;
    position: fixed;

    transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(250%)" };
    transition: transform 0.33s ease-in-out;
    transform-origin: 0px;

    width:180px;
    height:270px;
    z-index:6;
    top: 15%;
    right: 5%;
    

    border: 2px solid #f6f6f6;
    border-radius:10px;
    background-color:#f6f6f6;

    font-size:15px;
    text-align:left;
  hr {
        width: 75%;
        margin: 25px 0px 0px 25px;
    }

  h3{
    font-size: 15px;
    margin:10px;
  }

  box-shadow: 0px 0px 5px 0px rgba(171,171,171,0.75);
-webkit-box-shadow: 0px 0px 5px 0px rgba(171,171,171,0.75);
-moz-box-shadow: 0px 0px 5px 0px rgba(171,171,171,0.75);
    `