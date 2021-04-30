import styled from "styled-components";

export const Button = styled.button`
    width: ${props =>
      props.forgotPassword ? "300px" :
      props.primary ? "18vmax" :
      props.secondary ? "300px" : "200px"};
    height: ${props =>
      props.primary ? "55px" :
      props.secondary ? "45px" :
      props.forgotPassword ? "35px" : "35px"};
    padding: 0px 10px 0px 10px;
    background: #29323d;
    color: #ffffff;
    border-color: #29323d;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    font-family: Open Sans, arial;
    font-weight: 600;
    font-size: ${props =>
      props.primary ? "25px" :
      props.secondary ? "20px" :
      props.forgotPassword ? "15px" : "10px"};
    text-align: center;
`;
