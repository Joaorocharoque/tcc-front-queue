import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


createServer({
  models: {
    sec: Model,
  },

  seeds(server){
    server.db.loadData({
      secs: [
        {
          id: 1,
          sec: "João Vitor",
          cpf: 3434343,
          email: "joao@gmail.com",
          password: "*******"
        },
        {
          id: 2,
          sec: "Jaquelini Rocha",
          cpf: 43344343,
          email: "jaquelini@gmail.com",
          password: "*******"
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/sec', () => {
      return this.schema.all('sec')
    })

    this.post('/sec', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('sec', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
  document.getElementById('root')
);