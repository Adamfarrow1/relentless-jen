import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? Want to become an agent? We're here to help you get started on your journey with
              Relentless Jen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Contact Information</h2>
                <div className="space-y-6">
                  <FadeIn delay={0.1}>
                    <Card className="border-border">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-muted-foreground">(917) 557-2405</p>
                          <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 8am-6pm EST</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <Card className="border-border">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground">jenfeliz21@gmail.com</p>
                          <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <Card className="border-border">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                            <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quick answers to common questions about working with Relentless Jen
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              <FadeIn delay={0.1}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">How do I become a Relentless Jen agent?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To become an agent, you must have an active insurance license in your state. Contact us through this
                      form or call our agent support line, and we'll guide you through the contracting process with our
                      carrier partners.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What products can I sell as a Relentless Jen agent?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Relentless Jen agents have access to health insurance (Medicare Advantage, ACA plans, supplemental
                      coverage), life insurance (term, whole, universal), and annuities (fixed and variable) from multiple
                      top-rated carriers.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What kind of support do you provide to agents?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We provide comprehensive support including carrier certifications, training materials, marketing
                      resources, compliance guidance, and a dedicated support team to help with contracting and day-to-day
                      questions.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How long does the contracting process take?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The contracting process typically takes 1-2 weeks, depending on the carriers you're applying with
                      and how quickly you complete the required paperwork and certifications. Our team works to expedite
                      the process as much as possible.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
