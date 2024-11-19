import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 md:py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/subjects"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Subjects
                </Link>
              </li>
              <li>
                <Link
                  href="/free-trial"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Free Trial
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-600 hover:text-gray-900"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  YouTube
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
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/data-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Data Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex justify-start w-30"
            >
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={150}
                height={85}
              />
            </Link>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email:{" "}
                <Link
                  href="mailto:contact@unisqoool.com"
                  className="hover:text-gray-900"
                >
                  contact@unisqoool.com
                </Link>
              </li>
              <li className="text-gray-600">
                Phone:{" "}
                <Link href="tel:+919876543210" className="hover:text-gray-900">
                  +91 98765 43210
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
