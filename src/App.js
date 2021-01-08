// import logo from './logo.svg';
import './DoOverAboutMeApp.css';
import AboutMe from "./components/AboutMe";
function myFunc() {

  const handleClick=(event)=> {
    event.preventDefault();
    console.log("you clicked on a thing!");
  }

  const handleHover=(anotherEvent)=> {
  anotherEvent.preventDefault();
    console.log("you are hovering over a thing!");
  }
  return (
    <div>
      <AboutMe name="Lizzie Lizliz"/>
      {myFunc}

      <button onClick={handleClick}>Click me!</button>
      <h1 onMouseOver={handleHover}>Hover over me!</h1>
    </div>
    // <div className="DoOverAboutMeApp>
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default AboutMe;
