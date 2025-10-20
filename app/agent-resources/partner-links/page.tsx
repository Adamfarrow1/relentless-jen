import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function PartnerLinksPage() {
  const partnerLinks = [
    {
      name: "Ritter",
      url: "#",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/ritter-insurance-marketing-tagline-logo-300x105.png",
    },
    {
      name: "Ritter Quote Engine",
      url: "#",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/ritter-insurance-marketing-tagline-logo-300x105.png",
    },
    {
      name: "Integrity",
      url: "#",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/image007.png",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <ExternalLink className="h-16 w-16 mx-auto text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Partner Links</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">Please sign in or register as needed</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partner Links Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerLinks.map((partner, index) => (
                <FadeIn key={partner.name} delay={0.1 + index * 0.1}>
                  <Card className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-8">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-6 group"
                      >
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                          {partner.name}
                        </h2>
                        <div className="relative w-full h-24 flex items-center justify-center">
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center pt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Request Additional Access</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
