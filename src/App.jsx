import "./App.css";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img
            className="img-fluid w-50"
            src="https://images.unsplash.com/photo-1508676794597-f461263a660d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80"
            alt="back"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
