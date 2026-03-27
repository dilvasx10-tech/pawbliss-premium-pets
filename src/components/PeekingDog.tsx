import './PeekingDog.css';

const PeekingDog = () => (
  <div className="peeking-dog-wrapper" aria-hidden="true">
    {/* Speech bubble outside clip-path container */}
    <div className="speech-bubble-anchor">
      <div className="speech-bubble">Woof! 🐾</div>
    </div>

    <div className="peeking-dog">
      <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" className="dog-svg">
        {/* Tail (visible on hover) */}
        <g className="dog-tail">
          <path d="M105 68 Q115 55 108 42 Q104 36 100 40 Q96 48 100 60 Z" fill="#C8860A" stroke="#A06B08" strokeWidth="1" strokeLinejoin="round"/>
        </g>

        {/* Left ear */}
        <ellipse cx="25" cy="42" rx="12" ry="20" fill="#A06B08" transform="rotate(-15 25 42)" />
        <ellipse cx="26" cy="44" rx="8" ry="15" fill="#D4A045" transform="rotate(-15 26 44)" />

        {/* Right ear */}
        <ellipse cx="95" cy="42" rx="12" ry="20" fill="#A06B08" transform="rotate(15 95 42)" />
        <ellipse cx="94" cy="44" rx="8" ry="15" fill="#D4A045" transform="rotate(15 94 44)" />

        {/* Head */}
        <ellipse cx="60" cy="45" rx="32" ry="28" fill="#C8860A" />
        <ellipse cx="60" cy="48" rx="28" ry="22" fill="#D4A045" />

        {/* Forehead */}
        <ellipse cx="60" cy="35" rx="22" ry="14" fill="#C8860A" />

        {/* Left eye */}
        <g className="dog-eyes">
          <ellipse cx="47" cy="42" rx="8" ry="9" fill="white" stroke="#8B6914" strokeWidth="1" />
          <circle className="dog-pupil" cx="47" cy="43" r="4" fill="#2D2D2D" />
          <circle cx="45" cy="41" r="1.5" fill="white" opacity="0.8" />
        </g>

        {/* Right eye */}
        <g className="dog-eyes">
          <ellipse cx="73" cy="42" rx="8" ry="9" fill="white" stroke="#8B6914" strokeWidth="1" />
          <circle className="dog-pupil" cx="73" cy="43" r="4" fill="#2D2D2D" />
          <circle cx="71" cy="41" r="1.5" fill="white" opacity="0.8" />
        </g>

        {/* Eyebrows */}
        <path d="M38 33 Q43 29 52 32" stroke="#A06B08" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 32 Q77 29 82 33" stroke="#A06B08" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Snout */}
        <ellipse cx="60" cy="55" rx="14" ry="10" fill="#E8C068" />

        {/* Nose */}
        <ellipse cx="60" cy="52" rx="5" ry="3.5" fill="#2D2D2D" />
        <ellipse cx="59" cy="51" rx="2" ry="1.2" fill="#555" opacity="0.5" />

        {/* Mouth */}
        <path d="M55 56 Q60 61 65 56" stroke="#A06B08" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="60" y1="55" x2="60" y2="58" stroke="#A06B08" strokeWidth="1.5" strokeLinecap="round" />

        {/* Paw gripping the bottom */}
        <g className="dog-paw">
          <ellipse cx="45" cy="82" rx="14" ry="7" fill="#C8860A" />
          <ellipse cx="45" cy="82" rx="11" ry="5" fill="#D4A045" />
          <ellipse className="dog-toe" cx="36" cy="79" rx="4" ry="5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <ellipse className="dog-toe" cx="43" cy="77" rx="4" ry="5.5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <ellipse className="dog-toe" cx="50" cy="78" rx="4" ry="5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <circle cx="36" cy="77" r="2" fill="#E8C068" />
          <circle cx="43" cy="75" r="2" fill="#E8C068" />
          <circle cx="50" cy="76" r="2" fill="#E8C068" />
        </g>

        {/* Second paw */}
        <g className="dog-paw dog-paw-right">
          <ellipse cx="75" cy="82" rx="14" ry="7" fill="#C8860A" />
          <ellipse cx="75" cy="82" rx="11" ry="5" fill="#D4A045" />
          <ellipse className="dog-toe" cx="70" cy="78" rx="4" ry="5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <ellipse className="dog-toe" cx="77" cy="77" rx="4" ry="5.5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <ellipse className="dog-toe" cx="84" cy="79" rx="4" ry="5" fill="#C8860A" stroke="#A06B08" strokeWidth="0.8" />
          <circle cx="70" cy="76" r="2" fill="#E8C068" />
          <circle cx="77" cy="75" r="2" fill="#E8C068" />
          <circle cx="84" cy="77" r="2" fill="#E8C068" />
        </g>
      </svg>
    </div>
  </div>
);

export default PeekingDog;
