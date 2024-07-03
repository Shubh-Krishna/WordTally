import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let al = "alive";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm title="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
