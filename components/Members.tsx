/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 3,
        name: 'Md Khalid Hasan',
        href: '#',
        identity: "Student, Preacher",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
]

export default function Members() {
    return (
        <div className="bg-white mt-24">
            <div className="lg:text-center">
                <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase"> team members </h2>
                <p className="mt-2 text-indigo-600 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                    We are a team, a family for preaching the Light and Truth
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                    accusamus quisquam.
                </p>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-lg text-gray-800">{product.name}</h3>
                            <p className="mt-1 font-small text-gray-500">{product.identity}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
