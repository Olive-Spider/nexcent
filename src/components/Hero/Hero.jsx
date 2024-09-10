import HeroImage from '../../../public/Illustration.png';
function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center lg:px-16">
      <div className="w-full px-6 md:px-12 lg:px-20 gap-8">
        <h2 className="text-5xl leading-[76px] md:text-[64px] font-semibold text-secondary">
        Lessons and insights <br /> <span className='text-primary'>from 8 years</span>
        </h2>
        <h4 className="font-normal text-base text-neutral-Grey py-5">
        Where to grow your business as a photographer: site or social media?
        </h4>
        <button className="w-32 h-14 rounded px-8 font-medium text-base text-neutral-White bg-primary gap-3">
        Register
        </button>
      </div>

      <div className="p-8 md:px-24 md:py-36">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-[391px] h-[407px]"
        />
      </div>
    </section>
  );
}

export default Hero;