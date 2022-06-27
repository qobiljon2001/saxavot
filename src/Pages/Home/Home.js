import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

export function Home() {
  const navigate = useNavigate();
  return (
    <div id="home-page">
      <div>
        <div id="home-card-info">
          <p>
            <b>"Темир дафтар"</b>
            <span>
              киритилган муҳтож оилалар рўйхати ва уларнинг даромад манбаини
              яратиш
            </span>
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/families");
            }}
          >
            Рўйхатга ўтиш
          </Button>
        </div>
        <div id="home-card-info">
          <p>
            <b>"Саховат ва кўмак"</b>
            <span>
              умумхалқ ҳаракати доирасида оилаларга кўрсатилган ёрдамлар рўйхати{" "}
              (10-июндан кейинги)
            </span>
          </p>
         <Link to="/generosity">
         <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/helps");
            }}
          >
            Рўйхатга ўтиш
          </Button>
         </Link>
        </div>
        <div id="home-card-info">
          <p>
            <span>Ишсиз фуқароларга ер ажратиш модули</span>
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/helps");
            }}
          >
            Тизимга ўтиш
          </Button>
        </div>
      </div>
    </div>
  );
}
