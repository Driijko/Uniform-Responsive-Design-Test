import {Switch, Route} from "react-router-dom";

import HomePage from "./Content/Pages/HomePage";
import Page1 from "./Content/Pages/Page1";
import PageTemplate from "./Content/Pages/PageTemplate";

function App() {

  return (
    <div>
        <Switch>
            <Route path="/page1" component={Page1} />
            <Route exact path="/" component={PageTemplate} />
        </Switch>
    </div>
  );
}

export default App;
