import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;
app.use(cors());
app.get('/api', (req, res) => {
    res.json({ "message": "Welcome to the API" });
});
app.listen(PORT, () => {
    console.log("Server started on port %d", PORT);
});
import router from './projects.js';
app.use('/projects', router);
//# sourceMappingURL=index.js.map