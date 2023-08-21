import logo from "./logo.svg";
import "./App.css";
import Head from "./Head";
import Body from "./Body";
import store from "./store";
import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import Watchpage from "./Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      }, {
        path: "watch",
        element:<Watchpage/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
