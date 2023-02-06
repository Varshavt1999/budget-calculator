import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
//to get each usinque id's
import { v4 as uuidv4 } from "uuid";

//constants
import { colors } from "./components/constants/colors";
//components
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    // const initialExpenses = [
    //     {
    //         id: uuidv4(),
    //         charge: "rent",
    //         amount: 1600,
    //     },
    //     {
    //         id: uuidv4(),
    //         charge: "car payment",
    //         amount: 400,
    //     },
    //     {
    //         id: uuidv4(),
    //         charge: "credit card bill",
    //         amount: 1200,
    //     },
    // ];
    console.log(localStorage.getItem("expenses"), "localStorage.getItem");
    const initialExpenses = localStorage.getItem("expenses")
        ? JSON.parse(localStorage.getItem("expenses"))
        : [];
    //  ****************** state values ********************
    //all expenses , add expenses
    const [expenses, setExpenses] = useState(initialExpenses);
    console.log(expenses);
    //single charge
    const [charge, setCharge] = useState("");
    //single amount
    const [amount, setAmount] = useState("");
    //alert
    const [alert, setAlert] = useState({ show: false });
    //edit
    const [edit, setEdit] = useState(false);
    //editItem
    const [editItemId, setEditItemId] = useState(0);
    //  ****************** useEffect *********************
    useEffect(() => {
        console.log("calles");
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    //  ****************** functionality *********************
    const handleCharge = (e) => {
        setCharge(e.target.value);
        console.log(`charge : ${e.target.value}`);
    };
    const handleAmount = (e) => {
        setAmount(e.target.value);
        console.log(`amount : ${e.target.value}`);
    };
    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== "" && amount !== 0) {
            if (edit) {
                let tempExpenses = expenses.map((item) => {
                    return item.id === editItemId
                        ? { ...item, charge: charge, amount: amount }
                        : item;
                });
                setExpenses(tempExpenses);
                setEdit(false);
                handleAlert({ type: "success", text: "Item edited" });
            } else {
                const singleExpense = {
                    id: uuidv4(),
                    charge: charge,
                    amount: amount,
                };
                setExpenses([...expenses, singleExpense]);
                handleAlert({ type: "success", text: "Item added" });
            }
            setAmount("");
            setCharge("");
        } else {
            handleAlert({
                type: "danger",
                text: "charge can't be empty value and amount value has to be bigger than zero",
            });
        }
    };
    const clearItems = () => {
        setExpenses([]);
        handleAlert({ type: "danger", text: "All items deleted" });
    };
    const handleDelete = (id) => {
        let tempExpenses = expenses.filter((item) => item.id !== id);
        setExpenses(tempExpenses);
        handleAlert({ type: "danger", text: "Item deleted" });
    };
    const handleEdit = (id) => {
        let expense = expenses.find((item) => item.id === id);
        console.log(expense);
        let { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setEditItemId(id);
    };
    return (
        <>
            {alert.show && <Alert type={alert.type} text={alert.text} />}

            <Title>Budget Calculator</Title>
            <AppContainer>
                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                    edit={edit}
                />
                {expenses.length > 0 && (
                    <ExpenseList
                        expenses={expenses}
                        clearItems={clearItems}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )}
            </AppContainer>
            <TotalBox>
                Total Spending :{" "}
                <span>
                    $
                    {expenses.reduce((acc, curr) => {
                        return (acc += parseInt(curr.amount));
                    }, 0)}
                </span>
            </TotalBox>
        </>
    );
}
const Title = styled.h1`
    text-align: center;
    text-transform: capitalize;
    margin: 2rem 0;
    color: ${colors.mainWhite};
    letter-spacing: 5px;
`;
const AppContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
    background: ${colors.mainWhite};
    padding-bottom: 2rem;
    border-radius: 2px;
`;
const TotalBox = styled(Title)`
    & span {
        font-weight: 300;
        color: ${colors.mainWhite};
        background-color: ${colors.primaryColor};
        border-radius: 2px;
        padding: 2px 5px;
    }
`;
export default App;
