import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {logic.success ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Subscribed ✓
                </h3>
                <p className="text-muted-foreground text-lg">
                  You're on the list. Expect greatness.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    New drops, exclusive access, and design insights. No spam, just signal.
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="relative border border-border rounded-xl bg-card p-4 font-mono text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground select-none">$</span>
                      <Input 
                        type="email"
                        placeholder="subscribe --email=your@email.com"
                        value={logic.email}
                        onChange={(e) => logic.setEmail(e.target.value)}
                        disabled={logic.isSubmitting}
                        className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 font-mono p-0"
                        required
                      />
                      <Button 
                        type="submit"
                        disabled={logic.isSubmitting}
                        size="sm"
                        className="font-semibold"
                      >
                        {logic.isSubmitting ? 'Processing...' : 'Execute →'}
                      </Button>
                    </div>
                  </div>
                </form>
                
                {logic.error && (
                  <p className="text-center text-sm text-destructive font-mono">
                    Error: {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};