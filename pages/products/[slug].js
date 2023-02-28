import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { client, urlFor } from '../../lib/client';

const ProductList = ({ product, products, categories }) => {
  console.log(product);
  const router = useRouter();

  const { slug } = router.query;

  const filteredProducts = products.filter((product) => product.url === slug);

  const productCards = filteredProducts.map((product) => {
    const image = Array.isArray(product.image)
      ? product.image[0]
      : product.image;
    const imageUrl =
      image && image._type === 'image' && image.asset
        ? urlFor(image).url()
        : null;

    return (
      <div key={product.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          {imageUrl ? (
            <img
              alt={product.name}
              width={100}
              src={imageUrl}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/product/${product.slug.current}`}>
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.details}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">R{product.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-3xl font-extrabold sm:text-5xl text-center">
        <strong className="font-extrabold">
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </strong>
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
          slug {
              current
          }
      }
      `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const categoriesQuery = '*[_type == "category"]';

  const categories = await client.fetch(categoriesQuery);
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product, categories },
  };
};

export default ProductList;
