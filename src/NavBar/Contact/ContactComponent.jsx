import React from 'react'

const ContactComponent = () => {
  return (
   <div className='font-serif'>
   <h1 className='text-center text-3xl mb-5 text-[#edc3a2] font-serif py-2 px-6 pt-10'>Contact</h1>
   <div className='bg-[#FFE7E3] w-[1200px] h-[600px] my-10 mx-96 rounded-lg'>
   <h3 className="font-serif text-center text-2xl mb-5 pt-4 text-black">
          Reach out to us
        </h3>
        <p className="font-serif text-center mb-5 text-black">
          Connect with our customer experience team for all support-related queries. Please expect responses within 48 hours.
        </p>

        {/* Username */}
        <div className="mb-4 mx-20">
          <label htmlFor="username" className="block text-gray-700 font-serif">
              Username
          </label>
          <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your username"   
           />
        </div>

        {/* Email */}
        <div className="mb-4 mx-20">
          <label htmlFor="email" className="block text-gray-700 font-serif">
              Email
          </label>
          <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your email"
          /> 
        </div>

        <div className="mb-4 mx-20 flex space-x-4">
          {/* Subject */}
          <div className="w-2/3">
            <label htmlFor="subject" className="block text-gray-700 font-serif">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter Subject"
            />
          </div>
          
          {/* Query Type */}
          <div className="w-1/3">
            <label htmlFor="queryType" className="block text-gray-700 font-serif">
              Query Type
            </label>
            <select
              id="queryType"
              name="queryType"
              className="w-full p-2 border rounded mt-1"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className='mb-4 mx-20'>
          <label htmlFor="message" className="block text-gray-700 font-serif">
            Message
          </label>
          <textarea
            placeholder="Message"
            rows="4"
            className="p-2 rounded border border-gray-300 w-[1040px] font-serif"
          >
          </textarea>
        </div>

        {/* send button */}
        <button
            type="submit"
            className="py-2 px-4 mx-20 rounded  bg-white  font-serif hover:bg-gray-200"
          >
            Send
        </button>

         {/* Contact Information Section */}
         <div className="w-[1200px] mx-auto my-12 p-5 bg-[#FFE7E3] rounded-lg shadow-md pb-10 mb-32">
            <h3 className="text-center text-xl mb-5">
              Get in touch
            </h3>
            <div className="flex justify-around">
              <div className="text-center">
                <p>Our headquarters</p>
                <p>123 Crochet Lane, Yarn City, KN 12345</p>
              </div>
              <div className="text-center">
                <p>Call us</p>
                <p>+91 12345 67891</p>
              </div>
              <div className="text-center">
                <p>Email</p>
                <p>
                  Email: 
                  <a href="mailto:info@stitchandchic.com" className="text-gray-400 hover:text-white"> info@stitchandchic.com</a>
                </p>
              </div>
            </div>
         </div>


   </div>

   </div>
     
  )
}

export default ContactComponent