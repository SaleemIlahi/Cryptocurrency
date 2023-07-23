import Menubar from "./Components/Menubar/Menubar";
import Slider from "./Components/Slider/Slider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left_cnt">
        <Menubar />
      </div>
      <div className="right_cnt">
        <Slider />
      </div>
    </div>
  );
}

export default App;
