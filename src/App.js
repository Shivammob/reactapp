import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "hooray!"));
  }, []);

  return (
    <>
      <Nav />
      <Main data={data} />
    </>
  );
}

export default App;
