import Logo1 from '/achievementsIcon1.png';
import Logo2 from '/achievementsIcon2.png';
import Logo3 from '/achievementsIcon3.png';
import Logo4 from '/achievementsIcon4.png';

function Achievements() {
  return (
    <section className="py-12 md:py-20 justify-between bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Side: Title and Description */}
        <div className="w-full md:w-1/2 text-center md:text-left gap-2">
          <h2 className="text-4xl font-semibold text-secondary mb-4">
          Helping a local <br /> <span className='text-primary'>business reinvent itself</span>
          </h2>
          <p className="text-base font-normal text-[#18191F]">
          We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Side: Cards Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex items-center p-3">
            <img src={Logo1} alt="Feature 1" className="h-12 w-12" />
            <div>
              <h3 className="text-3xl font-bold text-neutral-D_Grey">2,245,341</h3>
              <p className="text-neutral-Grey text-base font-normal">Members</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center p-3">
            <img src={Logo2} alt="Feature 2" className="h-12 w-12 md:ml-4" />
            <div>
              <h3 className="text-3xl font-bold text-neutral-D_Grey">46,328</h3>
              <p className="text-neutral-Grey text-base font-normal">Clubs</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center p-3">
            <img src={Logo3} alt="Feature 3" className="h-12 w-12" />
            <div>
              <h3 className="text-3xl font-bold text-neutral-D_Grey">828,867</h3>
              <p className="text-neutral-Grey text-base font-normal">Event Bookings</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center p-3">
            <img src={Logo4} alt="Feature 4" className="h-12 w-12 md:ml-4" />
            <div>
              <h3 className="text-3xl font-bold text-neutral-D_Grey">1,926,436</h3>
              <p className="text-neutral-Grey text-base font-normal">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;