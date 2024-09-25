import { SnackbarProvider } from "notistack";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/slice/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localUser = localStorage.getItem("newUser");
    const user = JSON.parse(localUser);
    if (user) {
      dispatch(setUser(user));
    }
  }, []);

  return (
    <SnackbarProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
