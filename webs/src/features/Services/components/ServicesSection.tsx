import React from 'react'
import img from '../../../assets/cs.png'


const ServicesSection = () => {
        const blogs = [
    {
      title: 'Noteworthy technology acquisitions 2021',
      desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      img,
      link: '#',
    },
    {
      title: 'Another Blog Post',
      desc: 'This is a placeholder for another interesting blog post. Stay tuned for more updates.',
      img,
      link: '#',
    },
  ]
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl  mb-4 text-gray-800 dark:text-white">
          Our Services
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h5 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600">
                  {item.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection