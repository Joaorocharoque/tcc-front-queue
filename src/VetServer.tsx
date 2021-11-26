import { createServer, Model } from 'miragejs';

createServer({
  models: {
    vet: Model,
  },

  seeds(server){
    server.db.loadData({
      vets: [
        {
          id: 1,
          vet: "João",
          crmv: 4354334,
          email: "joao@gmail.com",
          password: "*****",
        },
        {
          id: 2,
          vet: "Jaquelini",
          crmv: 4354334,
          email: "jaquelini@gmail.com",
          password: "*****",
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/vet', () => {
      return this.schema.all('vet')
    })

    this.post('/vet', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('vet', data)
    })
  }
})