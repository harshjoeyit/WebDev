import React, {useState} from 'react'

// state and setState passed as a prop to this component
const DisplayItems = ({state, setState}) => {
    
    // handler for change in input
    const handleChange = (e) => {
        // get the index of item, on which onChange is triggered
        let index = Number(e.target.name.split("-")[1]);
        const updatedList = state.list.map((item, i) => (
            (i == index) ? e.target.value: item
        ));
        setState({
            ...state, 
            list: updatedList
        })
    }
    
    return (
        <>
        { 
            state.list.map((item, index) => {
                return (
                    <div 
                        style={{display:'block'}}
                        key={`item-${index}`}
                    >
                        {`${index + 1}. `}
                        <input
                            type="text"
                            size={45}
                            name={`item-${index}`}
                            value={item}
                            placeholder="item"
                            onChange={handleChange}
                        />
                    </div>
                )
            })    
        }
        </>
    )
}

const ItemList =  () => {    
    
    const [state, setState] = useState({list:  ['', ]});
    
    // adding new item
    const handleNewItem = () => {
        setState({
            ...state, 
            list: [...state.list, '']
            // append blank item to list
        });
    }

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.list);
    }

    return (
        <div>
            {/* 
                TIP: 
                use onSubmit on form rather than
                onClick handle on submit button
            */}
            <form onSubmit={handleSubmit}>
                <DisplayItems  state={state} setState={setState} />
                <button
                    type="button"
                    onClick={handleNewItem}
                > Add Item 
                </button>
                <button
                    type="submit"
                > Submit
                </button>
            </form>
        </div>
    )
}

export default ItemList
