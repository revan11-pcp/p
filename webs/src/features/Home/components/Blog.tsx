import kontenerImg from '../../../assets/kontener.jpeg'
import pelabuhanImg from '../../../assets/pelabuhan.jpeg'
import truckImg from '../../../assets/truck.jpg'

const Blog = () => {
  const blogs = [
    {
      title: 'Solusi Logistik Terpadu untuk Bisnis Anda',
      desc: 'PCP Transport menyediakan layanan logistik end-to-end yang efisien, aman, dan terintegrasi untuk mendukung pertumbuhan bisnis Anda.',
      img: kontenerImg,
      link: '#',
    },
    {
      title: 'Jaringan Luas dan Armada Modern untuk Pengiriman Anda',
      desc: 'Dengan jaringan distribusi yang luas dan armada kendaraan yang terawat, kami siap mengantarkan barang Anda ke seluruh pelosok negeri dengan aman dan cepat.',
      img: truckImg,
      link: '#',
    },
    {
      title: 'Keamanan dan Keandalan Pengiriman Internasional',
      desc: 'Kami memastikan setiap pengiriman internasional memenuhi standar keamanan dan kepatuhan global, memberikan ketenangan pikiran bagi pelanggan kami.',
      img: pelabuhanImg,
      link: '#',
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl  mb-4 text-gray-800 dark:text-white">
          From Our Blog
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, stories, and updates from PCP
          Transport.
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

export default Blog
