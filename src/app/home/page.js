import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-purple-300 to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-purple-900 mb-4">
          Welcome to Pet Gallery!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Share your pet’s joy with the world. Submit their photo and see them
          in our gallery!
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition duration-300"
            href="/form"
          >
            Submit Your Pet
          </Link>
          <Link
            className="bg-gray-300 text-gray-900 px-6 py-3 rounded-md text-lg hover:bg-gray-400 transition duration-300"
            href="/pets"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Site Amacı ve Özellikler */}
      <section className="py-12 w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8">
          Why Share Your Pet?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Celebrate Your Pet</h3>
            <p>
              Show off your pet's unique personality and share their story with
              the world.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
            <p>
              Connect with other pet lovers and find new friends who adore their
              pets as much as you do.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Inspire Others</h3>
            <p>
              Your pet's joy can bring happiness to others. Let them be a source
              of inspiration!
            </p>
          </div>
        </div>
      </section>

      {/* Dinamik Pet Gallery Önizlemesi */}
      <section className="py-12 w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8">
          Featured Pets
        </h2>
        <div className="flex overflow-x-scroll space-x-4">
          {/* Placeholder for pet images */}
          <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md">
            <span>Pet 1</span>
          </div>
          <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md">
            <span>Pet 2</span>
          </div>
          <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md">
            <span>Pet 3</span>
          </div>
          {/* Add more pet images as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-purple-900 text-white text-center">
        <p>&copy; 2024 Pet Gallery. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Placeholder for social media links */}
          <a href="#" className="hover:text-purple-300">
            Facebook
          </a>
          <a href="#" className="hover:text-purple-300">
            Instagram
          </a>
          <a href="#" className="hover:text-purple-300">
            Twitter
          </a>
        </div>
      </footer>
    </main>
  )
}
export default Home
