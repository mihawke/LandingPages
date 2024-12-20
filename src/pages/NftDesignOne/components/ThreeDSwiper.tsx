import React, { useState } from "react";

const ThreeDSwiper = () => {
    const slides = [
        { id: 1, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 2, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 3, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 4, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 5, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 6, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 7, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
        { id: 8, src: "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611169.jpg?t=st=1734672386~exp=1734675986~hmac=28b6c91d9fcad93140371b614a9ab3987d2ee91a092d3b430555fa46ac8d2b65&w=740" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-10 bg-gray-100">
            <div className="relative w-3/4 h-96 flex justify-center items-center overflow-hidden">
                {slides.map((slide, index) => {
                    const offset = index - currentIndex;

                    return (
                        <div
                          key={slide.id}
                          className="absolute w-64 h-80 rounded-lg shadow-lg overflow-hidden transition-transform duration-500"
                          style={{
                            transform: `
                              translateX(${offset * 50}%) 
                              scale(${offset === 0 ? 1 : 0.8})
                            `,
                            zIndex: slides.length - Math.abs(offset),
                            opacity: offset === 0 ? 1 : 0.5,
                          }}
                        >
                          <img
                            src={slide.src}
                            alt={`Slide ${slide.id}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                })}
            </div>
            <div className="mt-4 flex justify-between w-3/4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ThreeDSwiper;
