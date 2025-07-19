const Contact = () => {
  return (
    <section id="contact" className="text-white bg-gray-900 section-padding">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Visit Us Today
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-accent-400">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">
                      Main Location
                    </h4>
                    <p className="text-gray-300">Tahrir Square, Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">Phone</h4>
                    <p className="text-gray-300">+20 19719</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">Email</h4>
                    <p className="text-gray-300">info@kosharyeltahrir.com</p>
                    <p className="text-gray-300">orders@kosharyeltahrir.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">Hours</h4>
                    <p className="text-gray-300">Daily: 10:00 AM - 11:00 PM</p>
                    <p className="text-gray-300">Friday: 12:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 text-center bg-primary-600 rounded-xl">
              <h4 className="mb-4 text-2xl font-bold">Ready to Order?</h4>
              <p className="mb-6 text-primary-100">
                Call us now or visit our restaurant for the best koshary
                experience!
              </p>
              <button className="px-8 py-3 font-bold transition-colors duration-300 bg-white rounded-lg text-primary-600 hover:bg-primary-50">
                Order Now: +20 19719
              </button>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl">
            <h3 className="mb-6 text-2xl font-bold text-accent-400">Find Us</h3>

            <div className="space-y-4">
              <h4 className="mb-4 text-lg font-semibold">All Locations</h4>
              <div className="space-y-3">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold">Downtown Cairo</h5>
                  <p className="text-sm text-gray-300">
                    Talaat Harb Street, Tahrir Square
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold">Zamalek Branch</h5>
                  <p className="text-sm text-gray-300">
                    26th of July Street, Zamalek
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold">Nasr City Branch</h5>
                  <p className="text-sm text-gray-300">
                    Makram Ebeid Street, Nasr City
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold">Heliopolis Branch</h5>
                  <p className="text-sm text-gray-300">
                    Al Merghany Street, Heliopolis
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold">New Cairo Branch</h5>
                  <p className="text-sm text-gray-300">
                    First Settlement, New Cairo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
