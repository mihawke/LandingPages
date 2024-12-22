import React from "react"
import { FaMapMarked } from "react-icons/fa"

const MapSection = () => {
    return (
        <section className="flex flex-col min-h-screen w-full items-center justify-center bg-black gap-10 px-40">
            <div className='md:px-10 flex flex-col gap-12 items-center justify-center'>
                <div className='lg:w-[80%] flex flex-col gap-4 items-center justify-center'>
                    <div className='outline-none flex flex-col justify-start shrink-0 transform-none'>
                        <h1 className="text-[26px] font-orbitron font-black leading-[120%] text-center text-[#ea0201] uppercase">
                            Find Your Nearest Gym
                        </h1>
                    </div>
                    <div className="w-full lg:w-[100%] outline-none flex flex-col items-center justify-start shrink-0 transform-none">
                        <p className="text-[20px] font-spacegrotesk font-medium leading-[150%] text-center text-[rgb(220,220,220)]">
                            Easily discover gyms near your location to kickstart your fitness journey today!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-[440px]">
                <div className="flex flex-1 h-full flex-col bg-[#111111] gap-6 p-4 overflow-auto">
                    <LocationCard
                        name="Physc Gym Nerul 24/7"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Iron Fitness"
                        number="+91 1234567890"
                        address="2801 14th St NW, Washington, DC 20009"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Hydropower Fitness & Gym"
                        number="+91 1234567890"
                        address="28345 Industrial Blvd, Hayward, CA 94545"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Yuva Fitness"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Ozone The Gym"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="The Square Gym"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Arnolds Total Fitness"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />
                    <LocationCard
                        name="Edge Fitness Seawoods"
                        number="+91 1234567890"
                        address="Nerul, Navi Mumbai, Maharashtra, 400706"
                        imgSrc="https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg"
                    />


                </div>
                <div className="flex flex-1 items-center justify-center">
                    <FaMapMarked className="w-[50%] h-auto text-[#ea0201]" />
                </div>
            </div>
        </section>
    )
}

