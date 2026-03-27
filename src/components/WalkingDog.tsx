import './WalkingDog.css';

const WalkingDog = () => (
  <>
    <div className="walking-dog-spacer" />
    <div className="walking-dog-track" aria-hidden="true">
      <div className="walking-dog-character">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="walking-dog-svg">
          {/* Tail */}
          <g className="wd-tail">
            <path d="M20 45 Q5 30 12 18 Q15 13 18 18 Q22 28 22 42" fill="#C8860A" stroke="#A06B08" strokeWidth="1" strokeLinejoin="round" />
          </g>

          {/* Body */}
          <ellipse cx="80" cy="52" rx="55" ry="26" fill="#C8860A" className="wd-body" />
          <ellipse cx="80" cy="55" rx="48" ry="20" fill="#D4A045" />

          {/* Back left leg */}
          <g className="wd-leg-bl">
            <rect x="38" y="68" width="12" height="32" rx="6" fill="#A06808" />
            <ellipse cx="44" cy="100" rx="7" ry="4" fill="#8B5A08" />
            <circle cx="44" cy="99" r="2.5" fill="#6B4508" />
          </g>

          {/* Back right leg */}
          <g className="wd-leg-br">
            <rect x="52" y="68" width="12" height="32" rx="6" fill="#A06808" />
            <ellipse cx="58" cy="100" rx="7" ry="4" fill="#8B5A08" />
            <circle cx="58" cy="99" r="2.5" fill="#6B4508" />
          </g>

          {/* Front left leg */}
          <g className="wd-leg-fl">
            <rect x="100" y="68" width="12" height="32" rx="6" fill="#A06808" />
            <ellipse cx="106" cy="100" rx="7" ry="4" fill="#8B5A08" />
            <circle cx="106" cy="99" r="2.5" fill="#6B4508" />
          </g>

          {/* Front right leg */}
          <g className="wd-leg-fr">
            <rect x="114" y="68" width="12" height="32" rx="6" fill="#A06808" />
            <ellipse cx="120" cy="100" rx="7" ry="4" fill="#8B5A08" />
            <circle cx="120" cy="99" r="2.5" fill="#6B4508" />
          </g>

          {/* Collar */}
          <ellipse cx="120" cy="52" rx="8" ry="14" fill="#C8714A" opacity="0.8" />
          <circle cx="120" cy="62" r="3" fill="#F6AD55" />

          {/* Head */}
          <g className="wd-head">
            {/* Left ear */}
            <g className="wd-ear-l">
              <ellipse cx="130" cy="30" rx="8" ry="16" fill="#A06B08" transform="rotate(-20 130 30)" />
              <ellipse cx="131" cy="32" rx="5" ry="11" fill="#D4A045" transform="rotate(-20 131 32)" />
            </g>
            {/* Right ear */}
            <g className="wd-ear-r">
              <ellipse cx="158" cy="28" rx="8" ry="16" fill="#A06B08" transform="rotate(15 158 28)" />
              <ellipse cx="157" cy="30" rx="5" ry="11" fill="#D4A045" transform="rotate(15 157 30)" />
            </g>
            {/* Head shape */}
            <circle cx="145" cy="34" r="22" fill="#C8860A" />
            <circle cx="145" cy="37" r="18" fill="#D4A045" />
            {/* Left eye */}
            <ellipse cx="138" cy="32" rx="5" ry="4" fill="white" stroke="#8B6914" strokeWidth="0.8" />
            <circle cx="139" cy="33" r="2.2" fill="#2D2D2D" />
            <circle cx="138" cy="31.5" r="1" fill="white" opacity="0.7" />
            {/* Right eye */}
            <ellipse cx="154" cy="31" rx="5" ry="4" fill="white" stroke="#8B6914" strokeWidth="0.8" />
            <circle cx="155" cy="32" r="2.2" fill="#2D2D2D" />
            <circle cx="154" cy="30.5" r="1" fill="white" opacity="0.7" />
            {/* Happy squint lines */}
            <path d="M133 34 Q136 36 140 34" stroke="#A06B08" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M150 33 Q153 35 157 33" stroke="#A06B08" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5" />
            {/* Snout */}
            <ellipse cx="162" cy="40" rx="10" ry="8" fill="#E8A830" />
            {/* Nose */}
            <ellipse cx="168" cy="38" rx="4" ry="3" fill="#2D2D2D" />
            <ellipse cx="167" cy="37" rx="1.5" ry="1" fill="#555" opacity="0.4" />
            {/* Mouth */}
            <path d="M160 44 Q164 48 168 43" stroke="#A06B08" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Tongue (visible on hover via CSS) */}
            <ellipse className="wd-tongue" cx="164" cy="49" rx="4" ry="6" fill="#E87070" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  </>
);

export default WalkingDog;
