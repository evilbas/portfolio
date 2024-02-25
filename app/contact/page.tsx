import { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";

const ContactsPage = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-2">Contacts</h1>

      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-blue-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Me!</h1>

              <p className="text-gray-300">
                Click the button below to send me an email
              </p>

              <div className="flex justify-center mt-6">
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="mailto:asin@gmail.com"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                  >
                    Send Email
                  </a>
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mx-auto">
                <a
                  target="_blank"
                  className="hover:text-cyan-100"
                  href="https://www.linkedin.com/in/abdoulaye-ba"
                >
                  <FaLinkedin size={"4rem"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const metadata: Metadata = {
  title: "Asin Portfolio - Contacts",
  description: "Contact me to know more about my work.",
};

export default ContactsPage;
