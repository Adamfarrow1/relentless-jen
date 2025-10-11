import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Users, Award } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">About Relentless Jen</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building a better future through comprehensive insurance solutions and unwavering support for independent
                agents.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Relentless Jen, our mission is to provide comprehensive insurance solutions that protect families while
                  empowering independent agents with the tools, resources, and support they need to build successful
                  businesses.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    We believe that insurance is more than just policies—it's about peace of mind, financial security, and
                    protecting what matters most. By partnering with independent agents across the country, we're able to
                    deliver personalized service and expert guidance to families and individuals seeking the right
                    coverage for their unique needs.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  These principles guide everything we do and shape how we serve our agents and their clients.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Card className="border-border">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Integrity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We operate with complete transparency and honesty in every interaction. Our agents and clients can
                      trust that we always have their best interests at heart.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="border-border">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <Target className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We invest in continuous learning and professional development, providing our agents with the
                      knowledge and training they need to stay competitive.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="border-border">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Exceptional service is at the heart of everything we do. We're committed to supporting our agents so
                      they can deliver outstanding experiences to their clients.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive support and resources for independent insurance agents
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Diverse Product Portfolio</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Access to health insurance, life insurance, and annuities from top-rated carriers, giving you the
                      flexibility to meet any client need.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Training & Certification</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive training programs and carrier certifications to help you stay current with industry
                      regulations and best practices.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Marketing Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional marketing materials and resources to help you attract new clients and grow your
                      business effectively.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Dedicated Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A responsive support team ready to assist with contracting, compliance, and any questions you have
                      along the way.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Users className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Why Independent Agents Choose Relentless Jen
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Competitive Commissions:</strong> Earn what you deserve with our
                    transparent and competitive commission structure.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Streamlined Contracting:</strong> Get appointed quickly with our
                    efficient contracting process and dedicated support team.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Ongoing Education:</strong> Stay ahead with regular training
                    webinars, certification courses, and industry updates.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Technology Tools:</strong> Access modern platforms and tools that
                    make selling and servicing policies easier than ever.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
