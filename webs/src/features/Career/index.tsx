import HeroSection from "../../shared/components/HeroSection";
import services from "../../assets/services.jpg";

const Career = () => {
  const jobOpenings = [
    {
      title: "Spesialis Logistik",
      location: "Jakarta, Indonesia",
      description: "Mengelola dan mengoordinasikan seluruh siklus logistik, mulai dari pengadaan hingga pengiriman akhir untuk memastikan efisiensi dan kepuasan pelanggan.",
    },
    {
      title: "Manajer Gudang",
      location: "Surabaya, Indonesia",
      description: "Bertanggung jawab atas operasional gudang sehari-hari, termasuk penerimaan, penyimpanan, dan pengiriman barang, serta memimpin tim gudang.",
    },
    {
      title: "Staf Operasional Ekspor-Impor",
      location: "Medan, Indonesia",
      description: "Menangani dokumentasi dan prosedur kepabeanan untuk pengiriman internasional, memastikan semua peraturan terpenuhi.",
    },
    {
      title: "Full Stack Developer",
      location: "Bandung, Indonesia (Remote)",
      description: "Mengembangkan dan memelihara platform digital kami, berinovasi untuk memberikan solusi teknologi terdepan bagi pelanggan kami.",
    },
  ];

  return (
    <div>
      <HeroSection image={services} title="Karir" height="h-[50vh]" />
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bergabunglah dengan Tim Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami percaya bahwa sumber daya manusia adalah aset terbesar kami. Kami mencari individu yang bersemangat, berbakat, dan berdedikasi untuk tumbuh bersama kami dalam merevolusi industri logistik.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-inner text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Mengapa Bergabung dengan Kami?</h3>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Kami menawarkan lingkungan kerja yang dinamis dan mendukung, di mana setiap anggota tim didorong untuk berinovasi dan mengambil inisiatif. Anda akan menjadi bagian dari budaya yang menghargai kolaborasi, integritas, dan keunggulan. Kami menyediakan peluang pengembangan karir yang luas dan kompensasi yang kompetitif.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Lowongan Tersedia</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h4>
                <p className="text-gray-500 mb-3 font-medium">{job.location}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <p className="text-gray-600">Tidak menemukan posisi yang cocok? Kirimkan CV Anda ke <a href="mailto:hr@logistikjaya.co.id" className="text-blue-600 hover:underline">hr@logistikjaya.co.id</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;