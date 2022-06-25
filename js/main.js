import * as COMPONENT_HEADER from "./components/header/header.component.js";

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

COMPONENT_HEADER.render();