function CallToAction() {
    return (
      <section className="bg-neutral-White py-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-semibold text-neutral-black mb-6">
          Pellentesque suscipit fringilla libero eu.
          </h2>
  
          {/* CTA Button */}
          <button className="flex items-center gap-2 px-6 py-3 text-base font-medium text-neutral-White bg-primary rounded-md">
            Get A Demo
            <img src="/WhiteVector.svg" alt="right arrow" className="h-4 w-4" />
          </button>
        </div>
      </section>
    );
  }
  
  export default CallToAction;
  