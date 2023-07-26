import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ForeverMarsApp } from './app';

const root = document!.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <BrowserRouter>
    <ForeverMarsApp />
  </BrowserRouter>
);
