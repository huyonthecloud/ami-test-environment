const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend:5000';

app.get('/', (req, res) => {
    res.send(`
    <h1>Microservices Frontend</h1>
    <p><a href="/health">Health Check</a> | 
    <a href="/users">View Users</a></p>
  `);
});

app.get('/health', async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/health`);
        res.json({ frontend: 'OK', backend: response.data });
    } catch (error) {
        res.status(500).json({ frontend: 'OK', backend: 'DOWN' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend running on port ${PORT}`);
});