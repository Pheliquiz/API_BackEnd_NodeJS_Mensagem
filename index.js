const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});


/* 
Lista de Endpoints da aplicação CRUD 
CRUD: Create, Read (single & All), Update e Delete
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens - Retorna uma mensagem pelo ID
- [POST] / mensagens - Cria uma nova mensagem
- [PUT] /mensagens{id} - Atualiza mensagens pelo ID
*/

const mensagens = ["Primeira mensagem", "Segunda mensagem"]

  // [GET] /mensagem - retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens.filter(Boolean));
})

// [GET] /mensagem - retorna mensagem pelo id
app.get('/mensagens/:id', (req, res) => {

  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  if (!mensagem){
    res.send("Mensagem não encontrada")
  }
  
  return;
  
  res.send(mensagem);
});

// [POST] / mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {

  const mensagem = req.body.mensagem;

  mensagens.push(mensagem);

  res.send(`Mensagem criada com sucesso. Mensagem: ${mensagem}`);

});

// [PUT] /mensagens{id} - Atualiza mensagens pelo ID
app.put('mensagens/:id', (req, res) => {
  const id = req.params.id

  const mensagem = req.body.mensagem

  mensagens[id] = mensagem;

  res.send(`Mensagem atualizada com sucesso: ${mensagem}`)
});

app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  delete mensagens[id]

  res.send('Mensagem removida com sucesso');

})
app.listen(port, function() {
    console.info(`Aplicação rodando em http://localhost:${port}`);
});