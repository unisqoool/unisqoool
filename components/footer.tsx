import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white text-black py-12 md:py-16 px-6 ms-1 lg:ms-6"
    >
      <div className="container mx-auto">
        {/* Desktop: 3 columns | Mobile: 2 columns with logo on right */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links - Always in first column */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mathematics"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Mathematics
                </Link>
              </li>
              <li>
                <Link
                  href="/coding"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Coding
                </Link>
              </li>
              <li>
                <Link
                  href="/english"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/science"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  href="/hindi"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Hindi
                </Link>
              </li>
              <li>
                <Link
                  href="/short-courses"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Short Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-usq-blue-black hover:text-usq-cerulean"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe4t8ZeXfAwjm1IXFKA_642i6w-2yHDY7Q9S0be5GhLyrKO4A/viewform?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-usq-red hover:text-usq-faded-red"
                >
                  Become a Tutor
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media + Our Policies - Combined in second column */}
          <div className="col-span-1">
            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://instagram.com/unisqoool"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/unisqoool"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/unisqoool"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Policies */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Policies</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-usq-blue-black hover:text-usq-cerulean"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info - Third column on desktop, right column on mobile */}
          <div className="col-span-2 lg:col-span-1 order-last">
            <Link href="/" className="flex justify-start w-30">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={150}
                height={85}
              />
            </Link>
            <ul className="space-y-2 mt-3">
              <li className="text-gray-600 mt-4">
                GSTIN:{" "}
                <a
                  href="https://services.gst.gov.in/services/searchtp"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-usq-blue-black font-bold hover:text-usq-cerulean"
                >
                  07AAXFD5225B1ZH
                </a>
              </li>
              <li className="text-gray-600">
                Legal Name:{" "}
                <span className="text-usq-blue-black font-bold">
                  DUS EDVENTURE TECH
                </span>
              </li>
              <li className="text-gray-600">
                Registered Address:{" "}
                <span className="text-usq-blue-black font-bold">
                  House no. 53, Block B2, <br />
                  Raghubir Nagar, New Delhi -110027
                </span>
              </li>
              <li className="text-gray-600">
                Email:{" "}
                <Link
                  href="mailto:info@unisqoool.com"
                  className="text-usq-blue-black font-bold hover:text-usq-cerulean"
                >
                  info@unisqoool.com
                </Link>
              </li>
              <li className="text-gray-600">
                Phone Number:{" "}
                <Link
                  href="tel:+919220376004"
                  className="text-usq-blue-black font-bold hover:text-usq-cerulean"
                >
                  +91 9220376004
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 border-t pt-8">
          ©{new Date().getFullYear()} UNisqoool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
