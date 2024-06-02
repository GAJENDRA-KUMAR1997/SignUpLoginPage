import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./Signup";
import Login from "./Login";
import Forget from "./Forget.js";
import Location from "./Location.js";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forget" element={<Forget />} />
          <Route exact path="/" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
