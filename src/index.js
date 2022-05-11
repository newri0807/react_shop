import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Data from './data.js';

//let store = createStore(()=>{ return [{id : 0, name : '멋진신발', quan : 2}]  })

// let 초기값 = [ 
//   {id : 0, name :'멋진신발', quan : 2},
//   {id : 1, name :'멋진신발2', quan : 1},
// ];


let 초기값 = [];



function reducer(state = 초기값, 액션) {   // redux 수정은 미리 index에서 선언해야됨 !




  if (액션.type === '항목추가') {

    let copy = [...state];
    let 몇번째있니 = copy.findIndex((a) => { return a.id === 액션.데이터.id });

    if (몇번째있니 >= 0) {      
      copy[몇번째있니].quan++
      return copy
    } else {
      copy.push(액션.데이터)
      return copy
    }
  } else if (액션.type === '수량증가') {

    // let copy = [...state];
    // copy[0].quan++;
    // return copy

    
    // dispatch하실 때 props.dispatch({ type: ‘수량증가’, 데이터: a.id })
    
    // 이렇게 보내셨는데 그러면 리듀서안에서 데이터를 꺼내쓸 때
    
    // 액션.데이터만 하면 보낸 데이터가 나오기 때문입니다 액션.데이터.id말고요  ⬇⬇⬇⬇
        
    let copy = [...state];
    let 같은값 = copy.findIndex((a) => { return a.id === 액션.데이터 });
    copy[같은값].quan++;
    return copy

  } else if (액션.type === '수량감소') {

    // let copy = [...state];
    // copy[0].quan--;
    // return copy

    //액션.데이터.id 가 0이면 id가 0인 상품을 state array에서 찾아서 quan++해주세요
    let copy = [...state];
    let 같은값 = copy.findIndex((a) => { return a.id === 액션.데이터 });
    copy[같은값].quan--;
    return copy


  }
  else if (액션.type === '상품삭제') {
    let copy = [...state];
    let copy2 = copy.filter((a) => { return a.id !== 액션.데이터 }
    );
    return copy2

  }


  else {
    return state
  }


}


let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === 'alert닫기') {
    return false
  } else {
    return state
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

