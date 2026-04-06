export const Swimmer = () => (
  <svg width="352" height="500" viewBox="0 0 352 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Building */}
    <rect x="76" y="60" width="200" height="400" rx="12" fill="#e8ecf4" stroke="#aabade" strokeWidth="2"/>

    {/* Elevator shaft */}
    <rect x="116" y="100" width="120" height="320" rx="8" fill="#d5ddf0" stroke="#7e97cc" strokeWidth="1.5"/>

    {/* Elevator cabin */}
    <rect x="126" y="210" width="100" height="120" rx="6" fill="#243C70"/>
    {/* Cabin shine */}
    <rect x="134" y="218" width="14" height="104" rx="4" fill="#2c57a8" opacity="0.5"/>

    {/* Cabin doors */}
    <line x1="176" y1="214" x2="176" y2="326" stroke="#1c2e56" strokeWidth="2"/>
    {/* Door left panel */}
    <rect x="128" y="214" width="46" height="110" rx="3" fill="#2c57a8" opacity="0.3"/>
    {/* Door right panel */}
    <rect x="178" y="214" width="46" height="110" rx="3" fill="#2c57a8" opacity="0.3"/>

    {/* Cabin buttons panel */}
    <rect x="153" y="248" width="20" height="38" rx="3" fill="#1c2e56"/>
    <circle cx="163" cy="258" r="4" fill="#5375ba"/>
    <circle cx="163" cy="272" r="4" fill="#5375ba"/>
    <circle cx="163" cy="286" r="4" fill="#aabade"/>

    {/* Guide rails */}
    <line x1="122" y1="100" x2="122" y2="420" stroke="#7e97cc" strokeWidth="2.5"/>
    <line x1="230" y1="100" x2="230" y2="420" stroke="#7e97cc" strokeWidth="2.5"/>

    {/* Floor lines */}
    <line x1="116" y1="180" x2="236" y2="180" stroke="#aabade" strokeWidth="1" strokeDasharray="4 4"/>
    <line x1="116" y1="260" x2="236" y2="260" stroke="#aabade" strokeWidth="1" strokeDasharray="4 4"/>
    <line x1="116" y1="340" x2="236" y2="340" stroke="#aabade" strokeWidth="1" strokeDasharray="4 4"/>

    {/* Floor numbers */}
    <text x="97" y="185" fontFamily="sans-serif" fontSize="11" fill="#7e97cc">3</text>
    <text x="97" y="265" fontFamily="sans-serif" fontSize="11" fill="#243C70" fontWeight="bold">2</text>
    <text x="97" y="345" fontFamily="sans-serif" fontSize="11" fill="#7e97cc">1</text>

    {/* Up/down arrows on shaft */}
    <path d="M244 168 L250 158 L256 168" fill="#243C70" opacity="0.6"/>
    <path d="M244 192 L250 202 L256 192" fill="#243C70" opacity="0.6"/>

    {/* Cable */}
    <line x1="176" y1="100" x2="176" y2="210" stroke="#1c2e56" strokeWidth="2.5"/>

    {/* Top pulley */}
    <circle cx="176" cy="96" r="10" fill="#243C70"/>
    <circle cx="176" cy="96" r="5" fill="#5375ba"/>

    {/* Ground shadow */}
    <ellipse cx="176" cy="478" rx="80" ry="12" fill="#243C70" opacity="0.1"/>

    {/* Building windows */}
    <rect x="96" y="120" width="14" height="18" rx="3" fill="#aabade" opacity="0.6"/>
    <rect x="242" y="120" width="14" height="18" rx="3" fill="#aabade" opacity="0.6"/>
    <rect x="96" y="380" width="14" height="18" rx="3" fill="#aabade" opacity="0.6"/>
    <rect x="242" y="380" width="14" height="18" rx="3" fill="#aabade" opacity="0.6"/>
  </svg>
);
