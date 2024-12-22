import AnimatedList from "./AnimatedList"

const SectionTwo = () => {
    return (
        <section className="bg-black">
            <div className='min-h-screen w-auto'>
                <AnimatedList></AnimatedList>

                <div className='md:px-10 flex h-full flex-col gap-12 items-center justify-center lg:mt-10'>
                    <div className='lg:w-[80%] flex flex-col gap-4 items-center justify-center'>
                        <div className="hidden lg:flex">
                        </div>

                        <div className='lg:w-[50%] outline-none flex flex-col justify-start shrink-0 transform-none'>
                            <h1 className="text-[64px] font-orbitron font-black leading-[120%] text-center text-[#ea0201]">
                                YOUR FITNESS OUR MISSION
                            </h1>
                        </div>
                        <div className="w-full lg:w-[75%] outline-none flex flex-col justify-start shrink-0 transform-none">
                            <p className="text-[18px] font-spacegrotesk font-medium leading-[150%] text-center text-[rgb(220,220,220)]">
                                At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals.
                                We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating.
                                Join us as we help you transform your fitness journey, one workout at a time.</p>
                        </div>
                    </div>

                    <div className="lg:w-[80%] flex gap-10 justify-between">
                        <div className="flex flex-col text-center items-center justify-center">
                            <p className="text-[50px] font-spacegrotesk font-bold leading-[150%] text-center text-[rgb(220,220,220)]">
                                463k+
                            </p>
                            <p className="text-[#797B85]">Workouts logged and progress tracked every month</p>
                        </div>
                        <div className="w-[1px] h-[120px] bg-white opacity-10"></div>
                        <div className="flex flex-col text-center items-center justify-center">
                            <p className="text-[50px] font-spacegrotesk font-bold leading-[150%] text-center text-[rgb(220,220,220)]">
                                163k+
                            </p>
                            <p className="text-[#797B85]">Fitness enthusiasts connected through our platform</p>
                        </div>
                        <div className="w-[1px] h-[120px] bg-white opacity-10"></div>
                        <div className="flex flex-col text-center items-center justify-center">
                            <p className="text-[50px] font-spacegrotesk font-bold leading-[150%] text-center text-[rgb(220,220,220)]">
                                13k+
                            </p>
                            <p className="text-[#797B85]">Countries where GymFluencer is making an impact</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo