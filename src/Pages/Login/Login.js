import React from "react";
import "./Login.css";
import positionimg from "../../Assets/singin_up/position_img.png";
import { Button } from "@mui/material";

export function Login({ setIsLoggedIn }) {
  return (
    <div className="Login">
      <div className="sing_up">
        <form action="" id="form_sign_up">
          <p>Saxovat</p>
          <input type="text" placeholder="login" />
          <input type="password" placeholder="parol" />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Kirish
          </Button>
        </form>
      </div>
      <img id="position_img" src={positionimg} alt="" />
    </div>
  );
}
