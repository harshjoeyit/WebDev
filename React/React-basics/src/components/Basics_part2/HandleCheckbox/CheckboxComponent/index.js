import React, { useState, useEffect} from "react";
import Checkbox from "../Checkbox";

function CheckboxComponent({ checkboxList, setCheckedItems }) {
    
    const [state, setState] = useState({checkedItems: new Map()});

    useEffect(() => {
        // setCheckedItems sets updated check items in parent
        setCheckedItems(getArrayOfSelected());
    }, [state])

    const handleChange = ({ target: {name, checked} }) => {
        setState(prevState => ({
            checkedItems: prevState.checkedItems.set(name, checked)
        }));
    }
    
    const getArrayOfSelected = () => {
        const checkedItemsArray = [...state.checkedItems].map(([key, value]) => {
            if(value === true) {
                return key;
            }
            // if value === false, return undefined 
        }).filter(value => value !== undefined);
        
        return checkedItemsArray;
    }
    
    const handleReset = () => setState({ checkedItems: new Map() });
    
    return (
        <>
            {checkboxList.map(item => (
                <label key={item.key}>
                    {item.name}
                    <Checkbox 
                        name={item.name}
                        checked={state.checkedItems.get(item.name)} 
                        onChange={handleChange}   
                    />
                </label>
            ))}
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default CheckboxComponent
