import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 导入您的应用主组件
import './index.css'; // 导入样式文件

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
