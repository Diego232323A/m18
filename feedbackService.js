const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let feedbacks = [];

// Endpoint para agregar un comentario
app.post('/addFeedback', (req, res) => {
    const { reservationId, customerName, feedback } = req.body;
    if (!reservationId || !customerName || !feedback) {
        return res.status(400).send('Missing required fields');
    }
    feedbacks.push({ reservationId, customerName, feedback });
    res.status(201).send('Feedback added successfully');
});

// Endpoint para obtener todos los comentarios
app.get('/feedbacks', (req, res) => {
    res.status(200).json(feedbacks);
});

// Endpoint para obtener comentarios por ID de reserva
app.get('/feedbacks/:reservationId', (req, res) => {
    const { reservationId } = req.params;
    const reservationFeedbacks = feedbacks.filter(fb => fb.reservationId === reservationId);
    res.status(200).json(reservationFeedbacks);
});

app.listen(port, () => {
    console.log(`FeedbackService is running on port ${port}`);
});
