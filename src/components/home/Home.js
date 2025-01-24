import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/ko';
import React, {useState, useEffect, useRef} from 'react';
import "./Home.css";

import GetData from '../common/GetData';
import Toast from '../common/Toast';
import Chart from '../common/Chart';
import CustomList from '../common/CustomList';
import CustomCursor from "../common/CustomCursor";

const ScrollableDiv = styled.div`
 
  height: 88vh; 
  padding: 1rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;



// 데이터 전처리 및 불러오기 
let jsonData = require('../../data.json');

let table = jsonData.map(item => ({...item, 
  amount: Number(item.amount),
  timestamp: moment(item.timestamp).subtract(1,'month').format('YYYY-MM-DD hh:mm:ss') }))
            .sort((a, b) => a.timestamp > b.timestamp ? -1 : 1);

let all = table.slice(0,20);
let expense = table.filter(item=> item.amount<0).slice(0,10);
let income = table.filter(item=> item.amount>=0).slice(0,10);

export default function Home() {
  

  const [toggle, setToggle] = useState(6);
  const [check, setCheck] = useState(all) ;
  const [active, setActive] = useState('All');
  const [state, setState] = React.useState({
    open: true,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };


  // 날짜별 `amount` 평균 계산
  // 데이터를 필터링하여 날짜별로 `amount` 값을 모음
  const data = GetData({ jsonData, toggle });

  // tooltip
  const renderTooltip = (props) => {
    const { active, payload } = props;
    
    if (active && payload && payload.length) {      
      return (
        <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
          <p><strong>Date:</strong> {payload[0].payload.date}</p>
          <br/>
          {payload.map((entry, index) => (            
            <p key={index} style={{ color: entry.color }}>
            <strong>{entry.name}:</strong> {entry.value}
          </p>
          ))}
        </div>
      );
    }}



  return (
    <>

       <Toast
        open={open}
        handleClose={handleClose}
        vertical="bottom"
        horizontal="center"
        data={all}
      />
          
      <ScrollableDiv>
      <CustomCursor />
    
      <h1 style={{marginRight: 'auto', 
        fontFamily: "Genera SemiBold",
        marginLeft: '50px', marginTop: '5vh',fontSize:'25px'}}>Activity</h1>

      <div className="toggle-container" style={{  marginRight: 'auto', marginLeft: '45px', marginTop: '2.5vh'}}>
      <button
        className={`toggle-button ${toggle === 6 ? "toggle" : ""}`}
        onClick={() => setToggle(6)}
      >Week
      </button>
      <button
        className={`toggle-button ${toggle === 29 ? "toggle" : ""}`}
        onClick={() => setToggle(29)}
      >
        Month
      </button>           
      </div>
     

      <Chart data={data} renderTooltip={renderTooltip} />    
    
      <h1 style={{marginRight: 'auto', fontFamily: "Genera SemiBold", marginLeft: '5.8vh', marginTop: '5vh',fontSize:'25px'}}>Recent Transactions</h1>
        
      <div style={{marginLeft: '5.8vh', marginTop: '3vh', fontFamily: "Genera SemiBold"}}>
        <button onClick= {()=> {setCheck(all); setActive('All');}} className='category'
        style={{ color: active === 'All' ? '#1e0055':'rgb(146, 146, 146)' }} >All</button>
        <button onClick= {()=> {setCheck(expense); setActive('Expense')}}  className='category'
        style={{ color: active === 'Expense' ?'#1e0055':'rgb(146, 146, 146)'}} >Expense</button>
        <button onClick= {()=>{setCheck(income); setActive('Income')}} className='category'
        style={{ color: active === 'Income' ?'#1e0055':'rgb(146, 146, 146)' }}  >Income</button>
      </div>

      <CustomList check={check} />
     
    </ScrollableDiv>
    

     </>
  );
}
