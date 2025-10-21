import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, GraduationCap, LinkIcon, Shield, Users } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function AgentResourcesPage() {
  const resourceCategories = [
    {
      title: "Partner Links",
      description: "Quick access to our trusted partner portals and resources",
      icon: LinkIcon,
      href: "/agent-resources/partner-links",
      color: "primary",
    },
    {
      title: "Carrier Links",
      description: "Direct links to carrier portals for quoting, applications, and policy management",
      icon: Shield,
      href: "/agent-resources/carrier-links",
      color: "accent",
    },
    {
      title: "Certification Links",
      description: "Access certification courses and requirements for all our carrier partners",
      icon: GraduationCap,
      href: "/agent-resources/certification-links",
      color: "primary",
    },
    {
      title: "ACA Links",
      description: "Resources and tools for Affordable Care Act marketplace plans",
      icon: FileText,
      href: "/agent-resources/aca-links",
      color: "accent",
    },
    {
      title: "Resources Library",
      description: "Comprehensive training materials, guides, and marketing resources",
      icon: BookOpen,
      href: "/agent-resources/resources-library",
      color: "primary",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Users className="h-16 w-16 mx-auto text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Agent Resources</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything you need to succeed as an independent insurance agent, all in one convenient location.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Success is Our Priority</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide comprehensive resources, training, and support to help you build and grow your insurance
                  business with confidence.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    From carrier certifications and training materials to compliance resources and marketing support,
                    Relentless Jen gives you access to everything you need to serve your clients effectively and grow your
                    business. Our dedicated support team is always here to help you navigate challenges and seize
                    opportunities.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Available Resources</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive tools and materials to support every aspect of your business
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <FadeIn key={category.href} delay={0.1 + index * 0.1}>
                    <Link href={category.href}>
                      <Card className="border-border h-full hover:border-primary transition-colors">
                        <CardContent className="p-8 space-y-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-${category.color}/10 flex items-center justify-center`}
                          >
                            <Icon className={`h-6 w-6 text-${category.color}`} />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contracting Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Request Contracting</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to get contracted with our carrier partners? Submit your information and our team will guide you
                  through the process.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="license" className="text-sm font-medium text-foreground">
                        License Number *
                      </label>
                      <input
                        type="text"
                        id="license"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-medium text-foreground">
                        Licensed State(s) *
                      </label>
                      <input
                        type="text"
                        id="state"
                        placeholder="e.g., CA, TX, FL"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="products" className="text-sm font-medium text-foreground">
                        Products of Interest *
                      </label>
                      <select
                        id="products"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select products...</option>
                        <option value="health">Health Insurance</option>
                        <option value="life">Life Insurance</option>
                        <option value="annuities">Annuities</option>
                        <option value="all">All Products</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your experience and goals..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Contracting Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section> */}

      {/* Support Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Need Help?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dedicated support team is here to assist you with any questions about resources, contracting, or
                growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:9175572405">Call (917) 557-2405</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
