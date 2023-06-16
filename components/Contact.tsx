/* eslint-disable react/button-has-type */
function Contact() {
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
      id="contact"
    >
      {/* <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        What&apos;s Next
      </p> */}
      <h2 className="font-titleFont text-5xl font-semibold text-textGreen">Get in Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        My inbox is always open, whether you have a question or just ant to say hi, i&apos;ll try my
        best to get back to you!
      </p>
      <a href="mailto:wceliz.dev@gmail.com">
        <button className="w-40 h-14 border  mt-6 font-titleFont text-sm tracking-wide rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
}

export default Contact;
