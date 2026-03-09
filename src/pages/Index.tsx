import HeroBanner from "@/components/vrif/HeroBanner";
import Navbar from "@/components/vrif/Navbar";
import HeroSlider from "@/components/vrif/HeroSlider";
import VrifSection from "@/components/vrif/VrifSection";
import VrifCard from "@/components/vrif/VrifCard";
import ContactSection from "@/components/vrif/ContactSection";
import ApplyForm from "@/components/vrif/ApplyForm";
import VrifFooter from "@/components/vrif/VrifFooter";
import { ChevronRight } from "lucide-react";

const homeCards = [
  {
    img: "https://belagaviinfra.co.in/wp-content/uploads/2021/03/images-2021-03-08T065851.538-1.jpeg",
    title: "Incubation Center",
    desc: "Supporting startups with infrastructure, mentorship, and funding to transform ideas into viable businesses.",
  },
  {
    img: "https://www.aiet.org.in/wp-content/uploads/2019/11/VTU.jpg",
    title: "Research Labs",
    desc: "Advanced research facilities for faculty and students to work on cutting-edge technologies.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpF9EGQ2OMTg0FjzflU6_R50pWsTBiI1MTQ&s",
    title: "Industry Partnerships",
    desc: "Bridging the gap between academia and industry through collaborative projects and internships.",
  },
];

const programCards = [
  {
    img: "https://online.vtu.ac.in/uploads/minor_degree/1690178373-jWBuE6b6Gt.jpg",
    title: "Technical Workshops",
    items: ["AI & Machine Learning", "IoT and Embedded Systems", "Cloud Computing", "Blockchain Technology"],
  },
  {
    img: "https://i0.wp.com/belagaviinfra.co.in/wp-content/uploads/2022/03/IMG-20220306-WA0000.jpg?fit=1024%2C768&ssl=1",
    title: "Innovation Challenges",
    items: ["Annual Hackathon", "Smart India Hackathon", "Industry Problem Solving", "Social Innovation Contests"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3RXxcoRYCY7zx6gzaqmdAtUpcBUvQr_Oug&s",
    title: "Startup Programs",
    items: ["Pre-incubation Support", "Seed Funding", "Mentorship Network", "Investor Connect"],
  },
];

const galleryCards = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBag84z-xFnHnKsKIlI9Xkv-247h5fs3MquQ&s",
    title: "Research Laboratory",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06hOpuEFH_cD370gmINlX_aoK493FIr3l9Q&s",
    title: "Innovation Workshop",
  },
  {
    img: "https://vtu.ac.in/wp-content/uploads/2021/03/Research.jpg",
    title: "Startup Pitch Session",
  },
];

const aboutItems = [
  "Hands-on experience with cutting-edge technologies",
  "Value-added education programs beyond the curriculum",
  "Industry-relevant skill development workshops",
  "Mentorship from industry experts and successful entrepreneurs",
  "Funding opportunities for promising research projects",
  "Incubation support for student startups",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <Navbar />
      <HeroSlider />

      {/* Home */}
      <VrifSection id="home" title="Welcome to VRIF">
        <p className="text-foreground mb-4">
          VRIF (Visvesvaraya Research and Innovation Foundation) is a pioneering initiative by
          Visvesvaraya Technological University, Belagavi, dedicated to fostering research,
          innovation, and industry-academia collaboration.
        </p>
        <p className="text-foreground mb-6">
          Our foundation provides state-of-the-art facilities, mentorship programs, and funding
          opportunities to nurture the next generation of innovators and entrepreneurs from VTU's
          vast network of colleges across Karnataka.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {homeCards.map((c) => (
            <VrifCard key={c.title} img={c.img} title={c.title}>
              <p className="text-muted-foreground">{c.desc}</p>
            </VrifCard>
          ))}
        </div>
      </VrifSection>

      {/* About */}
      <VrifSection id="about" title="About VRIF">
        <p className="text-foreground mb-4">
          Established as a Section 8 company by Visvesvaraya Technological University, VRIF serves
          as the nodal agency for promoting innovation and entrepreneurship among engineering
          students and faculty across Karnataka.
        </p>
        <p className="text-foreground mb-4">Located in the heart of VTU's main campus in Belagavi, VRIF offers:</p>
        <ul className="space-y-3 mt-4">
          {aboutItems.map((item) => (
            <li key={item} className="flex items-start gap-2 pl-4">
              <ChevronRight size={14} className="text-secondary mt-1.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </VrifSection>

      {/* Programs */}
      <VrifSection id="programs" title="Our Programs">
        <p className="text-foreground mb-6">
          VRIF offers a wide range of programs designed to enhance technical skills, foster
          innovation, and promote entrepreneurship among students and faculty:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programCards.map((c) => (
            <VrifCard key={c.title} img={c.img} title={c.title}>
              <ul className="space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight size={12} className="text-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </VrifCard>
          ))}
        </div>
      </VrifSection>

      {/* Gallery */}
      <VrifSection id="gallery" title="VRIF Gallery">
        <p className="text-foreground mb-6">
          Explore our facilities and events through these images from VRIF, VTU Belagavi:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryCards.map((c) => (
            <VrifCard key={c.title} img={c.img} title={c.title} />
          ))}
        </div>
      </VrifSection>

      <ContactSection />
      <ApplyForm />
      <VrifFooter />
    </div>
  );
};

export default Index;
