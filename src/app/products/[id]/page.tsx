'use client';

import useSWR from 'swr';
import { useParams } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  // Add more fields if your product has them
}

const fetcher = (url: string): Promise<Product> =>
  fetch(url).then((res) => res.json());

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const { data: product, error } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
