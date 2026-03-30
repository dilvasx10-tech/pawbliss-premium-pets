const StickyTopBar = () => (
  <div
    className="sticky top-0 z-50 py-2.5 px-4 flex items-center justify-center gap-3"
    style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7', fontSize: 13 }}
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#C8714A' }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#C8714A' }} />
    </span>
    <span className="tracking-wide">
      🐾 ORDER TODAY — Get $45 in FREE Digital Bonuses | Instant Download After Purchase
    </span>
  </div>
);

export default StickyTopBar;
