'use client';

import Image from "next/image"; 
import SampleButton from "@/components/SampleButton";
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to The Ice Cream Parlor</h1>
        
        {/* History Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our History</h2>
          <p className="text-gray-600">
            The Ice Cream Parlor was established in 1999. We started as a small family-owned business with a big passion for making
            delicious homemade ice creams. Over the years, we have grown into a beloved community spot, and we offer a variety of flavors 
            made with the finest local ingredients.
          </p>
        </section>
        
        {/* Interesting Facts */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Interesting Facts</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>We have 15 unique flavors!</li>
            <li>Our signature chocolate chip ice cream won a national award in 2019.</li>
            <li>We give children a free balloon on Sundays between 1 PM and 4 PM.</li>
            <li>If you can finish a basket of pistachio ice cream in 1.5 hours, we'll send you another one as a gift!</li>
          </ul>
        </section>
        
        {/* Location */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Physical location</h2>
          <p className="text-gray-600">📍 123 Ice Cream Street, Summer City, ON</p>
        </section>
        
        {/* Contact */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact information</h2>
          <p className="text-gray-600">📞 (123) 456-7890</p>
          <p className="text-gray-600">📧 contact@icecreamparlor.com</p>
        </section>
        
        {/* Social Media Links
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Social Media</h2>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" className="text-blue-600 hover:underline" target="_blank">
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </Link>
            <Link href="https://www.instagram.com" className="text-pink-600 hover:underline" target="_blank">
              <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
            </Link>
            <Link href="https://www.twitter.com" className="text-blue-400 hover:underline" target="_blank">
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
            </Link>
          </div>
        </section> */}
      </div>
    </div>
  );
}
