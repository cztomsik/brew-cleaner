import * as React from 'react'
import { Window } from 'node-webrender'
import { render } from 'node-webrender/lib/react'
import App from './App'

const w = new Window("Brew Cleaner 2000", 500, 700)

let Root = App

const renderRoot = () =>
  render(<Root />, w)

if ('hot' in module) {
  (module as any).hot.accept('./App', () => {
    Root = require('./App').default
    renderRoot()
  })
}

renderRoot()
