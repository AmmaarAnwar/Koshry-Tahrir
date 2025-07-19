const Footer = () => {
  return (
    <footer className="py-12 text-white bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-accent-400">
              Koshary El Tahrir
            </h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              Serving authentic Egyptian koshary since 1985. Experience the
              traditional flavors that have made us a beloved destination for
              koshary lovers across Egypt.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-primary-600 hover:bg-primary-700"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-primary-600 hover:bg-primary-700"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-primary-600 hover:bg-primary-700"
              >
                <span className="text-sm font-bold">TW</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 transition-colors duration-300 hover:text-accent-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("menu")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 transition-colors duration-300 hover:text-accent-400"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 transition-colors duration-300 hover:text-accent-400"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 transition-colors duration-300 hover:text-accent-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Tahrir Square, Cairo</p>
              <p>📞 +20 19719</p>
              <p>✉️ info@kosharyeltahrir.com</p>
              <p>🕒 Daily: 10 AM - 11 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
