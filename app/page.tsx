import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Heart, TrendingUp, BookOpen, Award } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover min-h-screen">
            <source src="/running.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Fallback background image */}

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <FadeIn direction="down" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white text-balance leading-[1.1] drop-shadow-lg">
                Empowering <span className="text-red-400">Agents.</span>
                <br />
                Protecting <span className="text-red-400">Families.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Comprehensive insurance solutions and support for independent agents. From health insurance to life and
                annuities, we provide the tools you need to succeed.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">

                <Button
                  size="lg"
                  asChild
                  className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                >
                  <a href="https://www.planenroll.com/?purl=Jennifer-Feliz" target="_blank" rel="noopener noreferrer">
                    Get a Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="text-base px-8 h-12 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Link href="/contact">Become an Agent</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Built on Trust and Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our mission is to provide comprehensive insurance solutions while supporting independent agents with
                integrity, education, and exceptional service.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <Card className="border-border h-full">
                <CardContent className="pt-6 text-center space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    We operate with transparency and honesty in every interaction, building lasting relationships based
                    on trust.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-border h-full">
                <CardContent className="pt-6 text-center space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Continuous learning and training resources to keep our agents informed and competitive in the
                    marketplace.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="border-border h-full">
                <CardContent className="pt-6 text-center space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Service</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Dedicated support and resources to help agents deliver exceptional service to their clients.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Comprehensive Insurance Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We offer a full range of insurance products to meet the diverse needs of your clients and help you grow
                your business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Health Insurance */}
            <FadeIn delay={0.1} direction="left">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Health Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive health coverage including Medicare Advantage, ACA plans, and supplemental options from
                    top-rated carriers.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Medicare Advantage Plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Affordable Care Act (ACA) Plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Supplemental Coverage Options
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/health-insurance">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Life Insurance & Annuities */}
            <FadeIn delay={0.2} direction="right">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Life Insurance & Annuities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Protect your clients' futures with term, whole, and universal life insurance, plus flexible annuity
                    options for retirement planning.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Term Life Insurance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Whole & Universal Life
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Fixed & Variable Annuities
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/life-annuities">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Agent Resources CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Users className="h-12 w-12 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Resources to Help You Succeed</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Access carrier certifications, partner portals, training materials, and compliance information all in
                one place.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/agent-resources">Explore Agent Resources</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="border-border bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join our network of successful independent agents and start offering comprehensive insurance solutions
                  to your clients today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn About Relentless Jen</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
