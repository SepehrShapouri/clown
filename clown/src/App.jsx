import { useState } from "react";
import "./App.css"
const App = () => {
  const [state,setState] = useState(false)
  return ( 
    <div className="wrapper">
      <button onClick={()=> setState(!state)}>خوشگل من کیه؟</button>
      {state ? <p>غزلههههه</p> : ""}
    </div>
   );
}
 
export default App;