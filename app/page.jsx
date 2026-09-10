import "./globals.css";
import {
  BedDouble,
  Bath,
  Sofa,
  Waves,
  Dumbbell,
  ThermometerSun,
  DoorOpen,
  Trees,
  WashingMachine,
  CircleParking,
  MapPin,
  RockingChair,
  Sun,
  Binoculars,
  Heart,
  Flag,
  Trophy,
  HeartPulse,
  Sparkles,
  CalendarDays,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

const properties = [
  {
    name: "The Dutton",
    subtitle: "Western Scottsdale Style",
    description:
      "A warm, distinctive Scottsdale retreat with horse-inspired décor and a relaxed Western personality.",
    image:
      "/images/dutton.jpg",
    features: [
      { text: "2 Bedrooms", icon: BedDouble },
      { text: "2 Bathrooms", icon: Bath },
      { text: "Comfortable living spaces", icon: Sofa },
      { text: "Great for golf trips, family visits & extended stays", icon: CircleParking },
    ],
    vrbo: "https://www.vrbo.com/5462333?dateless=true",
  },
  {
    name: "The Loft",
    subtitle: "Relaxed Desert Living",
    description:
      "A stylish two-story Scottsdale retreat near shopping, dining, golf, and popular area attractions.",
    image:
      "/images/loft.jpg",
    features: [
      { text: "2 Bedrooms", icon: BedDouble },
      { text: "2 Bathrooms", icon: Bath },
      { text: "Two-story floor plan", icon: DoorOpen },
      { text: "Private balcony & in-unit laundry", icon: WashingMachine },
    ],
    vrbo: "https://www.vrbo.com/5437161?dateless=true",
  },
  {
    name: "The Signature0",
    subtitle: "Resort Comfort in Scottsdale",
    description:
      "Comfortable Scottsdale living with resort-style community amenities and a convenient location.",
    image:
      "/images/signature.jpg",
    features: [
      { text: "2 Bedrooms", icon: BedDouble },
      { text: "2 Bathrooms", icon: Bath },
      { text: "2 heated pools + hot tub", icon: Waves },
      {
        text: "Fitness center, sauna, steam room & clubhouse",
        icon: Dumbbell,
      },
    ],
    vrbo: "https://www.vrbo.com/1541225?dateless=true",
  },
];

const events = [
  {
    date: "FEB 20",
    title: "MLB Spring Training",
    text: "Cactus League baseball brings fans to Scottsdale every spring.",
  },
  {
    date: "FEB 5–8",
    title: "WM Phoenix Open",
    text: "Experience one of Arizona's biggest golf events.",
  },
  {
    date: "JAN 18–26",
    title: "Barrett-Jackson Car Auction",
    text: "A Scottsdale signature event for automotive enthusiasts.",
  },
];

const Icon = ({ children }) => (
  <span className="feature-icon" aria-hidden="true">
    {children}
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top">
            <span className="brand-mark">♜</span>
            <span>
              <strong>THREE KEYS</strong>
              <strong>SCOTTSDALE</strong>
              <em>Your Scottsdale home away from home</em>
            </span>
          </a>

          <nav>
            <a href="#top">Home</a>
            <a href="#stays">Our Stays</a>
            <a href="#why">Why Scottsdale</a>
            <a href="#scottsdale">Events</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-book" href="#stays">
            <span>▣</span> Check Availability
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-photo" />
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">STAY WITH US IN</p>
          <h1>Scottsdale</h1>
          <p className="hero-tag">THREE BEAUTIFUL CONDOS • ONE EXCEPTIONAL EXPERIENCE</p>
          <p className="hero-intro">
            Relax. Explore. Make Memories.<br />
            Your perfect Scottsdale getaway awaits.
          </p>
          <a className="gold-button" href="#stays">
            Explore Our Stays <span>→</span>
          </a>
        </div>
        <div className="hero-script">
          More<br />Than a Stay<br /><b>A Scottsdale<br />Experience</b>
        </div>
      </section>

      <section id="stays" className="stays section">
  <div className="section-heading">
    <span className="eyebrow">OUR PROPERTIES</span>

    <h2>Choose Your Stay</h2>

    <p>
      Compare all three properties in one place, then continue securely to
      VRBO to check dates and reserve.
    </p>
  </div>

  <div className="property-grid">
    {properties.map((property) => (
      <article className="property-card" key={property.name}>
        
        {/* Property Image */}
        <div className="property-image">
          <img src={property.image} alt={property.name} />
        </div>

        {/* Property Title */}
        <div className="property-title">
          <span>{property.subtitle}</span>

          <h3>{property.name}</h3>

          <div className="ornament">---✦---</div>
        </div>

        {/* Property Content */}
        <div className="property-body">
          <p>{property.description}</p>

          <div className="features">
            {property.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div className="feature" key={feature.text}>
                  <div className="feature-icon">
                    <FeatureIcon size={19} strokeWidth={1.8} />
                  </div>

                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>

          <a
            className="navy-button vrbo-btn"
            href={property.vrbo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View & Book {property.name} on VRBO
            <span>→</span>
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

<section id="why" className="why-three-keys">

  {/* Background Overlay */}
  <div className="why-three-keys-overlay"></div>

  {/* Main Content */}
  <div className="why-three-keys-content">

    <div className="why-heading">
      <span className="eyebrow">WHY THREE KEYS SCOTTSDALE</span>

      <h2>
        More space. More comfort.
        <br />
        More ways to enjoy Scottsdale.
      </h2>

      <p>
        Whether you're visiting for golf, Spring Training, sunshine, Mayo Clinic,
        shopping, dining, or a warm-weather escape, Three Keys Scottsdale gives
        you three different homes to choose from.
      </p>

      <p>
        If one property isn't available for your dates, another may be — giving
        you more booking options without starting your search over.
      </p>
    </div>


    {/* Benefits */}
    <div className="benefits">

      <div className="benefit">
        <span>
          <Sun size={30} strokeWidth={1.7} />
        </span>

        <div>
          <strong>Prime Locations</strong>
          <p>
            Near golf, dining, shopping and top attractions
          </p>
        </div>
      </div>


      <div className="benefit">
        <span>
          <RockingChair size={30} strokeWidth={1.7} />
        </span>

        <div>
          <strong>Comfortable Stays</strong>
          <p>
            Beautifully appointed 2-bedroom, 2-bath condos
          </p>
        </div>
      </div>


      <div className="benefit">
        <span>
          <Binoculars size={30} strokeWidth={1.7} />
        </span>

        <div>
          <strong>For Every Traveler</strong>
          <p>
            Couples, families, golf trips & extended stays
          </p>
        </div>
      </div>


      <div className="benefit">
        <span>
          <Heart size={30} strokeWidth={1.7} />
        </span>

        <div>
          <strong>Memorable Experiences</strong>
          <p>
            More than a stay — a Scottsdale experience
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

<section className="experience-scottsdale">

  <div className="experience-inner">

    {/* Section Header */}
    <div className="experience-heading">
      <span className="eyebrow">EXPERIENCE SCOTTSDALE</span>

      <h2>Plan the reason for your stay</h2>

      <p>
        Whatever brings you to Scottsdale, Three Keys gives you a comfortable
        place to slow down, explore, and enjoy more of your trip.
      </p>
    </div>


    {/* Experience Cards */}
    <div className="experience-grid">

      {/* Golf */}
      <article className="experience-card">
        <div className="experience-icon">
          <Flag size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">01</div>

        <h3>Golf Getaways</h3>

        <p>
          Perfect for couples and groups planning a Scottsdale golf escape.
        </p>
      </article>


      {/* Spring Training */}
      <article className="experience-card">
        <div className="experience-icon">
          <Trophy size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">02</div>

        <h3>Spring Training</h3>

        <p>
          Make your Scottsdale stay part of the excitement of Cactus League
          season.
        </p>
      </article>


      {/* Mayo Clinic */}
      <article className="experience-card">
        <div className="experience-icon">
          <HeartPulse size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">03</div>

        <h3>Mayo Clinic Visits</h3>

        <p>
          Comfortable options for guests visiting Scottsdale for appointments
          or family support.
        </p>
      </article>


      {/* Girls Weekends */}
      <article className="experience-card">
        <div className="experience-icon">
          <Sparkles size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">04</div>

        <h3>Girls' Weekends</h3>

        <p>
          Shopping, restaurants, spas, sunshine, and room to relax together.
        </p>
      </article>


      {/* Snowbird */}
      <article className="experience-card">
        <div className="experience-icon">
          <Sun size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">05</div>

        <h3>Snowbird Escapes</h3>

        <p>
          A comfortable home base for longer winter stays in the Arizona sun.
        </p>
      </article>


      {/* Events */}
      <article className="experience-card">
        <div className="experience-icon">
          <CalendarDays size={25} strokeWidth={1.7} />
        </div>

        <div className="experience-number">06</div>

        <h3>Scottsdale Events</h3>

        <p>
          Ideal for trips built around golf events, car auctions, shows, and
          seasonal happenings.
        </p>
      </article>

    </div>


    {/* Bottom CTA */}
    <div className="experience-cta">
      <div>
        <span className="experience-cta-script">
          Your Scottsdale Escape
        </span>

        <p>
          Find the stay that fits your plans.
        </p>
      </div>

      <a href="#stays" className="gold-button">
        Explore Our Stays
        <span>→</span>
      </a>
    </div>

  </div>

</section>

<section id="scottsdale" className="discover section">

  <div className="discover-photo">
    <div className="discover-photo-overlay"></div>

    <div className="discover-photo-label">
      <span>ARIZONA</span>
      <strong>SCOTTSDALE</strong>
    </div>
  </div>


  <div className="discover-copy">

    <div className="discover-content">

      <p className="overline">— DISCOVER</p>

      <h2>Scottsdale</h2>

      <div className="discover-line"></div>

      <p className="discover-intro">
        World-class golf. Incredible dining. Unique shopping.
        Thrilling events. Beautiful desert landscapes.
      </p>

      <p className="discover-description">
        There&apos;s always something happening in Scottsdale.
        From unforgettable golf days and vibrant dining to
        desert adventures and seasonal events, your Arizona
        escape is waiting to be explored.
      </p>

      <a
        className="gold-button discover-button"
        href="https://www.experiencescottsdale.com/events/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore Scottsdale Events
        <span>→</span>
      </a>

    </div>

    <div className="discover-decoration">
      ✦
    </div>

  </div>

</section>

      <section className="booking-banner">
        <div>
          <p className="overline">YOUR SCOTTSDALE ESCAPE</p>
          <h2>Three Keys Scottsdale</h2>
          <p>Your Scottsdale home away from home</p>
        </div>
        <a className="gold-button light-gold" href="#stays">
          <span>▣</span> Compare all three stays before you book. <span>→</span>
        </a>
      </section>
	  
	  <section id="contact" className="contact-section">

  <div className="contact-inner">

    {/* Left Content */}
    <div className="contact-copy">

      <span className="eyebrow">CONTACT</span>

      <h2>
        Planning a
        <br />
        Scottsdale stay?
      </h2>

      <div className="contact-line"></div>

      <p>
        Have a question about which Three Keys property is right
        for your trip? Contact Three Keys Scottsdale.
      </p>

      <div className="contact-signature">
        Three Keys Scottsdale
      </div>

    </div>


    {/* Right Contact Details */}
    <div className="contact-details">

      <div className="contact-item">

        <div className="contact-icon">
          <Globe size={20} strokeWidth={1.7} />
        </div>

        <div>
          <span>Website</span>

          <a
            href="https://ThreeKeysScottsdale.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThreeKeysScottsdale.com
          </a>
        </div>

      </div>


      <div className="contact-item">

        <div className="contact-icon">
          <Mail size={20} strokeWidth={1.7} />
        </div>

        <div>
          <span>Email</span>

          <a href="mailto:fayhartgroup@gmail.com">
            fayhartgroup@gmail.com
          </a>
        </div>

      </div>


      <div className="contact-item">

        <div className="contact-icon">
          <Phone size={20} strokeWidth={1.7} />
        </div>

        <div>
          <span>Phone</span>

          <a href="tel:+17732303800">
            773-230-3800
          </a>
        </div>

      </div>


      {/* Reservation Notice */}
      <div className="reservation-note">

        <div className="reservation-icon">
          <ShieldCheck size={19} strokeWidth={1.7} />
        </div>

        <p>
          Reservations are completed securely through the
          individual VRBO listing.
        </p>

      </div>

    </div>

  </div>

</section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">♜</div>
            <div>
              <strong>THREE KEYS</strong>
              <strong>SCOTTSDALE</strong>
            </div>
          </div>

          <div className="footer-links">
            <a href="#top">Home</a>
            <a href="#stays">Our Stays</a>
            <a href="#why">Scottsdale Guide</a>
            <a href="#scottsdale">Events</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="tag-line">
			<div className="text-area">
			
				<em>Three Scottsdale stays. One exceptional experience. ♥ </em>
			</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
