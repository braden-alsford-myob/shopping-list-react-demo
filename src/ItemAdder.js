import React, { useState } from "react";

const ItemAdder = (props) => {

    const [item, setItem] = useState('');

    const addItem = () => {
        props.addItem(item);
        setItem('')
    };

    return (
        <div>
            <input value={item} onChange={event => setItem(event.target.value)}/>
            <button onClick={addItem}>Add!</button>
        </div>
    )
};

export default ItemAdder
