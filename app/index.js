import 'raf/polyfill'
import React from 'react'
import { render } from 'react-dom'

import store from './store/configureStore'
import Root from './components/Root'
import './styles/tippy.compiled.global.css'
import './styles/main.global.scss'
// import { init } from './modules/dapi/init'

// init()

if (module.hot) module.hot.accept()

render(<Root store={store} />, document.getElementById('root'))
