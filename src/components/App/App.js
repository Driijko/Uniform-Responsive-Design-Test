import './App.css';

import UniformResponse from "../UniformResponse/UniformResponse";
import Test from "../Pages/Test";
function App() {

  return (
    <div className="App">
      <UniformResponse>
        <Test />
        <Test />
      </UniformResponse>
    </div>
  );
}

export default App;
