import "./App.css";
import { connect } from "react-redux";
import Inc from "./components/Inc";
export const App = ({ count }) => {
  return (
    <div className="App">
      <h1>THIS IS REDUX EXAMPLE</h1>
      <h3>count from app.js:{count}</h3>
      <hr />
      <Inc />
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state,
});

export default connect(mapStateToProps)(App);
