import React, { useState, useRef } from 'react';

const HomeText = () => {
  // State for tracking mouse movement rotation
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation degrees (max 10 degrees tilt)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset to normal when mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  return (
    // ✅ Grey shape mein py-10 aur md:py-16 add kiya hy ta k white shape highlight ho saky.
    <section className="relative w-full py-10 md:py-16 px-4 md:px-8 flex justify-center items-center overflow-hidden bg-[#F8FAFC]">
      
      {/* --- Background Glowing Orbs for 3D Depth --- */}
      <div className="absolute top-0 left-0 md:left-20 w-72 h-72 bg-[#255235] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 md:right-20 w-72 h-72 bg-[#10B981] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

      {/* --- 3D Perspective Container --- */}
      <div 
        style={{ perspective: '1000px' }} 
        className="w-full max-w-6xl z-10"
      >
        {/* --- The Interactive 3D Card --- */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.6s ease-out' : 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d' // Zaroori hai 3D depth k liye
          }}
          className="relative bg-white/70 backdrop-blur-xl border border-white/50 py-6 px-8 md:py-8 md:px-16 lg:py-10 lg:px-20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(37,82,53,0.15)] group"
        >
          {/* --- Content pushed forward in Z-Space (Float Effect) --- */}
          <div 
            style={{ transform: 'translateZ(60px)' }} // Ye line text ko screen ki taraf bahar nikalti hy
            className="flex flex-col gap-6"
          >
            {/* Small accent line */}
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-1 bg-[#255235] rounded-full"></span>
              <span className="text-[#255235] font-bold tracking-widest uppercase text-sm drop-shadow-sm">About Institute</span>
            </div>
            
            <h2 
              style={{ fontSize: 'clamp(36px, 6vw, 64px)' }} 
              className="font-extrabold text-gray-900 leading-tight drop-shadow-sm"
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#255235] to-[#10B981]'>Who</span> We Are
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed w-full lg:w-[85%] font-medium">
              <strong className="text-gray-900 drop-shadow-sm">Chach Valley Institute</strong> is a leading educational center offering a wide range of professional and religious courses. 
              From Web Development, Graphic Designing, and other in-demand skills to Online Quran Teaching, we empower students with knowledge and values.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed w-full lg:w-[85%] font-medium">
              Our flexible online classes ensure that learning never stops, no matter where you are. Join us today to build your future with confidence and faith.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HomeText;