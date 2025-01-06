'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'


const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    phone: '',
    ownsHome: null as boolean | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <div className="  flex items-center justify-center sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl w-full space-y-8   rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <motion.div 
            className="md:w-1/2  p-8 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-700">Join Our Solar Revolution</h1>
            <h4 className="text-xl mb-6 text-gray-500">Harness the power of the sun and start saving on your energy bills today!</h4>
            <p className="text-lg">Fill out the form to get started on your solar journey. Our experts will guide you through every step of the process.</p>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:w-1/2 p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          > 
            <h1 className="text-2xl font-bold mb-4 text-gray-600">Get a free personalized quote</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                    value={formData.firstName}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                    value={formData.lastName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                    value={formData.zipCode}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">Do you own your own home?</span>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="ownsHome"
                      value="yes"
                      className="form-radio h-5 w-5 text-blue-600"
                      onChange={() => setFormData(prev => ({ ...prev, ownsHome: true }))}
                      checked={formData.ownsHome === true}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="ownsHome"
                      value="no"
                      className="form-radio h-5 w-5 text-blue-600"
                      onChange={() => setFormData(prev => ({ ...prev, ownsHome: false }))}
                      checked={formData.ownsHome === false}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              <div>
                <motion.button
                  type="submit"
                  className="w-full flex justify-center  border border-transparent rounded-md shadow-sm text font-medium   bg-green-90 px-8 py-4 text-white transition-all hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Quote
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Forms