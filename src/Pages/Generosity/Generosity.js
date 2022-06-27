import React from "react";
import "./Generosity.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

export function Generosity() {
  return (
    <div id="generosity-page">
      <div id="generosity-page-header">
        <p>
          "Саховат ва кўмак" умумхалқ ҳаракати доирасида кўрсатилган ёрдамлар
          рўйхати
        </p>
        <p>МАЪЛУМОТ</p>
      </div>

      <div id="generosity-page-table">
        <div id="generosity-page-table-header">
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
                  <span>Меҳнатга лаёқатли ишсизлар сони</span>
                  <input type="text" placeholder="" />
                </div>
              </th>
              <th id="table-header-top">
                <div>
                  <span>Телефон</span>
                  <input type="text" placeholder="" />
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
              <td>My Data 1</td>
              <td>My Data 1</td>
              <td>My Data 2</td>
              <td>My Data 3</td>
              <td>
                <i>Oybek Abdujabborov</i>
              </td>
              <td>My Data 3</td>
              <td>My Data 3</td>
              <td>My Data 3</td>
              <td>My Data 3</td>
              <td>My Data 3</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
