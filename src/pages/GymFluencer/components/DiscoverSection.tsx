import React from 'react'

interface BenifitCardProps {
    iconSrc: string
    title: string
    description: string
}
const BenifitCard: React.FC<BenifitCardProps> = ({ iconSrc, title, description }) => {
    return (
        <div className='flex flex-col w-[450px] pl-8 pr-4 py-8 border text-white border-white/10 bg-[#0f0f0f] rounded-lg'>
            <div className='p-3 w-fit border border-white/10 bg-[#181818] rounded-lg'>
                <img
                    decoding="async"
                    loading="lazy"
                    src={iconSrc}
                    alt=""
                    className="block w-[30px] h-[30px] object-cover object-center"
                />
            </div>
            <h1 className="text-[22px] font-orbitron font-semibold leading-[150%] text-[#ea0201] mt-6">
                {title}
            </h1>
            <p className="text-[18px] font-spacegrotesk font-normal leading-[150%] text-[#a9a9a9] mt-2">
                {description}
            </p>
        </div>
    )
}

const MobileImage = () => {
    return (
        <div className="w-72 relative">
            <img
                decoding="async"
                loading="lazy"
                src='https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png'

                alt="Bottom layer"
                className="block w-full h-full object-cover object-center"
            />
            <img
                decoding="async"
                loading="lazy"
                src='https://framerusercontent.com/images/1UO4LCYbX6UQvXFCBXLY0dAOHU.png'
                alt="Top layer"
                className="block w-[90%] rounded-[30px] object-cover object-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] inset-0"
            />
        </div>
    )
}

const DiscoverSection = () => {
    return (
        <section className='bg-black'>
            <div className='py-20 min-h-screen w-auto flex flex-col items-center'>
                <div className='p-2 pr-3 border border-white/10 flex bg-[#121212] w-fit rounded-full items-center justify-center gap-2 mb-5'>
                    <img
                        src="https://framerusercontent.com/images/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg"

                        alt="" />
                    <p className="text-[16px] font-spacegrotesk font-medium leading-[150%] text-center text-white">
                        Our Benefits
                    </p>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='outline-none flex flex-col justify-start shrink-0 transform-none'>
                        <h1 className="text-[44px] font-orbitron font-black leading-[120%] text-center text-[#ea0201]">
                            Discover GymFluencer Benefits
                        </h1>
                    </div>
                    <div className="w-full lg:w-[70%] outline-none flex flex-col items-center justify-start shrink-0 transform-none">
                        <p className="text-[16px] font-spacegrotesk font-medium leading-[150%] text-center text-[rgb(220,220,220)]">
                            Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation
                        </p>
                    </div>
                </div>

                <div className='flex w-full justify-evenly items-center mt-8'>
                    <div className='space-y-6'>
                        <BenifitCard
                            title='Effortless Workout Logging'
                            description='Easily log your workouts and monitor your progress over time with our intuitive logging feature.'
                            iconSrc="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
                        />

                        <BenifitCard
                            title='Accurate Rep Counting'
                            description='Count your reps accurately with our app, ensuring consistency and improved performance.'
                            iconSrc="https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg"
                        />
                    </div>
                    <MobileImage />

                    <div className='space-y-6'>
                        <BenifitCard
                            title='Personalized Workout Plans'
                            description='AI-powered workout plans tailored to your fitness level, goals, and progress.'
                            iconSrc="https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg"
                        />
                        <BenifitCard
                            title='Calorie Calculation & Personalized Diet Plans'
                            description='Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness '
                            iconSrc="https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverSection