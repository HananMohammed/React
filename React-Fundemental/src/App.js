import logo from "./logo.svg";
import "./App.css";
import { Great } from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        { 
        // <Great name="hanan" heroName="M7md"/ >
        // <Great name="hanan2" heroName="M7md2">
        //     <p> This is Children prop</p>
        // </Great>
            <Great name="hanan3" heroName="M7md3" />
        // < Welcome  name="Clark" heroName="M7md"/ >
        // < Welcome  name="Diana" heroName="M7md"/ >
        // <Message />
        }

        <Counter />
    </div>
  );
}

export default App;
