"use client"

import React from "react"
import Link from "next/link"
import { Clock, MapPin, Calendar, Heart } from "lucide-react"

const CoachingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/30 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-rose-500 font-medium">Personal Coaching</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Transform Your Love Life
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From crafting the perfect dating profile to navigating relationship challenges, 
            get personalized guidance for your unique journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Coaching Package
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">5 sessions × 55 minutes each</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">Online or in-person in NYC</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">Valid for 12 months</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-6">$1,500</div>
            <Link
              href="https://calendly.com/nytechventures/30-minute-meeting"
              className="block text-center px-6 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Urgent Support
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">Single 55-minute session</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">Online or in-person in NYC</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-600">Ad-hoc availability</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-6">$500</div>
            <Link
              href="mailto:hello@therelationshipfinder.com?subject=Urgent Coaching Request"
              className="block text-center px-6 py-3 rounded-full border-2 border-rose-500 text-rose-500 hover:bg-rose-50 transition-colors"
            >
              Book Urgent Session
            </Link>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-500 font-medium">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Free Consultation</h3>
                <p className="text-gray-600">30-minute call to discuss your needs and ensure we are a good fit</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-500 font-medium">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Book Your Package</h3>
                <p className="text-gray-600">Complete payment and schedule your first session</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-500 font-medium">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Begin Your Journey</h3>
                <p className="text-gray-600">Flexible scheduling for remaining sessions within 12 months</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Heart className="w-6 h-6 text-rose-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dating Profile</h3>
            <p className="text-gray-600">Create an authentic profile that attracts the right matches</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Heart className="w-6 h-6 text-rose-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dating Strategy</h3>
            <p className="text-gray-600">Learn to navigate dating with confidence and clarity</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Heart className="w-6 h-6 text-rose-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Relationship Reset</h3>
            <p className="text-gray-600">Rekindle the spark and strengthen your connection</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachingPage