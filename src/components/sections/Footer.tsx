import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Footer = () => {
  return (
    <section className="h-[98vh] mt-16 w-full flex items-center justify-center flex-col md:px-[80px] py-[70px] bg-[#181818] text-foreground">
      <div className="w-full grid lg:grid-cols-2 md:content-start relative h-full ">
        <div className="w-[50px] h-[50px] bg-foreground rounded-full"></div>
        <div className="w-full font-inter p-8">
          <div className="group flex items-center gap-2">
            {" "}
            <p className="group-hover:text-neutral-600 transition-all duration-500 text-[38px]">
              Let&apos;s Talk
            </p>
            <Icon
              icon="line-md:arrow-right"
              className="-rotate-45 group-hover:-rotate-0 text-5xl transition-all duration-500 group-hover:text-neutral-600"
            />
          </div>
          <div className="flex items-start justify-between my-8">
            <li className="list-none space-y-[10px]">
              {["Home", "Work", "About", "Contact"].map((item) => (
                <ul key={item} className="text-xl">
                  {item}
                </ul>
              ))}
            </li>
            <li className="list-none space-y-[10px]">
              {["LinkedIn", "Instargam"].map((item) => (
                <div
                  key={item}
                  className="text-xl flex items-center justify-between w-full group gap-30"
                >
                  <p className="group-hover:text-neutral-600">{item}</p>

                  <Icon
                    icon="line-md:arrow-right"
                    className="-rotate-45 group-hover:-rotate-0 text-xl transition-all duration-500 group-hover:text-neutral-600"
                  />
                </div>
              ))}
            </li>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between text-neutral-500 w-full">
        <div>
          <p>@2025 Silas</p>
          <p>The website runs on the internet and your smile</p>
        </div>
        <div>Failed to load weather data. Check console for error</div>
      </div>
    </section>
  );
};

export default Footer;
