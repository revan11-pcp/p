import img1 from '../../../assets/truck.jpg'
import img2 from '../../../assets/pelabuhan.jpeg'

const ServicesSection = () => {
  const images = [
    {
      title: 'FTL',
      desc: 'Throughout the country is our mission in providing cargo services with the best facilities and services.',
      img:img1
    },
    {
      title: 'FCL ',
      desc: 'Real-time shipment visibility with full monitoring support.',
      img:img2
    },
  ]
  console.log(img2)


  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-left">


        <div className="grid gap-8 md:grid-cols-2">
          {images.map((item, index) => (
            <a
              key={index}
              className="relative rounded-2xl overflow-hidden group shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white text-sm opacity-90 leading-relaxed">
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
