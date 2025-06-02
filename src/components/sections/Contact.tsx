import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const ContactForm = () => {
  // Step 1: State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert(data.message || "Failed to send message");
    }
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
          className="group flex items-center gap-2 bg-primary hover:bg-secondary transition-colors text-black font-semibold py-2 px-6 rounded-md outline-none"
        >
          <p className="transition-all duration-500 text-sm">Contact us</p>
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
