/**
 * Centralized Business Configuration & Content Data
 * 
 * Edit this file to update business contact information, credentials,
 * service offerings, project showcase entries, and placeholder elements.
 */

// Local generated image assets with verified paths
import heroImage from '@/src/assets/images/hero_luxury_smarthome_dusk_1790197116191.jpg';
import smartHomeLivingImage from '@/src/assets/images/smarthome_interior_living_1790197128031.jpg';
import lightingImage from '@/src/assets/images/architectural_led_lighting_1790197136580.jpg';
import lowVoltageRackImage from '@/src/assets/images/lowvoltage_rack_infrastructure_1790197147527.jpg';
import klmLogoImage from '@/src/assets/images/klm_ventures_logo_1790203250849.jpg';
import klmLogoOriginalImage from '@/src/assets/images/klm_logo_lime_1790203770641.jpg';
import klmLogoCleanImage from '@/src/assets/images/klm_logo_lime_clean.png';
import kitchenManDimImage from '@/src/assets/images/kitchen_man_dim_1790213178770.jpg';
import kitchenManBrightImage from '@/src/assets/images/kitchen_man_ceiling_only.jpg';

export interface BusinessConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  trustStatement: string;
  phone: string;
  displayPhone: string;
  email: string;
  inquiryRecipientEmail: string;
  serviceArea: string;
  serviceCities: string[];
  licensePlaceholder: string;
  insurancePlaceholder: string;
  yearsExperience: string;
  projectsCompleted: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    houzz?: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  companyName: "KLM Ventures",
  shortName: "KLM Ventures",
  tagline: "One system. One experience.",
  heroHeadline: "SMART TECHNOLOGY. BUILT INTO YOUR SPACE.",
  heroSubheadline: "Smart Home Integration, Architectural Lighting, Security & Low-Voltage Infrastructure for Modern Homes and Businesses.",
  trustStatement: "Residential • Commercial • New Construction • Remodels",
  phone: "+13239901101",
  displayPhone: "(323) 990-1101",
  email: "mike@klmventure.com",
  inquiryRecipientEmail: "mike@klmventure.com",
  serviceArea: "Serving Metro Area, Coastal Estates & Surrounding Communities",
  serviceCities: [
    "Metro Center & Downtown",
    "Westside Estates",
    "North Shore Communities",
    "South Valley Corridor",
    "Highland Hills",
    "Custom Regional Builds"
  ],
  licensePlaceholder: "State Low-Voltage & Electrical Contractor License [PLACEHOLDER — VERIFY BEFORE PUBLISHING]",
  insurancePlaceholder: "Fully Licensed, Bonded & Insured ($2M General Commercial & Residential Liability) [PLACEHOLDER]",
  yearsExperience: "14+ Years in Architectural Technology [PLACEHOLDER]",
  projectsCompleted: "420+ Integrated Spaces [PLACEHOLDER]",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    houzz: "https://houzz.com"
  }
};

export const IMAGES = {
  hero: heroImage,
  smartHomeLiving: smartHomeLivingImage,
  lighting: lightingImage,
  lowVoltageRack: lowVoltageRackImage,
  logo: klmLogoCleanImage,
  logoClean: klmLogoCleanImage,
  logoOriginal: klmLogoOriginalImage,
  logoDarkVector: klmLogoImage,
  kitchenManDim: kitchenManDimImage,
  kitchenManBright: kitchenManBrightImage,
};

export interface SystemNode {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  features: string[];
  connectionStatus: string;
}

export const SYSTEM_INTEGRATION_NODES: SystemNode[] = [
  {
    id: "lighting",
    title: "Smart Lighting",
    category: "Ambiance & Controls",
    description: "Control architectural fixtures, dimming curves, circadian kelvin shifts, and scheduled occupancy scenes from unified keypads.",
    iconName: "SunMedium",
    features: ["Architectural LED dimming", "Circadian Kelvin tracking", "Keypad engraving", "Occupancy sensors"],
    connectionStatus: "Active Mesh Protocol"
  },
  {
    id: "climate",
    title: "Climate Control",
    category: "HVAC & Thermal",
    description: "Integrate multi-zone thermostats, radiant flooring, and ventilation to respond automatically to occupancy and weather conditions.",
    iconName: "Thermometer",
    features: ["Multi-zone scheduling", "Invisible flush sensors", "Energy offset logic", "Humidity optimization"],
    connectionStatus: "Low-Voltage Bus"
  },
  {
    id: "shades",
    title: "Smart Shades",
    category: "Solar Management",
    description: "Whisper-quiet motorized window treatments that adjust automatically for glare protection, daylight harvesting, and privacy.",
    iconName: "Blinds",
    features: ["Silent motorized rollers", "Astronomical sun tracking", "Dual blackout/sheer", "Concealed pockets"],
    connectionStatus: "RF Integrated"
  },
  {
    id: "security",
    title: "Security & Sensors",
    category: "Perimeter & Access",
    description: "Seamless perimeter detection, discreet door/window contacts, glass-break sensors, and commercial-grade alarms unified into one app.",
    iconName: "ShieldCheck",
    features: ["Hardwired perimeter contacts", "Zero false-alarm logic", "Smart lock synchronization", "Emergency protocols"],
    connectionStatus: "Supervised Loop"
  },
  {
    id: "cameras",
    title: "Surveillance Cameras",
    category: "Visual Monitoring",
    description: "4K ultra-low-light exterior and interior optical sensors with local encrypted storage and AI human/vehicle edge classification.",
    iconName: "Camera",
    features: ["4K HDR night clarity", "Local encrypted NVR", "Perimeter boundary alerts", "Sub-second live view"],
    connectionStatus: "PoE Gigabit Stream"
  },
  {
    id: "audio",
    title: "Whole-Home Audio",
    category: "Acoustics & Media",
    description: "Architectural in-ceiling and completely invisible plaster-in speakers providing lossless multi-room high-resolution audio.",
    iconName: "Volume2",
    features: ["Invisible plaster-over speakers", "Multi-zone matrixing", "Lossless streaming support", "Architectural subwoofers"],
    connectionStatus: "Dante / IP Audio"
  },
  {
    id: "locks",
    title: "Access Control",
    category: "Entry Management",
    description: "Motorized smart deadbolts, discreet fingerprint scanners, keypad entry, and video intercom stations for doors, gates, and elevators.",
    iconName: "Lock",
    features: ["Architectural finishes", "Scheduled access codes", "Motorized multi-point latching", "Gate integration"],
    connectionStatus: "Encrypted Wireless"
  },
  {
    id: "networking",
    title: "Enterprise Networking",
    category: "Backbone Infrastructure",
    description: "Commercial-grade Wi-Fi 7 access points, managed multi-gigabit PoE switches, and redundant enterprise routing behind every device.",
    iconName: "Network",
    features: ["Multi-gigabit backbone", "VLAN device segregation", "Enterprise roaming", "UPS battery failover"],
    connectionStatus: "10Gbps Fiber Uplink"
  },
  {
    id: "voice",
    title: "Voice Automation",
    category: "Hands-Free Interface",
    description: "Natural voice control tuned specifically for whole-room execution without cluttering counters with commercial retail gadgets.",
    iconName: "Mic",
    features: ["Flush ceiling mics", "Context-aware room commands", "Custom wake-phrases", "Privacy hardware mute"],
    connectionStatus: "Local Neural Engine"
  },
  {
    id: "automation",
    title: "Unified Automation",
    category: "System Core",
    description: "Orchestrated rules that harmonize lighting, climate, shades, security, and media into intuitive single-touch and automated moments.",
    iconName: "Cpu",
    features: ["Conditional logic engines", "Presence-based actions", "One-touch scenes", "Predictive scheduling"],
    connectionStatus: "Core Controller Bus"
  }
];

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  badge: string;
  isPrimary?: boolean;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  specs: string[];
  icon: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "smart-home",
    number: "01",
    title: "Smart Home System Integration",
    badge: "Primary Specialty",
    isPrimary: true,
    shortDescription: "Our flagship discipline. Unifying lighting, climate, audio, shading, and access into one intuitive, harmonious interface.",
    fullDescription: "Rather than burdening your property with ten separate apps and incompatible hubs, we engineer a centralized smart-home ecosystem. One tap or scheduled event orchestrates the entire residence.",
    deliverables: [
      "Custom wall keypad & touch-panel programming",
      "Smart thermostats & multi-zone climate integration",
      "Automated shade & daylight harvesting coordination",
      "One-touch scenes (Arrive, Entertain, Relax, Goodnight, Away)",
      "Smart locks & garage/gate automation integration",
      "Mobile app control & remote cloud management"
    ],
    specs: ["Central controller failover", "Low-latency bus architecture", "Matter / Zigbee / IP unified"],
    icon: "Home"
  },
  {
    id: "lighting-led",
    number: "02",
    title: "Architectural LED & Lighting Controls",
    badge: "Atmosphere & Design",
    shortDescription: "Precision recessed fixtures, linear cove lighting, landscape illumination, and seamless dimming down to 0.1%.",
    fullDescription: "Light defines architectural space. We partner with architects and interior designers to deliver museum-grade 95+ CRI illumination, flicker-free dimming, and circadian rhythm wellness lighting.",
    deliverables: [
      "Architectural recessed downlight installation",
      "Linear LED cove & under-cabinet channel lighting",
      "Exterior facade & architectural landscape lighting",
      "Centralized panelized dimming systems (clean wall plates)",
      "Circadian tunable-white scheduling (warm to cool)",
      "Occupancy & pathway nightlight automation"
    ],
    specs: ["0.1% smooth dimming curve", "95+ CRI true color rendering", "Zero buzzing / zero flicker"],
    icon: "Lightbulb"
  },
  {
    id: "security-cameras",
    number: "03",
    title: "Security Cameras & Video Surveillance",
    badge: "Visual Protection",
    shortDescription: "High-definition 4K optical sensors, local encrypted NVR storage, perimeter intrusion alerts, and zero monthly hardware hostage fees.",
    fullDescription: "Discrete, weather-sealed optical sensors engineered into architectural soffits and entryways. Access crisp live streams and instant perimeter event playback with zero lag.",
    deliverables: [
      "Discrete 4K HDR exterior & interior cameras",
      "Smart video doorbells with two-way intercom",
      "Local multi-terabyte encrypted NVR recording",
      "AI classification (human, vehicle, animal, package)",
      "Secure encrypted mobile viewing with zero port forwarding",
      "Night color vision with ambient low-light sensors"
    ],
    specs: ["Sub-second streaming latency", "Local on-premise encrypted storage", "PoE hardwire reliability"],
    icon: "Camera"
  },
  {
    id: "security-systems",
    number: "04",
    title: "Security Systems & Access Control",
    badge: "Perimeter Hardening",
    shortDescription: "Commercial-grade alarm infrastructure, invisible door/window sensors, smart access locks, and multi-tier credentialing.",
    fullDescription: "A comprehensive security foundation that communicates seamlessly with your lighting and cameras. When an alert triggers, lights illuminate, cameras focus, and instant alerts fire.",
    deliverables: [
      "Hardwired & wireless perimeter door/window sensors",
      "Glass-break & interior motion detection",
      "Commercial access control & keyless entry fobs",
      "Smart deadbolts & architectural magnetic locks",
      "Integration with monitoring stations of your choice",
      "Automated perimeter security lighting triggers"
    ],
    specs: ["Supervised dual-path communication", "Battery backup failover", "Encrypted wireless transmission"],
    icon: "ShieldAlert"
  },
  {
    id: "low-voltage",
    number: "05",
    title: "Low-Voltage Infrastructure & Cabling",
    badge: "Behind The Walls",
    shortDescription: "The physical nervous system of your building. Meticulous Cat6A/fiber structured cabling, conduit pathways, and equipment racks.",
    fullDescription: "True technology reliability starts before sheetrock is installed. We design and pull structured cabling, label every line with surgical precision, and dress clean rack enclosures.",
    deliverables: [
      "Structured Cat6A data cabling & fiber optic runs",
      "Low-voltage pre-wiring for audio, video, shades & sensors",
      "Pre-construction rough-in & conduit pathway planning",
      "Server & AV rack design, dressing & cable management",
      "Patch panel punch-down & certified line testing",
      "Pre-drywall builder coordination & walkthroughs"
    ],
    specs: ["Fluke certified terminations", "Thermally managed racks", "Future-proof conduit sleeves"],
    icon: "Workflow"
  },
  {
    id: "networking-wifi",
    number: "06",
    title: "Enterprise Networking & Wi-Fi Systems",
    badge: "Backbone Connectivity",
    shortDescription: "Commercial-grade routing, managed PoE switches, and discreet Wi-Fi access points that eliminate dead zones forever.",
    fullDescription: "A modern estate or commercial facility demands enterprise-grade network throughput. We isolate IoT devices for maximum cyber hygiene and deliver wall-to-wall gigabit coverage.",
    deliverables: [
      "Discreet ceiling & outdoor Wi-Fi 7 access points",
      "Managed gigabit and 10Gbps PoE network switches",
      "Dual-WAN router setup with cellular internet backup",
      "VLAN segregation for IoT security, guests & private computers",
      "Battery backup (UPS) conditioning for clean power",
      "Remote network health monitoring & auto-reboot outlets"
    ],
    specs: ["Multi-gigabit throughput", "Fast BSS seamless roaming", "Isolated IoT safety sandbox"],
    icon: "Wifi"
  },
  {
    id: "voice-automation",
    number: "07",
    title: "Voice Integration & Custom Automation",
    badge: "Effortless Control",
    shortDescription: "Clean, natural voice interfaces and conditional automation routines that operate in the background without manual fiddling.",
    fullDescription: "Speak a natural command to prepare the kitchen for cooking, dim the screening room, or verify all exterior doors are bolted before retiring for the evening.",
    deliverables: [
      "Voice-controlled lighting, climate & shades",
      "Whole-home announcement & intercom integration",
      "Custom routine scripting (e.g. Good Morning, Welcome Home)",
      "Sensor-based automation (pathway illumination, occupancy shutoff)",
      "Hands-free audio zone selection",
      "Privacy-first configuration with physical mute toggles"
    ],
    specs: ["Low-latency voice processing", "Multi-engine compatibility", "Custom scene macros"],
    icon: "Mic2"
  },
  {
    id: "commercial-tech",
    number: "08",
    title: "Commercial Building Technology",
    badge: "Enterprise & Retail",
    shortDescription: "High-density security, access control, energy-efficient lighting scheduling, and conference room AV for corporate and hospitality.",
    fullDescription: "We equip offices, boutique retail, restaurants, and multi-family properties with automated lighting schedules, staff access control cards, conference automation, and unified surveillance.",
    deliverables: [
      "Commercial access control & door strike credentials",
      "Title 24 / ASHRAE compliant lighting control schedules",
      "Multi-tenant & executive conference room AV systems",
      "High-density commercial surveillance & video walls",
      "Structured cabling for enterprise data centers & workstations",
      "Scheduled auto-arm and closing checklist automation"
    ],
    specs: ["Multi-site management", "Audit trail access logs", "Commercial power compliance"],
    icon: "Building2"
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Lifestyle & Blueprint Analysis",
    description: "We meet with you, your architect, or builder to understand how you inhabit or utilize your space, analyzing floor plans and identifying your technology priorities.",
    points: [
      "Lifestyle & daily routine walkthrough",
      "Architectural blueprint review",
      "Identification of key zones (entertaining, private, work)",
      "Budget and technology tier alignment"
    ]
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Engineering & Schematic Planning",
    description: "Our engineers craft comprehensive low-voltage schematics, equipment schedules, conduit pathway maps, and device placement drawings.",
    points: [
      "Low-voltage CAD wiring schematics",
      "Equipment rack elevation diagrams",
      "Lighting load schedules & fixture specification",
      "Coordination with electricians & general contractors"
    ]
  },
  {
    step: "03",
    title: "Install",
    subtitle: "Precision Rough-In & Craftsmanship",
    description: "During construction, our team pulls structured cabling before drywall closes. Later, we trim out fixtures, mount displays, and install precision equipment racks.",
    points: [
      "Pre-drywall structured wire pulls & labeling",
      "Low-voltage backbox & bracket rough-in",
      "Clean server rack build & cable dressing",
      "Final trim-out of keypads, cameras, and speakers"
    ]
  },
  {
    step: "04",
    title: "Integrate",
    subtitle: "System Commissioning & Tuning",
    description: "The magic happens here: we program the central processors, tune dimming curves, calibrate audio acoustics, configure security logic, and customize touch panels.",
    points: [
      "Unified system programming & scene creation",
      "Network security & VLAN configuration",
      "Lighting level calibration & scene presets",
      "Intuitive client touch-panel setup"
    ]
  },
  {
    step: "05",
    title: "Support",
    subtitle: "Ongoing Care & System Evolution",
    description: "Technology evolves, and we stand behind our craftsmanship. We offer proactive system health monitoring, firmware updates, and expansions as your needs grow.",
    points: [
      "Remote diagnostics & proactive monitoring",
      "Annual preventative system tune-ups",
      "System expansion as new tech emerges",
      "Direct priority technician support"
    ]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  category: "all" | "smart-home" | "lighting" | "security" | "residential" | "commercial";
  image: string;
  techInstalled: string[];
  summary: string;
  scope: string;
}

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "proj-1",
    title: "The Bel Air Contemporary Residence",
    type: "Luxury Residential New Build",
    category: "smart-home",
    image: heroImage,
    techInstalled: ["Whole-Home Automation", "Architectural LED Dimming", "4K Perimeter Optics", "Motorized Shades"],
    summary: "Complete pre-construction rough-in and unified smart home integration across 9,400 sq. ft. of modern indoor-outdoor living.",
    scope: "148 controlled lighting loads, 16 audio zones, 12 discrete 4K cameras, and motorized multi-slider glass wall integration."
  },
  {
    id: "proj-2",
    title: "Skyline Financial Headquarters",
    type: "Commercial Office Integration",
    category: "commercial",
    image: lowVoltageRackImage,
    techInstalled: ["Structured Cabling", "Commercial Access Control", "Boardroom Automation", "PoE Surveillance"],
    summary: "Dual-floor low-voltage infrastructure buildout featuring enterprise Cat6A cabling, biometric access, and motorized conference technology.",
    scope: "350+ certified data drops, 4 enterprise server racks, keycard access at 18 doors, and smart scheduling for energy reduction."
  },
  {
    id: "proj-3",
    title: "Oak Ridge Minimalist Villa",
    type: "Architectural Renovation",
    category: "lighting",
    image: lightingImage,
    techInstalled: ["Circadian Lighting", "Panelized Dimming", "Keypad Automation", "Flush In-Ceiling Speakers"],
    summary: "Replaced cluttered multi-gang light switches with discrete engraved keypads and warm-dim architectural cove lighting.",
    scope: "Eliminated 42 wall switches across the home down to 8 elegant custom keypads; installed museum-grade 2700K–1800K warm dimming."
  },
  {
    id: "proj-4",
    title: "Crestview Estate Living Space",
    type: "Smart Home & Shading",
    category: "residential",
    image: smartHomeLivingImage,
    techInstalled: ["Central Touch Panels", "Automated Sheer Shades", "Invisible Plaster Speakers", "Climate Coordination"],
    summary: "Seamless living area where technology is virtually invisible. Hidden audio transducers, recessed motorized roller pockets, and climate balance.",
    scope: "Single wall-mounted flush touch panel controls whole room lighting, climate, music, and shading presets with zero visible equipment clutter."
  }
];

