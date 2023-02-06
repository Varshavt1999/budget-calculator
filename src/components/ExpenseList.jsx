import React from "react";
import styled from "styled-components";
//constants
import { colors } from "./constants/colors";
//components
import ExpenseItem from "./ExpenseItem";
//icons
import { MdDelete } from "react-icons/md";
function ExpenseList({ expenses, clearItems, handleDelete, handleEdit }) {
    return (
        <ListBox>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
            {/* {expenses.length > 0 && (
                <Button>
                    Clear expense <MdDelete className="btn-icon" />
                </Button>
            )} */}

            <Button onClick={clearItems}>
                Clear expense <MdDelete className="btn-icon" />
            </Button>
        </ListBox>
    );
}

const ListBox = styled.ul`
    margin: 2rem 0.75rem 0 0.75rem;
    list-style-type: none;
    border: none;
    padding: 0;
`;
const Button = styled.button`
    text-decoration: none;
    color: ${colors.mainWhite};
    background-color: ${colors.primaryColor};
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 14px;
    outline: 0;
    border: none;
    border-radius: 2px;
    display: block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    align-items: center;
    & .btn-icon {
        margin-left: 0.75rem;
        font-size: 1.2rem;
    }
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;
export default ExpenseList;
