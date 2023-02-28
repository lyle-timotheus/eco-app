import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const AlsoLikeTracker = ({
  product: { image, name, slug, price, details },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="h-full object-cover object-center lg:h-full"
            />
          </div>
          <div className="mt-4">
            <div>
              <h3 className="text-sm text-gray-700 text-center">{name}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AlsoLikeTracker;
