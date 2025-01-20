import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

interface ProductProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "products"] {
    _id
  }`);

  return products.map((product: { _id: string }) => ({
    id: product._id,
  }));
}

const ProductPage = async ({ params }: ProductProps) => {
  const { id } = params;

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
    { id }
  );

  if (!product) {
    notFound(); // Show a 404 page if the product is not found
  }

  return (
    <div className="p-6 flex gap-10">
        <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} className="w-100  my-4" />
      </div>
      <div className="p-10">
      <p className="text-xl text-orange-700 ">Price: ${product.price}</p>
     
      <p className="text-lg text-gray-500">Category: {product.category?.title || "Unknown"}</p>
      
      <p className="text-lg text-gray-500">Tags: {product.tags}</p>
      
      <p className="text-lg text-gray-500">Inventory: {product.inventory}</p>
      
      <p className="my-4">{product.description}</p>
      <div className="badge">{product.badge}</div>
      </div>
    </div>
  );
};

export default ProductPage;
