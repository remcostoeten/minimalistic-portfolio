import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    try {
      // Check if a user with the same email already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          email,
          password, // In a real application, hash the password before storing it.
          name,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: 'Method not allowed' });
  }
}
