import CalenderImage from "/pana.png";

function Calender() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={CalenderImage}
            alt="Calender Your Potential"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-neutral-D_Grey mb-4">
            How to design your site footer like we did
          </h2>
          <p className="text-sm font-normal text-neutral-Grey mb-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="px-8 py-3 text-base font-medium text-center bg-primary text-neutral-White rounded gap-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calender;
