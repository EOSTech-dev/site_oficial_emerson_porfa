import React from 'react';

/**
 * Fixed atmospheric layer behind everything: a faint audio UI (waveform, EQ grid,
 * timecode ticks). The sonic equivalent of the reference's dashboard texture.
 */
const Ambient: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* warm atmospheric glow, top-right, like the reference */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,82,0,0.10) 0%, rgba(255,82,0,0.03) 40%, transparent 70%)',
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full animate-drift"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        fill="none"
        style={{ opacity: 0.05 }}
      >
        {/* horizontal grid */}
        {[150, 300, 450, 600, 750].map((y) => (
          <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#f4f2ef" strokeWidth="1" />
        ))}
        {/* timecode ticks */}
        {Array.from({ length: 48 }).map((_, i) => (
          <line
            key={i}
            x1={i * 30}
            y1="450"
            x2={i * 30}
            y2={i % 4 === 0 ? 438 : 444}
            stroke="#f4f2ef"
            strokeWidth="1"
          />
        ))}
        {/* EQ curve */}
        <path
          d="M0 620 C 240 620, 300 540, 480 540 S 720 660, 960 600 S 1200 500, 1440 520"
          stroke="#ff5200"
          strokeWidth="1.5"
        />
        {/* waveform */}
        <path
          d="M0 300 l40 0 l14 -70 l18 150 l16 -120 l20 90 l14 -40 l60 0 l16 -95 l18 180 l16 -130 l20 70 l14 -30 l70 0 l14 -60 l18 120 l16 -90 l60 0 l16 -110 l18 210 l16 -150 l20 80 l60 0 l14 -50 l18 100 l16 -70 l70 0 l16 -100 l18 190 l16 -130 l20 70 l60 0 l14 -40 l18 80 l16 -60 l400 0"
          stroke="#f4f2ef"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default Ambient;
