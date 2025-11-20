import { useState } from "react";

type TruckType = {
  name: string;
  capacityKg: number;
  volumeM3: number;
};

const truckOptions: TruckType[] = [
  { name: "CDE (Colt Diesel Engkel)", capacityKg: 2000, volumeM3: 12 },
  { name: "CDD (Colt Diesel Double)", capacityKg: 4000, volumeM3: 20 },
  { name: "Fuso", capacityKg: 8000, volumeM3: 35 },
  { name: "Tronton", capacityKg: 12000, volumeM3: 45 },
  { name: "Wingbox", capacityKg: 15000, volumeM3: 55 },
];

const FormRatesCalculator = () => {
  const [selectedTruck, setSelectedTruck] = useState<TruckType | null>(null);

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl border">

      <div className="mb-4">
        <label className="block mb-1 font-medium">Jenis Truk</label>
        <select
          className="w-full border rounded-lg p-2"
          onChange={(e) => {
            const truck = truckOptions.find(
              (t) => t.name === e.target.value
            );
            setSelectedTruck(truck || null);
          }}
        >
          <option value="">Pilih Jenis Truk</option>
          {truckOptions.map((truck) => (
            <option key={truck.name} value={truck.name}>
              {truck.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Kapasitas (Kg)</label>
          <input
            type="text"
            disabled
            value={selectedTruck?.capacityKg || ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Volume (m³)</label>
          <input
            type="text"
            disabled
            value={selectedTruck?.volumeM3 || ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Kota Asal</label>
        <input
          type="text"
          placeholder="Masukkan Kota Asal"
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Kota Tujuan</label>
        <input
          type="text"
          placeholder="Masukkan Kota Tujuan"
          className="w-full border rounded-lg p-2"
        />
      </div>

      <button className="bg-black hover:bg-gray-800 text-white w-full py-2 rounded-lg mt-2 font-semibold">
        Cek Harga Sewa
      </button>
    </div>
  );
};

export default FormRatesCalculator;
