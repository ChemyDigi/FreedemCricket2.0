const AthleteSection = () => {
  const stats = [
    { number: "85", label: "PROFESSIONAL TRAINERS" },
    { number: "120", label: "MATCHES PLAYED" },
    { number: "820", label: "EVENT PROGRAMS" },
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="bg-[#070513] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-foreground mb-6">
              Pro & College Athletes:<br />
              Join the Faction and<br />
              Own Your Future
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mb-8">
              At Sport Faction, we believe in creating a unique digital ecosystem that
              allows athletes to connect with fans.
            </p>
            
            {/* Avatar Group */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Athlete ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-section object-cover"
                  />
                ))}
              </div>
              <div className="ml-1 w-10 h-10 rounded-full bg-avatar-badge flex items-center justify-center">
                <span className="text-avatar-badge-foreground text-xs font-medium">30+</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider - Changed to grey */}
          <div className="hidden lg:block w-px bg-gray-500 self-stretch" />

          {/* Right Column */}
          <div className="lg:w-1/2 lg:pl-12">
            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
                    {stat.number}
                    <span className="text-stat-accent">+</span>
                  </div>
                  <p className="text-[10px] md:text-xs tracking-wider text-muted-foreground mt-2 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Simple CTA Button */}
            <button className="bg-[#AE111C] hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium transition-colors duration-200">
              Explore Our Coaches
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;