<<<<<<< HEAD
import React, { useState, useEffect}  from 'react'
import copy from 'copy-to-clipboard';
=======
import React, { useState }  from 'react'
>>>>>>> 24f4497c7d8e81f3ee45a62c3faa4a0352183bff
import "./Search.css"

function Search({items,setInput,Input}) {
 
    const [Data, setData] = useState([])

<<<<<<< HEAD
    useEffect(() => {
        const newItems = items.filter(item=>item.keywords.toLowerCase().includes(Input.toLowerCase())) 
        setData(newItems)
        // eslint-disable-next-line
    }, [Input])

=======
>>>>>>> 24f4497c7d8e81f3ee45a62c3faa4a0352183bff
    const handleChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }

<<<<<<< HEAD
    return (
        <div className= "Search">
            <form className="Search-input" >
             <input type="text" placeholder = "Type Something..." value={Input} onChange={handleChange} />
=======
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
>>>>>>> 24f4497c7d8e81f3ee45a62c3faa4a0352183bff
            </form>
            <div className ="emoji-container">
                    {Data.map((item,index)=>{
                        const {symbol,title}= item;
                        return(
<<<<<<< HEAD
                            <div key={index} className="emoji-card" onClick={()=>navigator.clipboard.writeText(symbol)}>
                                <span >{symbol}</span>
=======
                            <div key={index} className="emoji-card">
                                <span>{symbol}</span>
>>>>>>> 24f4497c7d8e81f3ee45a62c3faa4a0352183bff
                                <p>{title}</p>
                            </div>
                        )
                    })}
            </div>
          
        </div>
    )
}

export default Search
