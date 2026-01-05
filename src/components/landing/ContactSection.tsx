'use client'
import React, { useState } from 'react'

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('Creator')

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-22">
      <div className="w-full bg-gray-100 rounded-3xl px-25 py-20 relative">
        <div className="grid grid-cols-2 items-center gap-12 justify-between relative">
         
          <div className='relative z-10'>
            <h1>Placeholder</h1>
          </div>

          {/* Right Side - Form */}
          <div className="relative z-10">
            {/* Tab Buttons */}
            <div className="flex bg-white rounded-full p-1 mb-8 border-2 border-gray-900">
              <button 
                onClick={() => setActiveTab('Creator')}
                className={`flex-1 rounded-full py-2 px-4 text-sm font-medium transition-colors ${
                  activeTab === 'Creator' 
                    ? 'bg-pink-400 text-white' 
                    : 'text-gray-900 hover:bg-pink-100'
                }`}
              >
                Creator
              </button>
              <button 
                onClick={() => setActiveTab('Content Partner')}
                className={`flex-1 rounded-full py-2 px-4 text-sm font-medium transition-colors ${
                  activeTab === 'Content Partner' 
                    ? 'bg-pink-400 text-white' 
                    : 'text-gray-900 hover:bg-pink-100'
                }`}
              >
                Content Partner
              </button>
              <button 
                onClick={() => setActiveTab('Brand')}
                className={`flex-1 rounded-full py-2 px-4 text-sm font-medium transition-colors ${
                  activeTab === 'Brand' 
                    ? 'bg-pink-400 text-white' 
                    : 'text-gray-900 hover:bg-pink-100'
                }`}
              >
                Brand
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@mail. com"
                  className="w-full px-0 py-2 border-b-2 border-gray-900 bg-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full px-0 py-2 border-b-2 border-gray-900 bg-transparent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell Us Your Concerns <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter text or your channel link here..."
                  className="w-full px-0 py-2 border-b-2 border-gray-900 bg-transparent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-[30%] bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-6 rounded-full mt-8"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection