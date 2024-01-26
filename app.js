import cors from '/cors';
import express from '/express'
import petsRoutes from './pets/routes/pets.routes.js'

const port = 3000;
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

//Route
app.use('/pets', petsRoutes);

// Server Setup
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`[server]: Server running at https//:localhost:${port}`));
}

export default app;