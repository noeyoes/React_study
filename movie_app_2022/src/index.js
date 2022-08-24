import React from 'react';
import ReactDom from 'react-dom';
import App from './App'; // App 컴포넌트 임포트하여 사용

ReactDom.render(
  <App />, document.getElementById('root') // 아이디가 'root'인 엘리먼트에 App 컴포넌트를 그린다고 생각
);