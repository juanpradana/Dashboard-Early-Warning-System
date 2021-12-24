# CAPSTONE PROJECT @ KAMPUS MERDEKA X DICODING
# PENGEMBANG FRONT-END WEB DAN BACK-END

## Originally developed by:
- Aulia Rahman
- Muhammad Juan Pradana

## Dashboard-Early-Warning-System
It is a dashboard that displays photos at the location of PUMMA devices every 2 minutes, graphs of sea level and device temperatures, data in tables, and device locations.

## requirement
- node js
- git (optional)

## Installation
- ```git clone https://github.com/juanpradana/Dashboard-Early-Warning-System.git```
- ```npm install```
To develop, use ```npm run start-dev```
to produce, use ```npm run build```, production results can be seen in the ```dist``` directory

## Project Resource
- webpack (https://webpack.js.org/)
- jquery (https://jquery.com/)
- datatables (https://datatables.net/)
- plotly (https://plotly.com/)

## Problem
- if using http, service worker not support
- if using https, can't fetch cause mix content from http Rest API
