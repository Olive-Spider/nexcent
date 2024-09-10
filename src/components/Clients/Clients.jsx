import Logo1 from '../../../public/logo1.png';
import Logo2 from '../../../public/logo2.png';
import Logo3 from '../../../public/logo3.png';
import Logo4 from '../../../public/logo4.png';
import Logo5 from '../../../public/logo5.png';
import Logo6 from '../../../public/logo6.png';
import Logo7 from '../../../public/logo7.png';

function Clients() {
  return (
    <section className="md:px-36 gap-4 my-8 md:my-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center gap-2">
        <h1 className="text-4xl font-semibold text-neutral-D_Grey text-center">
          Our Clients
        </h1>
        <h4 className="text-base font-normal text-center text-neutral-Grey mt-2">
        We have been working with some Fortune 500+ clients
        </h4>

        <div className="flex overflow-x-auto gap-6 py-4 px-2 justify-between scrollbar-hide">
          <img src={Logo1} alt="Client 1" className="h-16 w-auto" />
          <img src={Logo2} alt="Client 2" className="h-16 w-auto" />
          <img src={Logo3} alt="Client 3" className="h-16 w-auto" />
          <img src={Logo4} alt="Client 4" className="h-16 w-auto" />
          <img src={Logo5} alt="Client 5" className="h-16 w-auto" />
          <img src={Logo6} alt="Client 6" className="h-16 w-auto" />
          <img src={Logo7} alt="Client 7" className="h-16 w-auto" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
