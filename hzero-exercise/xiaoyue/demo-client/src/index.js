import { AppContainer } from "react-hot-loader";
import React, { Component } from "react";
import ReactDom from 'react-dom';
import App from "./App";

import './main.css';

ReactDom.render(
  <App></App>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     const NextApp = require("./App").default;
//     render(
//       <AppContainer>
//         <NextApp />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }