"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/30 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Journey to Love in NYC
          </h1>
          <p className="text-xl text-gray-600">
            From endless dating apps to finding true love
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/founder.png"
              alt="Founder of Tickles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Looking through my WhatsApp history was like scrolling through an archive of missed connections and false starts. Hundreds of conversations that started with hope and fizzled into silence. Some felt perfect at first - that exciting spark of possibility - only to have them disappear without explanation.
            </p>
            <p>
              Other times, I was the one who stepped away from someone others thought was perfect for me. The overthinking was exhausting - constantly checking messages, analyzing responses, wondering why that promising connection suddenly went cold.
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
            <p>
              It took years of frustration, mistakes, and learning to finally understand what was holding me back. The patterns I kept repeating, the red flags I ignored, the green flags I missed - all because I simply did not know better at the time.
            </p>
            <p>
              But then something changed. Here in New York City, I met someone different. Someone who became my husband. Our love story unfolded right here in these busy streets, leading to our beautiful NYC wedding.
            </p>
            <p>
              While not everything is perfect (is it ever?), I found a beautiful, real love. The kind that grows stronger through both the challenges and the celebrations. Now, I want to help others avoid the long, frustrating path I took and find their own authentic connections.
            </p>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/ai-couple.jpg"
              alt="Happy couple in New York"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          
          <div className="inline-flex items-center justify-center space-x-4">
            <Link 
              href="https://instagram.com/ticklesnyc_love" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Our Journey
            </Link>
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-xl text-gray-600">
              Let me help you skip the dating drama and find meaningful connections in NYC.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage