import { Atom, ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About VRIF" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const VrifFooter = () => {
  return (
    <footer className="gradient-hero text-primary-foreground pt-12 pb-6 px-8 mt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Atom className="text-secondary" size={28} /> VRIF
          </div>
          <p className="opacity-80 mb-4">
            Visvesvaraya Research and Innovation Foundation, established by VTU to promote
            innovation, research and entrepreneurship among engineering students and faculty.
          </p>
          <div className="flex gap-3">
            {["facebook", "twitter", "linkedin", "instagram", "youtube"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-secondary hover:-translate-y-1 text-primary-foreground text-sm"
              >
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 relative">
            Quick Links
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-secondary" />
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-secondary flex items-center gap-2 transition-all hover:pl-1"
                >
                  <ChevronRight size={12} /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 pb-2 relative">
            Contact Info
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-secondary" />
          </h3>
          <div className="space-y-3 text-primary-foreground/80">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" /> VTU Campus, Jnana Sangama,
              Belagavi - 590018
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 831 249 8100
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> vrif@vtu.ac.in
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} /> Mon-Fri: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 mt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/70">
        © 2025 Visvesvaraya Research and Innovation Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default VrifFooter;
