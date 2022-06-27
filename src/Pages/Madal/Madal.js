import React from 'react'
import "../Madal/Madal.css"
import { Button } from "@mui/material";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { Link } from "react-router-dom"




export function Madal() {
  return (
    <div id=''>
      <div id="modal">
        <div id='modal-bg-blue'>
          <div id='modal-main'>
            <h1>Muxtoj oila tog’risida ma’lumot</h1>
            <div id='modal-main-inside'>
              <div id='modal-left'>
              <div id='modal-left-top'>
                <div id='modal-left-dark'>
                  <span>Tuman:</span>
                  <p>Chortoq</p>
                </div>
                <div id='modal-left-light'>
                  <span>Sektor:</span>
                  <p>4-sektor</p>
                </div>
                <div id='modal-left-dark'>
                  <span>Toifa:</span>
                  <p>Chortoq</p>
                </div>
              </div>



              <div id='modal-left-bottom'>
                <div id='modal-left-dark'>
                  <span>MFY Nomi:</span>
                  <p>Guldirov</p>
                </div>
                <div id='modal-left-light'>
                  <span>Oila boshligi:</span>
                  <p>Kamil Axmedov Nailyevich</p>
                </div>
                <div id='modal-left-dark'>
                  <span>Oila boshlig'inig passporti:</span>
                  <p>AA 123218</p>
                </div>
                <div id='modal-left-light'>
                  <span>Oila a'zolari soni:</span>
                  <p>5 ta</p>
                </div>
                <div id='modal-left-dark'>
                  <span>Mehnatga layoqatli ishsizlar:</span>
                  <p>0 ta</p>
                </div>
                <div id='modal-left-light'>
                  <span>Bandligi ta'minlangan:</span>
                  <p>5 ta</p>
                </div>
              </div>
            </div>
            <div id='modal-right'>
              <div id='modal-right-top-text'>
                <span>Ko’rsatilgan yordamlar</span>
              </div>
              <div>
                <div id='modal-right-dark'>
                  <span>1</span>
                  <span>Hokimlik va sektorlar tomonidan ko’rsatilgan yordamlar</span>
                  <span>15.05.2022</span>
                  <button id='modal-right-upload-btn'>
                    <VerticalAlignBottomIcon fontSize="small" />
                    Yuklab olish
                  </button>
                </div>
                <div id='modal-right-light'>
                  <span>1</span>
                  <span>Hokimlik va sektorlar tomonidan ko’rsatilgan yordamlar</span>
                  <span>15.05.2022</span>
                  <button id='modal-right-upload-btn'>
                    <VerticalAlignBottomIcon fontSize="small" />
                    Yuklab olish
                  </button>
                </div>
                <div id='modal-right-dark'>
                  <span>1</span>
                  <span>Hokimlik va sektorlar tomonidan ko’rsatilgan yordamlar</span>
                  <span>15.05.2022</span>
                  <button id='modal-right-upload-btn'>
                    <VerticalAlignBottomIcon fontSize="small" />
                    Yuklab olish
                  </button>
                </div>
              </div>
              <div id='modal-right-bottom-btns'>
              <Link to="/employment">
              <button>
              &#8592;  
                    Ortga
                  </button>
              </Link>
                  <button>
                  Oilani ro’yxatdan chiqarish
                  </button>
              </div>
            </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Madal