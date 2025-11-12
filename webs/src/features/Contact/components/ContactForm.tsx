import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const ContactForm = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Hubungi Kami
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Nama Lengkap *</Label>
            <TextInput
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap *"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Kontak *</Label>
            <TextInput
              id="phone"
              type="text"
              placeholder="Masukkan nomor telepon *"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="Please enter your email *"
              required
            />
          </div>

          <div>
            <Label htmlFor="need">Pilih Kebutuhan Anda *</Label>
            <Select id="need" required>
              <option value="">Pilih kebutuhan Anda</option>
              <option>Pengiriman Barang</option>
              <option>Kerja Sama Bisnis</option>
              <option>Layanan Pelanggan</option>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="message">Pesan *</Label>
            <Textarea
              id="message"
              placeholder="Message for me *"
              required
              rows={5}
            />
          </div>

          <div className="md:col-span-2 flex justify-start">
            <Button
              type="submit"
              className="bg-black text-white px-6"
            >
              KIRIM PESAN
            </Button>
          </div>
        </form>

        <div className="mt-10 text-sm text-gray-600 leading-relaxed">
          <p>
            <strong>PT. YAPINDO TRANSPORTAMA</strong> Jl. Pulo Gadung no. 26
            Kawasan Industri JIEP Jakarta Timur 13930 Tel. +62 21 5088 8585,
            +62 21 5088 8787
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:marketing@pcpexpress.com"
              className="text-black hover:underline"
            >
              marketing@pcpexpress.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
