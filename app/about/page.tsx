import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-50">
      
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About AI Blogging Platform</h1>
        <p className="text-lg text-gray-700">
          A lightweight, AI-powered blogging platform designed to help users generate and share blog posts effortlessly.
        </p>
      </section>

      
      <section className="max-w-3xl mx-auto space-y-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Content</h3>
            <p className="text-gray-600">
              Generate high-quality blog posts using AI algorithms tailored to your needs.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Intuitive design ensures a seamless experience for all users.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-indigo-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Fully optimized for all devices, from desktops to mobile phones.
            </p>
          </div>
        </div>
      </section>

    
      <section className="text-center py-12">
        <Link href="/" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all">
          Back to Home
        </Link>
      </section>
    </div>
  );
}