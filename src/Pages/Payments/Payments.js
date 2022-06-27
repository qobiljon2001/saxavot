import React from "react";
import "./Payments.css";
import { Button } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Payments() {
  return (
    <div id="payments">
      <p>Тўлов қайдномалари рўйхати</p>
      <div id="payment">
        <p>Мавжуд маълумотларинг умумий сони:</p>
        <table id="table_payments"  border="1" >
          <tr>
            <th>№</th>
            <th>
              Туман(Шахар)<br></br>
              <select>
                <option value="">Барчаси</option>{" "}
                <option value="10">Нукус шаҳар</option>
                <option value="12">Амударё тумани</option>
                <option value="13">Беруний тумани</option>
                <option value="14">Қонликўл тумани</option>
                <option value="15">Қораўзак тумани</option>
                <option value="16">Кегейли тумани</option>
                <option value="17">Қўнғирот тумани</option>
                <option value="18">Муйноқ тумани</option>
                <option value="19">Нукус тумани</option>
                <option value="20">Тахтакўприк тумани</option>
                <option value="21">Тўрткўл тумани</option>
                <option value="22">Хўжайли тумани</option>
                <option value="23">Чимбой тумани</option>
                <option value="24">Шўманай тумани</option>
                <option value="25">Элликқалъа тумани</option>
                <option value="26">Бухоро шаҳар</option>
                <option value="27">Бухоро туман</option>
                <option value="28">Вобкент туман</option>
                <option value="29">Ғиждувон туман</option>
                <option value="30">Жондор туман</option>
                <option value="32">Когон туман</option>
                <option value="33">Олот туман</option>
                <option value="34">Пешку туман</option>
                <option value="35">Ромитан туман</option>
                <option value="36">Шофиркон туман</option>
                <option value="37">Қоракўл туман</option>
                <option value="38">Қоровулбозор туман</option>
                <option value="39">Самарқанд шаҳар</option>
                <option value="40">Оқдарё тумани</option>
                <option value="41">Булунғур тумани</option>
                <option value="42">Жомбой тумани</option>
                <option value="43">Каттақўрғон тумани</option>
                <option value="44">Каттақўрғон шаҳар</option>
                <option value="45">Қўшрабод тумани</option>
                <option value="46">Нарпай тумани</option>
                <option value="47">Нуробод тумани</option>
                <option value="48">Пайариқ тумани</option>
                <option value="49">Пастдарғом тумани</option>
                <option value="50">Пахтачи тумани</option>
                <option value="51">Самарқанд тумани</option>
                <option value="53">Тайлоқ тумани</option>
                <option value="54">Ургут тумани</option>
                <option value="55">Навоий шаҳар</option>
                <option value="56">Кармана тумани</option>
                <option value="57">Навбахор тумани</option>
                <option value="58">Нурота тумани</option>
                <option value="59">Хатирчи тумани</option>
                <option value="60">Қизилтепа тумани</option>
                <option value="61">Конимех тумани</option>
                <option value="62">Учқудуқ тумани</option>
                <option value="63">Зарафшон шаҳар</option>
                <option value="64">Томди тумани</option>
                <option value="65">Андижон шаҳар</option>
                <option value="66">Хонобод шаҳар</option>
                <option value="67">Андижон тумани</option>
                <option value="68">Асака тумани</option>
                <option value="69">Балиқчи тумани</option>
                <option value="71">Булоқбоши тумани</option>
                <option value="72">Жалолқудуқ тумани</option>
                <option value="73">Избоскан тумани</option>
                <option value="74">Улуғнор тумани</option>
                <option value="75">Қўрғонтепа тумани</option>
                <option value="76">Мархамат тумани</option>
                <option value="77">Олтинкўл тумани</option>
                <option value="78">Пахтаобод тумани</option>
                <option value="79">Ҳўжаобод тумани</option>
                <option value="80">Шахрихон тумани</option>
                <option value="82">Марғилон шаҳар</option>
                <option value="83">Фарғона шаҳар</option>
                <option value="84">Қувасой шаҳар</option>
                <option value="85">Қўқон шаҳар</option>
                <option value="86">Боғдод тумани</option>
                <option value="87">Бешариқ тумани</option>
                <option value="88">Бувайда тумани</option>
                <option value="89">Данғара тумани</option>
                <option value="90">Ёзёвон тумани</option>
                <option value="91">Олтиариқ тумани</option>
                <option value="92">Қўштепа тумани</option>
                <option value="93">Риштон тумани</option>
                <option value="94">Сўх тумани</option>
                <option value="95">Тошлоқ тумани</option>
                <option value="96">Учкўприк тумани</option>
                <option value="97">Фарғона тумани</option>
                <option value="98">Фурқат тумани</option>
                <option value="99">Ўзбекистон тумани</option>
                <option value="100">Қува тумани</option>
                <option value="101">Ангор тумани</option>
                <option value="102">Бойсун тумани</option>
                <option value="103">Денов тумани</option>
                <option value="104">Жарқўрғон тумани</option>
                <option value="105">Қизириқ тумани</option>
                <option value="106">Қумқўрғон тумани</option>
                <option value="107">Музработ тумани</option>
                <option value="108">Олтинсой тумани</option>
                <option value="109">Сариосиё тумани</option>
                <option value="110">Термиз тумани</option>
                <option value="111">Термиз шаҳар</option>
                <option value="112">Узун тумани</option>
                <option value="113">Шеробод тумани</option>
                <option value="114">Шўрчи тумани</option>
                <option value="115">Оқолтин тумани</option>
                <option value="116">Боёвут тумани</option>
                <option value="117">Гулистон тумани</option>
                <option value="118">Мирзаобод тумани</option>
                <option value="119">Сайхунобод тумани</option>
                <option value="120">Сирдарё тумани</option>
                <option value="121">Сардоба тумани</option>
                <option value="122">Ховос тумани</option>
                <option value="123">Гулистон шаҳар</option>
                <option value="124">Ширин шаҳар</option>
                <option value="126">Янгиер шаҳар</option>
                <option value="127">Урганч шаҳар</option>
                <option value="128">Боғот тумани</option>
                <option value="129">Гурлан тумани</option>
                <option value="131">Хива тумани</option>
                <option value="132">Хонқа тумани</option>
                <option value="133">Урганч тумани</option>
                <option value="134">Қўшкўпир тумани</option>
                <option value="135">Шовот тумани</option>
                <option value="136">Янгиариқ тумани</option>
                <option value="137">Янгибозор тумани</option>
                <option value="138">Ангрен шаҳар</option>
                <option value="139">Бекобод шаҳар</option>
                <option value="140">Олмалиқ шаҳар</option>
                <option value="141">Чирчиқ шаҳар</option>
                <option value="142">Бекобод тумани</option>
                <option value="143">Бўка тумани</option>
                <option value="144">Бўстонлиқ тумани</option>
                <option value="145">Қибрай тумани</option>
                <option value="146">Зангиота тумани</option>
                <option value="148">Қуйичирчиқ тумани</option>
                <option value="149">Оққўрғон тумани</option>
                <option value="150">Охонгарон тумани</option>
                <option value="151">Паркент тумани</option>
                <option value="152">Пскент тумани</option>
                <option value="153">Ўртачирчиқ тумани</option>
                <option value="154">Чиноз тумани</option>
                <option value="155">Юқоричирчиқ тумани</option>
                <option value="156">Янгийўл тумани</option>
                <option value="158">Қарши шаҳар</option>
                <option value="159">Ғузор тумани</option>
                <option value="160">Қарши тумани</option>
                <option value="161">Касби тумани</option>
                <option value="162">Косон тумани</option>
                <option value="163">Китоб тумани</option>
                <option value="164">Миришкор тумани</option>
                <option value="165">Муборак тумани</option>
                <option value="166">Нишон тумани</option>
                <option value="167">Чироқчи тумани</option>
                <option value="168">Шахрисабз тумани</option>
                <option value="170">Қамаши тумани</option>
                <option value="171">Дехқонобод тумани</option>
                <option value="172">Яккабоғ тумани</option>
                <option value="173">Жиззах шаҳар</option>
                <option value="174">Бахмал тумани</option>
                <option value="175">Дўстлик тумани</option>
                <option value="176">Ғаллаорол тумани</option>
                <option value="177">Ш.Рашидов тумани</option>
                <option value="178">Зарбдор тумани</option>
                <option value="179">Зафаробод тумани</option>
                <option value="180">Зомин тумани</option>
                <option value="181">Пахтакор тумани</option>
                <option value="182">Мирзачўл тумани</option>
                <option value="183">Фориш тумани</option>
                <option value="184">Янгиобод тумани</option>
                <option value="185">Наманган шаҳар</option>
                <option value="186">Мингбулоқ тумани</option>
                <option value="189">Поп тумани</option>
                <option value="190">Норин тумани</option>
                <option value="191">Тўрақўрғон тумани</option>
                <option value="192">Уйчи тумани</option>
                <option value="194">Чортоқ тумани</option>
                <option value="195">Чуст тумани</option>
                <option value="196">Янгиқўрғон тумани</option>
                <option value="198">Юнусобод тумани</option>
                <option value="199">Миробод тумани</option>
                <option value="200">Яккасарой тумани</option>
                <option value="201">Олмазор тумани</option>
                <option value="202">Бектемир тумани</option>
                <option value="203">Яшнобод тумани</option>
                <option value="204">Чилонзор тумани</option>
                <option value="205">Учтепа тумани</option>
                <option value="207">Мирзо Улуғбек тумани</option>
                <option value="208">Сергели тумани</option>
                <option value="209">Иштихон тумани</option>
                <option value="210">Когон шаҳар</option>
                <option value="211">Арнасой тумани</option>
                <option value="212">Шайхонтохур тумани</option>
                <option value="214">Наманган тумани</option>
                <option value="215">Учқўрғон тумани</option>
                <option value="217">Хива шаҳар</option>
                <option value="218"> Тахиатош</option>
                <option value="219">Шахрисабз шаҳар</option>
                <option value="220">Тошкент тумани</option>
                <option value="221">Янгийўл шаҳар</option>
                <option value="222">Оҳангарон шаҳар</option>
                <option value="223">Нурафшон шаҳар</option>
                <option value="1">Бўзатов тумани</option>
                <option value="3">Бандихон тумани</option>
                <option value="4">Тупроққалъа тумани</option>
                <option value="216">Косонсой тумани</option>
                <option value="130">Хазорасп тумани</option>
                <option value="2">Ғозғон шаҳри</option>
                <option value="225">Янгиҳаёт тумани</option>
                <option value="226">Давлатобод тумани</option>
                <option value="70">Бўстон тумани</option>
                <option value="8">Янги Наманган тумани</option>
              </select>
            </th>
            <th>
              Туман сектори<br></br>
              <select>
                <option> Барчаси</option>
                <option>1-сектор</option>
                <option>2-сектор</option>
                <option>3-сектор</option>
                <option>4-сектор</option>
              </select>
            </th>
            <th>Маҳалла          </th>
            <th>Тўлов қайдномаси рақами</th>
            <th>Тўлов қайдномаси (Ведимос)</th>
          </tr>
          <tr id="payment-list">
            <td>1</td>
            <td>Янгиқўрғон тумани</td>
            <td>3-сектор</td>
            <td>Ибрат маҳалласи</td>
            <td>21</td>
            <td><Button variant="contained"> <span><FileDownloadIcon fontSize=""/></span> Юклаб олиш</Button></td>

          </tr>
        </table>
        <div id="payment-list-numbers"> 
          <button><ArrowBackIosNewIcon fontSize=""/></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>...</button>
          <button>38</button>
          <button><NavigateNextIcon fontSize="small"/></button>

        </div>
      </div>
    </div>
  );
}
