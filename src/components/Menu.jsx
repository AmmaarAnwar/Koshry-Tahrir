const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Tahrir",
      description: "Tahrir",
      price: "32 EGP",
      image: "./Tahrir-image.jpeg",
      category: "V.Small",
    },
    {
      id: 2,
      name: "Top Tahrir",
      description: "Top Tahrir",
      price: "42 EGP",
      image: "./Top Tahrir-image.jpeg",
      category: "Small",
    },
    {
      id: 3,
      name: "Large Tahrir",
      description: "Large Tahrir",
      price: "50 EGP",
      image: "./Large Tahrir-image.jpeg",
      category: "Large",
    },
    {
      id: 4,
      name: "King Tahrir",
      description: "King Tahrir",
      price: "65 EGP",
      image: "./King Tahrir-image.jpeg",
      category: "V.Large",
    },
    {
      id: 5,
      name: "Mega Meal For 3",
      description: "Mega Meal For 3",
      price: "140 EGP",
      image: "./Mega Meal For 3-image.jpeg",
      category: "Family",
    },
    {
      id: 6,
      name: "Family Meal For 5",
      description: "Family Meal For 5",
      price: "225 EGP",
      image: "./Family Meal For 5-image.jpeg",
      category: "Family",
    },
  ];
  const beverages = [
    {
      id: 7,
      name: "Pepsi",
      description: "Pepsi",
      price: "20 EGP",
      image: "./Pepsi -image.jpeg",
    },
    {
      id: 8,
      name: "Pepsi Diet",
      description: "Pepsi Diet",
      price: "20 EGP",
      image: "./Pepsi Diet -image.jpeg",
    },
    {
      id: 9,
      name: "Mirinda Orange",
      description: "Mirinda Orange",
      price: "20 EGP",
      image: "./Mirinda Orange -image.jpeg",
    },
    {
      id: 10,
      name: "Miranda Apple",
      description: "Miranda Apple",
      price: "20 EGP",
      image: "./Miranda Apple-image.jpeg",
    },
    {
      id: 11,
      name: "7 UP Diet",
      description: "7 UP Diet",
      price: "20 EGP",
      image: "./7 UP Diet-image.jpeg",
    },
    {
      id: 12,
      name: "Water",
      description: "water",
      price: "6 - 10 EGP",
      image: "./water.jpeg",
    },
  ];
  const additions = [
    {
      id: 13,
      name: "Tomato Sauce",
      description: "Tomato Sauce",
      price: "7 EGP",
      image: "./Tomato Sauce -image.jpeg",
    },
    {
      id: 14,
      name: "Fried Onion",
      description: "Fried Onion",
      price: "12 EGP",
      image: "./Fried Onion-image.jpeg",
    },
    {
      id: 15,
      name: "Garlic Sauce",
      description: "Garlic Sauce",
      price: "2 EGP",
      image: "./Garlic Sauce-image.jpeg",
    },
    {
      id: 16,
      name: "Hot Sauce",
      description: "Hot Sauce",
      price: "2 EGP",
      image: "./Hot Sauce-image.jpeg",
    },

    {
      id: 17,
      name: "Chickpeas",
      description: "Chickpeas",
      price: "7 EGP",
      image: "./Chickpeas-image.jpeg",
    },
    {
      id: 18,
      name: "Lentils",
      description: "Lentils",
      price: "7 EGP",
      image: "./Lentils -image.jpeg",
    },
  ];
  const desserts = [
    {
      id: 19,
      name: "Pudding",
      description: "Pudding",
      price: "25 EGP",
      image: "./Pudding -image.jpeg",
    },
    {
      id: 20,
      name: "Rice Pudding",
      description: "Rice Pudding",
      price: "25 EGP",
      image: "./Rice Pudding -image.jpeg",
    },
  ];

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Delicious Menu
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover the authentic taste of Egypt with our carefully crafted
            koshary dishes, made fresh daily with the finest ingredients.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="mb-12 text-3xl font-bold text-center text-primary-700">
            Koshary Dishes
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-primary-600">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <button className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-12 text-3xl font-bold text-center text-primary-700">
            Additions
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {additions.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <button className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="pt-10 mb-12 text-3xl font-bold text-center text-primary-700">
            Beverages
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {beverages.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <button className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="pt-10 mb-12 text-3xl font-bold text-center text-primary-700">
            Desserts
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {desserts.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <button className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
