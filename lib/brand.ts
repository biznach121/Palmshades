/**
 * Brand & content configuration - the single source of truth for every
 * visible string in this storefront.
 */
import type { SeedName } from "@cimplify/sdk/testing/suite";

export interface BrandSocial {
  label: string;
  href: string;
  icon?: "instagram" | "x" | "tiktok" | "facebook" | "youtube" | "linkedin" | "whatsapp";
}

export interface BrandFaqEntry {
  q: string;
  a: string;
}

export interface BrandFaqSection {
  title: string;
  items: BrandFaqEntry[];
}

export interface BrandPolicySection {
  heading: string;
  body: string | { intro: string; bullets: string[] };
}

export interface BrandSitemapSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface Brand {
  name: string;
  shortName: string;
  microTag: string;
  description: string;
  schemaType:
    | "Store"
    | "Bakery"
    | "Restaurant"
    | "BeautySalon"
    | "GroceryStore"
    | "LocalBusiness"
    | "Organization";
  currency: string;
  locale: string;
  contact: {
    address: string;
    streetAddress: string;
    city: string;
    countryCode: string;
    phone: string;
    phoneTel: string;
    email: string;
    privacyEmail: string;
    supportEmail?: string;
    businessEmail?: string;
    hours: string;
  };
  socials: BrandSocial[];
  header: { nav: { label: string; href: string }[] };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  trustItems?: { label: string; value: string; description: string; iconKey: string }[];
  brandStrip?: { headline: string; brands: { name: string; domain: string }[] };
  promo?: { badge: string; title: string; body: string; ctaLabel: string; ctaHref: string };
  tradeIn?: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    steps: { step: string; title: string; body: string }[];
  };
  newsletter: {
    eyebrow: string;
    title: string;
    body: string;
    placeholder: string;
    submitLabel: string;
    successLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    sections: { heading: string; body: string }[];
  };
  journal: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  faq: { eyebrow: string; title: string; sections: BrandFaqSection[]; contactPrompt: string; contactEmail: string };
  terms: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  privacy: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  shipping: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  returns: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  accessibility: { eyebrow: string; title: string; lastUpdated: string; sections: BrandPolicySection[] };
  account: {
    loginEyebrow: string;
    loginTitle: string;
    loginSubtitle: string;
    signupEyebrow: string;
    signupTitle: string;
    signupSubtitle: string;
    accountEyebrow: string;
    accountTitle: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    body: string;
    reasons: string[];
    directLines: { label: string; value: string; href: string }[];
  };
  trackOrder: { eyebrow: string; title: string; body: string };
  footer: { blurb: string; sitemap: BrandSitemapSection[]; poweredBy?: { label: string; href: string } };
  llms: { summary: string };
  mock: { seed: SeedName; businessId: string };
  assets: {
    logo: string;
    footerLogo: string;
    hero: string;
    heroVideo: string;
    campaign: string[];
    hoodedSet: string;
    summer2026: string[];
    denimStory: string;
  };
  fashion: {
    season: string;
    summer2026: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCtaLabel: string;
      primaryCtaHref: string;
      secondaryCtaLabel: string;
      secondaryCtaHref: string;
      signalEyebrow: string;
      signalTitle: string;
      imageKicker: string;
      lookLabel: string;
      yearMark: string;
    };
    campaignTitle: string;
    campaignBody: string;
    categoryHighlight: {
      eyebrow: string;
      title: string;
      items: { slug: string; label: string; blurb: string; href: string; image: string }[];
    };
    seenBy: {
      eyebrow: string;
      title: string;
      people: { role: string; name: string; image: string }[];
    };
    mensTitle: string;
    mensBody: string;
    womensTitle: string;
    womensBody: string;
    denimTitle: string;
    denimBody: string;
    accessoriesTitle: string;
    accessoriesBody: string;
    socialHandle: string;
  };
}

// Campaign photography — people wearing the frames. Index 5 surfaces in the
// "Complete the look" editorial section (see app/page.tsx); index 0 doubles as
// the OG/metadata hero image.
const heroPhotoA =
  "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453637/piustckyhcidu3usaa55.jpg";
const heroPhotoB =
  "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782397287/mypkwrjgq5etmjttwkzb.jpg";
const heroPhotoC =
  "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782397287/nnudhxncil1iurojonlg.jpg";
const heroPhotoD =
  "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782454245/pv64w5hstpcbyq3ltfwn.jpg";
