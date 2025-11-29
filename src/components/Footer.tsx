import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Ipoti Town</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Preserving our rich cultural heritage while building a prosperous future for all Ipoti indigenes.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "News & Events", path: "/news" },
                { name: "Projects", path: "/projects" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-primary-foreground/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Ipoti-Ekiti, Ekiti State, Nigeria</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/80">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/80">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>info@ipotitown.ng</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support Ipoti</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Help us build a better future for our community through development projects and cultural preservation.
            </p>
            <NavLink
              to="/contact"
              className="inline-block px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md text-sm font-medium transition-colors"
            >
              Donate Now
            </NavLink>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Ipoti Town Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
