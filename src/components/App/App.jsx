import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { MainContext } from '../../Context.jsx';
import { Details } from '../pages/Details/Details.jsx';

import './App.scss';

export const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<MainContext/>}/>
          <Route path="/:id" element={<Details/>}/>
        </Routes>
      </Router>
  )

}