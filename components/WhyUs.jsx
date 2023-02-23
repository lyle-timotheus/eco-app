import React from 'react';
import {
  IoIosStar,
  IoMdGift,
  IoMdHeart,
  IoMdShirt,
  IoMdHappy,
} from 'react-icons/io';

const data = [
  {
    icon: <IoIosStar className="text-rose-500 w-5 h-5" />,
    title: 'Muslin',
    text: 'A cotton fabric of plain weave',
  },
  {
    icon: <IoMdGift className="text-indigo-500 w-5 h-5" />,
    title: 'Flannel',
    text: 'A soft woven fabric, of fineness',
  },
  {
    icon: <IoMdHeart className="text-emerald-500 w-5 h-5" />,
    title: 'Bandana',
    text: 'Bibs made of absorbent material',
  },
  {
    icon: <IoMdShirt className="text-amber-500 w-5 h-5" />,
    title: 'Burp',
    text: 'Variety of burp cloths fabrics',
  },
  {
    icon: <IoMdHappy className="text-sky-500 w-5 h-5" />,
    title: 'Dummy',
    text: 'ribbon attached to the pacifier hook',
  },
];

const WhyUs = () => {
  console.log(data);
  const card = data.map((item) => {
    return (
      <a
        key={item.title}
        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        href="/accountant"
      >
        <span className="inline-block rounded-lg bg-gray-50 p-3">
          {item.icon}
        </span>

        <h2 className="mt-2 font-bold">{item.title}</h2>

        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          {item.text}
        </p>
      </a>
    );
  });
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Find your ideal
              <strong className="block font-extrabold text-purple-300">
                fabric products
              </strong>
            </h2>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
