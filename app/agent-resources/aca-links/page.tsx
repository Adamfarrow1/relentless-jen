import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export default function ACALinksPage() {
  const acaResources = [
    {
      name: "HealthSherpa",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/healthsherpa_logo_homepage_top-nav@2x-300x62.png",
      url: "https://www.healthsherpa.com/sessions/new",
      width: 300,
      height: 62,
    },
  ]

  const getCoveredNJResources = [
    {
      name: "GetCoveredNJ Assistor Training",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/New_GetCoveredNJ_Logo_FINAL550-AD.jpg",
      url: "https://getcoverednj.learn.trakstar.com/",
      width: 273,
      height: 38,
    },
    {
      name: "New Agent Registration",
      logo: "https://jhahealth.com/wp-content/uploads/2025/01/New_GetCoveredNJ_Logo_FINAL550-AD.jpg",
      url: "https://nj.gov/getcoverednj/home/assisters_ba.shtml",
      width: 273,
      height: 38,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <FileText className="h-16 w-16 mx-auto text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">ACA Links</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Affordable Care Act resources and marketplace tools
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ACA Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Affordable Care Act (ACA) Resources</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6">
              {acaResources.map((resource, index) => (
                <FadeIn key={resource.name} delay={0.1 + index * 0.1}>
                  <Card className="border-border hover:border-primary/50 transition-colors group">
                    <CardContent className="p-8">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4"
                      >
                        <div className="relative w-full h-20 flex items-center justify-center">
                          <Image
                            src={resource.logo || "/placeholder.svg"}
                            alt={resource.name}
                            width={resource.width}
                            height={resource.height}
                            className="object-contain max-h-full"
                          />
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GetCoveredNJ Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">GetCoveredNJ Resources</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getCoveredNJResources.map((resource, index) => (
                <FadeIn key={resource.name} delay={0.1 + index * 0.1}>
                  <Card className="border-border hover:border-primary/50 transition-colors group">
                    <CardContent className="p-8 space-y-6">
                      <h3 className="text-xl font-semibold text-foreground text-center">{resource.name}</h3>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4"
                      >
                        <div className="relative w-full h-16 flex items-center justify-center">
                          <Image
                            src={resource.logo || "/placeholder.svg"}
                            alt={resource.name}
                            width={resource.width}
                            height={resource.height}
                            className="object-contain max-h-full"
                          />
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Questions? Please call JHA at (201) 937-2531
              </h2>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
