import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("")
    const [items, setItems] = useState(["Get MERN black belt", "Get Python Black B"])


    const itemEvent = (e) => {
        e.preventDefault();

        setInput(e.target.value)

    }
    const listOfItems = () => {
        if (input !== "") {
            const updatedItems = [...items, input]
            setItems((preItem) => updatedItems)
        }
        setInput("")


    }

    const deleteTodo = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };


    return (
        <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>
                    ToDo List
                </h1>
                <br />
                <input style={{width:'200px',  height:'30px', borderRadius:"5px", fontSize:'1.5em'}} type='text' placeholder='Add' onChange={itemEvent} value={input} />
                <button style={{height:'40px', width:'30px', margin:'10px', fontSize:'1.5em'}} onClick={listOfItems}>+</button >

                <ol>

                    
                    <h1>
                    {items.map((itemval, index) => {
                        const handleDelete = () => deleteTodo(index)
                        return (
                            <li key={index}>
                                {itemval}
                                <button style={{width:'30PX',  height:'30px',margin:'10px',borderRadius:"70%"}} onClick={handleDelete}>X</button>

                            </li>

                        )



                    })}

                        </h1>

                </ol>
            </div>


        </div>
    )
}

export default Todo

