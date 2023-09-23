//import About from './About';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';

function App() {
  const [Mode, setMode] = useState('light');  // whether dark mode is enabled or not

  const toggleMode = ()=> {
    if(Mode ==='light') {
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    }
    else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    }
  }


  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/>  */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <div className='container my-3'>

  <TextForm Heading="Enter the text to analyze below: " mode={Mode}/>
    {/* <About/> */}
    </div>
   </>
  );
}

export default App;




// props are properties here title and abouttext are props. The components can be used in any website.
//props can be objects also.  -Default Props-
// only one default export should be there.
// we make a component and pass props so that gets render in your component.
//  State belongs to a component.
// state gives output without reloading the page