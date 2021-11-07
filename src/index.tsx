import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    queue: Model,
  },

  seeds(server){
    server.db.loadData({
      queues: [
        {
          id: 1,
          name: "João",
          petName: "Cher",
          position: 1,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          name: "Jaquelini",
          petName: "Belinha",
          position: 2,
          createdAt: new Date('2021-02-12 09:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/queue', () => {
      return this.schema.all('queue')
    })

    this.post('/queue', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('queue', data)
    })
  }
})

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);