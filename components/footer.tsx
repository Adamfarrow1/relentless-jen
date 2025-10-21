import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-4 font-semibold text-xl">
              <img src="/logo_relentlessjen-removebg-preview.png" alt="Relentless Jen" className="h-16 w-16" />
              <span className="text-foreground">Relentless Jen</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering agents and protecting families with comprehensive insurance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/health-insurance"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/life-annuities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Life & Annuities
                </Link>
              </li>
              <li>
                <Link
                  href="/agent-resources"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Agent Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Medicare Advantage</li>
              <li className="text-sm text-muted-foreground">ACA Plans</li>
              <li className="text-sm text-muted-foreground">Life Insurance</li>
              <li className="text-sm text-muted-foreground">Annuities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(917) 557-2405</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>JJRelentless.Solutions@gmail.com</span>
              </li>
              {/* <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  123 Insurance Way
                  <br />
                  Suite 100
                  <br />
                  City, ST 12345
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Relentless Jen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
