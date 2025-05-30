import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#181818] text-foreground py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-foreground rounded-full"></div>
            <h2 className="text-xl font-bold">Regafrique</h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Regulatory Intelligence for Africa’s Trade Revolution. Reach out to
            us for licensing, compliance, and regulatory strategy.
          </p>
          <div className="text-sm text-neutral-400">
            <p>
              Email:{" "}
              <a
                href="mailto:regafrique@outlook.com"
                className="hover:underline"
              >
                regafrique@outlook.com
              </a>
            </p>
            <p>Phone: 0908 832 8894, 0818 217 7517</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-neutral-300">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-secondary transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-neutral-300">
            {[
              {
                name: "LinkedIn",
                icon: "mdi:linkedin",
                url: "https://linkedin.com",
              },
              {
                name: "Instagram",
                icon: "mdi:instagram",
                url: "https://instagram.com",
              },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:text-secondary transition duration-300"
                >
                  <Icon icon={social.icon} className="text-xl" />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>&copy; 2025 Regafrique. All rights reserved.</p>
        <p>The website runs on the internet and your smile 😄</p>
      </div>
    </footer>
  );
};

export default Footer;
