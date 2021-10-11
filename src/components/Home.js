import Header from "./Header";
import WordList from "./WordList";
import Papers from "./Papers";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/WordList">
            <WordList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Papers">
            <Papers />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