export interface LightingScene {
  id: string;
  name: string;
  label: string;
  timeOfDay: string;
  description: string;
  kelvin: number;
  dimPercent: number;
  shadeState: string;
  accentState: string;
  audioState: string;
}

export const LIGHTING_SCENES: LightingScene[] = [
  {
    id: "arrive",
    name: "ARRIVE HOME",
    label: "Welcome Home",
    timeOfDay: "Dusk / Evening",
    description: "Pathway downlights illuminate softly, exterior entry sconces glow at 80%, foyer chandelier warms to 2400K, and hallway shades roll up.",
    kelvin: 2400,
    dimPercent: 75,
    shadeState: "Open (100%)",
    accentState: "Soft Amber Pathway",
    audioState: "Acoustic Lounge (Foyer & Kitchen)"
  },
  {
    id: "entertain",
    name: "ENTERTAIN",
    label: "Cocktail & Social",
    timeOfDay: "Evening",
    description: "Cove LEDs wash the ceiling in warm 2200K golden light, counter under-cabinet lights glow, dining pendant dims to intimate 40%, and garden lights turn on.",
    kelvin: 2200,
    dimPercent: 55,
    shadeState: "Half Sheer (50%)",
    accentState: "Architectural Cove Glow",
    audioState: "High-Res Jazz across All Zones"
  },
  {
    id: "relax",
    name: "RELAX",
    label: "Wind Down",
    timeOfDay: "Late Evening",
    description: "All harsh overhead lighting extinguishes. Low-level baseboard toe-kick lighting and bedside lamps engage at a warm, sleep-friendly 1800K candle hue.",
    kelvin: 1800,
    dimPercent: 25,
    shadeState: "Privacy Sheer",
    accentState: "Low-Level Floor Wash",
    audioState: "Ambient Soundscape (Master Suite)"
  },
  {
    id: "goodnight",
    name: "GOOD NIGHT",
    label: "Rest & Secure",
    timeOfDay: "Night",
    description: "All interior fixtures turn off. Exterior perimeter cameras activate active deterrent boundary mode, motorized deadbolts lock, and hallway pathway activates at 5% motion.",
    kelvin: 2000,
    dimPercent: 0,
    shadeState: "Total Blackout (0%)",
    accentState: "Perimeter Security Ring",
    audioState: "Muted / Silent Mode"
  },
  {
    id: "away",
    name: "AWAY",
    label: "Energy & Simulation",
    timeOfDay: "Variable",
    description: "Thermostats drift to eco setpoints, window shades drop to block heat gain, and lights execute randomized occupancy simulation to deter intruders.",
    kelvin: 3000,
    dimPercent: 10,
    shadeState: "Heat-Deflect Closed",
    accentState: "Randomized Lived-in Simulation",
    audioState: "Power-Save Standby"
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  clientRole: string;
  projectType: string;
  verificationBadge: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Integrating technology into a clean modern build is always a delicate balance. KLM Ventures coordinated with our framers and electricians months before drywall, resulting in the cleanest wall surfaces and most reliable smart systems we've ever experienced.",
    clientRole: "Principal Architect, Modern Residential Studio",
    projectType: "New Construction Estate [PLACEHOLDER CONTENT — Replace with verified client review]",
    verificationBadge: "Verified Project Partner"
  },
  {
    id: "test-2",
    quote: "We previously had four different apps for cameras, lighting, garage, and thermostats. KLM Ventures replaced the chaos with one seamless interface. The lighting scenes alone have completely changed the way we host and live in our home.",
    clientRole: "Luxury Homeowner & Private Investor",
    projectType: "Full Residence Renovation [PLACEHOLDER CONTENT — Replace with verified client review]",
    verificationBadge: "Verified Homeowner"
  },
  {
    id: "test-3",
    quote: "As a commercial general contractor, finding a low-voltage integrator who actually understands scheduling, architectural prints, and clean rack craftsmanship is rare. They hit every inspection deadline without a hitch.",
    clientRole: "Senior Project Manager, Commercial Construction",
    projectType: "Corporate Facility [PLACEHOLDER CONTENT — Replace with verified client review]",
    verificationBadge: "Commercial Builder"
  }
];

export const COMPATIBLE_ECOSYSTEMS = [
  { category: "Architectural Controls", items: ["Lutron-Grade Keypads", "DALI-2 Dimming", "Crestron/Control4 Architecture", "KNX Protocols"] },
  { category: "Universal Protocols", items: ["Matter Standard", "Thread Mesh", "Zigbee 3.0", "Z-Wave Plus", "Local IP APIs"] },
  { category: "Surveillance & Security", items: ["NDAA-Compliant Cameras", "PoE Gigabit NVRs", "Wiegand & OSDP Access", "Supervised Hardwire"] },
  { category: "Lossless Audio & Media", items: ["Dante High-Res Audio", "AirPlay 2", "Sonos Amp Integration", "4K HDR Video Matrix"] },
  { category: "Enterprise Infrastructure", items: ["Ubiquiti UniFi Architecture", "Cisco Catalyst Compatible", "Cat6A Shielded", "Single-Mode Fiber"] }
];
