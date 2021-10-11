import React,{useState} from 'react';
import './App.css';
import Search from './Search';
import EmojiList from './EmojiList.json'

function App() {

  const [Input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Search for your favourite emojis!</h1>
      <Search items ={EmojiList} Input={Input} setInput={setInput}/>
    </div>
  );
}

export default App;
