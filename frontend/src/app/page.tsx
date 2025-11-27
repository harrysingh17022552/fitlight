"use client";
import Image from "next/image";
import React, { useState } from "react";
const Home: React.FC = (): React.ReactElement => {
  const [navbar, setNavbar] = useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased box-border">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <article className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            FL
          </div>
          <span className="font-semibold text-lg">FitLight</span>
        </article>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            Login
          </button>
        </nav>
        <div className="md:hidden relative flex flex-col gap-8">
          <button
            className="px-3 py-2 border rounded-md"
            onClick={() => setNavbar(!navbar)}
          >
            Menu
          </button>
          {navbar && (
            <nav className="absolute right-0 top-14 z-10 border-l border-b py-3 bg-white pl-6 rounded-md flex flex-col items-center gap-6 text-sm">
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
              <a href="#pricing" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#testimonials" className="hover:text-blue-600">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="px-6">
        <article className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <article>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Get fit smarter with AI-powered plans
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Personalized workouts, nutrition guidance, and progress tracking —
              all in one app. Designed for busy people who want consistent
              results.
            </p>

            <article className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium shadow"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border rounded-md text-sm"
              >
                Learn more
              </a>
            </article>

            <article className="mt-6 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500k+</div>
                <div className="text-sm text-gray-500">Active users</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8 ★</div>
                <div className="text-sm text-gray-500">Average rating</div>
              </div>
            </article>
          </article>

          <article className="relative">
            <article className="w-full h-80 md:h-[420px] bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-inner flex items-center justify-center">
              <Image
                src="https://github.com/harrysingh17022552/fitlight/blob/master/frontend/public/blaaa.jpg"
                fill
                alt="fitness app preview"
                className="object-cover rounded-xl shadow-lg scale-x-[-1]"
              />
            </article>
            <article className="absolute -bottom-6 left-6 bg-white border py-3 px-4 rounded-xl shadow-lg w-64">
              <div className="text-xs text-gray-500">Today</div>
              <div className="font-medium">Full Body HIIT • 28 min</div>
              <div className="text-sm text-gray-500">
                Burn calories — no equipment needed
              </div>
            </article>
          </article>
        </article>

        {/* FEATURES */}
        <article id="features" className="max-w-7xl mx-auto py-12">
          <h2 className="text-2xl font-semibold">Powerful features</h2>
          <p className="text-gray-600 mt-2">
            Everything you need to reach your goals — personalized and
            science-backed.ō
          </p>

          <article className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-50 text-blue-600 font-bold">
                1
              </div>
              <h3 className="mt-4 font-semibold">AI Personalized Plans</h3>
              <p className="mt-2 text-sm text-gray-600">
                Workouts and meal plans tailored to your body, preferences, and
                schedule using smart adjustments.
              </p>
            </article>

            <article className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-50 text-green-600 font-bold">
                2
              </div>
              <h3 className="mt-4 font-semibold">Progress Tracking</h3>
              <p className="mt-2 text-sm text-gray-600">
                Track workouts, weight, and body measurements with beautiful
                charts and weekly insights.
              </p>
            </article>

            <article className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple-50 text-purple-600 font-bold">
                3
              </div>
              <h3 className="mt-4 font-semibold">Guided Video Coaching</h3>
              <p className="mt-2 text-sm text-gray-600">
                High-quality video instructions and audio cues to make sure you
                perform exercises safely.
              </p>
            </article>
          </article>
        </article>

        {/* TESTIMONIALS */}
        <article id="testimonials" className="max-w-7xl mx-auto py-12">
          <h2 className="text-2xl font-semibold">What users say</h2>
          <p className="text-gray-600 mt-2">
            Real stories from people who transformed their lives with FitLight.
          </p>

          <article className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 border rounded-lg">
              <p className="text-gray-700">
                “I lost 12kg in 4 months. The personalized plan actually adapts
                to my busy weeks — incredible!”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Aisha, 29
              </footer>
            </blockquote>

            <blockquote className="p-6 border rounded-lg">
              <p className="text-gray-700">
                “Love the short guided workouts — I can do them at home and
                still feel challenged.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Rohan, 34
              </footer>
            </blockquote>

            <blockquote className="p-6 border rounded-lg">
              <p className="text-gray-700">
                “Nutrition suggestions are smart and flexible. No more crash
                diets — sustainable progress.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Meera, 26
              </footer>
            </blockquote>
          </article>
        </article>

        {/* PRICING */}
        <article id="pricing" className="max-w-7xl mx-auto py-12">
          <h2 className="text-2xl font-semibold">Choose your plan</h2>
          <p className="text-gray-600 mt-2">
            Simple pricing. No long-term contracts. Cancel anytime.
          </p>

          <article className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 border rounded-lg flex flex-col">
              <div className="text-sm font-semibold">Starter</div>
              <div className="mt-4 text-3xl font-bold">Free</div>
              <p className="mt-2 text-gray-600">
                Basic workouts and tracking, limited plans.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✔ 5 workouts/week</li>
                <li>✔ Basic meal suggestions</li>
              </ul>
              <button className="mt-auto mt-6 px-4 py-2 bg-gray-800 text-white rounded-md">
                Get started
              </button>
            </article>

            <article className="p-6 border-2 border-blue-600 rounded-lg flex flex-col bg-blue-50">
              <div className="text-sm font-semibold">Pro</div>
              <div className="mt-4 text-3xl font-bold">
                ₹499<span className="text-base font-medium">/mo</span>
              </div>
              <p className="mt-2 text-gray-700">
                Personalized AI plans, full tracking, and guided videos.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✔ Unlimited workouts</li>
                <li>✔ Personalized meal plans</li>
                <li>✔ Priority support</li>
              </ul>
              <button className="mt-auto mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
                Start free trial
              </button>
            </article>

            <article className="p-6 border rounded-lg flex flex-col">
              <div className="text-sm font-semibold">Coach</div>
              <div className="mt-4 text-3xl font-bold">
                ₹999<span className="text-base font-medium">/mo</span>
              </div>
              <p className="mt-2 text-gray-600">
                1:1 coaching, custom meal plans, weekly check-ins.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✔ Dedicated coach</li>
                <li>✔ Weekly calls</li>
              </ul>
              <button className="mt-auto mt-6 px-4 py-2 bg-gray-800 text-white rounded-md">
                Book a call
              </button>
            </article>
          </article>
        </article>

        {/* CONTACT CTA */}
        <article id="contact" className="max-w-7xl mx-auto py-12">
          <article className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <article>
              <h3 className="text-xl font-semibold">
                Ready to start your transformation?
              </h3>
              <p className="text-gray-600 mt-2">
                Join thousands of people getting fitter with FitLight.
              </p>
            </article>
            <article className="mt-6 md:mt-0">
              <a
                href="#pricing"
                className="px-6 py-3 bg-blue-600 text-white rounded-md"
              >
                Start free trial
              </a>
            </article>
          </article>
        </article>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-8 pb-12">
          <article className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
            <article>
              <article className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  FL
                </div>
                <div>
                  <div className="font-semibold">FitLight</div>
                  <div className="text-sm text-gray-500">
                    AI-powered fitness for busy lives
                  </div>
                </div>
              </article>
            </article>

            <article className="flex gap-12">
              <article>
                <div className="font-medium">Product</div>
                <ul className="mt-3 text-sm text-gray-600">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Download</li>
                </ul>
              </article>

              <article>
                <div className="font-medium">Company</div>
                <ul className="mt-3 text-sm text-gray-600">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </article>
            </article>
          </article>

          <article className="max-w-7xl mx-auto px-6 mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} FitLight. All rights reserved.
          </article>
        </footer>
      </section>
    </main>
  );
};

export default Home;
