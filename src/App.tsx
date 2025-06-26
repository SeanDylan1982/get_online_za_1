import React from 'react';
import {
  MapPin,
  Globe,
  Users,
  Star,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Heart,
  Handshake
} from 'lucide-react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import BackToTopButton from "@/components/BackToTopButton";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Clock, ThumbsUp } from "lucide-react";
import { useState } from "react";

const images = [
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery1.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery1-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery2.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery2-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery3.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery3-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery4.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery4-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery5.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery5-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery6.png",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery6-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery7.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery7-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery8.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery8-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery9.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery9-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery10.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery10-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery11.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery11-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery12.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery12-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery13.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery13-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery14.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery14-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery15.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery15-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery16.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery16-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery17.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery17-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery18.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery18-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery19.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery19-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery20.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery20-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery21.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery21-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery22.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery22-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery23.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery23-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery24.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery24-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery25.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery25-1.png",
  },
  {
    original:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery26.webp",
    thumbnail:
      "https://raw.githubusercontent.com/SeanDylan1982/get_online_za_1/refs/heads/main/public/img/gallery26-1.png",
  },
];



function App() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      business: "",
      phone: "",
      email: "",
      package: "",
      message: "",
    });
  };
    
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    package: "",
    message: "",
  });
  
  return (
    <div id="home" className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex items-center justify-center overflow-hidden"
      >
        {/* Background image overlay */}
        <img
          src="/img/hero_background.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
        />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Your Business Deserves to be{" "}
            <span className="text-blue-600">Found</span>
          </h1>
          <br></br>
          <p className="mt-6 text-lg sm:text-xl text-gray-700">
            I help small businesses like yours get noticed by the people who
            need your services. No complicated jargon, no endless contracts —
            just a simple way to get online and get found.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md"
          >
            See Your Options <ArrowRight className="w-4 h-4" />
          </a>

          {/* Trust markers */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              No monthly fees
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Ready in 2–5 days
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-purple-500" />
              Designed for mobile
            </div>
          </div>
        </motion.div>
      </section>
      {/* Personal Touch Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built by Someone Who Gets It
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm not a big agency trying to sell you the most expensive package.
            I'm a developer who believes every small business should have the
            same online opportunities as the big guys – without breaking the
            bank. I keep things simple, transparent, and focused on what
            actually helps your business grow.
          </p>
          <div className="flex justify-center items-center space-x-2 text-gray-500">
            <Handshake className="h-5 w-5" />
            <span className="italic">One business owner helping another</span>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose What Works for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three straightforward options to get your business online. Start
              small, or go all in – it's entirely up to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Found
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  R500
                </div>
                <div className="text-gray-500">One-time payment</div>
                <div className="text-gray-500">
                  No Contracts, No Monthly Bills!
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Professional business website with your info, photos, and
                    contact details
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free hosting and sub-domain with Netlify
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Google Search and Google Maps listings so people can find
                    you
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Basic SEO setup to help you rank higher in local searches
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="#contact"
                  className="block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Here
                </a>
              </div>
            </div>

            {/* Intermediate Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Social
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  R750
                </div>
                <div className="text-gray-500">One-time payment</div>
                <div className="text-gray-500">
                  No Contracts, No Monthly Bills!
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Everything you get in the Get Found package
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Setup up to 3 social media accounts of your choice
                    (Facebook, Instagram, X)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Link everything together for easy customer contact
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Basic social media optimization and integration
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="#contact"
                  className="block bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Social
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Go Premium
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  R1000
                </div>
                <div className="text-gray-500">One-time payment</div>
                <div className="text-gray-500">
                  No Contracts, No Monthly Bills!
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Everything you get in Get Social package
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    You very own business-ready, professional .co.za Domain name
                    and free hosting!
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Professional Data Analytics to gain insights into your
                    customers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Securely hosted on Netlify servers for fast, reliable access
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="#contact"
                  className="block bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Go Premium
                </a>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Concerned about needing changes later?
              </h3>
              <p className="text-gray-600 mb-6">
                Life happens, businesses evolve. Updates and changes are just{" "}
                <strong>R200 </strong> for basic changes to details, contact
                information, promotions, etc. – no hidden fees, no monthly
                contracts or bills, just what you need at a price that works.
              </p>
              <a href="#contact">
                <p className="text-lg font-semibold text-blue-600">
                  Custom development projects? Let's chat about what you need.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Why Go Online Section */}
      <section id="why-online" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Your Business Needs to Be Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your customers are already looking for you online. Here's how
              being found changes everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                People Find You Locally
              </h3>
              <p className="text-gray-600">
                When someone searches "plumber near me" or "best restaurant in
                [your area]", you'll show up in their results instead of your
                competition.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                More Calls & Messages
              </h3>
              <p className="text-gray-600">
                A professional online presence builds trust. People are more
                likely to contact a business they can find and learn about
                online.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Build Your Reputation
              </h3>
              <p className="text-gray-600">
                Share your best work, collect reviews, and show potential
                customers why they should choose you over someone without an
                online presence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse some of the work we've done so far for happy clients all around
          South Africa.
        </p>
        <div className="bg-white  portfolio">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Apex Labour Solutions",
                description:
                  "Detailed descriptions, contact details and Google Search and Maps listings.",
                img: "../portfolio/apexlabour.png",
                url: "https://apexlaboursolutionsportfolio.netlify.app/",
              },
              {
                title: "Denachem",
                description:
                  "Simple one-page, contact details and Google Search and Maps listings.",
                img: "../portfolio/denachem.png",
                url: "https://denachemportfolio.netlify.app/",
              },
              {
                title: "Dev Profile Solutions",
                description:
                  "Simple layout, contact details and Google Search and Maps listings.",
                img: "../portfolio/devprofile.png",
                url: "https://devprofileportfolio.netlify.app/",
              },
              {
                title: "E-Force Security Solutions",
                description:
                  "Basic, clear layout, contact details and Google Search and Maps listings.",
                img: "../portfolio/eforce.png",
                url: "https://eforcesecurityportfolio.netlify.app/",
              },
              {
                title: "The Glass Resorting Company",
                description:
                  "Clean one pager, contact details and Google Search and Maps listings.",
                img: "../portfolio/tgrc.png",
                url: "https://tgrcportfolio.netlify.app/",
              },
              {
                title: "Trillion Cleaning Services",
                description:
                  "Simple one-pager, contact details and Google Search and Maps listings.",
                img: "../portfolio/trillion.png",
                url: "https://trillionportfolio.netlify.app/",
              },
            ].map((site, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-t-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
                style={{
                  border: "solid 1px #ccc",
                  margin: "20px 0 10px 0",
                }}
              >
                <img
                  src={site.img}
                  alt={site.title}
                  className="w-full h-48 object-fill transform transition duration-300 hover:scale-105 hover:brightness-90 mx-auto"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold mb-1">{site.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {site.description}
                  </p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*    Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward, and quick.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  We Chat
                </h3>
                <p className="text-gray-600">
                  Tell me about your business, what you do, and who you want to
                  reach. We will also get your digital assets and content
                  altogether ready for their new home on your modern new
                  website.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  I Build
                </h3>
                <p className="text-gray-600">
                  I create your website and set up your Search and Maps
                  listings. You'll have a chance to see everything before it
                  goes live, and we'll make any adjustments needed so that it's
                  just right.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  You're Live
                </h3>
                <p className="text-gray-600">
                  Your business is online and discoverable. I'll show you how to
                  manage everything, and I'm always here if you need updates or
                  changes later.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Payment Terms
                </h3>
                <p className="text-gray-600">
                  Payment terms are simple: 50% upfront and 50% on completion.
                  Once final payment is received, your website and all content
                  are yours to keep forever.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Timeline:</strong>
              <p>
                Most projects on the <strong>Get Found</strong> tier are
                completed within 2 business days.
              </p>
              <p>
                Most projects on the <strong>Get Social and Premium</strong>{" "}
                tiers are completed within 5 business days.
              </p>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Check out our gallery of projects and possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a look at our gallery to get an idea of our work standards.
            </p>
          </div>
          <ImageGallery
            items={images}
            showPlayButton={true}
            autoPlay={true}
            showFullscreenButton={true}
            slideDuration={1500}
            slideInterval={7000}
            infinite={true}
            showNav={true}
          />
          ;
        </div>
      </section>
      <section id="testimonials" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2
                className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj"
                style={{ marginBottom: "35px" }}
              >
                What some of our clients have had to say about us...
              </h2>
              <p className="text-lg font-medium text-gray-600 font-pj">
                Loads of people have said how good we are at what we do and we
                love to share."
              </p>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3"></div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div
                        className="flex items-center mt-8"
                        style={{ marginBottom: "35px" }}
                      >
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                          alt=""
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            Emmanuel Nkosinathi
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            Venda Brothers Chysa Nyama, Benoni
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “We used to rely only on word of mouth — now when
                          people search for “Chisa Nyama near me” we show up on
                          Google! Sean helped us get listed and made a one-page
                          website with our menu. My orders went up in just a few
                          days. No complicated stuff, just exactly what I
                          needed.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                          alt=""
                          style={{ marginBottom: "35px" }}
                        />
                        <div className="ml-4" style={{ marginBottom: "35px" }}>
                          <p className="text-base font-bold text-gray-900 font-pj">
                            Jonas Jacobs
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            Mobile Mechanic, Pretoria
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “I thought websites were for big businesses with
                          offices and staff. But Sean explained how having a
                          simple site would help people trust me more. He made a
                          site with my contact number, service list, and a few
                          customer reviews. Now I get more serious calls instead
                          of time-wasters, and my business looks legit online.
                          It’s made a real difference.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div
                        className="flex items-center mt-8"
                        style={{ marginBottom: "35px" }}
                      >
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                          alt=""
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            Jenny Wilson
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            Graphic Designer, Kempton Park
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “We were only using Instagram to sell, but not
                          everyone has social media. Sean made us a beautiful
                          website that links to our WhatsApp and shows off our
                          latest designs. It feels like a real shop. We even got
                          a .co.za domain and free hosting with the premium
                          package. Now we have a place to send people when they
                          ask what we do.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Online?
            </h2>
            <p className="text-xl text-gray-600">
              Let's chat about your business and find the right solution for
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Call or WhatsApp
                    </h4>
                    <p className="text-gray-600">
                      <a href="tel:+27 64 988 4235"> +27 64 988 4235</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Available 8am-6pm, Mon-Fri
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hello@getonlineza.co.za">
                        {" "}
                        hello@getonlineza.co.za
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      I usually respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quick Questions
                    </h4>
                    <p
                      className="text-gray-600"
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      Use the form, or just call – whatever's easier for you.
                    </p>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458313.926244964!2d27.966705329199637!3d-26.177884342416256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953b130fe6fc71%3A0x902bd4f28795ce54!2sCity%20of%20Ekurhuleni%20Metropolitan%20Municipality!5e0!3m2!1sen!2sza!4v1750930701466!5m2!1sen!2sza"
                width="385"
                height="280"
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />{" "}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What should I call you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Business
                  </label>
                  <input
                    name="business"
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What kind of business do you run?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Best number to reach you"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="If you'd prefer a reply in writing"
                  />
                </div>
                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Interested In
                  </label>
                  <select
                    name="package"
                    id="package"
                    value={formData.package}
                    onChange={(e) =>
                      setFormData({ ...formData, package: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Not sure yet - let's discuss</option>
                    <option value="basic">Get Found Package (R500)</option>
                    <option value="intermediate">
                      Get Social Package (R750)
                    </option>
                    <option value="premium">Go Premium Package (R1000)</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>
                <input type="hidden" name="bot-field" />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell Me About Your Business
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What do you do? Who are your customers? What's your biggest challenge right now?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "Blue",
                    color: "white",
                    borderRadius: "10px",
                    width: "150px",
                    height: "50px",
                  }}
                  onSubmit={handleSubmit}
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="text-green-600 font-semibold">
                    Thanks! We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <BackToTopButton />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <a href="#home">
                <img
                  src="../img/logo.png"
                  style={{ width: "50px", height: "50px" }}
                ></img>
              </a>
              <span className="text-2xl font-bold">GetOnlineZA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Helping small businesses get found online, one website at a time.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>hello@getonlineza.co.za</span>
              <span>•</span>
              <span>+27 64 988 4235</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
              <p>
                &copy; 2025 GetOnlineZA. Made with care for small businesses
                across South Africa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;