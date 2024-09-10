import UnlockImage from '/rafiki.png';

function Unlock() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={UnlockImage}
            alt="Unlock Your Potential"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-neutral-D_Grey mb-4">
          The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-sm font-normal text-neutral-Grey mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="px-8 py-3 text-base font-medium text-center bg-primary text-neutral-White rounded gap-2">
          Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Unlock;