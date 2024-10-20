const LoginSvg = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Linear Gradient Definition */}
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(255,0,102)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgb(255,204,0)", stopOpacity: 1 }} />
        </linearGradient>
  
        {/* Drop Shadow Filter Definition */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="4" stdDeviation="4" floodColor="rgba(0, 0, 0, 0.5)" />
        </filter>
      </defs>
      
      {/* Apply Gradient and Shadow */}
      <path
        fill="url(#grad1)"
        d="M53.3,-64.6C68.5,-50.8,79.7,-33.4,84,-14.1C88.3,5.3,85.7,26.7,75.6,43.2C65.5,59.7,47.9,71.3,31,71.6C14.1,71.9,-2,60.7,-21,55C-40.1,49.3,-62.2,49,-74.4,38C-86.7,27.1,-89,5.5,-81,-9.8C-73,-25.1,-54.6,-34.1,-39.4,-47.8C-24.1,-61.6,-12.1,-80,3.5,-84.2C19.1,-88.4,38.2,-78.3,53.3,-64.6Z"
        transform="translate(100 100)"
        filter="url(#dropShadow)"
      />
    </svg>
  );
  
  export default LoginSvg;
  