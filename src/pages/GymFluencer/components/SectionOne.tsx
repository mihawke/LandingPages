const SectionOne = () => {
    return (

        <section>
            <div className='h-screen min-h-screen w-auto relative'>
                <div className="h-screen min-h-screen absolute -z-50 inset-0 rounded-inherit">
                    <div className="absolute inset-0 bg-back-shadow z-10"></div>
                    <img
                        decoding="async"
                        sizes="100vw"
                        srcSet="https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=512 512w,
        https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=1024 1024w,
        https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=2048 2048w,
        https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=4096 4096w,
        https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg 5200w"
                        src="https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg"
                        alt=""
                        className="block w-full h-full rounded-inherit object-cover object-center"
                    />
                </div>
                <div className='md:px-[150px] lg:px-0 flex h-full flex-col gap-4 items-center justify-center'>
                    <div className='outline-none flex flex-col justify-start shrink-0 transform-none'>
                        <div className='p-2 border border-white/10 flex bg-[#171717] w-fit rounded-full items-center'>
                            <div className='w-6 h-6'>
                                <img
                                    decoding="async"
                                    sizes="28px"
                                    className='block w-full h-full object-center object-cover'
                                    src="https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png"
                                    alt="" />
                            </div>
                            <div className='w-6 h-6 -translate-x-2'>
                                <img
                                    decoding="async"
                                    sizes="28px"
                                    className='block w-full h-full object-center object-cover'
                                    src="https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png"
                                    alt="" />
                            </div>
                            <div className='w-6 h-6 -translate-x-4'>
                                <img
                                    decoding="async"
                                    sizes="28px"
                                    className='block w-full h-full object-center object-cover'
                                    src="https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png"
                                    alt="" />
                            </div>
                            <div>
                                <p className="text-[14px] font-spacegrotesk font-medium leading-[150%] text-center text-white -translate-x-1">
                                    Trusted by 3+ million users
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='outline-none flex flex-col justify-start shrink-0 transform-none'>
                        <h1 className="text-[76px] font-orbitron font-black leading-[120%] text-center text-[#ea0201]">
                            Track Your Fitness Journey
                        </h1>
                    </div>
                    <div className="w-[85%] px-[200px] outline-none flex flex-col justify-start shrink-0 transform-none">
                        <p className="text-[16px] font-spacegrotesk font-medium leading-[150%] text-center text-[rgb(220,220,220)]">
                            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with ease.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne