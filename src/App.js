// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import ResutContainer from './components/ResultContainer'
import Searchbox from './components/Searchbox';

// this is a way of class component

// class App extends React.Component{
//   state={
//     headerText:"this is creat using a state",
//    };
//    render(){
//     return (
//       <div>
//         <Header/>
//         <h3>{this.state.headerText}</h3>
//         <button 
//         onClick={
//           ()=>{
//             // it is not changing directoly in our UI
//             // this.state.headerText="ok this is a button"
//             // using setState method to change our UI
//             this.setState({
//               headerText:"ohhhhh! this is magic happence"
//             })
//           console.log(this.state.headerText)
//           }
//         }>
//         search button
//         </button>
//       </div>
//     );
//    }
// }

function App() {
  const name=require("@rstacruz/startup-name-generator");
   const [data, setData]=useState(
   { heading:"Name it!",
    headerExpanded:true,
    suggesterdName:[],
  }
   );
   const changeHandler = (inputText) => {
    setData((prevData) => ({
        ...prevData,
        headerExpanded: inputText.length > 0 ? false : true,
        suggesterdName: inputText?name(inputText):[],
    }));
};

 
  return (
    <div>
      <Header data={data.heading}
              headerExpanded={data.headerExpanded}
      />
      {/* <button 
      onClick={clickHandler}>search button</button> */}

      <Searchbox onInputChange={changeHandler}/>

      <ResutContainer suggesterdNames={data.suggesterdName}/>
    </div>
  );
}

export default App;
