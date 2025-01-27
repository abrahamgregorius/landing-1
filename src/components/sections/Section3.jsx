import Section from "../Section";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";

export default function Section3() {
  return (
    <>
      <Section>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={img1}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={img10}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={img9}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={img5}
                      alt=""
                    />
                  </div>
                </div>
      </Section>
    </>
  );
}
