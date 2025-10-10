import { ExternalLink, GraduationCap } from "lucide-react"

export default function CertificationLinksPage() {
  const certificationLinks = [
    {
      name: "Aetna Certification",
      url: "https://aetna.cmpsystem.com/page/login",
    },
    {
      name: "Cigna For Brokers",
      url: "https://cignaforbrokers.com/public/login",
    },
    {
      name: "Clover (Miramar: Agent)",
      url: "https://miramar-agent.com/identity/login?signin=ac6a7c283c33559f0f3e79649a5b0cd5",
    },
    {
      name: "Devoted Agent",
      url: "https://agent.devoted.com/",
    },
    {
      name: "Elevance Anthem",
      url: "https://elevancehealth.cmpsystem.com/page/login",
    },
    {
      name: "Emblem Health (Miramar: Agent)",
      url: "https://miramar-agent.com/identity/login?signin=72562b838e8081a2ac8e465f922224b8",
    },
    {
      name: "healthfirst",
      url: "https://social.webcomserver.com/wpm/index.jsp?tenantName=healthfirst",
    },
    {
      name: "Jefferson Health (Evolvenxt)",
      url: "https://account.evolvenxt.com/",
    },
    {
      name: "Horizon/Braven (Miramar: Agent)",
      url: "https://miramar-agent.com/identity/login?signin=2f9e6cda3ed203f9ec6b074dfe03e1fc",
    },
    {
      name: "Humana",
      url: "https://account.humana.com/",
    },
    {
      name: "IBX",
      url: "https://social.webcomserver.com/wpm/mt/ibx/login/project/recert/ob-2619",
    },
    {
      name: "UnitedHealthcare (Jarvis)",
      url: "https://www.uhcjarvis.com/content/jarvis/en/sign_in.html?open=space&name=Login&control=Login&doLogout=&clearsession=true&in_hi_userid=3780776&cached=true#/sign_in",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <GraduationCap className="h-16 w-16 mx-auto text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Certification Links</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access carrier certification courses and training portals
            </p>
          </div>
        </div>
      </section>

      {/* Certification Links Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Carrier Certification Portals</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete your carrier certifications to expand your product offerings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-6 rounded-lg border border-border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-200"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Need help with certifications? Contact our support team for guidance through the certification process
                and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
