const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();

// Порт, который будет использоваться сервером
const PORT = process.env.PORT || 3000;

app.use(cors())
// Указание Express использовать папку 'dist' для статических файлов (папка, сгенерированная Vite)
app.use(express.static(path.join(__dirname, 'dist')));

// Основной маршрут для вашего приложения
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});