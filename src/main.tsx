import { render } from 'preact';
import { App } from './app.js';

const appElement = document.getElementById('app');

if (appElement) {
  render(<App />, appElement);
}
