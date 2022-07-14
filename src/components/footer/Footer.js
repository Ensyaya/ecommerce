import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-gray-900 shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
            className="mr-3 h-8"
            alt="eCommerce logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            eCommerce
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="/#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/#" className="hover:underline">
          eCommerce™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
