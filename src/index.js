const express = require('express');
const questionsRoutes = require('./api/routes/questions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/questions', questionsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
