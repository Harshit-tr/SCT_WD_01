import React from "react";

function About() {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-7xl font-semibold mb-4">Explore the Wild</h3>
            <p className="text-gray-700">
              Venture deep into the heart of nature with our exclusive jungle
              safari tours, where adventure meets serenity. Feel the thrill as
              you navigate through dense forests, listening to the distant calls
              of exotic birds and the rustling of leaves under the footsteps of
              majestic creatures. Witness breathtaking landscapes, from sunlit
              canopies to hidden waterfalls, each revealing a new secret of the
              wild. Experience the untamed beauty of nature up close—spot
              elusive big cats, playful elephants, and vibrant wildlife thriving
              in their natural habitat. Every moment is an opportunity to
              connect with the wilderness, to breathe in the pure air of the
              jungle, and to feel the pulse of the earth beneath your feet.
              Don't just explore—capture the magic! Snap awe-inspiring
              photographs of the raw, untouched beauty around you and share your
              incredible journey with the world. Whether you're an adventurer at
              heart, a nature lover, or a photography enthusiast, our safari
              experience promises memories that will last a lifetime!
            </p>
          </div>
          <div>
            <img
              src="https://www.usatoday.com/gcdn/authoring/authoring-images/2024/08/28/USAT/74981692007-adobe-stock-731317976.jpeg"
              alt="Jungle Safari"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
