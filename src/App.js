import logo from "./logo.svg";
import "./App.css";
import Head from "./Head";
import Body from "./Body";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
