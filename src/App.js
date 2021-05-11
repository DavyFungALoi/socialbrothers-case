import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogScreen from "../src/screens/BlogScreen";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Route path="/" component={BlogScreen} exact />
      </div>
    </Router>
  );
}

export default App;
