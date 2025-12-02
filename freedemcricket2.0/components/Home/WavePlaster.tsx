interface WavePlasterProps {
  className?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

export default function WavePlaster({ 
  className = "",
  height = 'lg',
  colors = {
    primary: '#1E84CA',
    secondary: '#AE111C'
  }
}: WavePlasterProps) {
  
  const heightClasses = {
    sm: 'h-24 md:h-32 lg:h-40',
    md: 'h-32 md:h-40 lg:h-48',
    lg: 'h-40 md:h-48 lg:h-56',
    xl: 'h-48 md:h-56 lg:h-64'
  };
  
  return (
    <div className={`relative w-full z-30 ${className}`}>
      <div className="relative">
        <svg 
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className={`w-full ${heightClasses[height]}`}
        >
          {/* Base layer */}
          <path 
            d="M0,120L80,128C160,136,320,152,480,152C640,152,800,136,960,128C1120,120,1280,120,1360,120L1440,120L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            style={{ fill: colors.primary }}
          ></path>
          
          {/* Pattern layer 1 */}
          <path 
            d="M0,80L80,88C160,96,320,112,480,112C640,112,800,96,960,88C1120,80,1280,80,1360,80L1440,80L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            opacity=".7"
            style={{ fill: colors.secondary }}
          ></path>
          
          {/* Pattern layer 2 */}
          <path 
            d="M0,160L80,152C160,144,320,128,480,128C640,128,800,144,960,152C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            opacity=".4"
            style={{ fill: colors.primary }}
          ></path>
          
          {/* Top edge detail */}
          <path 
            d="M0,200L120,180C240,160,480,120,720,120C960,120,1200,160,1320,180L1440,200L1440,200L1320,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z"
            style={{ fill: colors.secondary }}
            opacity=".8"
          ></path>
        </svg>
      </div>
    </div>
  );
}