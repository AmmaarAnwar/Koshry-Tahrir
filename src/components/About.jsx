const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Our Story
              </h2>
              <p className="mb-6 text-xl leading-relaxed text-gray-600">
                Since opening its doors in 1963, Koshary El Tahrir has become a
                household name in Egyptian street food. From a humble shop in
                Tahrir Square, we’ve grown into one of Egypt’s most iconic
                koshary chains, beloved by generations. Our recipe is rooted in
                authentic Egyptian tradition — simple, hearty, and full of
                flavor.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With a focus on fresh ingredients, homemade sauces, and fast,
                friendly service, we’ve stayed true to what made us a favorite
                from the start. Over the decades, Koshary El Tahrir has expanded
                across Cairo and beyond, but our commitment to delivering the
                true taste of Egypt remains unchanged.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-6 text-center rounded-lg bg-primary-50">
                <div className="mb-3 text-3xl text-primary-600">🌾</div>
                <h3 className="mb-2 text-lg font-bold">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  Daily sourced, premium quality ingredients
                </p>
              </div>
              <div className="p-6 text-center rounded-lg bg-primary-50">
                <div className="mb-3 text-3xl text-primary-600">👨‍🍳</div>
                <h3 className="mb-2 text-lg font-bold">Traditional Recipe</h3>
                <p className="text-gray-600">
                  Authentic family recipes since 1963
                </p>
              </div>
              <div className="p-6 text-center rounded-lg bg-primary-50">
                <div className="mb-3 text-3xl text-primary-600">❤️</div>
                <h3 className="mb-2 text-lg font-bold">Made with Love</h3>
                <p className="text-gray-600">
                  Every dish prepared with care and passion
                </p>
              </div>
              <div className="p-6 text-center rounded-lg bg-primary-50">
                <div className="mb-3 text-3xl text-primary-600">🏆</div>
                <h3 className="mb-2 text-lg font-bold">Award Winning</h3>
                <p className="text-gray-600">
                  Recognized for excellence in Egyptian cuisine
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./1.jpg"
                alt="Koshary preparation"
                className="transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
              />
              <img
                src="./2.jpg"
                alt="Restaurant interior"
                className="transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
              />
            </div>
            <img
              src="./3.jpg"
              alt="Chef preparing koshary"
              className="w-full transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16 text-center lg:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold text-primary-600">61+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary-600">50M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary-600">15+</div>
            <div className="text-gray-600">Menu Varieties</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary-600">12</div>
            <div className="text-gray-600">Restaurant Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
