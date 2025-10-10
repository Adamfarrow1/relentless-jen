import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, PiggyBank, CheckCircle2 } from "lucide-react"

export default function LifeAnnuitiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <TrendingUp className="h-16 w-16 mx-auto text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Life Insurance & Annuities</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Protect your clients' futures and help them build lasting financial security with comprehensive life
              insurance and annuity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Building Financial Security for Generations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Life insurance and annuities are essential tools for protecting families and securing retirement income.
                We offer a comprehensive range of products to meet every client's unique needs.
              </p>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  From term life insurance for young families to whole life policies for estate planning and annuities
                  for retirement income, Relentless Jen provides access to competitive products from top-rated carriers. Our
                  educational resources and visual tools make it easy to explain complex concepts to your clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Insurance Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Life Insurance Products</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Flexible coverage options to protect what matters most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Term Life */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Term Life Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Affordable protection for a specific period, ideal for young families and those with temporary
                    coverage needs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>10, 15, 20, or 30-year terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Level premium options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Conversion privileges available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Whole Life */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Whole Life Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Permanent coverage with guaranteed cash value accumulation and lifelong protection for estate
                    planning needs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Lifetime coverage guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Cash value growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Dividend potential</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Universal Life */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Universal Life Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Flexible permanent coverage with adjustable premiums and death benefits to adapt to changing needs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible premium payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Adjustable death benefit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cash value accumulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Annuities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Annuity Products</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guaranteed retirement income solutions for financial peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fixed Annuities */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Fixed Annuities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Guaranteed interest rates and predictable income streams for conservative investors seeking
                    stability in retirement.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guaranteed minimum interest rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tax-deferred growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Predictable income options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Principal protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Variable Annuities */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Variable Annuities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Investment-linked annuities with growth potential through market participation and optional income
                    guarantees.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Market-based growth potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Multiple investment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Optional living benefit riders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Death benefit protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Educational Resources & Support</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide the tools and training you need to confidently sell life insurance and annuities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Visual Sales Tools</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access professional illustrations and calculators to help clients understand complex products and
                    make informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Product Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive training on all life insurance and annuity products, including underwriting guidelines
                    and sales strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Case Design Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expert assistance with complex cases, including estate planning and business succession strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Compliance Guidance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stay compliant with up-to-date information on regulations, suitability requirements, and best
                    practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/10 max-w-3xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Start Offering Life Insurance & Annuities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact us to learn more about our life insurance and annuity products and how to get contracted with
                our carrier partners.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact an Agent</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
