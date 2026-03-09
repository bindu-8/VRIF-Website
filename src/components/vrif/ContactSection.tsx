import { MapPin, Phone, Mail } from "lucide-react";
import VrifSection from "./VrifSection";

const contacts = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <p className="text-muted-foreground">
        Visvesvaraya Technological University
        <br />
        "Jnana Sangama", Belagavi - 590018
        <br />
        Karnataka, India
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <p>
        <a href="tel:+918312498100" className="text-muted-foreground hover:text-secondary transition-colors">
          +91 831 249 8100
        </a>
        <br />
        <a href="tel:+918312498101" className="text-muted-foreground hover:text-secondary transition-colors">
          +91 831 249 8101
        </a>
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <p>
        <a href="mailto:vrif@vtu.ac.in" className="text-muted-foreground hover:text-secondary transition-colors">
          vrif@vtu.ac.in
        </a>
        <br />
        <a href="mailto:re@vtu.ac.in" className="text-muted-foreground hover:text-secondary transition-colors">
          re@vtu.ac.in
        </a>
      </p>
    ),
  },
];

const ContactSection = () => {
  return (
    <VrifSection id="contact" title="Contact VRIF">
      <p className="text-foreground mb-6">
        Get in touch with us for more information about our programs and initiatives:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {contacts.map((c) => (
          <div
            key={c.title}
            className="bg-muted p-6 rounded-lg flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-vrif-card"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <c.icon size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-1">{c.title}</h3>
              {c.content}
            </div>
          </div>
        ))}
      </div>
    </VrifSection>
  );
};

export default ContactSection;
