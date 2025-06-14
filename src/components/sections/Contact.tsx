import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const ContactForm = () => {
  // Step 1: State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({
    status: "",
    message: "",
  });

  const playPing = () => {
    const audio = new Audio("/sounds/sound1.mp3");
    audio.volume = 0.5; // make it soft
    audio.play();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setNotification({
          status: "success",
          message: "Message sent successfully!",
        });
        playPing();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setNotification({
          status: "error",
          message: data.message || "Failed to send message.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setNotification({
        status: "error",
        message: "Something went wrong.",
      });
    }

    setTimeout(() => {
      setNotification({ status: "", message: "" });
    }, 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit} // Step 3: attach here
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex-1 bg-[#0d0d0d] rounded-xl p-8 space-y-6 w-full max-w-xl"
    >
      {notification.status && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-4
      ${
        notification.status === "success"
          ? "bg-green-600 text-white w-fit"
          : "bg-red-600 text-white w-fit"
      }`}
        >
          {notification.status === "success" ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <p className="font-semibold text-sm">{notification.message}</p>
        </motion.div>
      )}

      <div className="flex flex-col">
        <label htmlFor="name" className="text-white text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="Your full name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-white text-sm mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="Tell us what you need..."
          required
        ></textarea>
      </div>
      <div className="w-full flexcent">
        <button
          type="submit"
          className="group flex items-center gap-2 bg-primary hover:bg-secondary transition-all text-black font-semibold py-2 px-6 rounded-md outline-none hover:scale-105 hover:shadow-2xl duration-200"
        >
          <p className="transition-all duration-500 text-sm">Send Message</p>
          <Icon
            icon="line-md:arrow-right"
            className="-rotate-45 group-hover:-rotate-0 text-lg transition-all duration-500"
          />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
