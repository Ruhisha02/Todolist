import { useEffect, useRef, useState } from "react"

export default function Testing()
{
    const [toDoList, setToDoList]=useState(['test']);
    const [newTest, setNewTest] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const textBoxRef = useRef();
    function getTotalItems()
    {
        setTotalItems(toDoList.length);
        console.log('function called');
    }

    function handleClick()
    {
        const newValue=textBoxRef.current.value;
        setToDoList([...toDoList,newValue]);
        console.log(textBoxRef.current.value);
    }

  useEffect(()=>{
getTotalItems()


  },[toDoList])

  function handleNewClick()
  {
    setNewTest(newTest+2);

  }
    return (
        <>
        
        <h1>Testing page</h1>
        <h1>Total Items : {totalItems}</h1>
        <input type="text" ref={textBoxRef} />
        <button onClick={()=>handleClick()}>Get Value</button>
        <button onClick={()=>handleNewClick()}>test Value</button>

        <div>
            <ul>
                {
                    toDoList.map((item,index)=>{
                        return (<li key={index} >{item}</li>)
                    })
                }
            </ul>
        </div>
        
        
        </>
    )
}