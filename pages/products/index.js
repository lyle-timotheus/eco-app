import React from 'react';
import { useRouter } from 'next/router';
import { client, urlFor } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const products = ({ categories }) => {
  const router = useRouter();

  const categoryCard = (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-none">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-center">
            Collections
          </h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 gap-y-6 lg:space-y-0">
            {categories.map((item) => (
              <div key={item.name} className="group relative">
                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  {item.image && Array.isArray(item.image) ? (
                    item.image.map((img) => (
                      <img
                        alt={item.name}
                        width={50}
                        key={img._key}
                        src={urlFor(img).url()}
                        className="h-full w-full object-cover object-center"
                      />
                    ))
                  ) : (
                    <img
                      alt={item.name}
                      src={urlFor(item.image).url()}
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`/products/${item.slug.current}`}>
                    <span className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{categoryCard}</div>;
};

export const getStaticProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const categoriesQuery = '*[_type == "category"]';
  const categories = await client.fetch(categoriesQuery);

  return {
    props: { products, categories },
  };
};

export default products;
