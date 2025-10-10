import { ExternalLink } from "lucide-react"

export default function CarrierLinksPage() {
  const carriers = [
    {
      name: "Aetna Producer World",
      url: "https://www.aetna.com/about-us/login.html#tab_content_section_tabs_link_tabs_2",
    },
    { name: "Aetna Think Agent", url: "https://app.thinkagent.com/sign-in" },
    { name: "Braven For Brokers", url: "https://bravenhealth.com/for-brokers" },
    { name: "Cigna For Brokers", url: "https://cignaforbrokers.com/public/login" },
    { name: "Clover (Evolvenxt)", url: "https://account.evolvenxt.com/" },
    { name: "Devoted Brokers", url: "https://www.devoted.com/brokers/" },
    { name: "EmblemHealth (Evolvenxt)", url: "https://account.evolvenxt.com/" },
    { name: "healthfirst", url: "https://www.myhfgroup.org/login" },
    { name: "Highmark", url: "https://producer.highmark.com/login" },
    { name: "Horizon Broker", url: "https://secure.horizonblue.com/mga/sps/authsvc/policy/salesAuth" },
    { name: "Humana", url: "https://account.humana.com/" },
    { name: "IBX (Litmos)", url: "https://agent.litmos.com/account/login/?" },
    { name: "UnitedHealthcare (Jarvis)", url: "https://identity.onehealthcareid.com/oneapp/index.html#/login" },
    { name: "Wellcare Broker", url: "https://www.wellcare.com/Broker-Resources/Broker-Resources" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ExternalLink className="h-16 w-16 mx-auto text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Carrier Links</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Direct access to carrier portals for quoting, applications, and policy management
            </p>
          </div>
        </div>
      </section>

      {/* Carrier Links Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {carriers.map((carrier) => (
                <a
                  key={carrier.name}
                  href={carrier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-md font-medium text-center hover:bg-primary/90 transition-colors"
                >
                  {carrier.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
