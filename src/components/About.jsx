import React from 'react';
import { Link } from "react-router-dom"
import Header from '../components/Header'

const About = () => {

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Header />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-gray-700">By Milos Ristovic</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-mono">A better way to learn chess</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The intention of this blog and my chess coaching is to provide instruction that follows a clear progression and is easy to understand every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                My name is Milos Ristovic and I am a casual chess player with a passion to teach the next generation of aspiring chess players and enthusiasts. I often find that it is difficult to find resources that precisely match your chess level which is why I intend to provide a step by step guide from how to move the pieces to more advanced concepts on my blog. I also provide in person chess coaching in Victoria, British Colombia, for youth as it is difficult to learn purely through online resources at a young age. My personal teaching philosophy includes:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Making chess fun! </strong>
                    Chess is ultimately played by the average person for enjoyment. This is why I hope to offer engaging content that involves a lot of hands on practice paired with entertaining anecdotes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Creating good habits. </strong>
                    Understanding how to effectively attack and knowing some opening traps is important in chess but all too often beginners tend to fixate on cheap tricks to win games. This can ultimately reinforce bad habits which is why a balance must be struck between understanding moves that will create a good game as opposed to quickly win.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Slow but steady progression. </strong>
                    The average chess player is largely limited by their lack of consistently being able to implement basic/fundemental chess concepts. This is why it is important to slowly learn fundamentals and continuously try to implement and reinforce them.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-mono">More about me</h2>
              <p className="mt-6">
                I grew up in Calgary, Alberta, and am the son of a former professional chess player, Nenad Ristovic. My dad also happens to be the former coach of the world-class grandmaster Eric Hansen so hopefully he can pass some of this elite coaching knowledge onto me. I am now located in Victoria and offer chess coaching services on weekday evenings for curious young chess players. Feel free to contact me if you have any questions about chess or otherwise!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
