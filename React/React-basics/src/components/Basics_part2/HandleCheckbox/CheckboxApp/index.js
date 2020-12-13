import React, { useState, useEffect } from "react";
import CheckboxComponent from "../CheckboxComponent";

const checkboxFields = [
    {
        name: "checkbox1",
        key: "1",
        label: "Check Box 1",
        checked: false
    },
    {
        name: "checkbox2",
        key: "2",
        label: "Check Box 2",
        checked: false
    },
    {
        name: "checkbox3",
        key: "3",
        label: "Check Box 3",
        checked: false
    },
    {
        name: "checkbox4",
        key: "4",
        label: "Check Box 4",
        checked: false
    }
];


const CheckboxApp = () => {

    // checked items array
    const [checkedItems, setCheckedItems] = useState([]);

    // whenever the state(checked Items) is updated, useEffect is run 
    // state is changed in child component
    useEffect(() => {
        console.log("updated: ", checkedItems);
    }, [checkedItems]);

    return (
        <div className="app">
            <h3>Checkbox input</h3> 
            {/*  */}
            <CheckboxComponent checkboxList={checkboxFields} setCheckedItems={setCheckedItems}/>
            {/* TODO:  
                make a similar for SELECT input
            */}
        </div>
    );
};

export default CheckboxApp;
