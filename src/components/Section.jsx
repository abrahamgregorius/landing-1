export default function Section(props) {
  return (
    <>
      <section class={`bg-white dark:bg-gray-900 ${props.className}`}>
        <div class="py-8 px-4 mx-auto max-w-screen-xl min-h-[25vh] text-center lg:py-16">
            {props.children}
        </div>
      </section>
    </>
  );
}
