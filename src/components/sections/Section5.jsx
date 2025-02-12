import BigButton from "../BigButton";
import Section from "../Section";
import banner from "../../assets/banner.jpeg"

export default function Section5() {
  return (
    <>
      <Section>
        <div
          id="buy"
          class="mb-8 text-2xl space-y-5 font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          <p className="text-6xl font-bold">PROMO TERBATAS</p>
          <p>
            Khusus <span className="text-red-500">15 orang</span> pertama
          </p>

          <p className="text-4xl lg:text-6xl text-red-400 font-bold">
            Rp. 49.000,-
          </p>

          <br />

          <BigButton href="https://api.whatsapp.com/send/?phone=%2B6282163438039&text=KLAIM+PROMO+ULTRA+MOP&type=phone_number&app_absent=0">BELI SEKARANG</BigButton>
          <img src={banner} alt="" />
        </div>
      </Section>
    </>
  );
}
