import styled from "styled-components";

export const Icon = styled.a`
      text-decoration: none;
      font-size: 35px;
      color: ${props => props.facebook ? "#1464f6" :
            props.twitter ? "#00c8f8" :
            props.instagram ? "#e93578" : "black"}
`