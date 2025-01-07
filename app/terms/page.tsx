"use client"

import React from "react"

export default function TermsPage() {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-rose">
            <h2>1. Terms</h2>
            <p>By accessing Tickles services, you agree to these terms of service. Please read them carefully.</p>
            
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access Tickles services for personal use only.</p>
            
            <h2>3. Disclaimer</h2>
            <p>Tickles services are provided as is. We make no warranties about the completeness, reliability, or accuracy of this information.</p>
            
            <h2>4. Limitations</h2>
            <p>We shall not be liable for any damages arising from the use of our service.</p>
          </div>
        </div>
      </div>
    )
  }