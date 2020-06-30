import React from "react";
import SignIn from "./components/SignIn";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";

function App() {
  const authedUser = useSelector((state) => state.authedUser);

  React.useEffect(() => {
    console.log("App: ", authedUser);
  }, [authedUser]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <SignIn />
      </div>
    </>
  );
}

export default App;
