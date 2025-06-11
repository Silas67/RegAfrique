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
import Link from "next/link";
import AchievementStat from "@/components/sections/Achievement";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import ContactForm from "@/components/sections/Contact";

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
      heading: "Risk Assessment & Compliance Audits",
      text: "Evaluate enterprise risks, conduct internal control reviews, and provide actionable audit reports.",
    },
    {
      icon: "famicons:earth-outline",
      heading: "AFCFTA Onboarding Support",
      text: "Strategic guidance on documentation, customs procedures, compliance tools, and regulatory registration for regional trade.",
    },
    {
      icon: "mdi:account-group",
      heading: "Training & Capacity Building",
      text: "Workshops for legal teams, compliance officers, and executive management.",
    },
  ];

  const companies = [
    { item: "African Continental Free Trade Area" },
    {
      item: "Nigerian Midstream and Downstream Petroleum Regulatory Authority",
    },
    { item: "Nigerian Communications Commission" },
    { item: "Nigerian Electricity Regulatory Commission" },
    { item: "Nigerian Export Promotion Council" },
    { item: "Nigeria Export Processing Zones Authority" },
    { item: "Nigerian Investment Promotion Commission" },
    { item: "Federal Inland Revenue Service" },
    { item: "National Consumer Credit Council" },
    { item: "Federal Ministry of Agriculture and Rural Development" },
    { item: "Federal Ministry of Industry, Trade and Investment" },
    { item: "Standards Organisation of Nigeria" },
    { item: "National Agency for Food and Drug Administration and Control" },
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
        className="w-full relative h-screen px-[30px] lg:px-[100px] overflow-hidden py-24"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image src={img3} alt="/" className="w-full h-full object-cover" />
          {/* Optional: Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Foreground Content */}
        <div className="flexbet lg:flex-row h-full w-full text-textcolor relative z-10 ">
          <div className="w-full lg:w-[70%]  ">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-2xl sm:text-4xl font-poppins font-black text-white leading-slug
               "
            >
              <span className="text-sm font-semibold pb-1">
                RegAfrique Consulting:
              </span>
              <br />
              Regulatory Intelligence for Africa’s{" "}
              <span className="text-secondary">Trade Revolution</span>
            </motion.h1>

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
        className="w-full flex flex-col items-center gap-8 py-24 px-8 lg:px-[100px] bg-[#101010]"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          <span className="text-secondary">About</span> RegAfrique
        </h2>
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
              <p className="text-neutral-400  max-w-4xl lg:text-lg leading-relaxed text-justify ">
                <span className="text-white"> RegAfrique Consulting</span> is a
                specialized consulting firm offering tailored solutions in
                <span className="text-white">
                  {" "}
                  Regulatory Guidance, Risk Assessment
                </span>
                , and <span className="text-white">Compliance Audits</span>,
                with a strong focus on license application and management for
                SMEs in Energy, Oil & Gas, Education & FMCG as well as enabling
                seamless onboarding into the{" "}
                <span className="text-white">
                  African Continental Free Trade Area (AfCFTA).
                </span>
              </p>
              <p className=" text-[#b2b2b2] pt-[8px] md:hidden lg:block text-justify">
                We generally provide support for organizations in aligning with
                national and regional compliance requirements to foster
                sustainable growth and cross-border trade efficiency.
              </p>
            </Copy>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className=" w-full py-24 flexcent flex-col lg:px-[100px] px-[30px] "
      >
        <Copy>
          {" "}
          <div className="w-full text-center">
            {" "}
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-neutral-400 lg:text-lg text-sm lg:max-w-3xl md:max-w-xl  leading-relaxed lg::mb-12 md:mb-6">
              We help organizations simplify regulatory frameworks across
              Nigeria and Africa, providing expert advisory in:
            </p>
          </div>
        </Copy>

        <div className="flexcent w-full scale-[0.95]">
          <div
            ref={main}
            className="grid md:grid-cols-2 gap-6 justify-center mt-10 px-4"
          >
            {services.map((item, id) => (
              <div
                key={id}
                className="w-full max-w-[400px] h-[250px] rounded-2xl bg-[#0d0d0d] dark:bg-[#202020] overflow-hidden flex flex-col items-center justify-center px-8 space-y-5 box"
              >
                <Icon icon={item.icon} className="text-3xl" />
                <div className="text-center space-y-1.5">
                  <h1 className="text-xl font-sans">{item.heading}</h1>
                  <p className="text-sm text-neutral-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8">
          {/* Heading & Intro */}
          <div>
            <ul className="list-disc pl-4">
              <li className="font-bold text-2xl">
                Regulatory Compliance Advisory
              </li>
            </ul>
            <p className="md:pl-10 text-sm text-neutral-400 mt-2 max-w-4xl">
              We provide seamless support in navigating Nigeria’s regulatory
              landscape with the following agencies among others:
            </p>
          </div>

          {/* Scrollable Grid of Companies */}
          <div className="relative">
            <div className="text-white mt-8 w-full flexcent animate-bounce opacity-55">
              Scroll down to see more{" "}
              <Icon icon="line-md:arrow-small-down" width="24" height="24" />
            </div>
            <div className="w-full relative scroll-area  py-8 overflow-x-hidden overflow-y-auto outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4 outline-none">
                {companies.map((item, id) => (
                  <div
                    key={id}
                    className="w-full bg-[#0d0d0d] p-4 rounded-2xl shadow-sm text-sm text-white"
                  >
                    {item.item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Why Us? */}
      <section className="w-full px-8 lg:px-[100px] py-12">
        <Copy>
          {" "}
          <div className="w-full text-center">
            {" "}
            <h2 className="text-3xl font-bold mb-4 text-white">
              Why <span className="text-secondary"> Choose Us</span>
            </h2>
          </div>
        </Copy>

        {/* Top: Image and Text Side by Side */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mt-10 px-4 flexcent">
          {/* Image Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex- flex justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  desc: "Deep legal and policy expertise in West African regulatory frameworks.",
                },
                {
                  desc: "Practical tools for compliance and onboarding",
                },
                {
                  desc: "Personalized advisory and scalable service packages",
                },
                {
                  desc: "Experience with manufacturing, petrochemical, and trade-intensive sectors",
                },
              ].map((item, id) => (
                <div
                  key={id}
                  className="w-[250px] h-[150px] rounded-2xl bg-[#0d0d0d] dark:bg-[#202020] text-white overflow-hidden flexcent flex-col  text-center px-3 space-y-3 shadow-lg"
                >
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Text Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-1 flex justify-center  flex-col"
          >
            <h1 className="text-2xl font-bold mb-2">Target Clients</h1>

            <ul className=" list-inside space-y-2 text-[14px] font-poppins text-foreground">
              {[
                "Manufacturers in Energy, Oil & Gas sectors",
                "Exporters & SMEs entering African markets",
                "Multinational companies with compliance obligations across jurisdictions",
                "Players in FMCG and logistics",
              ].map((item, id) => (
                <li key={id} className="flex gap-2 ">
                  <Icon icon="game-icons:target-shot" className="text-xl " />
                  <div className="flex-1 text-neutral-200">{item}</div>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block mt-6 text-neutral-400">
              We work closely with organizations that operate in highly
              regulated or cross-border sectors. These clients rely on us to
              simplify complex legal frameworks and ensure they remain
              audit-ready, always.
            </div>
          </motion.div>
        </div>

        {/* Ending */}
        <div className="w-full flexcent text-center py-5 flex-col">
          <Copy>
            <p className="md:text-lg max-w-2xl text-neutral-400 text-center mt-3">
              When you work with us, you&apos;re not just ticking boxes —
              you&apos;re protecting your vision. We handle the rules, so you
              can focus on the road ahead.
            </p>
          </Copy>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            {stats.map((stat, index) => (
              <AchievementStat key={index} {...stat} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="flex items-center gap-5 mt-4"
          >
            <Link
              href="#contact"
              className="button bg-primary text-white text-sm gap-2 hover:bg-secondary transition cursor-pointer px-4 py-2 rounded"
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
        className="w-full  py-24 px-8 lg:px-[100px] bg-[#101010]"
      >
        <Copy>
          {" "}
          <div className="w-full text-center">
            {" "}
            <h2 className="text-3xl font-bold mb-12 text-white">
              <span className="text-secondary">Contact</span> Us
            </h2>
            <p></p>
          </div>
        </Copy>

        <div className="w-full h-full max-w-7xl mx-auto  flex flex-col-reverse lg:flex-row lg:items-start items-center justify-between md:gap-10 gap-4 ">
          {/* Text Side */}
          <Copy>
            <div className="flex-1 flexbet flex-col h-full pb-6 pt-4 space-y-8">
              <div>
                <p className="text-2xl pt-2 font-sans hidden lg:block">
                  Your Growth Starts Here — Let’s
                  <span className="text-neutral-600"> simplify</span> your
                  regulatory journey, together.
                </p>
              </div>

              <div className="text-neutral-400 text-base font-poppins space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:office-building-marker-outline"
                    className="text-secondary text-xl"
                  />
                  <p className="flex">
                    1st Floor, Kebbi Hotel, Central Business District, Abuja,
                    Nigeria
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:email-outline"
                    className="text-secondary text-xl"
                  />
                  <a
                    href="mailto:regafrique@outlook.com"
                    className="text-neutral-300"
                  >
                    regafrique@outlook.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:phone-outline"
                    className="text-secondary text-xl"
                  />
                  <p>09088328894 &nbsp; | &nbsp; 08182177517</p>
                </div>

                <div className="flex items-start gap-3">
                  <Icon icon="mdi:web" className="text-secondary text-xl" />
                  <a
                    href="https://www.regafrique.com.ng"
                    target="_blank"
                    className="text-neutral-300"
                  >
                    www.regafrique.com.ng
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:linkedin"
                    className="text-secondary text-xl"
                  />
                  <a
                    href="https://www.linkedin.com/company/regafrique-consulting"
                    target="_blank"
                    className="text-neutral-300"
                  >
                    LinkedIn: regafrique-consulting
                  </a>
                </div>
              </div>
            </div>
          </Copy>

          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
