import "./App.scss";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./constants/routing";
import AddStory from "./components/AddStory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: paths.SIGNIN,
    element: <SignIn />,
  },
  {
    path: paths.SIGNUP,
    element: <SignUp />,
  },
  {
    path: paths.ADDSTORY,
    element: <AddStory />,
  },
]);

function App() {
  return (
    <>
      {/* <Homepage /> */}
      {/*<SignUp />
      <SignIn />*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
