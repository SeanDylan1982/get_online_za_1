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
  Coffee,
  Handshake
} from 'lucide-react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

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
];

function App() {
  return (
    <div id="#home" className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <a href="#">
                <span className="text-2xl font-bold text-gray-900">
                  GetOnlineZA
                </span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#why-online"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Why Go Online?
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Business Deserves to be
              <span className="text-blue-600"> Found</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I help small businesses like yours get noticed by the people who
              need your services. No complicated jargon, no endless contracts –
              just a simple way to get online and get found.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center group"
              >
                See Your Options
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center text-gray-600">
                <Coffee className="h-5 w-5 mr-2 text-amber-600" />
                <span>From R500 • Setup within 5 days</span>
              </div>
            </div>
          </div>
        </div>
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
                    Your own .co.za Domain Name Included and Free Hosting
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
                    Professional email setup: you@yourbusiness.co.za (multiple
                    accounts available)
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
                    Securely hosted on South African servers for fast, reliable
                    access
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
                Worried about needing changes later?
              </h3>
              <p className="text-gray-600 mb-6">
                Life happens, businesses evolve. Updates and changes are just{" "}
                <strong>R200 </strong> for basic changes to details, contact
                information, promotions, etc. – no hidden fees, no monthly
                contracts or bills.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Custom development projects? Let's chat about what you need.
              </p>
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
            showPlayButton={false}
            autoPlay={true}
            showFullscreenButton={false}
            slideDuration={1000}
            slideInterval={5000}
            infinite={true}
            showNav={false}
          />
          ;
        </div>
      </section>

      <section id="testimonials" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                Loads of people have said how good we are
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                What our happy clients have to say about us
              </h2>
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
                          “You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Leslie Alexander
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          Freelance React Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
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
                          “Simply the best. Better than all the rest. I’d
                          recommend this product to beginners and advanced
                          users.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Jacob Jones
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          Digital Marketer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
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
                          “I cannot believe that I have got a brand new landing
                          page after getting Omega. It was super easy to edit
                          and publish.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
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
                          Graphic Designer
                        </p>
                      </div>
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
                    <p className="text-gray-600">+27 64 988 4235</p>
                    <p className="text-sm text-gray-500">
                      Available 8am-6pm, Mon-Fri
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@getonlineza.co.za</p>
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
                    <p className="text-gray-600">
                      Use the form, or just call – whatever's easier for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6" name="contact" netlify>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
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
                    type="text"
                    id="business"
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
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Best number to reach you"
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
                    id="package"
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

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell Me About Your Business
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What do you do? Who are your customers? What's your biggest challenge right now?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-blue-400" />
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