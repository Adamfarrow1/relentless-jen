import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, CheckCircle2 } from "lucide-react"

export default function HealthInsurancePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="h-16 w-16 mx-auto text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Health Insurance Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive health coverage options from trusted carriers to meet the diverse needs of your clients.
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
                Protecting Health, Securing Peace of Mind
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with top-rated health insurance carriers to provide your clients with comprehensive coverage
                options that fit their needs and budget.
              </p>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Whether your clients are looking for Medicare Advantage plans, ACA marketplace coverage, or
                  supplemental insurance options, Relentless Jen gives you access to a wide range of products from leading
                  carriers. Our streamlined contracting process and dedicated support team make it easy to offer the
                  right solutions to every client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Available Health Plans</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diverse coverage options to meet every client's unique healthcare needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Medicare Advantage */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Medicare Advantage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive Medicare coverage that goes beyond Original Medicare, often including prescription
                    drug coverage, dental, vision, and hearing benefits.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>HMO and PPO plan options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Prescription drug coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Additional benefits included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ACA Plans */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">ACA Marketplace Plans</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Affordable Care Act compliant health insurance plans with essential health benefits and potential
                    subsidies for eligible individuals and families.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Bronze, Silver, Gold, Platinum tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Subsidy eligibility assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Essential health benefits covered</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Supplemental */}
              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Supplemental Coverage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Additional insurance options to fill coverage gaps and provide extra financial protection for
                    unexpected medical expenses.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hospital indemnity plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Critical illness coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Accident insurance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Partnerships */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted Carrier Partnerships</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with nationally recognized insurance carriers known for their financial strength, customer
                service, and comprehensive coverage options.
              </p>
            </div>

            <Card className="border-border bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Carrier Logo</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Access to multiple top-rated carriers gives you the flexibility to find the perfect plan for every
                  client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Benefits for Agents */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Sell Health Insurance with Relentless Jen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Fast Contracting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get appointed with multiple carriers quickly through our streamlined contracting process and
                    dedicated support team.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Competitive Commissions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Earn competitive commissions with transparent payment structures and timely processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Product Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access comprehensive training on all health insurance products to confidently serve your clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Marketing Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional marketing materials and resources to help you attract and retain health insurance
                    clients.
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
          <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10 max-w-3xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Ready to Offer Health Insurance?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact us today to learn more about our health insurance products and how to get contracted with our
                carrier partners.
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
