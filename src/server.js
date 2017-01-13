import express from 'express'
import { renderToString } from 'react-dom/server';

const server = express();

server.use('/assets', expres.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState}/>);

  res.send(template)
})
