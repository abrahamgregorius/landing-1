import BigButton from "../BigButton";
import Section from "../Section";

export default function SectionHarga() {
  return (
    <>
      <Section>
        <div class="mb-8 text-xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400">
          <p className="text-xl lg:text-2xl">
            Harga Normal : <span className="line-through">Rp. 180.000</span>
          </p>
          <br />
          <p className="text-3xl lg:text-4xl">KHUSUS HARI INI HANYA</p>
          <p className="text-6xl lg:text-8xl text-red-400 font-bold">
            Rp. 49.000,-
          </p>
        </div>
        <BigButton>AMBIL PROMO HARI INI</BigButton>
      </Section>
    </>
  );
}
