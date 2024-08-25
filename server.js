// Импорт необходимых модулей
const express = require('express');
const cors = require('cors'); // Импортируем cors
const app = express();
const port = 5000; // Укажите порт вашего сервера

// Используем cors middleware
app.use(cors({
  origin: '*', // Разрешаем запросы с любого источника
  methods: ['GET', 'POST'], // Разрешаем только GET и POST запросы
}));

// Пример маршрута
app.get('/api/endpoint', (req, res) => {
  res.send('Hello from server!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
