import Section from "../Section";

export default function SectionVideo() {
  return (
    <>
    <Section className="flex justify-center items-center">
        <iframe
            className="w-[275px] h-[493px] lg:w-[463px] lg:h-[823px]"
            src="https://www.youtube.com/embed/khiaHLxraDY"
            title="Ultra Mop 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </Section>
    </>
  );
}
