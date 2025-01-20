

import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Ensure that the product ID is passed without additional quotes
    const product = await client.fetch(
      `*[_type == "products" && _id == $id][0] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category-> {
          _id,
          title
        },
        description,
        inventory,
        tags
      }`,
      { id } // Make sure the id is passed as is
    );

    // If product is not found, return 404 error
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Return the product data as JSON
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
