"use client";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Copy from "@/hooks/Copy";
import Image from "next/image";
import img2 from "@/components/assets/Images/img2.jpg";
import useLenis from "@/hooks/useLenis";
import img3 from "@/components/assets/Images/img3.jpg";
import img6 from "@/components/assets/Images/img5.jpg";
import Link from "next/link";
import AchievementStat from "@/components/sections/Achievement";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  useLenis();
  const stats = [
    { target: 95, suffix: "%", label: "Client Satisfaction" },
    { target: 85, suffix: "%", label: "Efficiency Increase" },
    { target: 1000, suffix: "+", label: "Hours Saved" },
  ];

  const services = [
    {
      icon: "mdi:book-check",
      heading: "Regualatory Guidance",
      text: "Cut through the legal jargon. We help you understand what rules apply and how to follow them - so you never operate in the dark",
    },
    {
      icon: "mdi:shield-alert",
      heading: "Risk Assessment",
      text: "Stop compliance risks early. We scan your business for blind spots before regulators do, protecting your growth and reputation",
    },
    {
      icon: "mdi:file-search",
      heading: "Compliance Audits",
      text: "Stay ready, always. Our detailed audit ensure your processes and documents meet standards - before regulators come knocking.",
    },
    {
      icon: "garden:check-badge-fill-12",
      heading: "License Management",
      text: "Never miss a deadline. From new applications to renewals, we track and manage your licenses so you stay compliant year-round.",
    },
  ];
  const main = useRef(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box") as HTMLElement[];
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: main }
  );

  return (
    <div className="w-full relative flexcent flex-col overflow-hidden">
      <Header />
      {/* Hero */}
      <section
        id="/"
        className="w-full relative h-screen px-[30px] lg:px-[100px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image src={img3} alt="/" className="w-full h-full object-cover" />
          {/* Optional: Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Foreground Content */}
        <div className="flexbet lg:flex-row h-full w-full text-textcolor relative z-10 ">
          <div className="w-full lg:w-[70%] ">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-4xl sm:text-6xl font-poppins font-semibold text-white leading-[1.15]"
            >
              Lost in Regulations? You&apos;re{" "}
              <span className="text-secondary">Not Alone</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="pt-3 text-neutral-400 text-sm max-w-lg font-sans"
            >
              Business rules are complex. We make them simple — so you can grow
              with confidence.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              className="flex items-center gap-5 mt-4"
            >
              <div className="button bg-primary mt-[10px] text-white text-sm gap-2 hover:bg-secondary transition cursor-pointer px-4 py-2 rounded">
                Contant us Now
                <Icon
                  icon="line-md:arrow-up"
                  className="text-xl rotate-[50deg]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who? */}
      <section
        id="about"
        className="w-full flex flex-col items-center gap-8 py-12 px-8 lg:px-[100px] pt-20"
      >
        {/* Top: Image and Text Side by Side */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          {/* Image Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-full md:w-[400px] h-[300px] rounded-[10px] overflow-hidden"
          >
            <Image
              src={img2}
              alt="About us image"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </motion.div>

          {/* Text Block */}
          <div className="lg:flex-1 md:flex-1/2">
            <Copy>
              <h2 className="lg:text-4xl text-3xl font-bold font-sans pt-[8px] text-white">
                Meet Your Regulatory Ally
              </h2>
              <p className=" pt-[16px] text-[#b2b2b2]">
                Navigating Africa’s regulatory environment can be overwhelming —
                but you don’t have to do it alone. At Regafrique, we act as your
                trusted partner, helping you decode complex laws, avoid costly
                mistakes, and create systems that support long-term success.
              </p>
              <p className=" text-[#b2b2b2] pt-[16px] md:hidden lg:block">
                Whether you&apos;re launching a startup or scaling a
                multinational, our insights and tools are built for clarity,
                compliance, and confidence. With Regafrique by your side, you’re
                never in the dark — you’re always ahead.
              </p>
            </Copy>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className=" w-full py-20 flex-col lg:px-[100px] px-[30px]"
      >
        <Copy>
          {" "}
          <h1 className="lg:text-sm  text-secondary font-semibold font-sans text-xs">
            What We Do - And Why It Matters
          </h1>
          <p className="lg:text-3xl pt-2 text-xl w-full">
            Regulation is your launchpad, not your limit.{" "}
            <span className="text-neutral-600">
              We turn red tape into a runway
            </span>{" "}
            so your business can take off with clarity and confidence.
          </p>
        </Copy>

        <div className="flexcent w-full scale-[0.95]">
          <div
            ref={main}
            className="grid md:grid-cols-2 mt-10 space-x-6 space-y-6"
          >
            {services.map((item, id) => (
              <div
                className="lg:w-[400px] h-[250px] rounded-2xl bg-[#0d0d0d] overflow-hidden flexcent flex-col px-12 space-y-[20px] box"
                key={id}
              >
                <Icon icon={item.icon} className="text-xl" />
                <div className="text-center space-y-1.5">
                  <h1 className="text-xl font-sans">{item.heading}</h1>
                  <p className="text-sm text-neutral-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us? */}
      <section className="w-full px-8 lg:px-[100px] py-20 ">
        <Copy>
          <h1 className="text-sm  text-secondary font-semibold font-sans">
            Why Our Clients Breathe Easy
          </h1>
          <p className="text-xl pt-2">
            Because peace of mind is powerful - our clients sleep better knowing
            that
            <span className="text-neutral-600">
              {" "}
              compliance isn&apos;t a ticking bomb
            </span>
          </p>
        </Copy>

        {/* Top: Image and Text Side by Side */}
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-10 px-4">
          {/* Text Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-1 flex justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Reduced Legal Risks",
                  desc: "Avoid costly penalties and shutdowns by staying compliant.",
                },
                {
                  title: "Faster Market Access",
                  desc: "Cut through the red tape and enter new markets with ease.",
                },
                {
                  title: "Peace of Mind",
                  desc: "Focus on growth while we handle compliance.",
                },
                {
                  title: "Better Investor Trust",
                  desc: "Well-structured, compliant businesses attract serious investors.",
                },
              ].map((item, id) => (
                <div
                  key={id}
                  className="w-[250px] h-[150px] rounded-2xl bg-[#0d0d0d] text-white overflow-hidden flexcent flex-col  text-center px-3 space-y-3 shadow-lg"
                >
                  <h1 className="text-[12px] font-medium font-poppins">
                    {item.title}
                  </h1>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" w-full max-w-sm h-[300px] rounded-[10px] overflow-hidden"
          >
            <Image
              src={img6}
              alt="About us image"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Ending */}
        <div className="w-full flexcent text-center py-5 flex-col">
          <Copy>
            {" "}
            <p className="md:text-lg max-w-2xl font-sans text-neutral-400 text-center mt-3">
              When you work with , you&apos;re not just ticking boxes —
              you&apos;re protecting your vision. We handle the rules, so you
              can focus on the road ahead.
            </p>
          </Copy>

          <div className="grid grid-cols-3 gap-6 mt-4">
            {stats.map((stat, index) => (
              <AchievementStat key={index} {...stat} />
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="flex items-center gap-5 mt-4"
          >
            <Link
              href={"#contact"}
              className="button bg-primary  text-white text-sm gap-2 hover:bg-secondary transition cursor-pointer px-4 py-2 rounded"
            >
              Get Started
              <Icon
                icon="line-md:arrow-up"
                className="text-xl rotate-[50deg]"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/*Contact */}
      <section
        id="contact"
        className="w-full lg:h-[90vh] px-8 lg:px-[100px] mb-16"
      >
        <div className="w-full h-full max-w-7xl mx-auto  py-16 flex flex-col lg:flex-row lg:items-start items-center justify-between md:gap-10 gap-4 ">
          {/* Text Side */}
          <Copy>
            <div className="flex-1 flexbet flex-col h-full pb-12 pt-4">
              <div>
                <h1 className="text-sm  text-secondary font-semibold font-sans">
                  Get In Touch
                </h1>
                <p className="lg:text-3xl text-xl pt-2 font-sans">
                  Your Growth Starts Here - Let’s
                  <span className="text-neutral-600"> simplify</span> your
                  regulatory journey, together.
                </p>
              </div>
              <div className="hidden lg:block text-neutral-300 text-xl font-poppins">
                Email us at{" "}
                <a
                  href="mailto:regafrique@outlook.com"
                  className="text-neutral-600 "
                >
                  regafrique@outlook.com
                </a>{" "}
                or call <span className="text-white">09088328894</span>,{" "}
                <span className="text-white">08182177517</span>
              </div>
            </div>
          </Copy>

          {/* Form Side */}
          <motion.form
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
                className="px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Tell us what you need..."
                required
              ></textarea>
            </div>
            <div className="w-full flexcent">
              <button
                type="submit"
                className=" group flex items-center gap-2 bg-primary group-hover:bg-secondary transition-colors text-black font-semibold py-2 px-6 rounded-md "
              >
                {" "}
                <p className="transition-all duration-500 text-sm">
                  Contact us
                </p>
                <Icon
                  icon="line-md:arrow-right"
                  className="-rotate-45 group-hover:-rotate-0 text-lg transition-all duration-500"
                />
              </button>
            </div>
          </motion.form>

          <div className="lg:hidden block text-neutral-300 lg:text-xl font-poppins my-6">
            Email us at{" "}
            <a
              href="mailto:regafrique@outlook.com"
              className="text-neutral-600 "
            >
              regafrique@outlook.com
            </a>{" "}
            or call <span className="text-white">09088328894</span>,{" "}
            <span className="text-white">08182177517</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
