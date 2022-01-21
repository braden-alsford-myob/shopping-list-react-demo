import ItemAdder from './ItemAdder';
import React, {useState} from "react";

function App() {

  const [items, setItems] = useState(["Eggs"]);

  const addItem = item => {
    setItems([...items, item])
  };

  return (
    <div className="App">
      <h1>My Shopping List 🎉</h1>
      <ItemAdder addItem={addItem}/>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
