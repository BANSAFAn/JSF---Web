
export const AnimatedFlags = {
  US: () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="animate-pulse">
      <rect width="20" height="15" fill="#B22234"/>
      <rect y="1" width="20" height="1" fill="white"/>
      <rect y="3" width="20" height="1" fill="white"/>
      <rect y="5" width="20" height="1" fill="white"/>
      <rect y="7" width="20" height="1" fill="white"/>
      <rect y="9" width="20" height="1" fill="white"/>
      <rect y="11" width="20" height="1" fill="white"/>
      <rect y="13" width="20" height="1" fill="white"/>
      <rect width="8" height="8" fill="#3C3B6E"/>
      <g fill="white" className="animate-pulse">
        <circle cx="1.5" cy="1.5" r="0.3"/>
        <circle cx="3" cy="1.5" r="0.3"/>
        <circle cx="4.5" cy="1.5" r="0.3"/>
        <circle cx="6" cy="1.5" r="0.3"/>
      </g>
    </svg>
  ),
  RU: () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="hover:scale-110 transition-transform">
      <rect width="20" height="5" fill="white"/>
      <rect y="5" width="20" height="5" fill="#0052B4"/>
      <rect y="10" width="20" height="5" fill="#D80027"/>
    </svg>
  ),
  UA: () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="hover:scale-110 transition-transform">
      <rect width="20" height="7.5" fill="#005BBB"/>
      <rect y="7.5" width="20" height="7.5" fill="#FFD500"/>
    </svg>
  ),
  DE: () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="hover:scale-110 transition-transform">
      <rect width="20" height="5" fill="#000"/>
      <rect y="5" width="20" height="5" fill="#D00"/>
      <rect y="10" width="20" height="5" fill="#FFCE00"/>
    </svg>
  ),
  PL: () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="hover:scale-110 transition-transform">
      <rect width="20" height="7.5" fill="white"/>
      <rect y="7.5" width="20" height="7.5" fill="#DC143C"/>
    </svg>
  )
};
