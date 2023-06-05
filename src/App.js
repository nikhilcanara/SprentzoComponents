import React from 'react';
// import './App.css';
import Headercomponent from './Components/Headercomponent';
import Cartpage from './Components/Cartpage';
// import start1 from "./Components/Cartpage/icons/cart.png";
import Registration from "./Components/Registrationpage";
import start1 from "./Components/Registrationpage/images/hand (1).png";

function App() {
  return (
    <div className="App">
      {/* <Cartpage
        title="Added To Cart"
        description="This product is now in your cart. You're a step closer to scoring!"
        fontColor="#ffffff"
        bgColor="#1EAB66"
        cardIcon={start1} /> */}
      {/* <Headercomponent/> */}
      <Registration
        title="Registration Failed"
        description="Seems like you're not quite in the game yet. Don't worry, we'll help you to get back on the field!"
        fontColor="#F1DB53"
        bgColor="#3763AE"
        cardIcon={start1} />
    </div>
  );
}

export default App;
