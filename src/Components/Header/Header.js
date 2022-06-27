import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export function Header() {
  return (
    <header id="header">
      <div id="header-logo">
        <figure>
          <img src="" alt="" />
        </figure>
        <Link to="">NAMANGAN VILOYATI IQTISODIY TARAQQIYOT <br /> VA KAMBAG’ALLIKNI
          QISQARTIRISH BOSH BOSHQARMASI</Link>
     

        <Link to="">Ҳисоботлар</Link>
        <Link to="/payments">Тўлов қайдномалари (ведомость)</Link>


      </div>

      <div id="header-user">
        <Link to="/videomanual"><span><NotStartedIcon/></span> Видео қўлланма</Link>
        <Link to="/kulanma"><span><PriorityHighIcon/></span>  Қўлланма</Link>
        <Link to=""> Наманган вилояти ҳокими Ш.Абдуразаков</Link>


      </div>
    </header>
  );
}
