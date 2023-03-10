import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">{details}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">R{price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
