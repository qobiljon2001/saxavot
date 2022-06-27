import React, { useState } from "react";
import { Login } from "./Pages/Login/Login";
import { Router } from "./Router";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div id="App">
      {isLoggedIn ? <Router /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}
