import CommunityUpdatesLogo1 from "/image 18.png";
import CommunityUpdatesLogo2 from "/image 19.png";
import CommunityUpdatesLogo3 from "/image 20.png";

function CommunityUpdates() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl leading-[44px] font-semibold text-neutral-D_Grey mb-4 lg:px-64">
        Caring is the new marketing
        </h2>
        <p className="text-base font-normal text-neutral-Grey mb-10 lg:px-40">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-7">
          {/* Card 1 */}
          <div className="relative">
            {/* Large Card (Image) */}
            <img
              src={CommunityUpdatesLogo1}
              alt="CommunityUpdates 1"
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Small Overlay Card */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-11/12 lg:w-11/12 -mb-6 bg-neutral-White">
              <p className="text-lg font-semibold text-neutral-Grey mb-2 text-center">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <button className="flex items-center justify-center gap-2 text-lg font-semibold text-primary mx-auto">
                Readmore
                <img src="/Vector.svg" alt="right arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative mt-3 md:mt-0">
            {/* Large Card (Image) */}
            <img
              src={CommunityUpdatesLogo2}
              alt="CommunityUpdates 2"
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Small Overlay Card */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-11/12 lg:w-11/12 -mb-6 bg-neutral-White">
              <p className="text-lg font-semibold text-neutral-Grey mb-2 text-center">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <button className="flex items-center justify-center gap-2 text-lg font-semibold text-primary mx-auto">
                Readmore
                <img src="/Vector.svg" alt="right arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative mt-3 md:mt-0">
            {/* Large Card (Image) */}
            <img
              src={CommunityUpdatesLogo3}
              alt="CommunityUpdates 3"
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Small Overlay Card */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-11/12 lg:w-11/12 -mb-6 bg-neutral-White">
              <p className="text-lg font-semibold text-neutral-Grey mb-2 text-center">
              Revamping the Membership Model with Triathlon Australia
              </p>
              <button className="flex items-center justify-center gap-2 text-lg font-semibold text-primary mx-auto">
                Readmore
                <img src="/Vector.svg" alt="right arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityUpdates;
