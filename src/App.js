import Menubar from "./Components/Menubar/Menubar";
import Slider from "./Components/Slider/Slider";
import Piechart from "./Components/Piechart/Piechart";
import Table from "./Components/Table/Table";
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
          <div className="rw-2-l">
            <Search />
            <Table />
          </div>
          <div className="rw-2-r">
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
