import React from "react";
import styled from "styled-components";
//icons
import { MdDelete, MdEdit } from "react-icons/md";
//constants
import { colors } from "./constants/colors";

function ExpenseItem({ expense, handleDelete, handleEdit }) {
    const { id, charge, amount } = expense;
    return (
        <Item>
            <Info>
                <Expense>{charge}</Expense>
                <Amount>${amount}</Amount>
            </Info>
            <Buttons>
                <Button
                    className="edit-btn"
                    aria-label="edit-button"
                    onClick={() => handleEdit(id)}
                >
                    <MdEdit />
                </Button>
                <Button
                    className="dlt-btn"
                    aria-label="delete-button"
                    onClick={() => handleDelete(id)}
                >
                    <MdDelete />
                </Button>
            </Buttons>
        </Item>
    );
}
const Item = styled.li`
    background-color: ${colors.mainWhite};
    line-height: 1.5rem;
    padding: 10px 20px;
    margin-bottom: 1rem;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s linear;
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        transform: scale(1.05);
    }
`;
const Info = styled.div`
    flex: 0 0 60%;
    display: flex;
    justify-content: space-between;
`;
const Expense = styled.span`
    margin-right: 2rem;
    text-transform: capitalize;
`;
const Amount = styled.span`
    font-weight: 300;
    font-size: 1rem;
    color: var(--mainWhite);
    background-color: ${colors.primaryColor};
    border-radius: 2px;
    padding: 1px 3px;
`;
const Buttons = styled.div``;
const Button = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    outline: none;
    cursor: pointer;
    &.dlt-btn {
        color: ${colors.mainRed};
    }
    &.edit-btn {
        color: ${colors.mainGreen};
    }
`;
export default ExpenseItem;
