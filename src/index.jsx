import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from 'routers/AppRouter';
import 'styles/reset.css';
import 'styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
