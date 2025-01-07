"use client"

import React from "react"

export default function PrivacyPage() {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-rose">
            <h2>Information Collection</h2>
            <p>We collect information you provide directly to us when using our services.</p>
            
            <h2>Information Usage</h2>
            <p>We use collected information to provide and improve our services.</p>
            
            <h2>Information Protection</h2>
            <p>We implement security measures to maintain the safety of your personal information.</p>
            
            <h2>Cookies</h2>
            <p>We use cookies to enhance your experience and analyze our traffic.</p>
            
            <h2>Contact</h2>
            <p>For privacy concerns, please contact hello@therelationshipfinder.com</p>
          </div>
        </div>
      </div>
    )
  }