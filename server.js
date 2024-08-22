const express = require('express');
const cors = require('cors');
const app = express();

// Разрешите все домены или укажите конкретные домены
app.use(cors({
  origin: '*', // Замените '*' на ваш конкретный домен, если необходимо
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// Настройка маршрутов и статических файлов
app.get('/media/templates/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'media', req.params.filename));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
