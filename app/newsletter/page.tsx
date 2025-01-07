"use client"

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterPage = () => {
 const [email, setEmail] = useState('');
 const [status, setStatus] = useState('');
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
   e.preventDefault();
   setLoading(true);
   
   try {
     const response = await fetch('/api/subscribe', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email,
         signupType: 'NEWSLETTER'
       }),
     });
     
     const data = await response.json();
     
     if (data.success) {
       setStatus('success');
       setEmail('');
     } else {
       setStatus('error');
     }
   } catch {
     setStatus('error');
   } finally {
     setLoading(false);
   }
 };

 return (
   <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4">
     <div className="max-w-3xl w-full mx-auto text-center">
       <div className="space-y-8">
         <div className="space-y-4">
           <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 mb-4">
             <Mail className="h-6 w-6 text-rose-500" />
           </div>
           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
             Daily Love Insights
           </h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Join our community of NYC singles getting daily wisdom on love, relationships, and authentic connections.
           </p>
         </div>

         <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
           <form onSubmit={handleSubmit} className="space-y-4">
             <div className="flex flex-col sm:flex-row gap-3">
               <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email"
                 className="flex-1 rounded-full px-6 py-3 border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none"
                 required
               />
               <button
                 type="submit"
                 disabled={loading}
                 className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors disabled:opacity-50"
               >
                 {loading ? (
                   'Subscribing...'
                 ) : (
                   <>
                     Join Now
                     <ArrowRight className="ml-2 h-4 w-4" />
                   </>
                 )}
               </button>
             </div>
             
             {status === 'success' && (
               <p className="text-green-600">Welcome to our community! Check your inbox soon.</p>
             )}
             {status === 'error' && (
               <p className="text-red-600">Oops! Something went wrong. Please try again.</p>
             )}
           </form>

           <div className="mt-6 text-sm text-gray-500">
             Join hundreds of NYC singles getting daily relationship insights. Unsubscribe anytime.
           </div>
         </div>

         <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Tips</h3>
             <p className="text-gray-600">Practical advice for modern dating in NYC</p>
           </div>
           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
             <p className="text-gray-600">Relationship wisdom from dating coaches</p>
           </div>
           <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Updates</h3>
             <p className="text-gray-600">First access to our signature events</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default NewsletterPage;