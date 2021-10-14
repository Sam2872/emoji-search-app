import React, { useState, useEffect}  from 'react'
import copy from 'copy-to-clipboard';
import "./Search.css"

function Search({items,setInput,Input}) {
 
    const [Data, setData] = useState([])

    useEffect(() => {
        const newItems = items.filter(item=>item.keywords.toLowerCase().includes(Input.toLowerCase())) 
        setData(newItems)
        // eslint-disable-next-line
    }, [Input])

    const handleChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }

    return (
        <div className= "Search">
            <form className="Search-input" >
             <input type="text" placeholder = "Type Something..." value={Input} onChange={handleChange} />
            </form>
            <div className ="emoji-container">
                    {Data.map((item,index)=>{
                        const {symbol,title}= item;
                        return(
                            <div key={index} className="emoji-card" onClick={()=>navigator.clipboard.writeText(symbol)}>
                                <span >{symbol}</span>
                                <p>{title}</p>
                            </div>
                        )
                    })}
            </div>
          
        </div>
    )
}

export default Search
