import CommunityLogo1 from '/membershipIcon.png';
import CommunityLogo2 from '/nationalIcon.png';
import CommunityLogo3 from '/clubsIcon.png';

function Community() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl leading-[44px] font-semibold text-neutral-D_Grey mb-4 text-center justify-center lg:px-64">
        Manage your entire community in a single system
        </h2>
        <p className="text-base font-normal text-center text-neutral-Grey mb-10">
        Who is Nextcent suitable for?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
            <img src={CommunityLogo1} alt="Community 1" className="h-16 w-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-neutral-D_Grey mb-2">Membership Organisations</h3>
            <p className="text-sm font-normal text-neutral-Grey">
            Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
            <img src={CommunityLogo2} alt="Community 2" className="h-16 w-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-neutral-D_Grey mb-2">National Associations</h3>
            <p className="text-sm font-normal text-neutral-Grey">
            Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
            <img src={CommunityLogo3} alt="Community 3" className="h-16 w-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-neutral-D_Grey mb-2">Clubs And Groups</h3>
            <p className="text-sm font-normal text-neutral-Grey">
            Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
