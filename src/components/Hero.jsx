const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('./BackGround Image.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
        <div className="flex justify-center mb-8">
          <img
            src="./Logo.png"
            alt="Koshary El Tahrir Logo"
            className="object-contain w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl animate-fade-in">
          Welcome to
          <span className="block mt-2 text-accent-400">Koshary El Tahrir</span>
        </h1>

        <p className="mb-8 text-xl font-light leading-relaxed md:text-2xl animate-slide-in">
          Real Egyptian flavour. No shortcuts. Just love & koshary.
        </p>

        <div className="inline-block px-6 py-3 mb-8 text-white rounded-full bg-primary-600 animate-bounce-slow">
          <span className="font-semibold">
            🎉 Special: 20% off When Order From Website!
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() =>
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg btn-primary"
          >
            View Our Menu
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg btn-secondary"
          >
            Order Now
          </button>
        </div>
      </div>
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex justify-center w-6 h-10 border-2 border-white rounded-full">
          <div className="w-1 h-3 mt-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
