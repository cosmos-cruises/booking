import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ForeverMarsApp } from './app';

export const ForeverMarsAppBasic = () => (
  <MemoryRouter>
    <ForeverMarsApp />
  </MemoryRouter>
);
