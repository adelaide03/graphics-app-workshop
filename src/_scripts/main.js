// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

var chart = require('./_charts.js');
var L = require("leaflet");

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';