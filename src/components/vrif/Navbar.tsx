import { Home, Info, Network, Images, Mail, Edit } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#programs", label: "Programs", icon: Network },
  { href: "#gallery", label: "Gallery", icon: Images },
  { href: "#contact", label: "Contact", icon: Mail },
  { href: "#apply", label: "Apply", icon: Edit },
];

const Navbar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-primary flex justify-center flex-wrap py-3 sticky top-0 z-50 shadow-lg">
      {navItems.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => handleClick(e, href)}
          className="text-primary-foreground no-underline px-4 py-2 font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5"
        >
          <Icon size={16} />
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