interface LocationCardProps {
    name: string
    address: string
    number: string
    imgSrc: string
}
const LocationCard: React.FC<LocationCardProps> = ({ name, number, address, imgSrc }) => {
    return (
        <div className="flex h-fit w-full rounded-lg bg-[#191919]">
            <div className="h-[120px] w-[120px] overflow-hidden inset-0 rounded-l-lg">
                <img
                    src={imgSrc}
                    className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-500"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-white text-xl font-bold font-spacegrotesk">{name}</h1>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-white">
                        <svg viewBox="0 0 17 17" id="svg10668507619" className="w-full h-full">
                            <path d="M 9.896 1.963 C 9.917 1.884 9.954 1.809 10.004 1.744 C 10.054 1.679 10.116 1.624 10.187 1.583 C 10.258 1.542 10.337 1.516 10.418 1.505 C 10.5 1.494 10.582 1.5 10.662 1.521 C 11.82 1.823 12.878 2.429 13.724 3.276 C 14.571 4.122 15.177 5.179 15.479 6.338 C 15.5 6.417 15.506 6.5 15.495 6.582 C 15.484 6.663 15.458 6.741 15.417 6.813 C 15.375 6.884 15.321 6.946 15.256 6.996 C 15.19 7.046 15.116 7.083 15.037 7.104 C 14.984 7.118 14.93 7.125 14.875 7.125 C 14.737 7.125 14.603 7.079 14.494 6.995 C 14.385 6.912 14.307 6.794 14.271 6.661 C 14.025 5.715 13.53 4.852 12.839 4.161 C 12.148 3.47 11.285 2.975 10.339 2.729 C 10.26 2.708 10.185 2.671 10.12 2.621 C 10.055 2.571 10 2.509 9.959 2.438 C 9.918 2.367 9.891 2.288 9.88 2.207 C 9.869 2.125 9.875 2.042 9.896 1.963 Z M 9.714 5.229 C 10.791 5.516 11.484 6.208 11.771 7.286 C 11.807 7.419 11.885 7.536 11.994 7.62 C 12.103 7.704 12.237 7.75 12.375 7.75 C 12.43 7.75 12.484 7.743 12.537 7.729 C 12.616 7.708 12.69 7.671 12.756 7.621 C 12.821 7.571 12.875 7.509 12.916 7.438 C 12.957 7.366 12.984 7.288 12.995 7.207 C 13.006 7.125 13 7.042 12.979 6.963 C 12.579 5.466 11.534 4.421 10.037 4.021 C 9.957 4 9.875 3.994 9.793 4.005 C 9.712 4.016 9.634 4.043 9.562 4.084 C 9.491 4.125 9.429 4.18 9.379 4.245 C 9.329 4.31 9.293 4.384 9.271 4.464 C 9.25 4.543 9.245 4.626 9.256 4.707 C 9.266 4.788 9.293 4.867 9.334 4.938 C 9.375 5.009 9.43 5.071 9.495 5.121 C 9.56 5.171 9.635 5.208 9.714 5.229 Z M 16.116 12.678 C 15.976 13.737 15.456 14.708 14.653 15.412 C 13.85 16.115 12.818 16.502 11.75 16.5 C 5.547 16.5 0.5 11.453 0.5 5.25 C 0.498 4.182 0.885 3.15 1.588 2.347 C 2.292 1.543 3.263 1.024 4.322 0.884 C 4.59 0.852 4.861 0.906 5.095 1.04 C 5.329 1.174 5.513 1.381 5.62 1.628 L 7.27 5.312 L 7.27 5.321 C 7.352 5.51 7.386 5.717 7.369 5.923 C 7.352 6.129 7.284 6.327 7.171 6.5 C 7.157 6.521 7.142 6.54 7.127 6.56 L 5.5 8.488 C 6.085 9.677 7.329 10.91 8.534 11.497 L 10.435 9.879 C 10.454 9.863 10.473 9.848 10.494 9.835 C 10.667 9.72 10.866 9.649 11.072 9.63 C 11.279 9.611 11.488 9.644 11.679 9.726 L 11.689 9.73 L 15.37 11.38 C 15.617 11.486 15.824 11.671 15.959 11.905 C 16.093 12.139 16.148 12.41 16.116 12.678 Z M 14.875 12.522 C 14.875 12.522 14.87 12.522 14.866 12.522 L 11.195 10.877 L 9.292 12.495 C 9.274 12.511 9.254 12.525 9.234 12.539 C 9.055 12.659 8.847 12.73 8.631 12.746 C 8.415 12.761 8.199 12.721 8.004 12.628 C 6.541 11.921 5.082 10.473 4.374 9.026 C 4.281 8.832 4.238 8.617 4.252 8.402 C 4.266 8.187 4.335 7.979 4.452 7.799 C 4.466 7.778 4.48 7.758 4.497 7.739 L 6.125 5.808 L 4.484 2.137 C 4.484 2.133 4.484 2.13 4.484 2.127 C 3.727 2.226 3.031 2.598 2.528 3.172 C 2.025 3.747 1.748 4.486 1.75 5.25 C 1.753 7.901 2.807 10.443 4.682 12.318 C 6.557 14.192 9.099 15.247 11.75 15.25 C 12.514 15.253 13.252 14.977 13.827 14.475 C 14.402 13.972 14.775 13.278 14.875 12.521 Z" fill="var(--token-32d8ca55-1e9b-45fa-b6c2-0dd5fd45dd61, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Neutral 100&quot;} */">
                            </path></svg>
                    </div>
                    <p className="text-[#DCDCDC] text-sm font-spacegrotesk">{number}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-white">
                        <svg viewBox="0 0 14 18" id="svg11894320024" className="w-full h-full"><path d="M 7 4 C 6.382 4 5.778 4.183 5.264 4.527 C 4.75 4.87 4.349 5.358 4.113 5.929 C 3.876 6.5 3.814 7.128 3.935 7.735 C 4.056 8.341 4.353 8.898 4.79 9.335 C 5.227 9.772 5.784 10.069 6.39 10.19 C 6.997 10.31 7.625 10.249 8.196 10.012 C 8.767 9.776 9.255 9.375 9.598 8.861 C 9.942 8.347 10.125 7.743 10.125 7.125 C 10.125 6.296 9.796 5.501 9.21 4.915 C 8.624 4.329 7.829 4 7 4 Z M 7 9 C 6.629 9 6.267 8.89 5.958 8.684 C 5.65 8.478 5.41 8.185 5.268 7.843 C 5.126 7.5 5.089 7.123 5.161 6.759 C 5.233 6.395 5.412 6.061 5.674 5.799 C 5.936 5.537 6.27 5.358 6.634 5.286 C 6.998 5.214 7.375 5.251 7.718 5.393 C 8.06 5.535 8.353 5.775 8.559 6.083 C 8.765 6.392 8.875 6.754 8.875 7.125 C 8.875 7.622 8.677 8.099 8.326 8.451 C 7.974 8.802 7.497 9 7 9 Z M 7 0.25 C 5.177 0.252 3.43 0.977 2.141 2.266 C 0.852 3.555 0.127 5.302 0.125 7.125 C 0.125 9.578 1.259 12.178 3.406 14.645 C 4.371 15.759 5.457 16.763 6.645 17.637 C 6.75 17.71 6.875 17.75 7.003 17.75 C 7.131 17.75 7.257 17.71 7.362 17.637 C 8.547 16.762 9.631 15.759 10.594 14.645 C 12.738 12.178 13.875 9.578 13.875 7.125 C 13.873 5.302 13.148 3.555 11.859 2.266 C 10.57 0.977 8.823 0.252 7 0.25 Z M 7 16.344 C 5.709 15.328 1.375 11.598 1.375 7.125 C 1.375 5.633 1.968 4.202 3.023 3.148 C 4.077 2.093 5.508 1.5 7 1.5 C 8.492 1.5 9.923 2.093 10.977 3.148 C 12.032 4.202 12.625 5.633 12.625 7.125 C 12.625 11.596 8.291 15.328 7 16.344 Z" fill="var(--token-32d8ca55-1e9b-45fa-b6c2-0dd5fd45dd61, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Neutral 100&quot;} */"></path></svg>
                    </div>
                    <p className="text-[#DCDCDC] text-sm font-spacegrotesk">{address}</p>
                </div>
            </div>
        </div>
    )
}


export default MapSection