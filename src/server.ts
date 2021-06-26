
import express from 'express';
const app = express();
app.get('/teste', (request, response) => {
  return response.send('Olá NLW');
});

app.post('/teste-post', (request, response) => {
  return response.send('Olá NLW - POST');
});

app.listen(3005, () => console.log('Server is running'));
