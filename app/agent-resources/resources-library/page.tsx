import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function ResourcesLibraryPage() {
  const resources = [
    {
      title: "MA Plans for 2025",
      description: "Master list of available plans; includes LIS, PAAD, Medicaid eligibility.",
      downloadUrl:
        "https://www.dropbox.com/scl/fi/mejp2dyaz9k7g3wm9rtyc/2025-Medicare-Advantage-website.pdf?rlkey=4h5q7bsvscd70zj5m8k7z1sho&e=1&st=k0rt5qp7&dl=0",
    },
    {
      title: "PDP Plans for 2025",
      description: "Master list of available plans; includes LIS, PAAD premium reduction",
      downloadUrl:
        "https://www.dropbox.com/scl/fi/jtvwxjtx4iefln8zapgcr/2025-Medicare-Part-D-Stand-Alone-PDP-website.pdf?rlkey=ejic8yj0izi4ef58rconuyhyh&e=1&st=s4s08qoa&dl=0",
    },
    {
      title: "PAAD Drug Notice",
      description: "NJPAAD and NJ Senior Gold: Important Notice About Excluded Drugs",
      downloadUrl:
        "https://www.dropbox.com/scl/fi/r3710gvkx65jwpa5z0geb/PAAD-Excluded-Drugs.docx?rlkey=qvv4t3dwxb0pn0b8hfwiso3lm&e=1&st=0qrwohlo&dl=0",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <BookOpen className="h-16 w-16 mx-auto text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Resources Library</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive training materials, guides, and marketing resources
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">2025 Plan Resources</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Download the latest plan information and important notices
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <FadeIn key={index} delay={0.1 + index * 0.1}>
                  <a
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="border-border h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-8 space-y-6 text-center h-full flex flex-col items-center justify-center">
                      <div className="w-20 h-20 mx-auto">
                        <img
                          src="https://jhahealth.com/wp-content/uploads/2025/01/filedownload.png"
                          alt="Download"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-center">
                  All resources are regularly updated to reflect the latest products, regulations, and industry best
                  practices. Contact our team for additional resources or assistance.
                </p>
              </CardContent>
            </Card>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us for More Resources</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
