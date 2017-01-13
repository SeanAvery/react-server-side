import React from 'react';
import { render } from 'react-dom';
import App form './index';

render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementByID('root'));
