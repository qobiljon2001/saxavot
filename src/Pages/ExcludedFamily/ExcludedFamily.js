import React from 'react'
import "./ExcludedFamily.css";
import { Button } from "@mui/material";
import {Link} from "react-router-dom";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";




export function ExcludedFamily() {
  return (
    <div id='excluded-family'>
      <div id='excluded-family-header'>
        <p>"Темир дафтар"га киритилган муҳтож оилалар тўғрисида </p>
        <p>МАЪЛУМОТ</p>
      </div>
      <div id='excluded-family-page-table'>
        <div id='excluded-family-page-header'>
        <div>
            <Button variant="contained" color="primary">
              Муҳтож оилалар рўйхати
            </Button>
            
            <Button variant="contained" color="success" id='ex-family-sec-btn'>
              <Link to="/families" >
              Бандлиги таъминланган оилалар рўйхати
              </Link>
            </Button>
            
            <Link to="/ExcludedFamily" id="ex-family">
            <Button variant="contained" color="warning">
              Муҳтож оилалар рўйхатидан чиқарилганлар
            </Button>
            </Link>
          </div>

          <Button variant="contained" color="success">
            <VerticalAlignBottomIcon fontSize="small" />
            Excel шаклида юклаш
          </Button>
        </div>
        <table id="families-table">
          <thead>
            <tr>
              <th>№</th>
              <th id="table-header-top">
                <div>
                  <span>Худуд</span>
                  <select name="" id="">
                    <option value="">Барчаси</option>
                    <option value="">Наманган</option>
                  </select>
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Сектор</span>
                  <select name="" id="">
                    <option value="">Барчаси</option>
                    <option value="">1-Сектор</option>
                    <option value="">2-Сектор</option>
                    <option value="">3-Сектор</option>
                    <option value="">4-Сектор</option>
                  </select>
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Туман</span>
                  <select name="" id="">
                    <option value="">Барчаси</option>
                    <option value="">Наманган шаҳар</option>
                    <option value="">Мингбулоқ тумани</option>
                    <option value="">Поп тумани</option>
                    <option value="">Норин тумани</option>
                    <option value="">Тўрақўрғон тумани</option>
                    <option value="">Уйчи тумани</option>
                    <option value="">Чортоқ тумани</option>
                    <option value="">Чуст тумани</option>
                    <option value="">Янгиқўрғон тумани</option>
                    <option value="">Учқўрғон тумани</option>
                    <option value="">Косонсой тумани</option>
                    <option value="">Давлатобод тумани</option>
                    <option value="">Янги Наманган тумани</option>
                  </select>
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Сектор</span>
                  <select name="" id="">
                    <option value="">Барчаси</option>
                    <option value="">1-Сектор</option>
                    <option value="">2-Сектор</option>
                    <option value="">3-Сектор</option>
                    <option value="">4-Сектор</option>
                    <option value="">5-Сектор</option>
                    <option value="">6-Сектор</option>
                  </select>
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Оила бошлиғи Ф.И.Ш</span>
                  <input type="text" placeholder="Ф.И.Ш" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Оила бошлиғи Паспорт</span>
                  <input type="text" placeholder="AA1234567" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Оила аъзолари сони</span>
                  <input type="text" placeholder="" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Қарор рақами</span>
                  <input type="text" placeholder="" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Қарор санаси</span>
                  <input type="text" placeholder="" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Қарор</span>
                </div>
              </th>
              <th id="table-header-top">
                <Button variant="contained" color="primary">
                  Излаш
                </Button>
              </th>
            </tr>
          </thead>

          <tbody id="families-table-tbody">
            <tr>
              <td>1</td>
              <td>Наманган вилояти</td>
              <td>1 -сектор</td>
              <td>Поп тумани</td>
              <td>3-сектор</td>
              <td>
                <Link to="/madal">
                <i>Ali Aliyev Aliyevich</i>
                </Link>
              </td>
              <td>AB2959923</td>
              <td>5</td>
              <td>VI-40-51-6-84-K/21</td>
              <td>02.12.2021</td>
              <td>My Data 3</td>
              <td></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
