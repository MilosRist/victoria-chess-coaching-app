
import { useState } from 'react'
import { Link } from "react-router-dom"
import Header from '../components/Header'

const posts = [
    {
      id: 1,
      title: 'Lesson 1: How to Move the Pieces and Deliver Checkmate',
      href: '/lesson1',
      description: 'An overview of how the pieces move and how to deliver checkmate, meaning how to win a chess game',
      category: { title: 'Beginner', href: '#' },
      author: {
        name: 'Milos Ristovic',
        role: 'Owner',
        href: '#',
        imageUrl:
          '',
      },
    },
    // More posts...
  ]

  const BlogComponent = () => {

    return (
      <div className="bg-white py-24 sm:py-32 font-mono">
        <Header />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-mono">Lessons and Articles</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-mono">
              Chess lessons and articles to help you go from complete beginner to chess club player!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
export default BlogComponent;