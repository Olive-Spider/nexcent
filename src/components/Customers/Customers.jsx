import { useState, useRef } from "react";

import CustomersImage from "/customersImage.png";
import Logo1 from "/logo1.png";
import Logo2 from "/logo2.png";
import Logo3 from "/logo3.png";
import Logo4 from "/logo4.png";
import Logo5 from "/logo5.png";
import Logo6 from "/logo6.png";
import Logo7 from "/logo7.png";

function Customers() {
  // State to manage the visibility of additional logos
  const [showAllLogos, setShowAllLogos] = useState(false);
  const scrollRef = useRef(null);

  // Function to handle button click to show more logos
  const handleShowMore = () => {
    setShowAllLogos(true);
    // Optionally scroll to the beginning or some other behavior
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={CustomersImage}
            alt="Customers Your Potential"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm font-medium text-neutral-Grey mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-lg font-semibold text-primary">Tom Smith</p>
          <p className="font-normal text-base text-neutral-L_Grey">
            British Dragon Boat Racing Association
          </p>

          {/* Scrollable logos container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 py-4 px-2 scrollbar-hide"
            >
              {/* Display the first three logos */}
              <img src={Logo1} alt="Client 1" className="h-16 w-auto" />
              <img src={Logo2} alt="Client 2" className="h-16 w-auto" />

              {/* Conditionally render the remaining logos */}
              {showAllLogos && (
                <>
                  <img src={Logo3} alt="Client 3" className="h-16 w-auto" />
                  <img src={Logo4} alt="Client 4" className="h-16 w-auto" />
                  <img src={Logo5} alt="Client 5" className="h-16 w-auto" />
                  <img src={Logo6} alt="Client 6" className="h-16 w-auto" />
                  <img src={Logo7} alt="Client 7" className="h-16 w-auto" />
                </>
              )}
            </div>

            {!showAllLogos && (
              <button
                onClick={handleShowMore}
                className="text-lg font-semibold flex items-center gap-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-primary hover:underline"
              >
                Meet all customers
                <img src="/Vector.svg" alt="right arrow" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
