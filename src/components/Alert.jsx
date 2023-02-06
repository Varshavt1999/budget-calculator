import React from "react";
import styled from "styled-components";
//constants
import { colors } from "./constants/colors";

function Alert({ type, text }) {
    return (
        <Container className={`alert-${type}`} type={type}>
            {text}
        </Container>
    );
}
const Container = styled.div`
    padding: 0.75rem 1.25rem;
    color: ${colors.mainWhite};
    text-align: center;
    text-transform: capitalize;
    width: 90%;
    margin: 2rem auto 0 auto;
    border-radius: 2px;
    text-transform: capitalize;
    /* &.alert-danger {
        background: ${colors.mainRed};
    }
    &.alert-success {
        background: ${colors.mainGreen};
    } */
    background-color: ${({ type }) =>
        type === "danger"
            ? `${colors.mainRed}`
            : type === "success" && `${colors.mainGreen}`};
`;
export default Alert;
