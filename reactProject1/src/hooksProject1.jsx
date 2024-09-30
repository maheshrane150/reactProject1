import { useState } from 'react';

function Hooks() {

    let [counter, setCounter] = useState(15);

    const setterAdd = () => {
        setCounter(counter + 1);
    }

    const setterRemove =() => {
        setCounter(counter-1);
    }
 
        return(
            <div>
            <h1>counter value</h1>
            <button onClick={setterAdd}>add value in {counter}</button>
            <button onClick={setterRemove}>remove value from {counter}</button>
            <h2>final value{counter}</h2>
            </div>
        )
    
}


export default Hooks