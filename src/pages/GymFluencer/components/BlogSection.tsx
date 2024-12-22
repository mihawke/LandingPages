
const ExerciseCard = () => {
  return (
    <div className="relative w-full h-full text-white font-spacegrotesk rounded-xl overflow-hidden">
      <div className="h-full w-full absolute inset-0 group hover:scale-110 transition-transform duration-500  transform group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 z-10" />
        <img
          src="https://framerusercontent.com/images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg"
          className="w-full h-full object-cover object-center rounded-xl hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-8 left-8 z-20  pr-4">
        <button className="bg-[#FF3333] font-bold text-sm rounded-md">Excersice</button>
        <p className="font-bold uppercase text-2xl mt-4 font-orbitron">
          Conquering Consistency: How to Make Exercise a Habit You Love
        </p>
        <div className="flex items-center text-[#DCDCDC] gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-337fce8b-25db-44fb-aa6c-a040f31b06dc, rgb(220, 220, 220))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-full h-full">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
                </rect>
                <line x1="16" y1="2" x2="16" y2="6">
                </line>
                <line x1="8" y1="2" x2="8" y2="6">
                </line>
                <line x1="3" y1="10" x2="21" y2="10">
                </line>
              </svg>
            </div>
            <p className="font-spacegrotesk text-sm">
              Jun 28, 2024
            </p>
          </div>
          <div className="w-[2px] h-5 bg-[#DCDCDC]" />
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6">
              <img
                src="https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg"
                className="w-full h-full object-cover object-center rounded-full"
                alt="" />
            </div>
            <p className="font-spacegrotesk text-base">
              Benjamin
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WeightCard = () => {
  return (
    <div className="relative w-full h-full text-white font-spacegrotesk rounded-xl overflow-hidden">
      <div className="h-full w-full absolute inset-0 group hover:scale-110 transition-transform duration-500  transform group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10" />
        <img
          src="https://framerusercontent.com/images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg"

          className="w-full h-full object-cover object-center rounded-xl hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-3 left-3 z-20 pr-4">
        <button className="bg-[#DF670E] font-semibold text-xs rounded-md">Weight Loss</button>
        <p className="font-bold uppercase text-base mt-2 font-orbitron">
          Weight Loss: A Sustainable Approach for a Healthier You
        </p>
        <div className="flex items-center text-[#DCDCDC] gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-337fce8b-25db-44fb-aa6c-a040f31b06dc, rgb(220, 220, 220))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-full h-full">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
                </rect>
                <line x1="16" y1="2" x2="16" y2="6">
                </line>
                <line x1="8" y1="2" x2="8" y2="6">
                </line>
                <line x1="3" y1="10" x2="21" y2="10">
                </line>
              </svg>
            </div>
            <p className="font-spacegrotesk text-sm">
              Jun 26, 2024
            </p>
          </div>
          <div className="w-[2px] h-5 bg-[#DCDCDC]" />
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5">
              <img
                src="https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg"
                className="w-full h-full object-cover object-center rounded-full"
                alt=""
              />
            </div>
            <p className="font-spacegrotesk text-sm">
              Jessica
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const NutritionCard = () => {
  return (
    <div className="relative w-full h-full text-white font-spacegrotesk rounded-xl overflow-hidden">
      <div className="h-full w-full absolute inset-0 group hover:scale-110 transition-transform duration-500  transform group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10" />
        <img
          src="https://framerusercontent.com/images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg"
          className="w-full h-full object-cover object-center rounded-xl hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-3 left-3 z-20 pr-3">
        <button className="bg-[#2A990B] font-bold text-xs rounded-md">Nutrition</button>
        <p className="font-bold uppercase text-base mt-2 font-orbitron">
          Fuel Your Fitness: A Guide to Nutrition for Peak Performance
        </p>
        <div className="flex items-center text-[#DCDCDC] gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-337fce8b-25db-44fb-aa6c-a040f31b06dc, rgb(220, 220, 220))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-full h-full">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
                </rect>
                <line x1="16" y1="2" x2="16" y2="6">
                </line>
                <line x1="8" y1="2" x2="8" y2="6">
                </line>
                <line x1="3" y1="10" x2="21" y2="10">
                </line>
              </svg>
            </div>
            <p className="font-spacegrotesk text-sm">
              Jun 23, 2024
            </p>
          </div>
          <div className="w-[2px] h-5 bg-[#DCDCDC]" />
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5">
              <img
                src="https://framerusercontent.com/images/G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg"
                className="w-full h-full object-cover object-center rounded-full"
                alt=""
              />
            </div>
            <p className="font-spacegrotesk text-sm">
              David
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogSection = () => {
  return (
    <section className="flex flex-col p-12 lg:h-screen w-full bg-black">
      <div className="flex flex-col flex-1 px-4">
        <h1 className="text-4xl md:text-[44px] font-black text-center mb-12 font-orbitron text-[#ea0201]">
          OUR LATEST BLOGS
        </h1>

        <div className="flex gap-8 h-full w-full">
          <div className="flex flex-1">
            <ExerciseCard />
          </div>
          <div className="flex flex-[0.5] lg:flex-col gap-8">
            <WeightCard />
            <NutritionCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection