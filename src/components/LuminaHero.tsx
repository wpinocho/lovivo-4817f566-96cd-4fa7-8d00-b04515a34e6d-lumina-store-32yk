import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

/**
 * LUMINA HERO SECTION
 * Bento grid layout with lifestyle image and featured products
 */

export const LuminaHero = () => {
  return (
    <section className="relative">
      {/* Bento Grid Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Large Hero Image Block */}
          <div className="lg:row-span-2 relative overflow-hidden rounded-xl border border-border bg-card group">
            <div className="aspect-[4/3] lg:aspect-[3/4] relative">
              <img 
                src="/hero-lumina.jpg" 
                alt="Future Objects" 
                className="w-full h-full object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating CTA */}
              <div className="absolute bottom-6 left-6 right-6">
                <Link to="/#products">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slogan Block */}
          <div className="rounded-xl border border-border bg-card p-8 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4">
                Future<br/>Objects.
              </h1>
              <p className="text-muted-foreground text-lg max-w-md">
                Curated minimal tech and accessories for the modern age.
              </p>
            </div>
          </div>

          {/* Featured Product Block */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
                  NEW ARRIVAL
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Noir Wireless
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Premium studio-grade headphones
                </p>
                <div className="price text-3xl font-bold text-foreground">
                  $299
                </div>
              </div>
            </div>
            <Link to="/products/noir-wireless-headphones" className="mt-4">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}