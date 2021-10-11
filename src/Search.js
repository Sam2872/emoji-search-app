import React, { useState }  from 'react'
import "./Search.css"

function Search({items,setInput,Input}) {
 
    const [Data, setData] = useState([])

    const handleChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newItems = items.filter(item=>item.keywords.toLowerCase().includes(Input.toLowerCase())) 
        setData(newItems)
    }

    return (
        <div className= "Search">
            <form className="Search-input" onSubmit={handleSubmit}>
            <input type="text" placeholder = "Type Something..." value={Input} onChange={handleChange} />
            <button type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className ="emoji-container">
                    {Data.map((item,index)=>{
                        const {symbol,title}= item;
                        return(
                            <div key={index} className="emoji-card">
                                <span>{symbol}</span>
                                <p>{title}</p>
                            </div>
                        )
                    })}
            </div>
          
        </div>
    )
}

export default Search
