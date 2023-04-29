const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username, secret: username, first_name: username },
            {
                headers: {
                    'private-key': '32079611-27ec-4172-9595-69f142ef8090',
                },
            }
        );
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001, () => {
    console.log('Servidor ouvindo a porta', 3001);
});