const heroPhotoE =
  "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453469/aaggivzgiyfnoespzzw2.jpg";

// Ordered so each on-page grouping (editorial panels, mosaic, denim story) draws
// distinct photos instead of repeating the same one or two.
const campaignImages = [heroPhotoA, heroPhotoC, heroPhotoB, heroPhotoD, heroPhotoE, heroPhotoB];

export const brand: Brand = {
  name: "Palmshades",
  shortName: "Palmshades",
  microTag: "PS",
  description:
    "Palmshades is an Accra eyewear label — prescription, blue-light, and statement frames glazed to your prescription and fitted to your face.",
  schemaType: "Store",
  currency: "GHS",
  locale: "en_GH",

  contact: {
    address: "East Legon, Accra",
    streetAddress: "East Legon",
    city: "Accra",
    countryCode: "GH",
    phone: "+233 244 000 000",
    phoneTel: "+233244000000",
    email: "hello@palmshades.com",
    privacyEmail: "privacy@palmshades.com",
    supportEmail: "support@palmshades.com",
    businessEmail: "studio@palmshades.com",
    hours: "Mon-Sat 10am-8pm",
  },

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/palmshades/",
      icon: "instagram",
    },
  ],

  header: {
    nav: [
      { label: "New arrivals", href: "/shop" },
    ],
  },

  hero: {
    badge: "2026 FRAME COLLECTION",
    title: "Frames for\nthe way you see.",
    subtitle:
      "Eyewear from Accra — prescription, blue-light, and statement frames glazed to your prescription and fitted to your face.",
    primaryCtaLabel: "Shop the frames",
    secondaryCtaLabel: "Read our story",
    secondaryCtaHref: "/journal",
  },

  trustItems: undefined,

  brandStrip: {
    headline: "The brands we carry",
    brands: [
      { name: "Ray-Ban", domain: "ray-ban.com" },
      { name: "Oakley", domain: "oakley.com" },
      { name: "Gucci", domain: "gucci.com" },
      { name: "Prada", domain: "prada.com" },
      { name: "Armani", domain: "armani.com" },
      { name: "Versace", domain: "versace.com" },
      { name: "Tom Ford", domain: "tomford.com" },
      { name: "Dior", domain: "dior.com" },
    ],
  },

  promo: {
    badge: "New arrivals",
    title: "The new frames are in.",
    body: "Sculpted acetate, clean metals, and blue-light lenses — frames that catch the light without shouting for it.",
    ctaLabel: "Shop the frames",
    ctaHref: "/shop",
  },

  tradeIn: {
    eyebrow: "Frame styling",
    title: "Find the frame that fits your face.",
    body: "Send your face shape, prescription, and the look you're after. Our opticians will pull a short edit of frames that suit you and help you choose the pair you'll reach for daily.",
    primaryCtaLabel: "Talk to an optician",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Read the FAQ",
    secondaryCtaHref: "/faq",
    steps: [
      { step: "01", title: "Send the brief", body: "Face shape, prescription, budget, and the look you want." },
      { step: "02", title: "Get the edit", body: "Three to five frames picked to suit you." },
      { step: "03", title: "Wear them out", body: "Glazed to your prescription — pickup or dispatch." },
    ],
  },

  newsletter: {
    eyebrow: "The list",
    title: "First access before everyone looks.",
    body: "New frame drops, restocks, and lens tips from Palmshades. Short, sharp, no noise.",
    placeholder: "you@email.com",
    submitLabel: "Join",
    successLabel: "You're on the list",
  },

  about: {
    eyebrow: "About Palmshades",
    title: "Considered eyewear,\nmade to be seen.",
    paragraphs: [
      "Palmshades is an eyewear label from Accra. We make prescription, blue-light, and statement frames — glazed to your prescription and fitted to your face.",
      "Every frame is chosen for how it sits and how it lasts: balanced acetate, clean metals, and lenses that earn their place from desk to dusk.",
      "Designed in Ghana, made to travel: frames built for the way you actually see and the way you want to be seen.",
    ],
    sections: [
      { heading: "Lenses done right", body: "Single-vision, blue-light, and progressive lenses cut precisely to your prescription." },
      { heading: "Fitted to your face", body: "Frames picked by shape and width so they sit balanced all day, every day." },
      { heading: "Visit", body: "East Legon, Accra. Mon-Sat, 10am-8pm." },
    ],
  },

	  journal: {
	    eyebrow: "Journal",
	    title: "Made in Ghana.\nMade to be seen.",
	    paragraphs: [
	      "Palmshades started in Accra with a simple idea: eyewear that fits your face and your prescription, without the markup or the guesswork.",
	      "Good frames shouldn't be a compromise between how you see and how you look. So we built a line that does both — prescription, blue-light, and statement frames in shapes that suit real faces.",
	      "Glazed to your script, fitted to you. Made in Ghana, made to be seen.",
	    ],
	  },

  faq: {
    eyebrow: "Customer care",
    title: "Questions, answered.",
    sections: [
      {
        title: "Ordering",
        items: [
          { q: "How fast is shipping?", a: "Non-prescription frames dispatch within one business day. Prescription orders ship once your lenses are glazed — usually 3-5 business days." },
          { q: "Can I pick up in store?", a: "Yes. Choose pickup at checkout and wait for the confirmation message before coming through." },
          { q: "Do you ship internationally?", a: "We ship selected orders internationally. Rates and ETAs are shown at checkout where available." },
        ],
      },
      {
        title: "Prescriptions and lenses",
        items: [
          { q: "How do I add my prescription?", a: "Enter your prescription at checkout or upload a photo of it. Unsure? Send it to us and we'll confirm before glazing." },
          { q: "What lens options do you offer?", a: "Single-vision, blue-light, progressive, and tinted lenses, with anti-glare and anti-scratch coatings available." },
          { q: "How do I choose the right frame size?", a: "Each product page lists lens width, bridge, and temple length. Message us your current frame size if you're unsure." },
        ],
      },
      {
        title: "Returns and exchanges",
        items: [
          { q: "Can I return a frame?", a: "Unworn frames in original condition can be returned within 7 days. Prescription-glazed lenses are made to order and can't be returned unless faulty." },
          { q: "Can I exchange a frame?", a: "Yes, subject to availability. Contact us within 7 days of delivery and keep the frame unworn with the case and cloth." },
          { q: "What if my order arrives damaged?", a: "Email photos and your order number within 48 hours. We will repair, replace, or refund where appropriate." },
        ],
      },
      {
        title: "Payment",
        items: [
          { q: "What payment methods do you accept?", a: "Mobile Money and major cards are accepted at checkout." },
          { q: "Do prices include taxes?", a: "Where applicable, taxes are included or shown clearly at checkout." },
          { q: "Is the frame price the same with lenses?", a: "Frame prices are listed per frame. Prescription lenses and coatings are added at checkout based on your script." },
        ],
      },
    ],
    contactPrompt: "Still stuck? Email",
    contactEmail: "support@palmshades.com",
  },

  terms: {
    eyebrow: "Terms",
    title: "Terms of Service",
    lastUpdated: "25 May 2026",
    sections: [
      { heading: "1. Who we are", body: "Palmshades is an eyewear retailer based in Accra, Ghana. By placing an order, you agree to these terms." },
      { heading: "2. Orders", body: "Orders are accepted once payment is confirmed. We may cancel and refund orders affected by inventory errors or suspected fraud." },
      { heading: "3. Product details", body: "We aim to show frame colour, finish, and measurements accurately, but screens vary. Lens prescriptions are glazed to the details you provide." },
      { heading: "4. Payment", body: "Prices are listed in Ghana Cedis unless otherwise shown. Prescription lenses and coatings are added at checkout. Payment is due at checkout through the available payment methods." },
      { heading: "5. Returns", body: "Returns and exchanges follow the policy listed on the Returns page. Frames must be unworn and in original condition; prescription-glazed lenses are made to order." },
      { heading: "6. Contact", body: "Questions about these terms can be sent to hello@palmshades.com." },
    ],
  },

  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    lastUpdated: "25 May 2026",
    sections: [
      { heading: "What we collect", body: "We collect the details needed to process orders, glaze lenses, support customers, and improve the storefront: name, email, phone, shipping address, prescription details, cart activity, and order history." },
      { heading: "How we use it", body: { intro: "We use your information to:", bullets: ["Prepare and deliver orders.", "Glaze lenses to your prescription.", "Send order updates.", "Respond to support requests.", "Send frame-drop alerts only when you opt in."] } },
      { heading: "Who we share it with", body: "We share data only with service providers required for payments, delivery, lens glazing, email, analytics, and customer support." },
      { heading: "Your choices", body: "You can ask to access, correct, or delete personal information by emailing privacy@palmshades.com." },
    ],
  },

  shipping: {
    eyebrow: "Shipping",
    title: "Shipping and Pickup",
    lastUpdated: "25 May 2026",
    sections: [
      { heading: "Accra dispatch", body: "Non-prescription frames dispatch within one business day. Prescription orders ship once lenses are glazed, usually 3-5 business days." },
      { heading: "Pickup", body: "In-store pickup is available after confirmation. Bring your order confirmation or ID." },
      { heading: "Outside Accra", body: "Regional delivery is handled by partner couriers, with rates and ETAs shown at checkout where available." },
      { heading: "International", body: "International shipping may be available for selected destinations." },
    ],
  },

  returns: {
    eyebrow: "Returns",
    title: "Returns and Exchanges",
    lastUpdated: "25 May 2026",
    sections: [
      { heading: "Return window", body: "Unworn frames in original condition, with the case and cloth, can be returned within 7 days of delivery." },
      { heading: "Exchanges", body: "Frame exchanges are subject to availability. Contact support before sending anything back." },
      { heading: "Prescription lenses", body: "Prescription-glazed lenses are made to order and cannot be returned unless faulty or glazed in error." },
      { heading: "Damaged items", body: "Send photos and your order number within 48 hours so we can make it right." },
    ],
  },

  accessibility: {
    eyebrow: "Accessibility",
    title: "Accessibility Statement",
    lastUpdated: "25 May 2026",
    sections: [
      { heading: "Our commitment", body: "We want Palmshades to be usable by as many people as possible and aim for WCAG 2.1 AA standards." },
      { heading: "What we test", body: { intro: "We focus on:", bullets: ["Readable contrast.", "Keyboard navigation.", "Clear labels for controls and imagery.", "Layouts that work across mobile and desktop."] } },
      { heading: "Reporting issues", body: "Email accessibility@palmshades.com and we will respond within 5 business days." },
    ],
  },

  account: {
    loginEyebrow: "Welcome back",
    loginTitle: "Sign in to Palmshades",
    loginSubtitle: "Track orders, manage addresses, and return to saved checkout details.",
    signupEyebrow: "Join Palmshades",
    signupTitle: "Create your Palmshades account",
    signupSubtitle: "Save your details and prescription, track orders, and check out faster when new frames drop.",
    accountEyebrow: "Your account",
    accountTitle: "Welcome back",
  },

  contactPage: {
    eyebrow: "Contact",
    title: "Talk to an optician.",
    body: "Frame fit, prescriptions, order support, press, or collaborations - send the note and we will reply soon.",
    reasons: ["Frame fit", "Prescription help", "Order issue", "Return or exchange", "Press", "Collaboration"],
    directLines: [
      { label: "Email", value: "hello@palmshades.com", href: "mailto:hello@palmshades.com" },
      { label: "Phone", value: "+233 244 000 000", href: "tel:+233244000000" },
      { label: "WhatsApp", value: "+233 244 000 000", href: "https://wa.me/233244000000" },
    ],
  },

  trackOrder: {
    eyebrow: "Track an order",
    title: "Where are your frames?",
    body: "Enter your order number and email to see the latest status.",
  },

  footer: {
    blurb: "Eyewear from Accra: prescription, blue-light, and statement frames — glazed to your prescription and fitted to your face.",
    sitemap: [
      {
        title: "Shop",
        links: [
          { label: "All products", href: "/shop" },
          { label: "Prescription", href: "/categories/prescription" },
          { label: "Futuristic", href: "/categories/futuristic" },
          { label: "Blue Light", href: "/categories/blue-light" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Track an order", href: "/track-order" },
          { label: "Shipping", href: "/shipping" },
          { label: "Returns", href: "/returns" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Account",
        links: [
          { label: "Sign in", href: "/login" },
          { label: "Create account", href: "/signup" },
          { label: "Your orders", href: "/account/orders" },
          { label: "Settings", href: "/account/settings" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Accessibility", href: "/accessibility" },
          { label: "Sitemap", href: "/sitemap-page" },
        ],
      },
    ],
    poweredBy: { label: "Cimplify", href: "https://app.cimplify.io" },
  },

  llms: {
    summary:
      "Palmshades is an Accra-based eyewear brand offering prescription, blue-light, and statement frames — glazed to your prescription and fitted to your face — with single-vision, blue-light, and progressive lenses, in-store pickup, shipping, and Cimplify-powered checkout.",
  },

  mock: {
    seed: "fashion",
    businessId: "bus_studio_frx",
  },

  assets: {
    logo: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782397718/jfcbqwy9b2cznqdglwim.svg",
    footerLogo: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782397718/jfcbqwy9b2cznqdglwim.svg",
    hero: campaignImages[0],
    heroVideo:
      "https://res.cloudinary.com/dcc5ggnkc/video/upload/v1782396828/jwadlxpq5dl7dtmsrxvo.mp4",
    campaign: campaignImages,
    // "Hooded sets" editorial panel on the homepage (Discover the selection).
    hoodedSet: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1781852219/sfw0czastb6tkjkw47v0.jpg",
    // Summer 2026 lookbook posters (Look 01 / 02 / 03 in components/summer-collection.tsx).
    summer2026: [
      "https://res.cloudinary.com/dcc5ggnkc/image/upload/w_1600,q_auto,f_auto/v1782397347/vpqc2def1pfo1j4lnxvn.png",
      "https://res.cloudinary.com/dcc5ggnkc/image/upload/w_1600,q_auto,f_auto/v1782397348/exlwdxciti1fol6ncbxx.png",
      "https://res.cloudinary.com/dcc5ggnkc/image/upload/w_1600,q_auto,f_auto/v1782397346/aefp7ltn5oghf1owrye6.png",
      "https://res.cloudinary.com/dcc5ggnkc/image/upload/w_1600,q_auto,f_auto/v1782397345/wbdvsp4wuqzphtya36ig.png",
    ],
    // Full-bleed story on the home page (futuristic frame, worn close-up).
    denimStory:
      "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453469/aaggivzgiyfnoespzzw2.jpg",
  },

  fashion: {
    season: "2026 FRAME COLLECTION",
    summer2026: {
      eyebrow: "2026 collection",
      title: "Prescription glasses.",
      body: "Single-vision, bifocal, and progressive lenses glazed to your exact prescription and fitted into the frame you love.",
      primaryCtaLabel: "Shop the collection",
      primaryCtaHref: "/shop",
      secondaryCtaLabel: "View lookbook",
      secondaryCtaHref: "/collections/summer-2026",
      signalEyebrow: "New in",
      signalTitle: "Three frames. One clear look.",
      imageKicker: "2026",
      lookLabel: "Frame",
      yearMark: "2026",
    },
    campaignTitle: "See clearly, look sharp.",
    campaignBody:
      "Frames built for movement and light — shapes that keep their edge from desk to dusk.",
    categoryHighlight: {
      eyebrow: "Shop by category",
      title: "Find your frame.",
      items: [
        {
          slug: "prescription",
          label: "Prescription",
          blurb: "Glazed to your exact prescription and fitted to the frame you love.",
          href: "/categories/prescription",
          image:
            "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453637/piustckyhcidu3usaa55.jpg",
        },
        {
          slug: "futuristic",
          label: "Futuristic",
          blurb: "Bold, forward silhouettes for the road ahead.",
          href: "/categories/futuristic",
          image:
            "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453469/aaggivzgiyfnoespzzw2.jpg",
        },
        {
          slug: "blue-light",
          label: "Blue light blocking",
          blurb: "Screen-day comfort that filters the glare, all day.",
          href: "/categories/blue-light",
          image:
            "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782454245/pv64w5hstpcbyq3ltfwn.jpg",
        },
      ],
    },
    seenBy: {
      eyebrow: "Palmshades",
      title: "Worn by the culture",
      people: [
        {
          role: "Prescription",
          name: "Everyday optical",
          image: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453468/zrtfpjieyq1ks1ydivqe.jpg",
        },
        {
          role: "Blue light",
          name: "Screen-day comfort",
          image: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453468/v12wvmsoavepamencymx.jpg",
        },
        {
          role: "Futuristic",
          name: "Statement shades",
          image: "https://res.cloudinary.com/dcc5ggnkc/image/upload/v1782453469/yvojtaua1fvkdshh7j3k.jpg",
        },
      ],
    },
    mensTitle: "Men's frames",
    mensBody: "Clean optical shapes, sharp metals, and everyday frames built to be worn daily.",
    womensTitle: "Women's frames",
    womensBody: "Cat-eyes, soft rounds, and statement colour — frames made to be noticed.",
    denimTitle: "Future-facing",
    denimBody: "Sculpted wraps and shields with an edge — the frames that turn heads after dark.",
    accessoriesTitle: "Complete the look",
    accessoriesBody: "Cases, microfibre cloths, cords, and lens care to keep every frame sharp.",
    socialHandle: "@palmshades",
  },
};
