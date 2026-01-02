/**
 * LUMINA MARQUEE BAR
 * Infinite scrolling announcement bar
 */

export const MarqueeBar = () => {
  const announcements = [
    'FREE SHIPPING WORLDWIDE',
    'NEW COLLECTION DROPPED',
    'DESIGNED IN TOKYO',
    'FREE SHIPPING WORLDWIDE',
    'NEW COLLECTION DROPPED',
    'DESIGNED IN TOKYO',
  ]

  return (
    <div className="relative overflow-hidden bg-foreground text-background py-3 border-y border-border">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {announcements.map((text, i) => (
          <span 
            key={i} 
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider"
          >
            {text}
            <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}