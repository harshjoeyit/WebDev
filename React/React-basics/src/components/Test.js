import React from 'react'

const Item = ({text}) => (<h3>{text}</h3>);

function Test() {
    const items = [{text: 'first'}, {text: 'sec'}, {text: 'third'}];
    return (
        <div>
        {
            items.map((item) => (
                <Item text={item.text} />
            ))
        }
        </div>
    )
}

export default Test
