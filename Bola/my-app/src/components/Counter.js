import { Component } from "react";
function Counter() {
    const [count, setCount] = useState(0);
  
    const handleUp = () => {
      setCount(count + 1);
    };
  
    const handleDoubleUp = () => {
      setCount(count + 10);
    };
  
    const handleReturn = () => {
      setCount(0);
    };

const handleHashtag = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setCount(randomNum);
  };

  const handleDoubleDown = () => {
    setCount(count - 10);
  };

  const handleDown = () => {
    setCount(count - 1);
  };
        
        return(
        <div>
        <h3>Count value is: {this.state.counter}</h3>
        <button onClick={handleUp}>Up</button>
        <button onClick={handleDoubleUp}>Double Up</button>
        <button onClick={handleReturn}>Return</button>
        <button onClick={handleHashtag}>Hashtag</button>
        <button onClick={handleDoubleDown}>Double Down</button>
        <button onClick={handleDown}>Down</button>
        </div>
        );
        
    }


export default Counter;