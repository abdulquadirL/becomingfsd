import cors from '/cors';
import express from '/express'
import swaggerUI from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc';
import petsRoutes from './pets/routes/pets.routes.js'

const port = 3000;
const app = express();

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pets API',
            version: '1.0.0'
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ]
    },
    apis: ['./pets/routes/*.js'],
}

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)

//Route
app.use('/pets', petsRoutes);

// Server Setup
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`[server]: Server running at https//:localhost:${port}`));
}

export default app;