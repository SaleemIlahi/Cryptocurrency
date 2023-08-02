import Menubar from "./Components/Menubar/Menubar";
import Slider from "./Components/Slider/Slider";
import Piechart from "./Components/Piechart/Piechart";
import "./App.css";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <div className="left_cnt">
        <Menubar />
      </div>
      <div className="right_cnt">
        <Slider />
        <div className="rw-2">
          <Search />
          <Piechart />
        </div>
      </div>
    </div>
  );
}

export default App;
