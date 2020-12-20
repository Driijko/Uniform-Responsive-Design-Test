import {Switch, Route} from "react-router-dom";

import HomePage from "./Content/0 Pages/HomePage";
import Page1 from "./Content/0 Pages/Page1";
import PageTemplate from "./Content/0 Pages/PageTemplate";
import MusicPlayer from "./Content/4 Audio/MusicPlayer";

function App() {
  return (
    <div>
        <MusicPlayer />
        <Switch>
            <Route path="/page1" component={Page1} />
            <Route exact path="/" component={PageTemplate} />
        </Switch>
    </div>
  );
}

export default App;
