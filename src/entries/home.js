import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'
//import Playlist from './src/playlist/components/playlist'
//import data from '..//src/api.json'

const homeContainer = document.getElementById('home-container')
 
//const holaMundo = <h1>Hola Mundo!!!!!</h1>
render(<Home data={data} />, homeContainer)