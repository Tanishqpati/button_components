import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HardCode from "./HardCode";
import AICode from "./AICode";
import GPT4ButtonPage from "./GPT4ButtonPage";
import March1Page from "./March1Page";
import March4Button from "./Components/March4Button/March4Button";
import March4ButtonPage from "./March4ButtonPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HardCode />}></Route>
          <Route exact path="/ai-code" element={<AICode />}></Route>
          <Route exact path="/gpt4-code" element={<GPT4ButtonPage />}></Route>
          <Route exact path="/march1-code" element={<March1Page />}></Route>
          <Route exact path="/march4-code" element={<March4ButtonPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
