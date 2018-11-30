import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom'
import Index from '../Component/Index.jsx';
// import Intro from '../Component/Intro.jsx';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

const RouteConfig = (
   <HashRouter>
      <Route>
         <Route path='/' component={Index} />
         {/* <Route path='/intro' component={Intro} /> */}
      </Route>
   </HashRouter>
);
export default RouteConfig
