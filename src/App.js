import "./App.css";
import { increase, decrease } from "./components/Action";
import { connect } from "react-redux";
import Inco from "./components/Inc";
export const App = ({ count }) => {
  console.log(count);
  return (
    <div className="App">
      <h1>THIS IS REDUX EXAMPLE</h1>
      <h3>count from app.js:{count}</h3>
      <hr />
      <Inco />
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state,
});

export default connect(mapStateToProps)(App);
