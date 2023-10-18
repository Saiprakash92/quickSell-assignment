import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.ticketSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div>
      <Header />
      <Main />
    </div>
  ) : (
    console.error("Something went wrong")
  );
};

export default App;
