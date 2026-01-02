/**
 * LUMINA FEATURE SECTION
 * Dark mode philosophy section
 */

export const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-900 text-white py-24">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-8 text-xs font-semibold tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
            OUR PHILOSOPHY
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Less is more.<br/>
            Always has been.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto">
            We believe in objects that do one thing exceptionally well. 
            No compromises. No clutter. Just pure, functional beauty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-white/60 text-sm tracking-wider">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/60 text-sm tracking-wider">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/60 text-sm tracking-wider">Products Curated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}