import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="group bg-card border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block relative">
              <div className="aspect-square bg-muted rounded-t-xl overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover image-zoom"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-md font-semibold">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-md font-semibold">
                      Featured
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-muted-foreground text-background text-xs px-2 py-1 rounded-md font-semibold">
                      Out of stock
                    </span>
                  )}
                </div>

                {/* Quick Add Button - slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      logic.onAddToCartSuccess()
                      logic.handleAddToCart()
                    }}
                    disabled={!logic.canAddToCart}
                    className="w-full rounded-none rounded-b-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    size="sm"
                  >
                    {logic.inStock ? 'Quick Add' : 'Out of stock'}
                  </Button>
                </div>
              </div>
            </Link>

            <div className="p-4">
              <h3 className="font-bold text-base mb-1 line-clamp-1 text-foreground">
                {logic.product.title}
              </h3>
              <p className="text-muted-foreground text-xs mb-3 uppercase tracking-wider">
                {logic.product.tags?.[0] || 'Product'}
              </p>

            {logic.hasVariants && logic.options && (
              <div className="mb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-medium text-black mb-1">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-6 w-6 rounded-full border ${
                                logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''
                              }`}
                              style={{ 
                                backgroundColor: swatch, 
                                borderColor: '#e5e7eb'
                              }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border rounded px-2 py-1 text-xs font-medium ${
                              isSelected 
                                ? 'border-black bg-black text-white' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-gray-300 bg-white text-gray-700 opacity-40'
                                  : 'border-gray-300 bg-white text-gray-700'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="price text-xl font-bold text-foreground">
                      {logic.formatMoney(logic.currentPrice)}
                    </span>
                    {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                      <span className="price text-sm text-muted-foreground line-through">
                        {logic.formatMoney(logic.currentCompareAt)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}