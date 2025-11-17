import HeroSection from "../../shared/components/HeroSection";
import pelabuhan from "../../assets/pelabuhan.jpeg";

const Profile = () => {
  return (
    <div>
      <HeroSection image={pelabuhan} title="Tentang Kami" height="h-[50vh]" />
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Profil Perusahaan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami adalah perusahaan logistik terdepan yang berdedikasi untuk menyediakan solusi rantai pasok yang efisien, andal, dan inovatif. Dengan pengalaman bertahun-tahun, kami menghubungkan bisnis dengan pasar global melalui jaringan kami yang luas dan layanan terintegrasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Sejarah Kami</h3>
            <p className="text-gray-600 mb-4">
              Didirikan pada tahun 2005, perusahaan kami dimulai dengan visi untuk merevolusi industri logistik di Indonesia. Dari awal yang sederhana dengan beberapa truk, kami telah berkembang menjadi pemain utama dengan armada modern dan fasilitas canggih di seluruh negeri.
            </p>
            <p className="text-gray-600">
              Setiap tonggak sejarah kami ditandai oleh komitmen terhadap kepuasan pelanggan dan adaptasi terhadap teknologi terbaru, memastikan kami selalu selangkah lebih maju dalam memenuhi kebutuhan pasar yang dinamis.
            </p>
          </div>
          <div className="text-center">
            <img src={pelabuhan} alt="Sejarah Perusahaan" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Visi & Misi</h3>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Visi</h4>
                <p className="text-gray-600">Menjadi mitra logistik paling tepercaya dan inovatif di Asia Tenggara, yang memberdayakan pertumbuhan bisnis melalui keunggulan operasional dan layanan pelanggan yang superior.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">Misi</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan layanan logistik yang terintegrasi dan dapat diandalkan.</li>
                  <li>Mengadopsi teknologi terdepan untuk efisiensi dan transparansi.</li>
                  <li>Membangun tim yang kompeten dan bersemangat.</li>
                  <li>Berkontribusi pada pertumbuhan ekonomi yang berkelanjutan.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Nilai-Nilai Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <p><span className="font-semibold">Integritas:</span> Berbisnis dengan jujur dan transparan.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <p><span className="font-semibold">Keunggulan:</span> Selalu berusaha memberikan yang terbaik dalam setiap layanan.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <p><span className="font-semibold">Kolaborasi:</span> Bekerja sama sebagai satu tim untuk mencapai tujuan bersama.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <p><span className="font-semibold">Inovasi:</span> Terus mencari cara baru untuk meningkatkan layanan kami.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;