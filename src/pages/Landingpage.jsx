import React from 'react'
import CategoryItem from './CategoryItem';
const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/image/img1.avif " },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/image/img1.webp " },
	{ href: "/shoes", name: "Shoes", imageUrl: "/image/img2.webp " },
	{ href: "/glasses", name: "Glasses", imageUrl: "/image/img3.webp " },
	{ href: "/jackets", name: "Jackets", imageUrl: "/image/img3.webp " },
	{ href: "/suits", name: "Suits", imageUrl: "/image/img3.webp " },
	{ href: "/bags", name: "Bags  ", imageUrl: "/image/img3.webp " },
];
const Landingpage = () => {
  return (
    <div className='relative mih-h-screen text-white overflow-hidden'>
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
    <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>		Explore Our Categories</h1>
    <p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
{categories.map((category)=>(
  <CategoryItem category={category}/>
))}
</div>
    </div>
      
    </div>
  )
}

export default Landingpage

