const VideoPlayer = () => {
  return (
    <section className='bg-black py-20 min-h-screen w-auto flex flex-col items-center'>
      <video
        src="https://videos.pexels.com/video-files/5319089/5319089-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        className="w-[60%] h-auto border border-white/30 rounded-lg"
      />
    </section>
  )
}

export default VideoPlayer