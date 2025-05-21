const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ estado: "Servidor Educaes funcionando correctamente." });
});

app.listen(PORT, () => {
  console.log(`Servidor Educaes escuchando en el puerto ${PORT}`);
});