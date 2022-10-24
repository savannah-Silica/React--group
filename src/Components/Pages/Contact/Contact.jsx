import React from "react";
import { contact } from "../../../data";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="section bg-primary h-auto ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            <div className="w-9/12">
              <div className="flex flex-col ">
                <h2 className="section-title ">
                  Reach Out To Us
                </h2>
              </div>
              <br />
              {contact.map((item, index) => {
                const { icon, title, description } = item;
                return (
                  <div
                    className="flex flex-col lg:flex-row gap-x-4"
                    key={index}
                  >
                    <div className=" rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-body text-xl mb-1">{title}</h4>
                      <p className="text-accent font-normal ">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
