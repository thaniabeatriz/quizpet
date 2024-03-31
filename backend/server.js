const express = require('express');
const app = express();
const { QuizController } = require('./controller/quiz.controller.js'); // Corrigido para importar como objeto

app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend funcionando!' });
});

app.post('/api/result', QuizController.quizPet);

app.listen(3001, () => {
  console.log('Backend rodando na porta 3001');
});
