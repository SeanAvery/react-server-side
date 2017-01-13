import express from 'express'
import { renderToString } from 'react-dom/server';
import App from './app/index'
const server = express();

server.use('/assets', expres.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState}/>);

  res.send(template({
    body: appString,
    title: 'Hello world from da server',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8080);
console.log('server listening on 8000')
