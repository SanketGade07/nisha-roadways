export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  about: {
    title: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    image: string;
  };
  keyBenefits: Array<{
    title: string;
    description: string;
  }>;
  technicalSpecs: Array<{
    title: string;
    description: string;
  }>;
  industries: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "empty-container-transportation",
    title: "Moving Empty Containers Across India",
    subtitle: "We transport empty containers between ports, ICDs, yards, and customer locations. Choose short haul or long haul based on your distance needs.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Container Types We Handle",
      description: "We handle all types of empty containers including GP (General Purpose), High cube, Reefer, Generator containers with machinery, Tank containers, Flat rack and open top containers, and Office containers. Our fleet is equipped to transport any container type safely across India.",
      stats: [
        { value: "7+", label: "Container Types" },
        { value: "3 Sizes", label: "Available" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Condition checks", description: "We verify container condition before loading. Any damage gets documented and reported immediately." },
      { title: "Fast turnaround", description: "Our drivers know the routes. We plan for traffic, border clearances, and weighbridge queues." },
      { title: "Transparent pricing", description: "You get a quote upfront. No hidden charges for demurrage or detention unless caused by delays outside our control." },
      { title: "Two Service Models", description: "Exim Container Transport (shipping lines) and Domestic Container Transport (container trading companies)." }
    ],
    technicalSpecs: [
      { title: "Container Types", description: "GP, High cube, Reefer, Generator, Tank, Flat rack, Open top, Office containers" },
      { title: "Available Sizes", description: "20-foot, 40-foot, 40-foot high cube containers" },
      { title: "How It Works", description: "Pickup location & destination -> Vehicle assignment -> Driver picks up -> GPS tracking -> Delivery -> Documentation" },
      { title: "Safety Standards", description: "ISO certified handling procedures and GPS tracking" }
    ],
    industries: [
      { title: "Shipping Lines", description: "For Exim container repositioning" },
      { title: "Container Trading", description: "For domestic sale/leasing container movement" },
      { title: "Logistics Providers", description: "For integrated supply chain solutions" },
      { title: "Manufacturers", description: "For internal container movements" }
    ],
    process: [
      { title: "You tell us pickup location and destination", description: "Provide details for efficient planning." },
      { title: "We assign the right vehicle based on container type", description: "Matching vehicle to cargo needs." },
      { title: "Our driver picks up the container", description: "Prompt and professional pickup." },
      { title: "GPS tracking activates automatically", description: "Real-time visibility during transit." },
      { title: "Container delivered to destination", description: "Timely and secure delivery." },
      { title: "Documentation provided instantly", description: "All paperwork handled efficiently." }
    ],
    ctaText: "Request ECT Quote"
  },
  {
    slug: "export-import-containers",
    title: "Complete Export Import Container Solutions",
    subtitle: "We handle the full journey for your loaded containers. Export or import, we manage pickup, transport, tracking, and delivery.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Export & Import Services",
      description: "For exports: We collect empty containers from ports, yards, or ICDs, transport to your factory for stuffing, and bring loaded containers to designated ports. For imports: We transport loaded containers from ports and CFSs to your factory or warehouse, and return empty containers after destuffing. We work with shipping lines, CHAs, and freight forwarders.",
      stats: [
        { value: "24/7", label: "Operations" },
        { value: "100%", label: "Compliance" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Export Services", description: "Collect empty containers from ports, yards, or ICDs. Transport to your factory for stuffing. Bring loaded containers to designated ports." },
      { title: "Import Services", description: "Transport loaded containers from ports and CFSs to your factory or warehouse. After destuffing, return empty containers to ports, ICDs, or empty parks." },
      { title: "Documentation Support", description: "We work with your CHAs and freight forwarders to ensure smooth customs clearance. All documentation is provided digitally through our system." },
      { title: "Safety Measures", description: "Pre-trip inspection, damage reporting, and insurance options available based on cargo value." }
    ],
    technicalSpecs: [
      { title: "Container Types", description: "20-foot GP and high cube, 40-foot GP and high cube, Reefer containers, Tank containers, Flat rack and open top" },
      { title: "Export Process", description: "Container condition check -> Bottle seal provided -> Real-time tracking -> Timely delivery with port documentation" },
      { title: "Import Process", description: "Pick up loaded container -> Track throughout transit -> Deliver to factory/warehouse -> Check cargo condition -> Return empty container" },
      { title: "Insurance", description: "Available based on cargo value. We provide options from multiple insurers." }
    ],
    industries: [
      { title: "Shipping Lines", description: "Container movement for shipping lines" },
      { title: "CHAs", description: "Customs House Agents requiring transport services" },
      { title: "Freight Forwarders", description: "Freight forwarding companies" },
      { title: "Exporters", description: "Export businesses" },
      { title: "Importers", description: "Import companies and trading houses" }
    ],
    process: [
      { title: "Container condition check at pickup", description: "Ensuring container integrity before loading." },
      { title: "Bottle seal provided for security", description: "Security seals for cargo protection." },
      { title: "Real-time tracking during transit", description: "GPS tracking throughout the journey." },
      { title: "Timely delivery with port documentation", description: "Complete documentation provided." },
      { title: "All information shared with you and your CHA", description: "Transparent communication throughout." }
    ],
    ctaText: "Get ExIm Quote"
  },
  {
    slug: "domestic-cargo-containers",
    title: "Secure Domestic Cargo Transport",
    subtitle: "Move your domestic cargo in our 20-foot or 40-foot ISO containers. You get the security of containerized transport without owning the container.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Perfect For Your Cargo",
      description: "Ideal for CFS cargo removed from shipping lines, factory goods needing secure transportation, and high-value items like electronics, machinery, and pharmaceuticals. You get the security of containerized transport with your own seals, GPS tracking, and insurance options—all without owning the container.",
      stats: [
        { value: "4", label: "Capacity Options" },
        { value: "3", label: "Container Types" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Perfect For", description: "CFS cargo, Factory goods, High-value items (electronics, machinery, pharmaceuticals)" },
      { title: "Your own seals", description: "Apply your company's security seals. Only you or your consignee can break them." },
      { title: "GPS tracking", description: "Real-time location updates. You know exactly where your cargo is." },
      { title: "Insurance options", description: "Coverage based on declared cargo value. Multiple insurer options available." }
    ],
    technicalSpecs: [
      { title: "Available Capacities", description: "9-ton, 18-ton, 22-ton, 25-ton vehicles" },
      { title: "Container Types Available", description: "Standard 20-foot GP, Standard 40-foot GP, 40-foot high cube" },
      { title: "Pricing Structure", description: "Vehicle capacity used, Distance traveled, Insurance (if opted), Additional services" },
      { title: "Container Rental", description: "You don't pay for container rental—it's included." }
    ],
    industries: [
      { title: "CFS Cargo", description: "Cargo removed from shipping lines and stored in warehouses" },
      { title: "Factory Goods", description: "Domestic production needing secure transportation" },
      { title: "High-Value Items", description: "Electronics, machinery, pharmaceuticals needing protection" },
      { title: "Distributors", description: "Regional distribution and logistics" }
    ],
    process: [
      { title: "Share cargo details", description: "Weight, dimensions, value, destination." },
      { title: "We recommend vehicle capacity and container type", description: "Based on your cargo requirements." },
      { title: "Container arrives at your location", description: "Prompt delivery to your facility." },
      { title: "You stuff and seal the container", description: "Full control over cargo security." },
      { title: "We transport with GPS tracking", description: "Real-time visibility throughout." },
      { title: "You or your consignee destuffs at destination", description: "Convenient delivery process." }
    ],
    ctaText: "Book Domestic Container"
  },
  {
    slug: "solar-panel-transportation",
    title: "Specialized Solar Transportation",
    subtitle: "We launched our dedicated solar transportation team two years ago to support India's renewable energy growth. We move solar panels from ports, warehouses, and manufacturing units across India.",
    heroImage: "/images/specialized-solor-transportation/solor-transport-main.png",
    about: {
      title: "Why Solar Cargo Needs Specialists",
      description: "Solar panels are fragile—they crack under pressure, break during improper loading, and get damaged by vibrations. Our team understands proper stacking, securing methods, and road conditions. We've trained drivers specifically for this cargo type and use specialized equipment including 40-foot and 20-foot container vehicles, plus open trailers with proper lashing points and tarpaulin coverage.",
      stats: [
        { value: "2 Years", label: "Expertise" },
        { value: "5+", label: "Equipment Types" }
      ],
      image: "/images/specialized-solor-transportation/solor-transport-main.png"
    },
    keyBenefits: [
      { title: "Why Solar Cargo Needs Specialists", description: "Solar panels are fragile. Our team understands proper stacking, securing methods, and road conditions. We've trained drivers specifically for this cargo type." },
      { title: "Equipment We Use", description: "40-foot and 20-foot container vehicles for maximum protection. Open trailers with proper lashing points and tarpaulin coverage." },
      { title: "What We Transport", description: "Solar panels (imported and domestic), Solar inverters, Mounting structures, Battery storage systems, Other solar installation equipment" },
      { title: "Insurance", description: "We recommend insurance for all solar cargo. Coverage available based on invoice value or declared value." }
    ],
    technicalSpecs: [
      { title: "Container Vehicles", description: "40-foot container vehicles for maximum protection, 20-foot container vehicles for smaller loads" },
      { title: "Open Trailers", description: "Designed for solar panel loading, Proper lashing points, Tarpaulin coverage for weather protection" },
      { title: "From Where to Where", description: "From ports (Mundra, JNPT, Chennai), From warehouses (CFS and private warehouses), From manufacturers (Domestic solar units), To sites (Solar farms, rooftop installations, distributor warehouses)" },
      { title: "Our Process", description: "Pre-loading inspection -> Floor padding -> Systematic panel stacking -> Professional lashing -> GPS tracking -> Careful offloading" }
    ],
    industries: [
      { title: "Solar Manufacturers", description: "Solar panel and component manufacturers" },
      { title: "EPC Contractors", description: "Engineering, procurement, and construction companies" },
      { title: "Power Developers", description: "Renewable energy project developers" },
      { title: "Distributors", description: "Solar equipment distributors and dealers" },
      { title: "Installation Companies", description: "Solar installation and service companies" }
    ],
    process: [
      { title: "Pre-loading inspection of vehicle/container", description: "Ensuring proper equipment condition." },
      { title: "Proper floor padding installation", description: "Protecting fragile panels." },
      { title: "Systematic panel stacking with separators", description: "Preventing damage during transit." },
      { title: "Professional lashing to prevent shifting", description: "Secure cargo handling." },
      { title: "Tarpaulin coverage (for open trailers)", description: "Weather protection." },
      { title: "GPS tracking throughout journey", description: "Real-time monitoring." },
      { title: "Careful offloading at destination", description: "Safe delivery process." }
    ],
    ctaText: "Get Solar Transport Quote"
  },
  {
    slug: "over-dimension-cargo",
    title: "Moving Cargo That Doesn't Fit",
    subtitle: "We handle cargo up to 100 feet long, 20 feet wide, and 22 feet high. Industrial machinery, plant equipment, windmill parts, transformers—if it's oversized, we move it.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Our ODC Fleet & Complete Services",
      description: "We handle cargo up to 100 feet long, 20 feet wide, and 22 feet high with our specialized fleet: 40-foot to 100-foot trailers, hydraulic axle vehicles, and multi-axle trailers up to 18 axles. We provide complete ODC services including route surveys, vehicle recommendations, permission assistance, escort services, and loading supervision.",
      stats: [
        { value: "100ft", label: "Max Length" },
        { value: "18", label: "Max Axles" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Route surveys", description: "We survey the complete route before moving your cargo. Bridge heights, road widths, turning radius, overhead cables—everything gets checked." },
      { title: "Vehicle recommendations", description: "Based on cargo dimensions and weight, we recommend the right trailer type. We explain why one trailer works better than another." },
      { title: "Permission assistance", description: "RTO permissions, traffic police clearances, state border permits—we help with all paperwork. We know which authorities to contact." },
      { title: "Escort services", description: "Police escorts, pilot vehicles, gunmen (for high-value ODC)—available based on route requirements." }
    ],
    technicalSpecs: [
      { title: "Our ODC Fleet", description: "40-foot low bed trailers, Semi low bed trailers, High bed trailers, 70-foot trailers, 90-foot trailers, 100-foot trailers, Hydraulic axle vehicles, Multi-axle trailers (up to 18 axles)" },
      { title: "Types of ODC We Handle", description: "Import ODC (from ports to factory sites), Export ODC (from manufacturing units to ports), Domestic ODC (factory to factory)" },
      { title: "Cargo Examples", description: "Industrial boilers, Transformers, Windmill blades and towers, Plant machinery, Heat exchangers, Reactors, Heavy construction equipment, Pre-fabricated structures" },
      { title: "Loading supervision", description: "Our team supervises loading to ensure proper weight distribution and securing." }
    ],
    industries: [
      { title: "Power Generation", description: "Turbines, transformers, and power equipment" },
      { title: "Oil & Gas", description: "Refinery equipment and large vessels" },
      { title: "Construction", description: "Heavy construction equipment and machinery" },
      { title: "Infrastructure", description: "Bridge components and structural elements" },
      { title: "Manufacturing", description: "Large industrial machinery and equipment" },
      { title: "Renewable Energy", description: "Windmill parts and solar installation equipment" }
    ],
    process: [
      { title: "Route surveys", description: "Complete route survey before moving cargo." },
      { title: "Vehicle recommendations", description: "Recommend the right trailer type based on cargo." },
      { title: "Permission assistance", description: "Help with all paperwork and permits." },
      { title: "Escort services", description: "Arrange escorts based on route requirements." },
      { title: "Loading supervision", description: "Supervise loading for proper weight distribution." },
      { title: "Supervised Transport", description: "Expert-supervised transportation execution." }
    ],
    ctaText: "Request ODC Consultation"
  },
  {
    slug: "bulk-cargo-solutions",
    title: "Bulk Commodities Across India",
    subtitle: "We transport bulk cargo in open trucks and covered vehicles. From raw materials to finished products, we handle high-volume shipments efficiently.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "What We Transport & Vehicle Types",
      description: "We transport wood and timber, grains and agricultural products, coal and minerals, steel products, and construction materials. Our fleet includes open body trucks for weather-resistant cargo, covered trucks for weather protection, flatbed trailers for steel coils and plates, and high-sided trucks for lightweight, voluminous cargo.",
      stats: [
        { value: "5+", label: "Cargo Types" },
        { value: "4", label: "Vehicle Types" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "What We Transport", description: "Wood and timber, Grains and agricultural products, Coal and minerals, Steel products, Construction materials" },
      { title: "Vehicle Types", description: "Open body trucks for weather-resistant cargo, Covered trucks for weather protection, Flatbed trailers for steel coils and plates, High-sided trucks for lightweight, voluminous cargo" },
      { title: "Loading & Securing", description: "Steel coils: Proper chocking and lashing. Steel plates: Stacked flat with separators. TMT bars: Bundle securing. Timber: Cross-stacking and chain binding." },
      { title: "Documentation", description: "Weight certificates, Loading photos, Transit updates, POD (Proof of Delivery), Weighbridge slips" }
    ],
    technicalSpecs: [
      { title: "Capacity Options", description: "9-ton, 14-ton, 18-ton, 22-ton, 25-ton trucks, Multi-axle trailers for heavier loads" },
      { title: "Safety Measures", description: "Load distribution: Proper weight distribution to comply with axle load limits. Securing: Chains, ropes, and nets based on cargo type. Tarpaulin: Weather protection for sensitive cargo." },
      { title: "Steel Coils", description: "Proper chocking and lashing to prevent rolling" },
      { title: "Steel Plates", description: "Stacked flat with separators to prevent scratching" }
    ],
    industries: [
      { title: "Steel Industry", description: "Steel coils, plates, TMT bars, billets, structural steel" },
      { title: "Construction", description: "Sand, gravel, crushed stone, cement (in bulk)" },
      { title: "Agriculture", description: "Wheat, rice, corn, pulses (in covered vehicles)" },
      { title: "Mining", description: "Industrial coal, pet coke, iron ore" },
      { title: "Timber", description: "Logs, planks, plywood, wooden pallets" }
    ],
    process: [
      { title: "Cargo assessment", description: "Understanding cargo type and requirements." },
      { title: "Vehicle selection", description: "Choosing appropriate vehicle type." },
      { title: "Loading & Securing", description: "Professional loading and securing methods." },
      { title: "Weighbridge", description: "Weight verification and documentation." },
      { title: "Transport", description: "Safe transit with GPS tracking." },
      { title: "Delivery", description: "Timely delivery with POD." }
    ],
    ctaText: "Get Bulk Cargo Quote"
  },
  {
    slug: "rail-services",
    title: "Cost-Effective Rail Transportation",
    subtitle: "We partner with rail operators across India to move your cargo by train. This works best for high-volume, low-value products where cost matters more than speed.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "When Rail Makes Sense",
      description: "Rail transportation works best for large quantities (100+ tons), low per-unit value products, non-urgent shipments (5-10 days delivery), and long distances. We provide combined Rail + Road solutions: we pick up cargo from your factory, transport to railway siding, handle rail movement, and deliver from destination siding to consignee location—giving you cost benefits of rail with door-to-door convenience.",
      stats: [
        { value: "100+", label: "Tons Capacity" },
        { value: "40%", label: "Cost Savings" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "When Rail Makes Sense", description: "Large quantities (100+ tons), Low per-unit value, Non-urgent shipments (5-10 days), Long distances" },
      { title: "Combined Solutions", description: "Rail + Road: We pick up cargo from your factory, transport to railway siding, handle rail movement, and deliver from destination siding to consignee location." },
      { title: "Cost Benefit", description: "This gives you the cost benefit of rail with the convenience of door-to-door service." },
      { title: "What We Transport by Rail", description: "Industrial raw materials, Steel products, Coal and minerals, Bulk grains, Construction materials, Containerized cargo" }
    ],
    technicalSpecs: [
      { title: "How It Works", description: "You share cargo details -> We check rail availability -> We book rail space -> We handle loading -> We track wagon movement -> We arrange unloading -> We provide first-mile and last-mile road transport" },
      { title: "Our Rail Network", description: "We work with rail operators serving all major industrial corridors across India." },
      { title: "Documentation", description: "Railway receipt (RR), Loading photos and weight certificates, Transit tracking updates, Unloading confirmation, POD" },
      { title: "Car Types", description: "Container cars, bulk cars, specialized wagons" }
    ],
    industries: [
      { title: "Steel", description: "Steel plants and metal processing industries" },
      { title: "Coal & Mining", description: "Coal transportation and mining operations" },
      { title: "Cement", description: "Cement plants and construction materials" },
      { title: "Chemicals", description: "Chemical plants and processing facilities" },
      { title: "Agriculture", description: "Grain transportation and food processing" },
      { title: "Construction", description: "Construction materials and bulk commodities" }
    ],
    process: [
      { title: "You share cargo details and quantity", description: "Provide cargo specifications." },
      { title: "We check rail availability for your route", description: "Check schedule and availability." },
      { title: "We book rail space and arrange wagon allocation", description: "Secure rail transportation." },
      { title: "We handle loading at origin railway siding", description: "Professional loading services." },
      { title: "We track the wagon movement", description: "Real-time tracking." },
      { title: "We arrange unloading at destination siding", description: "Coordinate unloading." },
      { title: "If needed, we provide first-mile and last-mile road transport", description: "Complete door-to-door service." }
    ],
    ctaText: "Check Rail Transport Rates"
  },
  {
    slug: "coastal-services",
    title: "Coastal Shipping Across India",
    subtitle: "We offer coastal shipping services connecting 10 major Indian ports. This reduces your transportation costs for long-distance movements along the coastline.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Connect 10 Major Indian Ports",
      description: "We offer bi-directional coastal shipping connecting Mundra, Hazira, JNPT/Nhava Sheva, Pipava, Mangalore, Cochin, Tuticorin, Chennai, Visakhapatnam, Haldia, and Kolkata. This works best for long distances (1000+ km), non-urgent cargo (5-15 days), and cost-sensitive cargo—saving 30-50% compared to road transport. We provide complete door-to-door service through coastal route.",
      stats: [
        { value: "10", label: "Major Ports" },
        { value: "30-50%", label: "Cost Savings" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Ports We Connect", description: "Mundra, Hazira, JNPT/Nhava Sheva, Pipava, Mangalore, Cochin, Tuticorin, Chennai, Visakhapatnam, Haldia, Kolkata" },
      { title: "Service Coverage", description: "Bi-directional service between all ports. Any port to any port." },
      { title: "When Coastal Shipping Works", description: "Long distances (1000+ km apart), Non-urgent cargo (5-15 days), Cost-sensitive cargo (30-50% savings), Heavy cargo (when road permits become complicated)" },
      { title: "Complete Solution", description: "Door-to-door through coastal route: Factory → Road → Origin Port → Sea → Destination Port → Road → Consignee" }
    ],
    technicalSpecs: [
      { title: "What We Ship", description: "Containerized cargo (20-foot and 40-foot containers), Break bulk (Steel products, machinery, project cargo), Bulk commodities (Based on vessel availability)" },
      { title: "How It Works", description: "You share cargo details -> We check vessel schedules -> We arrange port-to-port movement -> We provide first-mile road transport -> We handle port documentation -> We track vessel movement -> We arrange last-mile transport" },
      { title: "Cost Savings", description: "Coastal shipping costs 30-50% less than road transport for eligible routes." },
      { title: "Transit Time", description: "5-15 days depending on route and vessel schedule." }
    ],
    industries: [
      { title: "Shipping Lines", description: "Container and cargo shipping companies" },
      { title: "Steel Industry", description: "Steel products transportation" },
      { title: "Machinery", description: "Project cargo and machinery" },
      { title: "Bulk Commodities", description: "Bulk materials transportation" },
      { title: "Importers/Exporters", description: "International trade cargo" }
    ],
    process: [
      { title: "You share cargo details and route", description: "Provide cargo specifications." },
      { title: "We check vessel schedules and availability", description: "Check vessel availability." },
      { title: "We arrange port-to-port movement", description: "Book vessel space." },
      { title: "We provide first-mile road transport (factory to origin port)", description: "Road transport to port." },
      { title: "We handle port documentation and customs (if needed)", description: "Complete documentation." },
      { title: "We track vessel movement", description: "Real-time tracking." },
      { title: "We arrange last-mile transport (destination port to consignee)", description: "Final delivery." }
    ],
    ctaText: "Explore Coastal Transport"
  },
  {
    slug: "lcl-consolidation",
    title: "Ship Small Quantities Cost-Effectively",
    subtitle: "Less than Container Load (LCL) consolidation lets you ship small cargo quantities without paying for a full container. We consolidate multiple clients' cargo heading to the same destination.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Who Benefits from LCL Consolidation",
      description: "Perfect for small businesses without enough cargo to fill a container, trial orders testing new markets, regular small shipments (100-500 kg), and e-commerce fulfillment. We consolidate multiple clients' cargo heading to the same destination. You pay for actual weight or volumetric weight (whichever is higher), with quantity range from 1 kg to 20 kg and beyond—no minimum or maximum limits.",
      stats: [
        { value: "1kg-20kg+", label: "Range" },
        { value: "60%", label: "Cost Savings" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Who Benefits", description: "Small businesses, Trial orders, Regular small shipments (100-500 kg), E-commerce fulfillment" },
      { title: "Quantity Range", description: "From 1 kg to 20 kg and beyond. No minimum or maximum limits—you pay for what you ship." },
      { title: "Safety & Security", description: "Proper segregation: Your cargo is marked and segregated from others. Documentation: Separate consignment note. Insurance: Available for declared value. Tracking: Vehicle-level tracking." },
      { title: "Delivery Time", description: "Standard: 3-7 days depending on distance. Express: 1-3 days for select routes." }
    ],
    technicalSpecs: [
      { title: "How It Works", description: "You share cargo details -> We calculate volumetric weight -> You pay for actual or volumetric weight (whichever is higher) -> We consolidate with others -> GPS tracking -> Delivery -> You receive only your cargo" },
      { title: "Pricing", description: "You pay based on: Actual weight (in kg), Volumetric weight (length × width × height ÷ 5000), Destination zone, Service type (standard or express)" },
      { title: "Vehicle Types", description: "Trucks for consolidated road transport, Containers for containerized LCL consolidation" },
      { title: "Popular Routes", description: "Mumbai to Delhi, Ahmedabad to Kolkata, Chennai to Bangalore, Delhi to Mumbai, Bangalore to Hyderabad, and many more routes across India" }
    ],
    industries: [
      { title: "Small Businesses", description: "When you don't have enough cargo to fill a container" },
      { title: "Trial Orders", description: "Testing new markets or suppliers with small quantities" },
      { title: "Regular Small Shipments", description: "Weekly or monthly shipments of 100-500 kg" },
      { title: "E-commerce Fulfillment", description: "Sending inventory to regional warehouses" },
      { title: "Trading Companies", description: "Small volume import-export businesses" }
    ],
    process: [
      { title: "You share cargo details (weight, dimensions, destination)", description: "Provide shipment details." },
      { title: "We calculate volumetric weight", description: "Calculate shipping cost." },
      { title: "You pay for actual weight or volumetric weight (whichever is higher)", description: "Transparent pricing." },
      { title: "We consolidate your cargo with others going to the same location", description: "Efficient consolidation." },
      { title: "GPS tracking throughout journey", description: "Real-time tracking." },
      { title: "Delivery to your destination", description: "Timely delivery." },
      { title: "You receive only your cargo with proper documentation", description: "Complete documentation." }
    ],
    ctaText: "Calculate LCL Cost"
  },
  {
    slug: "high-value-goods",
    title: "Protecting What Matters Most",
    subtitle: "Electronics, pharmaceuticals, jewelry, high-value machinery—when cargo value is high, risk management becomes everything. We provide specialized security measures to protect high-value shipments.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Specialized Security Measures",
      description: "We protect electronics, pharmaceuticals, jewelry, high-value machinery, branded goods, and art. Our security includes GPS tracking through multiple systems, high-security locks only openable with your keys, armed escorts when needed, escort vehicles, brand-new containers, and pre-checked vehicles. Security is customized based on cargo value, route risk profile, and client requirements.",
      stats: [
        { value: "6", label: "Security Features" },
        { value: "Zero", label: "Loss Record" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "GPS tracking", description: "Real-time location through multiple tracking systems (driver phone + dedicated GPS device)." },
      { title: "Special locks", description: "High-security locks on container doors. Only openable with specific keys held by you and your consignee." },
      { title: "Armed escorts", description: "Gunmen or armed security personnel traveling with the vehicle." },
      { title: "Brand-new containers", description: "Fresh, damage-free containers to prevent any cargo damage." }
    ],
    technicalSpecs: [
      { title: "Security Measures", description: "GPS tracking, Special locks, Armed escorts, Escort vehicles, Brand-new containers, Pre-checked vehicles" },
      { title: "What We Protect", description: "Electronics and semiconductors, Pharmaceuticals and medical equipment, Jewelry and precious metals, High-value machinery, Branded goods, Art and antiques" },
      { title: "Customized Solutions", description: "We design security based on: Cargo value, Route risk profile, Client requirements, Insurance mandates" },
      { title: "Insurance", description: "Comprehensive cargo insurance, Coverage based on invoice value or declared value, Different coverage options (door-to-door, port-to-door, etc.)" }
    ],
    industries: [
      { title: "Electronics", description: "Electronics and semiconductors" },
      { title: "Pharmaceuticals", description: "Pharmaceuticals and medical equipment" },
      { title: "Jewelry", description: "Jewelry and precious metals" },
      { title: "Machinery", description: "High-value machinery" },
      { title: "Branded Goods", description: "Branded goods" },
      { title: "Art & Antiques", description: "Art and antiques" }
    ],
    process: [
      { title: "Security assessment", description: "Risk analysis and security planning." },
      { title: "Customized security design", description: "Based on cargo value and route risk." },
      { title: "Driver selection", description: "Experienced drivers with clean records, trained in emergency protocols." },
      { title: "Secure loading", description: "Supervised loading with security protocols." },
      { title: "Protected transit", description: "Monitored transport with GPS tracking and security backup." },
      { title: "Communication", description: "Hourly location updates, Immediate alerts, Direct driver contact, 24/7 control room support" }
    ],
    ctaText: "Secure Your Valuable Cargo"
  },
  {
    slug: "storage-warehousing",
    title: "Complete Storage Solutions",
    subtitle: "We provide warehousing across India for empty containers, loaded containers, and cargo. Choose the storage type based on your needs.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Storage Types & Features",
      description: "We provide empty container parks, loaded container storage, cargo warehouses, cold storage, pharma-grade facilities, and specialized warehouses. Our facilities feature 24/7 security guards, CCTV surveillance, loading docks, forklifts, inventory management, and online access to stock data. Locations near major ports, ICDs, industrial hubs, and metro cities across India.",
      stats: [
        { value: "6", label: "Storage Types" },
        { value: "50+", label: "Locations" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Storage Types", description: "Empty container parks, Loaded container storage, Cargo warehouses, Cold storage, Pharma-grade facilities, Specialized warehouses" },
      { title: "Container Storage", description: "Available for: 20-foot, 40-foot, High cube, Reefer containers (with power points), Tank containers. Rental options: Per day, Per week, Monthly, Long-term contracts" },
      { title: "Cargo Warehouse Features", description: "Security: 24/7 security guards, CCTV surveillance, Boundary walls and gates, Access control. Facilities: Loading docks, Forklifts, Packaging area, Office space" },
      { title: "Value-Added Services", description: "Loading and unloading, Sorting and segregation, Repackaging, Labeling, Quality inspection space, Container stuffing/destuffing" }
    ],
    technicalSpecs: [
      { title: "Locations", description: "We have warehousing facilities near: Major ports (Mumbai, Chennai, Mundra, etc.), ICDs and dry ports, Industrial hubs, Metro cities" },
      { title: "Documentation", description: "Inventory management, Stock reports, In/out registers, Online access to stock data" },
      { title: "Pricing", description: "Storage charges based on: Storage type, Space required (sq ft or container count), Duration, Additional services used, Location" },
      { title: "Container Types", description: "20-foot containers, 40-foot containers, High cube containers, Reefer containers (with power points), Tank containers" }
    ],
    industries: [
      { title: "Shipping Lines", description: "Empty container storage" },
      { title: "Importers/Exporters", description: "Loaded container storage" },
      { title: "Manufacturers", description: "Cargo warehouses for production materials" },
      { title: "Pharmaceuticals", description: "Pharma-grade facilities" },
      { title: "Food & Beverage", description: "Cold storage for perishables" },
      { title: "E-commerce", description: "Cargo warehouses for fulfillment" }
    ],
    process: [
      { title: "Storage requirement analysis", description: "Understanding storage needs." },
      { title: "Facility selection", description: "Choose appropriate storage type and location." },
      { title: "Space allocation", description: "Allocate warehouse space or container storage." },
      { title: "Inventory management", description: "Professional inventory tracking and management." },
      { title: "Value-added services", description: "Additional services as needed." },
      { title: "Distribution services", description: "Order fulfillment and distribution support." }
    ],
    ctaText: "Find Storage Near You"
  },
  {
    slug: "chemical-transportation",
    title: "Safe Chemical Transport",
    subtitle: "We transport liquids and gases in 20-foot domestic tank containers. This method is safer than traditional tankers with zero theft risk and minimal leakage.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Why Tank Containers for Chemicals",
      description: "We transport liquids and gases in 20-foot ISO tank containers. This method offers zero theft (sealed containers can't be tapped), minimal pilferage (seals show tampering), no leakage (properly maintained tanks), and safer transport (ISO-certified containers). We handle industrial chemicals, petrochemicals, edible oils, liquid fertilizers, water treatment chemicals, LPG, and industrial gases. Capacity: 21,000-26,000 liters per container.",
      stats: [
        { value: "Zero", label: "Theft Risk" },
        { value: "21-26K", label: "Liters Capacity" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Zero theft", description: "Sealed containers can't be tapped or siphoned during transit." },
      { title: "Minimal pilferage", description: "Container seals show any tampering attempt." },
      { title: "No leakage", description: "Properly maintained tank containers prevent spills." },
      { title: "Safer transport", description: "ISO-certified containers built for chemical transport." }
    ],
    technicalSpecs: [
      { title: "Tank Container Specifications", description: "Size: 20-foot ISO tank containers. Capacity: Typically 21,000-26,000 liters (varies by product density). Material: Stainless steel tanks for most chemicals. Certifications: ISO certified for chemical transport." },
      { title: "What We Transport", description: "Liquid chemicals: Industrial chemicals, Petrochemicals, Edible oils, Liquid fertilizers, Water treatment chemicals. Gases: LPG, Industrial gases, Compressed gases (in compatible containers)" },
      { title: "Safety Protocols", description: "Pre-loading inspection: Tank condition, valve condition, and cleanliness verified. Product compatibility check: Ensuring previous product won't contaminate current shipment. Proper sealing: All valves sealed after loading. Documentation: MSDS (Material Safety Data Sheet) carried during transit. Driver training: Drivers trained in chemical handling and emergency response." },
      { title: "Compliance", description: "Compliance with hazardous goods transport regulations, Proper labeling and placarding, Emergency response information available, Required permits for specific chemicals" }
    ],
    industries: [
      { title: "Chemical Manufacturing", description: "Industrial chemicals and processing facilities" },
      { title: "Petrochemicals", description: "Petroleum derivatives and specialty chemicals" },
      { title: "Pharmaceuticals", description: "Pharmaceutical raw materials and intermediates" },
      { title: "Agriculture", description: "Liquid fertilizers and agricultural chemicals" },
      { title: "Food Processing", description: "Edible oils and food-grade chemicals" },
      { title: "Water Treatment", description: "Water treatment chemicals and solutions" }
    ],
    process: [
      { title: "Pre-loading inspection", description: "Tank condition, valve condition, and cleanliness verified." },
      { title: "Product compatibility check", description: "Ensuring previous product won't contaminate current shipment." },
      { title: "Proper sealing", description: "All valves sealed after loading." },
      { title: "Documentation", description: "MSDS (Material Safety Data Sheet) carried during transit." },
      { title: "Driver training", description: "Drivers trained in chemical handling and emergency response." },
      { title: "Monitored transport", description: "Safe transit with compliance and safety protocols." },
      { title: "Cleaning services", description: "Tank container cleaning between shipments with different cleaning protocols." }
    ],
    ctaText: "Transport Chemicals Safely"
  }
];

// Helper function to get service data by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
