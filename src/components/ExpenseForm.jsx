import React from "react";
import styled from "styled-components";
//icons
import { MdSend } from "react-icons/md";
import { colors } from "./constants/colors";

function ExpenseForm({
    charge,
    amount,
    handleCharge,
    handleAmount,
    handleSubmit,
    edit,
}) {
    console.log(typeof amount, amount, "amount");
    return (
        <Form onSubmit={handleSubmit}>
            <FormCenter>
                <FormGroup>
                    <Label htmlFor="charge">Charge</Label>
                    <Input
                        type="text"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 400"
                        value={amount}
                        onChange={handleAmount}
                    />
                </FormGroup>
            </FormCenter>
            <Button type="submit">
                {edit ? "edit" : " Submit"}
                <MdSend className="btn-icon" />
            </Button>
        </Form>
    );
}
const Form = styled.form``;
const FormCenter = styled.div`
    display: flex;
    padding: 0 1rem;
`;
const FormGroup = styled.div`
    padding: 1rem 0.75rem;
    flex: 0 0 50%;
`;
const Label = styled.label`
    display: block;
    color: ${colors.mainBg};
    font-size: 1rem;
    text-transform: capitalize;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${colors.mainBg};
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
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
`;
export default ExpenseForm;
