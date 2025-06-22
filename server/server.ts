import express from 'express';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { createMockMiddleware } from 'openapi-mock-express-middleware';
import apiSpec from './specifications/spec.json' assert { type: 'json' };

const app = express();
const port = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(
  '/api',
  createMockMiddleware({
    spec: apiSpec,
    options: {
      useExamples: true,
      validateRequest: false,
      validateResponse: false
    }
  })
);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSpec));

app.listen(port, () => {
  console.log(`✅ Mock API running at http://localhost:${port}/api`);
  console.log(`📘 Swagger UI at http://localhost:${port}/docs`);
});
