import emailjs from "@emailjs/browser";
import { useCallback, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { MdDone } from "react-icons/md";

export default function Contact() {
  const observer = useRef();

  const [Form, setForm] = useState({ name: "", email: "", message: "" });
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);
  const [NameError, setNameError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [MessageError, setMessageError] = useState(false);
  const [Viewing, setViewing] = useState(false);

  const contactSection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  });

  const handleChange = (event) => {
    setSuccess(false);
    setError(false);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    setForm({
      ...Form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let canSubmit = true;
    if (!Form.name || Form.name.length < 4 || Form.name.length > 50) {
      setNameError(true);
      canSubmit = false;
    }
    if (
      !Form.email ||
      !/\S+@\S+\.\S+/.test(Form.email) ||
      Form.email.length < 8 ||
      Form.email.length > 70
    ) {
      setEmailError(true);
      canSubmit = false;
    }
    if (!Form.message || Form.message.length < 3 || Form.message.length > 300) {
      setMessageError(true);
      canSubmit = false;
    }
    if (canSubmit) {
      setLoading(true);
      emailjs
        .send(
          "service_epgl4an",
          "template_2stmhxt",
          {
            sender_name: Form.name,
            sender_email: Form.email,
            received_message: Form.message,
          },
          "pNhmg35FWCTZH-B_I"
        )
        .then(
          (result) => {
            setLoading(false);
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            setError(true);
          }
        );
    }
  };

  return (
    <section
      id="contact-section"
      className="w-full bg-primary_dark shadow-2xl flex flex-col items-center justify-center pb-14 pt-24"
    >
      
      <div
        className={`w-full grid place-items-center max-w-[1480px] gap-8 px-5 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 bg-transparent text-gray-100 transition-all duration-1000 ${
          Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
        }`}
      >
        <div className="w-full max-w-3xl space-y-2">
      <h2 className="text-secondary">$ contact</h2>
          <h2
            ref={contactSection}
            className="text-2xl font-bold leading-tight lg:text-3xl"
          >
            Get in touch with me!
          </h2>
          <div className="text-gray-400 animation-delay">
            Let's discuss how we can collaborate.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-3xl space-y-6 ng-untouched ng-pristine ng-valid flex flex-col items-center mt-0 md:mt-20 pb-14`}
        >
          <div className="w-full">
            <input
              id="name"
              type="text"
              placeholder="Full name"
              name="name"
              value={Form.name}
              onChange={handleChange}
              disabled={Loading}
              className="w-full p-3 placeholder:text-white/40 outline-none text-sm border-b border-white bg-transparent"
            />
            <p
              className={`text-sm ${
                NameError ? "visible" : "invisible"
              } text-red-500`}
            >
              Your name is invalid.
            </p>
          </div>
          <div className="w-full">
            <input
              id="email"
              name="email"
              value={Form.email}
              onChange={handleChange}
              disabled={Loading}
              type="text"
              placeholder="E-mail address"
              className="w-full p-3 placeholder:text-white/40 outline-none text-sm border-b border-white bg-transparent"
            />
            <p
              className={`text-sm ${
                EmailError ? "visible" : "invisible"
              } text-red-500`}
            >
              Your Email is invalid.
            </p>
          </div>
          <div className="w-full pb-8 md:pb-14">
            <textarea
              id="message"
              name="message"
              value={Form.message}
              onChange={handleChange}
              disabled={Loading}
              rows="3"
              placeholder="Message"
              className="w-full p-3 placeholder:text-white/40 outline-none text-sm border-b border-white bg-transparent h-40 resize-none"
            />
            <p
              className={`text-sm ${
                MessageError ? "visible" : "invisible"
              } text-red-500`}
            >
              Your Message is invalid.
            </p>
          </div>
          <button
            type="submit"
            className={`w-44 px-3 py-2.5 text-xs tracking-wide rounded  text-primary_dark font-bold  ${
              Success && "bg-text"
            } ${Error && "bg-red-500"} ${
              !Loading && !Success && !Error ? "bg-secondary" : ""
            } flex items-center justify-center ${Loading && "bg-secondary"}`}
            disabled={Loading || Success || Error}
          >
            {!Loading && !Success && !Error ? <span>Send Message</span> : null}
            {Success && (
              <span className="flex gap-1 text-white">
                Sent
                <IconContext.Provider value={{ className: "w-5 h-5" }}>
                  <MdDone />
                </IconContext.Provider>
              </span>
            )}
            {Error && <span>Something went wrong :&#40;</span>}
            {Loading && (
              <span className="w-5 h-5 animate-spin border-2 border-white rounded-full border-t-zinc-500"></span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
