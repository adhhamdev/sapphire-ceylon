import express from 'express';
import payload from 'payload';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));

// Initialize Payload
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here
  app.get('/api/gems', async (req, res) => {
    try {
      const gems = await payload.find({
        collection: 'gems',
        depth: 2,
      });
      res.json(gems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch gems' });
    }
  });

  app.get('/api/gems/featured', async (req, res) => {
    try {
      const gems = await payload.find({
        collection: 'gems',
        where: {
          featured: {
            equals: true,
          },
        },
        depth: 2,
      });
      res.json(gems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch featured gems' });
    }
  });

  app.get('/api/gems/category/:category', async (req, res) => {
    try {
      const { category } = req.params;
      const gems = await payload.find({
        collection: 'gems',
        where: {
          category: {
            equals: category,
          },
        },
        depth: 2,
      });
      res.json(gems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch gems by category' });
    }
  });

  const PORT = process.env.PORT || 3001;
  
  app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

start();