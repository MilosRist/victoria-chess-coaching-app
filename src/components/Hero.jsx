'use client'

import React from 'react';
import { Link } from "react-router-dom"
import { useState } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Register from '../components/Register'

const Hero = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/*<div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#000000] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-mono">
              Chess coaching for the next generation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An approach to chess coaching that is focused on turning complete beginners into confident chess players with fun and engaging lessons.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/blog"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
              >
                Blog
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 font-mono">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
            <Register />
            <Login />
        </div>
      </div>
    </div>
  )
}

export default Hero;

