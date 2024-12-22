const Testimonials = () => {
  return (
    <section className="flex flex-col w-full items-center gap-20 bg-black p-10 relative">
      <div className="h-full w-full absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80 z-10" />
        <img
          src="https://framerusercontent.com/images/rIgFCPu1UT9RSfM57qES2HcKsmc.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className='z-20 flex flex-col gap-10'>
        <h1 className="text-[36px] font-orbitron font-bold leading-[120%] text-center text-white uppercase">
          What people say
        </h1>
        <div className="flex gap-8">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  )
}
const star = <svg viewBox="0 0 32 32" className="w-full h-full" id="svg12559901961"><path d="M 16 1.528 L 20.702 11.056 L 31.217 12.584 L 23.608 20 L 25.405 30.472 L 16 25.528 L 6.595 30.472 L 8.392 20 L 0.783 12.584 L 11.298 11.056 Z" fill="var(--token-017e909d-b016-4475-8e5c-a1d1a63d9362, rgb(234, 2, 1))"></path></svg>

const ReviewCard = () => {
  return (
    <div className="flex w-[688px] relative overflow-hidden">
      <div className="w-[400px] h-[296px] rounded-l-2xl">
        <img
          src="https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg"
          alt=""
          className="w-full h-full object-cover object-center rounded-l-xl"
        />
      </div>
      <div className="flex flex-col justify-between bg-[#1C1C1C] text-white rounded-r-2xl p-8">
        <div className="flex flex-col gap-5">
          <div className="flex">
            <div className="w-8 h-8">
              {star}
            </div>
            <div className="w-8 h-8">
              {star}
            </div>
            <div className="w-8 h-8">
              {star}
            </div>
            <div className="w-8 h-8">
              {star}
            </div>
            <div className="w-8 h-8">
              {star}
            </div>
          </div>
          <p className="text-base font-spacegrotesk leading-[150%]">
            GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text- font-bold font-spacegrotesk leading-[150%]">
            Angelia Jolie
          </p>
          <div className="flex items-center gap-1">
            <div className="w-4 h-[1px] bg-[#BDBDBD]"></div>
            <p className="text-[#BDBDBD] text-sm font-spacegrotesk leading-[150%]">
              Model
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials