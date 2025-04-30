import { NextApiRequest, NextApiResponse } from 'next';

const mockProducts = [
  { id: '1', name: 'Product One', description: 'This is the first product.' },
  { id: '2', name: 'Product Two', description: 'This is the second product.' },
  { id: '3', name: 'Product Three', description: 'This is the third product.' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const product = mockProducts.find((p) => p.id === id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
