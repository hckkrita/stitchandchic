import React from 'react'


const HomeComponent = () => {
  return(
    <>
    

      <div className='bg-[#edc3a2] font-serif'>
        <div className="bg-[#FBF2EB] p-6 rounded text-center relative">
          <img className="h-[800px] w-full object-cover rounded" src="https://images.pexels.com/photos/2070687/pexels-photo-2070687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black text-white p-4">
            <h2 className="text-4xl font-semibold mb-4">Welcome to Stitch and Chic</h2>
            <p className="mb-2">Stitch and Chic is here to inspire and support your crochet journey.</p>
            <p className="mb-4">Explore, share, and create with us!</p>
            <button className="bg-white text-black py-2 px-4 rounded">Explore Patterns</button>
          </div>
        </div>
      </div>
    <div className="container  mx-auto my-8 relative">
  
    {/* Most Popular */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Most Popular</h2>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Cardigan</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/9c/61/98/9c619874f3deb592159dfd3f29d4a662.jpg' alt="Cardigan"/>
            <p>Create cozy and stylish cardigans perfect for any season.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Summer Top</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/7f/fd/5b/7ffd5beabf6fb60e280a7f159be87929.jpg' alt="Summer Top"/>
            <p>Craft lightweight and breezy tops for your summer wardrobe.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Makeup Pouch</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/d0/78/cf/d078cfebc5a43e5abba6cd6759ee3043.jpg' alt="Makeup Pouch"/>
            <p>Organize your beauty essentials with a chic crochet makeup pouch.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>
        </div>
      </div>

      {/*Latest Release  */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Latest Release</h2>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Cinnamonroll Plush</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/736x/34/80/62/348062ba9b2066ac4fa1a2fad38ed3b1.jpg' alt="Cinnamonroll Plush"/>
            <p>Create cozy and stylish cardigans perfect for any season.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Flower Pillow</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/02/7d/14/027d142439c211ba2a8b0eec77aac868.jpg' alt="Flower Pillow"/>
            <p>Craft lightweight and breezy tops for your summer wardrobe.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Bow Bag</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/736x/0a/56/77/0a5677683cefe2608e094a1e3e5cd1bb.jpg' alt="Bow Bag"/>
            <p>Organize your beauty essentials with a chic crochet makeup pouch.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>
        </div>
      </div>

      {/* For Beginners */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">For Beginners</h2>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Bow Keychain</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/e7/7a/ca/e77acaf3d0ad2eec192876b173dc4d32.jpg' alt="Bow Keychain"/>
            <p>Create cozy and stylish cardigans perfect for any season.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Headband</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/d5/8e/bc/d58ebc1b4f1afe6415ff64ad0ee81793.jpg' alt="Headband"/>
            <p>Craft lightweight and breezy tops for your summer wardrobe.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>

          <div className="bg-[#FFE7E3] p-6 rounded shadow-md text-center w-full sm:w-80">
            <h3 className="text-xl font-semibold mb-2">Leg Warmer</h3>
            <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded" src='https://i.pinimg.com/564x/e0/28/3d/e0283d613202a8763804662d148de743.jpg' alt="Leg Warmer"/>
            <p>Organize your beauty essentials with a chic crochet makeup pouch.</p>
            <button className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    
    <footer className="bg-[#FFE7E3] text-black py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between text-center lg:text-left">
          
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">About Stitch and Chic</h3>
            <p>Stitch and Chic is dedicated to inspiring and supporting your crochet journey. Explore our patterns, share your creations, and join a vibrant community of crochet enthusiasts.</p>
          </div>
          
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Patterns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:info@stitchandchic.com" className="text-gray-400 hover:text-white">info@stitchandchic.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 234 567 890</a></p>
            <p>Address: 123 Crochet Lane, Yarn City, KN 12345</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400">&copy; 2024 Stitch and Chic. All rights reserved.</p>
        </div>
      </div>
    </footer>


    </>
  )
   
}

export default HomeComponent;