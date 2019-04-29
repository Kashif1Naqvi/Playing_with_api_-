import React from "react";
import Users from "./components/Users/Users";
import "./App.css";
import { payload } from "./commons/fakeData";

const App = () => (
  <div>
    <Users users={payload.users} />
  </div>
);

export default App;
