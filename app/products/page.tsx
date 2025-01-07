"use client"

import React from "react"
import { Construction } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/30 flex items-center justify-center px-4">
      <div className="text-center">
        <Construction className="w-16 h-16 text-rose-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600">
          We are working on something special. Check back soon!
        </p>
      </div>
    </div>
  )
}