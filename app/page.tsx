"use client";

import { useEffect } from "react";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Agora Graphics",
  "description": "Full-service scenic fabrication and experiential production studio specializing in luxury brand activations, custom scenic builds, large-format print and graphics, CNC millwork, and nationwide event installation. Serving Miami, New York, Las Vegas, and markets nationwide.",
  "url": "https://experienceagora.com",
  "telephone": "+1-516-283-0363",
  "email": "info@agoravisuals.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1440 Church St",
    "addressLocality": "Bohemia",
    "addressRegion": "NY",
    "postalCode": "11716",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Miami",
      "sameAs": "https://en.wikipedia.org/wiki/Miami"
    },
    {
      "@type": "City",
      "name": "New York",
      "sameAs": "https://en.wikipedia.org/wiki/New_York_City"
    },
    {
      "@type": "City",
      "name": "Las Vegas",
      "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
    }
  ],
  "knowsAbout": [
    "Scenic Fabrication",
    "Experiential Production",
    "Large-Format Printing",
    "CNC Millwork",
    "Trade Show Exhibits",
    "Retail Environments",
    "Brand Activations",
    "Event Production",
    "Formula 1 Hospitality",
    "Luxury Brand Displays",
    "Custom Display Fabrication"
  ],
  "sameAs": [
    "https://www.instagram.com/agoragraphics/",
    "https://www.linkedin.com/company/agora-graphics",
    "https://www.facebook.com/AgoraGraphics"
  ]
};

const htmlContent = `
<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <div class="nav-brand">
      <span class="agora">AGORA</span>
      <span class="x">x</span>
      <img src="/3cs-logo.svg" alt="3CS" class="nav-logo" />
    </div>
    <div class="nav-links">
      <a href="#overview">Overview</a>
      <a href="#journey">Process</a>
      <a href="#scope">Scope</a>
      <a href="#investment">Investment</a>
      <a href="#schedule">Schedule</a>
      <a href="#terms">Terms</a>
      <a href="#authorize" class="active">Authorize</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-content">
    <div class="hero-eyebrow">Scenic Fabrication &amp; Event Production</div>
    <h1>Formula 1 Miami<br>Grand Prix Programming</h1>
    <h2>Fabrication &amp; Production Proposal</h2>
    <div class="hero-bar"></div>

    <div class="hero-partners">
      <span>IWC Schaffhausen</span>
      <span class="sep">x</span>
      <span>Mercedes-AMG Petronas F1</span>
      <span class="sep">x</span>
      <span>3CS</span>
    </div>

    <div class="hero-meta">
      <div class="hero-meta-item">
        <div class="hero-meta-label">Location</div>
        <div class="hero-meta-value">Miami Design District</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Program Dates</div>
        <div class="hero-meta-value">April 27 &ndash; May 3, 2026</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Document</div>
        <div class="hero-meta-value">IWC-F1-MIA-001</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Version</div>
        <div class="hero-meta-value">Version 1.3 &mdash; April 15, 2025</div>
      </div>
    </div>

    <p class="hero-narrative">
      Agora Graphics is pleased to present this comprehensive fabrication and production proposal for IWC Schaffhausen&rsquo;s Formula 1 Miami Grand Prix programming, developed in close collaboration with 3CS Productions. This multi-phase engagement encompasses custom scenic fabrication, large-format graphics production, precision logistics, overnight installation, and complete post-event strike &mdash; delivering a turnkey brand activation across two premier venues in the Miami Design District. The following pages outline our recommended approach, detailed scope of work, production timeline, and investment summary for your review and authorization.
    </p>
    <div class="hero-doc">Confidential &amp; Proprietary &bull; Estimate #4005373 &bull; Prepared exclusively for 3CS Productions, LLC</div>
  </div>
  <div class="hero-scroll" onclick="document.getElementById('overview').scrollIntoView({behavior:'smooth'})">
    <span>Explore Proposal</span>
    <div class="arrow">&darr;</div>
  </div>
</section>

<!-- BRAND NARRATIVE -->
<div class="brand-narrative" data-a>
  <blockquote>
    Every detail of a Formula 1 car is engineered with purpose. Every complication inside an IWC timepiece serves a function. This activation brings that shared philosophy to life &mdash; where precision manufacturing meets experiential storytelling, and where the craftsmanship behind both brands becomes something guests can see, touch, and feel.
  </blockquote>
  <div class="attr">Agora Graphics &mdash; Building Brand Environments Since 2006</div>
</div>

<!-- OVERVIEW -->
<section id="overview" class="sec">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Project Overview</span></div>
    <h2>Two Activations. One Unified Brand Moment.</h2>
    <p class="sec-desc">
      To commemorate the Formula 1 Miami Grand Prix, IWC Schaffhausen will unveil a Mercedes-AMG Petronas Formula One Team show car adjacent to its boutique in the heart of the Miami Design District &mdash; one of the most coveted retail corridors in the Americas. On the evening preceding race weekend, an exclusive VIP cocktail reception &mdash; headlined by a live conversation with Mercedes-AMG Petronas driver Kimi Antonelli, a curated DJ performance, and a premium culinary experience &mdash; will bring together the brand&rsquo;s most valued boutique clients, international press, and cultural influencers for an evening that bridges the worlds of haute horlogerie and Formula 1 motorsport.
    </p>
  </div>

  <div class="ov-grid" data-a>
    <div class="ov-card">
      <div class="accent" style="background:var(--iwc-gold)"></div>
      <div class="tag" style="color:var(--iwc-gold)">Activation 01</div>
      <h3>F1 Vehicle Display</h3>
      <div class="detail">
        <strong>Location:</strong> Paseo Ponti &mdash; between Louis Vuitton &amp; Dior<br>
        <strong>Duration:</strong> Tuesday, April 28 &ndash; Sunday, May 3 (6 days)<br>
        <strong>Hours:</strong> 11:00 AM &ndash; 7:00 PM daily<br>
        <strong>Load-In:</strong> April 27, 10:00 PM &ndash; 6:00 AM<br>
        <strong>Strike:</strong> May 3, 10:00 PM<br>
        <strong>Staffing:</strong> Brand ambassador on-site daily
      </div>
    </div>
    <div class="ov-card">
      <div class="accent" style="background:var(--mercedes-teal)"></div>
      <div class="tag" style="color:var(--mercedes-teal)">Activation 02</div>
      <h3>F1 Kick-Off Cocktail Evening</h3>
      <div class="detail">
        <strong>Location:</strong> Palm Court &mdash; 3rd Floor, 140 NE 39th St<br>
        <strong>Date:</strong> Wednesday, April 29, 2026<br>
        <strong>Time:</strong> 5:00 PM &ndash; 8:00 PM<br>
        <strong>Capacity:</strong> 150 guests &mdash; Boutique Clients, Press, AMG Clients, VIPs<br>
        <strong>Programming:</strong> Kimi Antonelli conversation, DJ performance, curated cocktails<br>
        <strong>Venue:</strong> 4,947 sq ft with retractable hardwood doors
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTION JOURNEY -->
<section id="journey" class="sec">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Your Production Journey</span></div>
    <h2>Eight Phases. One Seamless Experience.</h2>
    <p class="sec-desc">
      Every Agora engagement follows a structured, milestone-gated production lifecycle &mdash; from initial discovery through final project closeout. Each phase builds upon the last, with clearly defined deliverables, approval checkpoints, and quality assurance protocols designed to ensure that the finished environment meets the exacting standards of IWC Schaffhausen and Mercedes-AMG Petronas.
    </p>
  </div>

  <div class="journey-grid" data-a>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">01</div>
      <h4>Discovery &amp; Creative Consultation</h4>
      <p>Strategic alignment on brand vision, venue requirements, audience experience goals, and technical constraints. Site surveys and stakeholder interviews inform the creative brief.</p>
      <div class="step-date">Completed &mdash; March 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">02</div>
      <h4>Concept Design &amp; Visualization</h4>
      <p>Creative direction development, 3D renderings, spatial layout planning, and material specification. Visual presentations for client review and iterative refinement.</p>
      <div class="step-date">Completed &mdash; March 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">03</div>
      <h4>Engineering &amp; Technical Development</h4>
      <p>Structural engineering calculations, shop drawings, load-bearing specifications, and venue compliance documentation. All elements engineered for the 903-pound Formula 1 vehicle and outdoor exposure.</p>
      <div class="step-date">April 11 &ndash; 15</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">04</div>
      <h4>Fabrication &amp; Print Production</h4>
      <p>Custom scenic builds, precision CNC (computer numerical control) milling, millwork assembly, large-format vinyl and SEG (silicone edge graphics) tension-fabric output, G-Floor printing, Sintra fabrication, and multi-stage quality control inspections.</p>
      <div class="step-date">April 15 &ndash; 25</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">05</div>
      <h4>Logistics &amp; Pre-Deployment</h4>
      <p>Precision crating, climate-protected transport from our Bohemia, NY fabrication facility to Miami, and overnight delivery coordination with venue management and building operations.</p>
      <div class="step-date">April 25 &ndash; 27</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">06</div>
      <h4>Installation &amp; On-Site Build</h4>
      <p>Overnight load-in at Paseo Ponti (10 PM &ndash; 6 AM), scenic assembly, leveling, seaming, graphic application, and final scenic finishing. Palm Court build-out for the cocktail evening.</p>
      <div class="step-date">April 27 &ndash; 29</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">07</div>
      <h4>Activation &amp; Live Operations</h4>
      <p>Six consecutive days of vehicle display at Paseo Ponti with daily brand ambassador coverage, plus full technical production support for the VIP cocktail evening at Palm Court.</p>
      <div class="step-date">April 28 &ndash; May 3</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">08</div>
      <h4>Strike &amp; Project Closeout</h4>
      <p>Complete de-installation, asset removal, and full site restoration to original condition at both venues. Post-event reconciliation, final documentation, and project archive.</p>
      <div class="step-date">May 3 &ndash; 6</div>
    </div>
  </div>
</section>

<!-- SCOPE: VEHICLE DISPLAY -->
<section id="scope" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Scope of Work</span></div>
    <h2>Fabrication &amp; Production Details</h2>
    <p class="sec-desc">
      The following deliverables represent the complete fabrication, graphics, and scenic production scope for both activations. Each element has been precision-engineered for the specific site conditions, dimensional requirements, and brand standards of IWC Schaffhausen and Mercedes-AMG Petronas. All pricing is fully inclusive &mdash; on-site finishing, seaming, hardware, and scenic painting are integrated into every line item. No hidden costs or supplemental charges beyond what is documented herein.
    </p>
  </div>

  <!-- PHASE 01: VEHICLE DISPLAY -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--iwc-gold)">
      <div class="phase-num" style="color:var(--iwc-gold)">01</div>
      <div class="phase-info">
        <h3>F1 Vehicle Display</h3>
        <div class="sub">Paseo Ponti &mdash; Miami Design District &bull; April 28 &ndash; May 3</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--iwc-gold);color:var(--iwc-gold)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--iwc-gold)">
        <p class="phase-narrative">
          The centerpiece of IWC&rsquo;s Formula 1 race week presence: a full-scale Mercedes-AMG Petronas Formula One show car displayed on a custom-fabricated platform at Paseo Ponti, positioned between Louis Vuitton and Dior for maximum foot traffic and brand adjacency. The installation includes a structural ramp system, branded set wall with vinyl graphics, and precision-cut G-Floor flooring &mdash; all engineered for a 903-pound vehicle and six days of continuous outdoor exposure.
        </p>

        <div class="core-label" style="color:var(--iwc-gold)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Custom Platform &amp; Ramp System</div>
          <div class="desc">Approx. 120&Prime;W x 260&Prime;L footprint per confirmed measurements. Structural framing with reinforced load-bearing construction rated for the Formula 1 vehicle (903.895 lbs). Painted finish with on-site seaming for seamless presentation.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$12,000</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Vehicle Set Wall with Vinyl Print Graphic</div>
          <div class="desc">Approx. 10&prime;W x 8&prime;H set wall constructed from outdoor-grade wood, mounted directly to the platform. Front face features full-coverage vinyl print graphic with IWC x Mercedes-AMG Petronas partnership branding. Double-sided construction with fully finished top edge, rear face, and all exposed surfaces. 3&prime;1&Prime; of visible graphic space above the vehicle on the front face.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$11,350</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Custom Printed G-Flooring</div>
          <div class="desc">Qty: 2 panels, approx. 16&Prime;W &times; 276&Prime;; Qty: 1 panel, 16&Prime; &times; 136&Prime;; Qty: 1 panel, 11&prime;4&Prime; &times; 4&prime;. Custom printed G-Floor vinyl cut to activation footprint. Slip-rated and engineered for outdoor use. Graphic layout at 16&Prime; width.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$6,250</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Overnight Delivery &amp; Installation</div>
          <div class="desc">Transportation from Agora facility to Paseo Ponti including unloading, placement, assembly, leveling, and on-site coordination. Includes overnight labor premium for the April 27 load-in window (10:00 PM &ndash; 6:00 AM).</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Strike &amp; Removal</div>
          <div class="desc">Complete de-installation and removal of all fabricated elements following the final day of display. Site restored to original condition.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$1,500</div>
        </div>

        <div class="contract-ref"><strong>Contractual Framework:</strong> Scope of Work (S2) / Client Responsibilities (S4) / Shipping &amp; Delivery (S6) / Installation (S6.2)</div>

        <div class="gate" style="border-color:var(--iwc-gold)">
          <div class="gate-head"><div class="diamond" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Milestone: Vehicle Display Approval</span></div>
          <div class="gate-item">Shop drawings reviewed and approved for platform, ramp, and set wall</div>
          <div class="gate-item">Final creative assets received in print-ready format (due April 14)</div>
          <div class="gate-item">Venue access and load-in schedule confirmed with Miami Design District</div>
          <div class="gate-item">60% deposit received to initiate fabrication</div>
          <div class="gate-unlock" style="color:var(--iwc-gold)">&rarr; Initiates: Engineering, procurement, and fabrication for Vehicle Display elements</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 02: COCKTAIL EVENT -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--mercedes-teal)">
      <div class="phase-num" style="color:var(--mercedes-teal)">02</div>
      <div class="phase-info">
        <h3>F1 Kick-Off Cocktail Evening</h3>
        <div class="sub">Palm Court &mdash; Miami Design District &bull; April 29, 5:00 PM &ndash; 8:00 PM</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
        <p class="phase-narrative">
          An elevated cocktail environment at Palm Court designed to host IWC&rsquo;s most valued clients alongside press, influencers, and AMG partners. The scenic package delivers a 20-foot stage for the Kimi Antonelli live conversation, an SEG backdrop with dimensional logo, branded stage cladding, and DJ booth finishing &mdash; creating a cohesive brand environment that reflects the precision and craftsmanship synonymous with both IWC and Formula 1.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Stage Platform (20&prime;W x 8&prime;D x 12&Prime;H)</div>
          <div class="desc">Modular scenic stage platform with internal framing and black carpet finish. Engineered to support live conversation seating, DJ equipment, and foot traffic during the Kimi Antonelli program.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$9,750</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">SEG Stage Backdrop (20&prime;W x 8&prime;H)</div>
          <div class="desc">Custom scenic backdrop with tension-fabric printed graphics and dimensional IWC x Mercedes-AMG Petronas logo element. Positioned on top of the 12&Prime; stage deck for 9-foot total visual height.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$8,000</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Stage Cladding (Branded Sintra)</div>
          <div class="desc">Custom printed Sintra panels applied to full stage perimeter. Front &amp; back faces: 20&prime;W x 1&prime;H. Side faces: 8&prime;W x 1&prime;H. Branded with IWC event identity.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$3,850</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Vinyl Branding &mdash; DJ Booth</div>
          <div class="desc">Die-cut logo graphic print and application to the front facade of the white DJ booth (48&Prime;W x 48&Prime;H). Booth rental provided by client; Agora provides graphic production and installation.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$250</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Delivery &amp; Installation</div>
          <div class="desc">Transportation, on-site delivery, installation, assembly, and final positioning of all cocktail event scenic elements at Palm Court. Includes on-site project supervision.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$3,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Strike &amp; Removal</div>
          <div class="desc">Same-day breakdown and full removal of all installed scenic elements following event completion. Site restored to venue standards.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,850</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Branded Staircase Panels</div>
          <div class="desc">Custom printed branded panels for installation above the staircase at Palm Court. Print-ready artwork provided by client; Agora provides large-format print production, finishing, delivery, installation, and strike.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$4,500</div>
        </div>

        <!-- ADD-ONS -->
        <div class="addon-section">
          <div class="addon-label">Options &amp; Add-Ons</div>
          <div class="addon-sublabel">Available as change orders upon approval. Select items to include in your investment summary.</div>

          <div class="addon-item" onclick="toggleAddon(this)">
            <div class="addon-check"></div>
            <div class="info"><div class="aname">Technical Production Package</div>
            <div class="adesc">DJ Package ($6,500) + Stage Package ($4,500) + Retail &amp; Atmospheric ($2,500) + Audiovisual Labor ($1,500). Full audio, backline, and lighting production. See Investment section for complete equipment manifest.</div></div>
            <div class="aprice">$15,000</div>
          </div>
          <div class="addon-item" onclick="toggleAddon(this)">
            <div class="addon-check"></div>
            <div class="info"><div class="aname">SEG Step &amp; Repeat (24&prime;W x 9&prime;H)</div>
            <div class="adesc">Custom printed step and repeat backdrop for press and social media photo moments.</div></div>
            <div class="aprice">$4,500</div>
          </div>
          <div class="addon-item" onclick="toggleAddon(this)">
            <div class="addon-check"></div>
            <div class="info"><div class="aname">Black Carpet &mdash; Step &amp; Repeat Area (12&prime; x 6&prime;)</div>
            <div class="adesc">Premium black carpet with bound edges sized to step &amp; repeat footprint.</div></div>
            <div class="aprice">$1,250</div>
          </div>
          <div class="addon-item" onclick="toggleAddon(this)">
            <div class="addon-check"></div>
            <div class="info"><div class="aname">Pipe &amp; Drape Package (White, 50% Opacity, 13&prime;H)</div>
            <div class="adesc">Freestanding pipe and drape system with white semi-sheer fabric for soft visual separation of event zones.</div></div>
            <div class="aprice">$3,500</div>
          </div>
          <div class="addon-item" onclick="toggleAddon(this)">
            <div class="addon-check"></div>
            <div class="info"><div class="aname">Custom Water-Based Race Track Experience</div>
            <div class="adesc">12&prime;W x 8&prime;D fabricated miniature track with waterproof false-bottom system, 2&Prime; water surface, edge detailing, and premium finish. Includes fabrication, waterproofing, scenic finishing, delivery, install, and strike.</div></div>
            <div class="aprice">$35,000&ndash;$45,000</div>
          </div>
        </div>

        <div class="contract-ref"><strong>Contractual Framework:</strong> Scope of Work (S2) / Change Orders (S18) / Installation (S6.2) / Venue Labor (S6.3)</div>

        <div class="gate" style="border-color:var(--mercedes-teal)">
          <div class="gate-head"><div class="diamond" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Milestone: Cocktail Event Approval</span></div>
          <div class="gate-item">Stage, backdrop, and cladding designs approved</div>
          <div class="gate-item">DJ booth specs confirmed and rental secured by client</div>
          <div class="gate-item">Audiovisual scope finalized and change order approved (if applicable)</div>
          <div class="gate-item">Palm Court venue access and back-of-house logistics confirmed</div>
          <div class="gate-unlock" style="color:var(--mercedes-teal)">&rarr; Initiates: Fabrication and print production for all Palm Court scenic elements</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- INVESTMENT -->
<section id="investment" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Project Investment</span></div>
    <h2>Investment Summary</h2>
    <p class="sec-desc">
      The investment below reflects the complete fabrication, graphics, logistics, installation, and strike scope for both activations. On-site finishing &mdash; including seaming, painting, and hardware &mdash; is built into each line item.
    </p>
  </div>

  <table class="invest-table" data-a>
    <thead><tr><th>Item</th><th style="text-align:right">Investment</th></tr></thead>
    <tbody>
      <tr class="divider"><td colspan="2">Activation 01 &mdash; F1 Vehicle Display &bull; Paseo Ponti</td></tr>
      <tr><td>Custom Platform &amp; Ramp System &mdash; structural framing, reinforced load-bearing, painted finish</td><td>$12,000</td></tr>
      <tr><td>Vehicle Set Wall with Vinyl Print Graphic &mdash; double-sided, outdoor-grade, full-coverage branding</td><td>$11,350</td></tr>
      <tr><td>Custom Printed G-Flooring &mdash; precision-cut vinyl panels, slip-rated for outdoor use</td><td>$6,250</td></tr>
      <tr><td>Overnight Delivery &amp; Installation &mdash; transport, assembly, leveling, on-site coordination</td><td>$3,500</td></tr>
      <tr><td>Strike &amp; De-Installation &mdash; complete removal and site restoration</td><td>$1,500</td></tr>
      <tr class="divider"><td colspan="2">Activation 02 &mdash; F1 Cocktail Evening &bull; Palm Court</td></tr>
      <tr><td>Stage Platform (20&prime; &times; 8&prime; &times; 12&Prime;) &mdash; modular scenic deck, internal framing, black carpet finish</td><td>$9,750</td></tr>
      <tr><td>SEG Stage Backdrop (20&prime; &times; 8&prime;) &mdash; tension-fabric graphics with dimensional logo element</td><td>$8,000</td></tr>
      <tr><td>Stage Cladding &mdash; custom printed Sintra panels, full perimeter branding</td><td>$3,850</td></tr>
      <tr><td>Vinyl Branding &mdash; DJ Booth &mdash; die-cut logo graphic, production and application</td><td>$250</td></tr>
      <tr><td>Delivery &amp; Installation &mdash; transport, assembly, positioning, on-site supervision</td><td>$3,500</td></tr>
      <tr><td>Branded Staircase Panels &mdash; large-format print, finishing, installation, and strike</td><td>$4,500</td></tr>
      <tr><td>Strike &amp; De-Installation &mdash; same-day breakdown, removal, and venue restoration</td><td>$1,850</td></tr>
    </tbody>
    <tfoot><tr><td style="color:var(--white)">Project Subtotal</td><td>$66,300</td></tr></tfoot>
  </table>

  <div class="total-block" data-a>
    <div class="info">
      <div class="label">Project Subtotal</div>
      <div class="sub">Pre-tax. Applicable Florida sales tax added at invoicing.</div>
    </div>
    <div style="text-align:right">
      <div class="amount">$66,300</div>
      <div class="tax">+ applicable sales tax</div>
    </div>
  </div>

  <div class="engage-bar" data-a>
    <div class="engage-col" style="border-color:var(--iwc-gold)">
      <div class="tag" style="color:var(--iwc-gold)">Deposit &mdash; 60%</div>
      <div class="amt">$39,780</div>
      <div class="note">Due upon execution. Initiates engineering, procurement, and fabrication.</div>
    </div>
    <div class="engage-col" style="border-color:var(--mercedes-teal)">
      <div class="tag" style="color:var(--mercedes-teal)">Balance &mdash; 40%</div>
      <div class="amt">$26,520</div>
      <div class="note">Due three (3) business days prior to delivery or installation.</div>
    </div>
  </div>

  <!-- PAYMENT METHODS -->
  <div class="pay-section" data-a>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
      <div style="width:32px;height:2px;background:var(--iwc-gold)"></div>
      <span style="font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;color:var(--iwc-gold)">Payment Methods</span>
    </div>
    <h3 style="font-family:var(--serif);font-size:22px;font-weight:700;color:var(--white);margin-bottom:6px">ACH or Wire Transfer Only</h3>
    <p style="font-size:12px;color:var(--text-muted);line-height:1.7;max-width:640px">All payments under this engagement are accepted exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted. Please reference the project document number (IWC-F1-MIA-001) and estimate number (#4005373) on all remittances.</p>

    <div class="pay-grid">
      <div class="pay-method">
        <h4><div class="icon">$</div>ACH / Wire Transfer</h4>
        <div class="detail">
          <div class="label">Beneficiary</div>
          <strong>Agora Graphics, LLC</strong><br>
          <div class="label">Bank</div>
          <strong>Chase Business Banking</strong><br>
          <div class="label">Routing Number (ACH)</div>
          <strong>021000021</strong><br>
          <div class="label">Routing Number (Wire)</div>
          <strong>021000021</strong><br>
          <div class="label">Account Number</div>
          <strong>Provided upon execution</strong><br>
          <div class="label">Reference</div>
          <strong>IWC-F1-MIA-001 / Est. #4005373</strong>
        </div>
      </div>
      <div class="pay-method">
        <h4><div class="icon">&rarr;</div>Pay Online</h4>
        <div class="detail">
          <p>For your convenience, payments may also be submitted directly through our secure invoicing platform. A QuickBooks invoice with a direct payment link will be issued upon execution of this agreement.</p>
          <div style="margin-top:14px">
            <a href="mailto:mike@agoragraphics.com?subject=IWC-F1-MIA-001%20%E2%80%94%20Payment%20Link%20Request&amp;body=Please%20send%20the%20QuickBooks%20invoice%20and%20payment%20link%20for%20IWC-F1-MIA-001%20%2F%20Estimate%20%234005373." class="pay-btn pay-btn-secondary">Request Invoice &amp; Payment Link</a>
          </div>
          <div style="margin-top:10px;font-size:9px;color:rgba(138,138,149,0.5);letter-spacing:0.5px">Powered by QuickBooks &bull; Secure ACH &amp; wire transfer accepted</div>
        </div>
      </div>
    </div>
  </div>

  <!-- CHANGE ORDERS -->
  <div data-a style="margin-top:48px">
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Available Enhancements</span></div>
    <h2 style="font-size:26px;margin-bottom:8px">Change Orders &amp; Add-Ons</h2>
    <p class="sec-desc">The following production elements are available as supplemental change orders. Each will be scoped, approved, and invoiced independently from the base project investment.</p>
  </div>

  <div class="co-card" data-a>
    <h4>Technical Production Package</h4>
    <p style="margin-bottom:16px">Complete audio, backline, and lighting production for the Formula 1 Kick-Off Cocktail Evening at Palm Court. Four integrated packages designed to deliver a seamless, premium atmosphere supporting the Kimi Antonelli live conversation, DJ performance, press moments, and brand-immersive guest experience.</p>
    <div class="price" style="margin-bottom:20px">$15,000</div>

    <!-- DJ PACKAGE -->
    <div style="background:rgba(0,169,157,0.04);border:1px solid rgba(0,169,157,0.1);border-radius:var(--radius-sm);padding:20px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <h5 style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">DJ Package <span style="font-size:11px;color:var(--text-muted);font-weight:400">(Audio + Backline + Lighting)</span></h5>
        <span style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">$6,500</span>
      </div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.65;margin-bottom:12px">Full DJ booth audio and backline package with professional-grade Pioneer decks, mixer, wireless microphone system, and dedicated column speakers. Includes delivery, setup, soundcheck, on-site DJ technician (3:00 PM &ndash; 9:00 PM), and pickup.</p>
      <div style="font-size:9px;font-weight:700;color:var(--iwc-gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px">Equipment Manifest</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 20px">
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.pioneerdj.com/en-us/product/player/cdj-3000/black/overview/" target="_blank" rel="noopener" class="oem-link">Pioneer CDJ-3000</a> &mdash; Media Player with IEC, RCA, Cat5, Digital Cables <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.pioneerdj.com/en-us/product/mixer/djm-a9/black/overview/" target="_blank" rel="noopener" class="oem-link">Pioneer DJM-A9 Mixer</a> &mdash; 4-Channel DJ Mixer with Pelican Case &amp; IEC Cable <span style="color:var(--mercedes-teal);font-weight:600">&times;1</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.allen-heath.com/hardware/mixers/zed-10/" target="_blank" rel="noopener" class="oem-link">Allen &amp; Heath ZED10 Mixer</a> &mdash; 10-Channel Audio Mixer with Pelican Case &amp; Power Cable <span style="color:var(--mercedes-teal);font-weight:600">&times;1</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.shure.com/en-US/products/wireless-systems/ulxd" target="_blank" rel="noopener" class="oem-link">Shure ULXD Wireless Mic System</a> &mdash; with Beta 58 Microphone &amp; Road Case <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><span style="color:var(--text)">White Column Speaker with Subwoofer</span> &mdash; Full-range column speaker with paired subwoofer <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><span style="color:var(--text)">8-Port Gigabit Network Hub</span> &mdash; Network Switching Hub with Power Supply <span style="color:var(--mercedes-teal);font-weight:600">&times;1</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><span style="color:var(--text)">Cable Package</span> &mdash; Assorted Audio &amp; Power Cables <span style="color:var(--mercedes-teal);font-weight:600">&times;1</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><span style="color:var(--text)">DJ Technician</span> &mdash; Professional DJ &amp; Audio Technician, April 29, 3:00 PM&ndash;9:00 PM <span style="color:var(--mercedes-teal);font-weight:600">&times;1</span></div>
      </div>
      <div style="font-size:9px;font-weight:700;color:var(--iwc-gold);letter-spacing:1.5px;text-transform:uppercase;margin-top:14px;margin-bottom:6px">Recommended Lighting Fixtures</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 20px">
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.chauvetprofessional.com/products/colordash-par-h18ip/" target="_blank" rel="noopener" class="oem-link">Chauvet COLORdash Par H18IP</a> &mdash; RGBWA+UV LED wash, IP65 rated for booth uplighting <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.adj.com/ultra-hex-bar-12" target="_blank" rel="noopener" class="oem-link">ADJ Ultra Hex Bar 12</a> &mdash; Linear LED bar with RGBAW+UV for DJ booth accent lighting <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
      </div>
    </div>

    <!-- STAGE PACKAGE -->
    <div style="background:rgba(0,169,157,0.04);border:1px solid rgba(0,169,157,0.1);border-radius:var(--radius-sm);padding:20px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <h5 style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">Stage Package <span style="font-size:11px;color:var(--text-muted);font-weight:400">(Audio + Lighting)</span></h5>
        <span style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">$4,500</span>
      </div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.65;margin-bottom:12px">Stage audio reinforcement and lighting for the Kimi Antonelli live conversation and press moments. Focused front-of-house sound, stage wash, and accent lighting designed to complement the SEG backdrop and scenic environment.</p>
      <div style="font-size:9px;font-weight:700;color:var(--iwc-gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">Recommended Lighting Fixtures</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 20px">
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.etcconnect.com/Products/Entertainment-Fixtures/Source-Four-LED-Series-3/" target="_blank" rel="noopener" class="oem-link">ETC Source Four LED Series 3</a> &mdash; Variable white ellipsoidal for key lighting and precise beam control <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.chauvetprofessional.com/products/rogue-r2x-wash/" target="_blank" rel="noopener" class="oem-link">Chauvet Rogue R2X Wash</a> &mdash; RGBW LED moving head wash for dynamic stage color <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.chauvetprofessional.com/products/colordash-batten-quad-12/" target="_blank" rel="noopener" class="oem-link">Chauvet COLORdash Batten Quad-12</a> &mdash; Linear LED batten for even stage wash from above <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.elationlighting.com/kl-fresnel-8-fc" target="_blank" rel="noopener" class="oem-link">Elation KL Fresnel 8 FC</a> &mdash; Full-color LED Fresnel for soft fill and warm ambient wash <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
      </div>
    </div>

    <!-- RETAIL & ATMOSPHERIC PACKAGE -->
    <div style="background:rgba(0,169,157,0.04);border:1px solid rgba(0,169,157,0.1);border-radius:var(--radius-sm);padding:20px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <h5 style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">Retail &amp; Atmospheric Package <span style="font-size:11px;color:var(--text-muted);font-weight:400">(Lighting)</span></h5>
        <span style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">$2,500</span>
      </div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.65;margin-bottom:12px">Ambient and architectural lighting to transform the Palm Court venue into an immersive brand environment. Uplighting, gobo projection, and textural wash effects that reinforce IWC and Mercedes-AMG Petronas identity throughout the guest experience.</p>
      <div style="font-size:9px;font-weight:700;color:var(--iwc-gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">Recommended Lighting Fixtures</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 20px">
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.chauvetprofessional.com/products/well-fit/" target="_blank" rel="noopener" class="oem-link">Chauvet Well Fit</a> &mdash; Battery-powered RGBW LED uplighter for wireless column/wall wash <span style="color:var(--mercedes-teal);font-weight:600">&times;12</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.adj.com/encore-profile-pro" target="_blank" rel="noopener" class="oem-link">ADJ Encore Profile Pro</a> &mdash; LED ellipsoidal with gobo slot for custom IWC branded projection <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://www.elationlighting.com/proteus-rayzor-blade-s" target="_blank" rel="noopener" class="oem-link">Elation Proteus Rayzor Blade S</a> &mdash; Linear LED effect for water-texture ambient wash <span style="color:var(--mercedes-teal);font-weight:600">&times;4</span></div>
        <div style="font-size:11px;color:var(--text-muted);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)"><a href="https://us.rosco.com/en/products/x-effects" target="_blank" rel="noopener" class="oem-link">Rosco X-Effects</a> &mdash; Water-effect projection with custom gobo <span style="color:var(--mercedes-teal);font-weight:600">&times;2</span></div>
      </div>
    </div>

    <!-- AUDIOVISUAL LABOR PACKAGE -->
    <div style="background:rgba(0,169,157,0.04);border:1px solid rgba(0,169,157,0.1);border-radius:var(--radius-sm);padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <h5 style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">Audiovisual Labor Package</h5>
        <span style="font-family:var(--serif);font-size:16px;color:var(--mercedes-teal);font-weight:700">$1,500</span>
      </div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.65">On-site technical labor including load-in, rigging, focus, programming, show call, and strike. Lead technician and assistant for full event day coverage including soundcheck, live show operation, and breakdown.</p>
    </div>
    <div style="margin-top:16px;padding:14px 18px;background:rgba(0,169,157,0.06);border-left:3px solid var(--mercedes-teal);border-radius:0 var(--radius-sm) var(--radius-sm) 0">
      <p style="font-size:11px;color:var(--text-muted);line-height:1.65;margin:0"><span style="color:var(--mercedes-teal);font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:9px">Equipment Substitution Notice</span><br>All equipment specifications listed herein represent recommended selections based on availability and project requirements. Equivalent or comparable substitutions may be made at the discretion of Agora Graphics, contingent upon real-time market availability and prevailing rental pricing at the time of confirmation. Any material substitution shall maintain or exceed the published performance specifications of the originally listed equipment. Substitution requests initiated by the Client are welcomed and will be accommodated where feasible, subject to availability and adjusted market pricing.</p>
    </div>
  </div>

  <div class="co-card" data-a>
    <div class="badge">AVAILABLE UPON REQUEST</div>
    <h4>Additional Event Production Elements</h4>
    <p style="margin-bottom:10px">The following items have been scoped and are available for activation upon client direction:</p>
    <div class="co-subitem"><span>SEG Step &amp; Repeat (24&prime;W x 9&prime;H)</span><span class="amt">$4,500</span></div>
    <div class="co-subitem"><span>Black Carpet &mdash; Step &amp; Repeat Area (12&prime; x 6&prime;)</span><span class="amt">$1,250</span></div>
    <div class="co-subitem"><span>Pipe &amp; Drape Package (White, 50% opacity, 13&prime;H)</span><span class="amt">$3,500</span></div>
    <div class="co-subitem"><span>Custom Water-Based Race Track Experience</span><span class="amt">$35,000 &ndash; $45,000</span></div>
    <div class="co-subitem"><span>Printed Water Effect Graphic &mdash; Back Wall (12&prime;7&Prime; x 13&prime;)</span><span class="amt">$2,500</span></div>
  </div>

</section>

<!-- SCHEDULE -->
<section id="schedule" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Production Timeline</span></div>
    <h2>Workback Schedule</h2>
    <p class="sec-desc">All milestones are dependent upon timely approvals, receipt of final artwork, and confirmed venue access. Delays at any gate may impact downstream production windows.</p>
  </div>

  <table class="sched-table" data-a>
    <thead><tr><th>Phase</th><th>Milestone</th><th>Date</th></tr></thead>
    <tbody>
      <tr><td>Scope Approval</td><td>Project scope confirmed, production authorization issued, and engineering sequence initiated</td><td>April 2</td></tr>
      <tr><td>Deposit Received</td><td>60% project deposit received &mdash; triggers procurement, material ordering, and fabrication scheduling</td><td>April 3</td></tr>
      <tr><td>Creative Lock</td><td>All print-ready artwork, brand guidelines, and creative assets delivered to Agora for production</td><td>April 14</td></tr>
      <tr><td>Engineering &amp; Shop Drawings</td><td>Structural calculations, shop drawings, and load-bearing documentation issued for client review and approval</td><td>April 11 &ndash; 15</td></tr>
      <tr><td>Scenic Fabrication</td><td>Custom platform, ramp system, set wall, stage, and all structural scenic elements fabricated in-house</td><td>April 15 &ndash; 24</td></tr>
      <tr><td>Print &amp; Graphics Production</td><td>Large-format vinyl, SEG tension fabric, Sintra panels, and custom G-Floor graphics output and finished</td><td>April 20 &ndash; 25</td></tr>
      <tr><td>Balance Payment</td><td>Remaining 40% balance due &mdash; three business days prior to first scheduled delivery</td><td>April 21</td></tr>
      <tr><td>Vehicle Display Installation</td><td>Overnight load-in at Paseo Ponti &mdash; scenic assembly, leveling, graphic application, and final finishing</td><td>April 27, 10:00 PM</td></tr>
      <tr><td>Cocktail Event Build</td><td>Palm Court stage, backdrop, cladding, and DJ booth scenic elements installed and production-ready</td><td>April 29</td></tr>
      <tr><td>Strike &amp; De-Installation</td><td>Complete breakdown, asset removal, and full site restoration to original condition at both venues</td><td>May 3</td></tr>
      <tr><td>Project Closeout</td><td>Final reconciliation, post-event documentation, project archive, and closeout deliverables issued</td><td>May 6</td></tr>
    </tbody>
  </table>
</section>

<!-- WHY AGORA -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Production Capabilities</span></div>
    <h2>Why Agora Graphics</h2>
    <p class="sec-desc">
      Since 2006, Agora Graphics has delivered precision scenic fabrication and experiential production for the world&rsquo;s most discerning brands. Our vertically integrated operation &mdash; encompassing in-house engineering, CNC fabrication, large-format print production, and field installation &mdash; enables us to maintain uncompromising quality control from concept through completion, with the agility to execute complex, time-sensitive activations in high-profile environments.
    </p>
  </div>

  <div class="cap-grid" data-a>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--iwc-gold)">&loz;</div>
      <h4>Vertically Integrated Fabrication</h4>
      <p>Our 25,000+ sq ft Bohemia, NY headquarters houses dedicated scenic fabrication, millwork, CNC routing, large-format printing, and finishing operations &mdash; eliminating third-party dependencies and ensuring complete quality control under one roof.</p>
      <div class="cap-stat"><span>Scenic Builds</span><span>Millwork</span><span>CNC</span><span>Large-Format Print</span></div>
    </div>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--mercedes-teal)">&loz;</div>
      <h4>Luxury &amp; Automotive Brand Expertise</h4>
      <p>Proven experience executing high-stakes activations for premier luxury, automotive, and lifestyle brands in demanding venue environments &mdash; from flagship retail corridors to Formula 1 race week programming across major metropolitan markets.</p>
      <div class="cap-stat"><span>Luxury Retail</span><span>Automotive</span><span>Motorsport</span><span>Hospitality</span></div>
    </div>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--f1-red)">&loz;</div>
      <h4>Nationwide Field Operations</h4>
      <p>Experienced installation teams across Miami, New York, Las Vegas, and additional markets nationwide. Our field crews specialize in overnight load-ins, multi-venue coordination, and working within strict venue management protocols in premium retail and hospitality environments.</p>
      <div class="cap-stat"><span>Miami</span><span>New York</span><span>Las Vegas</span><span>Nationwide</span></div>
    </div>
  </div>
</section>

<!-- EXCLUSIONS -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Exclusions &amp; Clarifications</span></div>
    <p class="sec-desc" style="margin-bottom:8px">The following items, services, and responsibilities are expressly excluded from the scope of this proposal and shall not be provided, arranged, or assumed by Agora Graphics, LLC (&ldquo;Producer&rdquo;) under this engagement. Client acknowledges and agrees that Producer bears no obligation, liability, or responsibility for any item listed below unless separately authorized in writing via executed change order.</p>
    <p class="sec-desc" style="margin-bottom:20px;font-size:11px;color:var(--mercedes-teal);font-weight:600">Should any of the following elements be required, Producer is prepared to provide supplemental scoping and pricing upon written request.</p>
    <ul class="excl-list">
      <li><strong style="color:var(--text)">Power &amp; Electrical Infrastructure</strong> &mdash; All power distribution, temporary electrical service, generator rental, fuel supply, load calculations, electrical permitting, and rigging services at Paseo Ponti, Palm Court, and any ancillary venue location. Client is solely responsible for ensuring adequate and code-compliant power supply at each activation site.</li>
      <li><strong style="color:var(--text)">Venue Labor &amp; Union Requirements</strong> &mdash; All venue-mandated labor, union labor calls, jurisdictional labor agreements, drayage fees, loading dock coordination, freight elevator scheduling, and any required coordination with building engineering, property management, or facility operations staff at either venue.</li>
      <li><strong style="color:var(--text)">Post-Approval Engineering Revisions</strong> &mdash; Any engineering revisions, structural modifications, material substitutions, or design alterations necessitated by venue-imposed restrictions, code requirements, or site conditions discovered or communicated after written scope approval. Such revisions shall be scoped and priced as a separate change order.</li>
      <li><strong style="color:var(--text)">Permitting &amp; Regulatory Compliance</strong> &mdash; All permits, regulatory filings, fire marshal approvals, certificate of occupancy requirements, noise ordinance compliance, and jurisdictional approvals required by the City of Miami, Miami-Dade County, or Miami Design District property management. Client shall secure all necessary permits and approvals in advance of scheduled load-in.</li>
      <li><strong style="color:var(--text)">Security &amp; Access Control</strong> &mdash; All on-site security personnel, private security details, crowd management, guest access control, credential management, wristband distribution, and any security protocols required by the venue, Client, or brand partners.</li>
      <li><strong style="color:var(--text)">Catering, Floral &amp; Supplemental D&eacute;cor</strong> &mdash; All floral design, catering services, food and beverage procurement and service, bartending staff, tableware, linen rental, and any supplemental event d&eacute;cor, furnishings, or styling elements that fall outside the scenic fabrication scope expressly defined in this proposal.</li>
      <li><strong style="color:var(--text)">Formula 1 Show Car &mdash; Vehicle Logistics</strong> &mdash; All aspects of Formula 1 show car procurement, transport, placement, rigging, de-rigging, handling, climate-controlled storage, insurance coverage, manufacturer-required supervision, and any OEM or team-mandated protocols governing vehicle display. Producer shall not be responsible for vehicle condition, security, or compliance with manufacturer specifications.</li>
      <li><strong style="color:var(--text)">Client-Furnished Audio Equipment</strong> &mdash; DJ booth hardware, sound system rental, and live sound operation are Client-furnished unless the optional Technical Production Package (Change Order) is executed. Under base scope, Agora provides branded vinyl graphic production and surface application to Client-furnished DJ equipment only.</li>
      <li><strong style="color:var(--text)">Travel &amp; Accommodation</strong> &mdash; All travel expenses, airfare, hotel accommodations, per diem, ground transportation, and related costs for production crew are excluded unless expressly itemized within the scope of work. Miami-based field labor is included; any out-of-market crew requirements shall be scoped separately.</li>
      <li><strong style="color:var(--text)">Third-Party Vendor Coordination</strong> &mdash; Producer is not responsible for the performance, delivery timelines, or obligations of any third-party vendors engaged directly by Client, including but not limited to caterers, florists, entertainment, photographers, videographers, or PR agencies. Any coordination with Client&rsquo;s vendors required beyond the scope defined herein shall be subject to supplemental project management fees.</li>
    </ul>
  </div>
</section>

<!-- TERMS -->
<section id="terms" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Contractual Framework</span></div>
    <h2>Terms &amp; Conditions</h2>
    <p class="sec-desc">The following terms govern the complete engagement between Agora Graphics, LLC and 3CS Productions, LLC. Execution of this agreement constitutes full acceptance of the scope, pricing, payment terms, and contractual provisions outlined herein and in the accompanying Master Services Agreement, accessible via the footer of this document.</p>
  </div>

  <div class="terms-grid" data-a>
    <div class="term-card">
      <h4>Basis of Estimate <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;3</span></h4>
      <ul>
        <li>This proposal is based on preliminary dimensions, creative direction, and project scope provided by Client at the time of estimating. Producer makes no guarantee that final pricing will remain unchanged if underlying project parameters are modified after issuance.</li>
        <li>Final pricing shall be adjusted &mdash; upward or downward &mdash; upon receipt of confirmed dimensions, finalized creative assets, completed engineering review, material specification changes, or updated site conditions. Any adjustment shall be documented in a written Change Order prior to commencement of affected work.</li>
        <li>This estimate remains valid for thirty (30) calendar days from the date of issue. After expiration, material costs, subcontractor availability, and labor rates are subject to re-quotation at prevailing market rates. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;3.3]</span></li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Scope of Work <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;2</span></h4>
      <ul>
        <li>This engagement is limited exclusively to the narrative descriptions and itemized line items set forth in this proposal. No additional services, deliverables, or obligations shall be implied, inferred, or assumed beyond what is expressly stated herein. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;2.2]</span></li>
        <li>Services, materials, labor, equipment, third-party costs, or vendor coordination not expressly described in this document are excluded from Producer&rsquo;s scope and shall not be furnished unless formalized via a separately executed written Change Order signed by both parties.</li>
        <li>On-site finishing &mdash; including seaming, painting, touch-up, and hardware installation &mdash; is included in all applicable line items unless otherwise noted. Any finishing work required beyond what is specified shall constitute additional scope.</li>
        <li>This proposal does not constitute an exclusive services agreement. Producer retains the right to engage with other clients and projects concurrently.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Payment Terms (60/40 &mdash; ACH/Wire Only) <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;5</span></h4>
      <ul>
        <li>All payments shall be remitted exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, cash, and cryptocurrency payments are not accepted under any circumstances. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;5.1]</span></li>
        <li>A non-refundable deposit of sixty percent (60%) of the total project value is due upon execution of this agreement. Receipt of deposit initiates engineering, material procurement, and fabrication. No work shall commence until deposit is received and cleared.</li>
        <li>The remaining balance of forty percent (40%) is due no later than three (3) business days prior to the first scheduled delivery or installation date. Failure to remit balance by the stated deadline may result in delayed delivery, withheld installation, or storage fees at Producer&rsquo;s discretion.</li>
        <li>Change Order invoices are due in full upon written approval and prior to commencement of additional work. Change Order work shall not begin until payment is received and cleared.</li>
        <li>Late payments shall accrue interest at a rate of one and one-half percent (1.5%) per month on the outstanding balance, compounded monthly, until paid in full. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;5.6]</span></li>
        <li>Production timelines, delivery schedules, and installation dates are contingent upon timely receipt of all payments. Producer shall not be held liable for any delays attributable to Client&rsquo;s failure to remit payment when due.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Change Orders <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;2.2</span></h4>
      <ul>
        <li>Any modification to scope, quantity, dimensions, material specification, delivery schedule, or production timeline after written approval of this proposal requires a formally executed written Change Order signed by authorized representatives of both parties. Verbal approvals, email threads, or text messages shall not constitute binding authorization.</li>
        <li>Change Orders may include, without limitation, additional fabrication, labor, transportation, expedited production surcharges, overtime costs, re-engineering fees, material restocking charges, and third-party vendor markups.</li>
        <li>All Change Order amounts are due in full upon execution and are non-refundable once production has commenced. Producer reserves the right to withhold commencement of Change Order work until payment is received and cleared.</li>
        <li>Scope additions requested within seventy-two (72) hours of a scheduled delivery or installation date shall be subject to an expedite surcharge of up to twenty-five percent (25%) of the Change Order value, at Producer&rsquo;s discretion.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Client Responsibilities <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;4</span></h4>
      <ul>
        <li>Client shall furnish print-ready artwork, brand guidelines, and all creative assets by mutually agreed deadlines. Failure to deliver assets by the agreed date shall entitle Producer to adjust the production schedule accordingly without liability for resulting delays. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;4.1]</span></li>
        <li>Client shall confirm and provide all venue requirements, access schedules, floor plans, loading dock reservations, freight elevator availability, and site-specific restrictions no later than fourteen (14) calendar days prior to the first scheduled delivery date.</li>
        <li>Client shall obtain all necessary venue, landlord, property management, and building approvals required for installation in advance of Producer&rsquo;s scheduled load-in. Producer shall not be liable for delays or additional costs resulting from Client&rsquo;s failure to secure required approvals.</li>
        <li>On-site discrepancies between Client-provided information (dimensions, site conditions, access routes) and actual conditions may result in additional costs, which shall be documented and billed as a Change Order. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;4.3]</span></li>
        <li>Client shall designate a single authorized representative empowered to approve artwork, authorize Change Orders, and make binding decisions on Client&rsquo;s behalf for the duration of this engagement.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Artwork &amp; Proofing <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;7</span></h4>
      <ul>
        <li>Client bears sole and absolute responsibility for final review and approval of all artwork, including but not limited to copy, spelling, grammar, dimensions, color accuracy, brand compliance, and layout. Written artwork approval constitutes authorization to proceed to production. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;7.1]</span></li>
        <li>Producer shall not be held liable for errors, omissions, or inaccuracies contained in Client-approved artwork once production has commenced. This includes, without limitation, typographical errors, incorrect dimensions, outdated brand marks, and color deviations within standard printing tolerances.</li>
        <li>Digital proofs are provided for layout and content review only. Physical color reproduction is approximate due to inherent variations in substrates, inks, laminates, and ambient viewing conditions. Exact Pantone or spot-color matching is not guaranteed unless explicitly specified and priced in the scope of work.</li>
        <li>Revisions, modifications, or corrections requested after formal artwork approval shall be scoped and billed as additional work via Change Order, including any reprinting, re-fabrication, or disposal costs for previously produced materials.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Ownership, IP &amp; Risk Transfer <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;8 / &sect;6.4</span></h4>
      <ul>
        <li>All fabricated elements, production assets, and custom-engineered components remain the sole and exclusive property of Agora Graphics, LLC until the total project balance &mdash; including any outstanding Change Order amounts &mdash; is paid in full. Title shall not transfer to Client until all financial obligations are satisfied. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;8.3]</span></li>
        <li>Client-provided artwork, logos, and brand assets remain the intellectual property of Client. Producer claims no ownership interest in Client&rsquo;s pre-existing intellectual property.</li>
        <li>Producer retains exclusive ownership of all custom engineering drawings, structural designs, fabrication templates, and proprietary production methods developed during this engagement. Such materials shall not be reproduced, shared, or furnished to third parties without Producer&rsquo;s prior written consent. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;8.2]</span></li>
        <li>Risk of loss, theft, or damage to delivered materials and installed elements transfers to Client upon the earlier of: (a) physical delivery to the venue, or (b) completion of on-site installation. Client is solely responsible for insuring delivered assets against loss or damage from the point of risk transfer. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;6.4]</span></li>
        <li>Producer reserves the right to photograph, video-record, and document completed installations for portfolio, marketing, and business development purposes following public unveiling of the activation, unless Client provides written objection within five (5) business days of project completion.</li>
      </ul>
    </div>
    <div class="term-card">
      <h4>Cancellation, Liability &amp; Dispute Resolution <span style="font-size:9px;color:var(--mercedes-teal);font-weight:600;letter-spacing:0.5px">MSA &sect;9 / &sect;10 / &sect;13</span></h4>
      <ul>
        <li>Cancellation following written project approval: Client shall be liable for all costs incurred to date, including without limitation materials ordered or received, fabrication in progress, labor performed, subcontractor commitments, and any non-cancellable vendor obligations. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;10.1]</span></li>
        <li>Cancellation within seven (7) calendar days of the first scheduled delivery or installation date: Client shall be liable for one hundred percent (100%) of the total project value, inclusive of all Change Orders. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;10.3]</span></li>
        <li>Fabrication in progress and custom materials procured at the time of cancellation are non-refundable and non-transferable to other projects or engagements.</li>
        <li>Producer&rsquo;s total aggregate liability arising out of or related to this engagement shall not exceed the total fees actually paid by Client under this proposal. In no event shall Producer be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits, lost revenue, or business interruption, regardless of the theory of liability. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;9.3 / &sect;9.4]</span></li>
        <li>Force majeure provisions apply as set forth in the Master Services Agreement. Neither party shall be liable for delays or failure to perform attributable to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, material shortages, transportation disruptions, or labor disputes. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;11]</span></li>
        <li>Client agrees to indemnify and hold harmless Agora Graphics, LLC, its officers, employees, subcontractors, and agents from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of Client&rsquo;s use of delivered materials, venue conditions, third-party interactions, or Client&rsquo;s breach of any obligation under this proposal or the MSA. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;12]</span></li>
        <li>This agreement shall be governed by and construed in accordance with the laws of the State of New York. Any disputes arising under or related to this engagement shall be resolved through binding arbitration in Suffolk County, New York, administered in accordance with the rules of the American Arbitration Association. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;13]</span></li>
        <li>This proposal, together with the Master Services Agreement and any executed Change Orders, constitutes the entire agreement between the parties with respect to this engagement and supersedes all prior negotiations, representations, proposals, or agreements, whether written or oral. No amendment or waiver shall be effective unless in writing and signed by authorized representatives of both parties. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;14]</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- VERSION HISTORY -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--text-muted)"></div><span style="color:var(--text-muted)">Document Control</span></div>
    <h2 style="font-size:22px">Version History</h2>
    <p class="sec-desc" style="margin-bottom:20px">This document is maintained under version control to ensure all parties reference the most current scope, pricing, and terms. Prior versions are retained for audit and reconciliation purposes.</p>
    <table class="version-table">
      <thead><tr><th>Version</th><th>Date</th><th>Author</th><th>Summary of Changes</th></tr></thead>
      <tbody>
        <tr><td>1.0</td><td>March 28, 2025</td><td>Agora Graphics</td><td>Initial proposal &mdash; scope, investment, and terms for Formula 1 Vehicle Display and Cocktail Event</td></tr>
        <tr><td>1.1</td><td>April 1, 2025</td><td>Agora Graphics</td><td>Itemized Technical Production Package; added audiovisual equipment manifests and OEM specifications</td></tr>
        <tr><td>1.2</td><td>April 2, 2025</td><td>Agora Graphics</td><td>Comprehensive revision &mdash; expanded production lifecycle, digital signature integration, MSA framework</td></tr>
        <tr class="current"><td>1.3</td><td>April 15, 2025</td><td>Agora Graphics</td><td>Added branded staircase panels ($4,500); ACH/wire payment terms; co-branded palette alignment</td></tr>
      </tbody>
    </table>
    <p style="font-size:10px;color:rgba(138,138,149,0.4);margin-top:8px">Document ID: IWC-F1-MIA-001 &bull; Estimate #4005373 &bull; Confidential</p>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" data-a>
  <h2>Next Steps</h2>
  <div class="cta-row">
    <a href="#authorize" class="cta-btn cta-primary" onclick="document.getElementById('authorize').scrollIntoView({behavior:'smooth'});return false;">Approve &amp; Execute &rarr;</a>
    <a href="mailto:mike@agoragraphics.com,michael@agoragraphics.com,julian@agvmiami.com?cc=info@agoravisuals.com&amp;subject=IWC%20F1%20Miami%20%E2%80%94%20Revision%20Request%20%7C%20IWC-F1-MIA-001" class="cta-btn cta-secondary">Request Revisions</a>
    <a href="https://experienceagora.com" class="cta-btn cta-tertiary" target="_blank" rel="noopener">Explore Our Portfolio</a>
  </div>
</section>

<!-- SIGNATURE -->
<section id="authorize" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Authorization</span></div>

    <div class="sig-block" id="sig-block-main">
      <h3>Authorization to Proceed</h3>
      <p class="legal">
        By executing this agreement, Client acknowledges review and acceptance of this Proposal, including the complete Scope of Work, Investment Summary, Payment Terms, Exclusions, and Terms &amp; Conditions outlined herein. Client hereby authorizes Agora Graphics, LLC to proceed with engineering, procurement, and fabrication in accordance with the selected scope. Execution constitutes authorization to initiate production and triggers applicable payment terms as stated.
      </p>

      <div class="sig-summary">Project Investment: $66,300</div>
      <div class="sig-meta">Plus applicable sales tax &bull; Payment Terms: 60/40 &bull; Document: IWC-F1-MIA-001 &bull; Estimate #4005373</div>

      <!-- SIGNING OPTIONS -->
      <div class="sig-options">
        <button class="sig-opt-btn active" onclick="switchSigTab('draw',this)" style="background:var(--iwc-gold);color:var(--dark)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>
          Draw Signature
        </button>
        <button class="sig-opt-btn" onclick="switchSigTab('type',this)" style="background:rgba(255,255,255,0.06);color:var(--text)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
          Type Signature
        </button>
        <button class="sig-download-btn print-btn" onclick="window.print()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Print / Download PDF
        </button>
        <button class="sig-download-btn esign-btn" onclick="openDocuSignModal()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>
          Send via DocuSign
        </button>
      </div>

      <!-- DRAW SIGNATURE TAB -->
      <div class="sig-tab active" id="sig-tab-draw">
        <div class="sig-grid">
          <div class="sig-col">
            <div class="role">Client</div>
            <div class="company">3CS Productions, LLC</div>
            <div class="sig-canvas-wrap">
              <canvas class="sig-canvas" id="sig-canvas-client"></canvas>
              <div class="sig-canvas-hint">Draw your signature here</div>
            </div>
            <input class="sig-input" id="sig-name-client" type="text" placeholder="Printed Name">
            <input class="sig-input" id="sig-title-client" type="text" placeholder="Title">
            <div class="sig-actions">
              <button class="sig-clear" onclick="clearCanvas('client')">Clear</button>
            </div>
          </div>
          <div class="sig-col">
            <div class="role">Producer</div>
            <div class="company">Agora Graphics, LLC</div>
            <div class="sig-canvas-wrap">
              <canvas class="sig-canvas" id="sig-canvas-producer"></canvas>
              <div class="sig-canvas-hint">Draw your signature here</div>
            </div>
            <input class="sig-input" id="sig-name-producer" type="text" placeholder="Printed Name">
            <input class="sig-input" id="sig-title-producer" type="text" placeholder="Title">
            <div class="sig-actions">
              <button class="sig-clear" onclick="clearCanvas('producer')">Clear</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TYPE SIGNATURE TAB -->
      <div class="sig-tab" id="sig-tab-type">
        <div class="sig-grid">
          <div class="sig-col">
            <div class="role">Client</div>
            <div class="company">3CS Productions, LLC</div>
            <input class="sig-input" id="sig-typed-client" type="text" placeholder="Type your full name" oninput="updateTypedSig('client')">
            <div class="sig-typed-preview" id="sig-typed-preview-client"></div>
            <input class="sig-input" id="sig-typed-title-client" type="text" placeholder="Title">
          </div>
          <div class="sig-col">
            <div class="role">Producer</div>
            <div class="company">Agora Graphics, LLC</div>
            <input class="sig-input" id="sig-typed-producer" type="text" placeholder="Type your full name" oninput="updateTypedSig('producer')">
            <div class="sig-typed-preview" id="sig-typed-preview-producer"></div>
            <input class="sig-input" id="sig-typed-title-producer" type="text" placeholder="Title">
          </div>
        </div>
      </div>

      <!-- SUBMIT -->
      <div style="text-align:center;margin-top:24px" id="sig-submit-wrap">
        <button class="sig-submit" id="sig-submit-btn" disabled onclick="submitSignature()">
          Execute Agreement
        </button>
        <div class="sig-timestamp" id="sig-timestamp"></div>
      </div>

      <!-- CONFIRMATION -->
      <div class="sig-confirmation" id="sig-confirmation">
        <div class="checkmark">&check;</div>
        <h4>Agreement Executed</h4>
        <p>This proposal has been digitally signed and executed.</p>
        <div class="sig-timestamp" id="sig-confirm-timestamp"></div>
        <div class="sig-download-row">
          <button class="sig-download-btn print-btn" onclick="window.print()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Download Signed PDF
          </button>
          <button class="sig-download-btn esign-btn" onclick="openDocuSignModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email Signed Copy
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">AGORA GRAPHICS</div>
      <div class="footer-tagline"><a href="https://experienceagora.com" target="_blank" rel="noopener">Experiential Fabrication</a> &bull; <a href="https://experienceagora.com" target="_blank" rel="noopener">Scenic Production</a> &bull; <a href="https://experienceagora.com" target="_blank" rel="noopener">Large-Format Print</a> &bull; <a href="https://experienceagora.com" target="_blank" rel="noopener">Millwork</a> &bull; <a href="https://experienceagora.com" target="_blank" rel="noopener">Engineering</a> &bull; <a href="https://experienceagora.com" target="_blank" rel="noopener">Installation</a></div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.7;margin:12px 0 14px;max-width:360px">Full-service scenic fabrication and experiential production studio specializing in luxury brand activations, retail environments, motorsport hospitality, trade show exhibits, and large-format graphics &mdash; serving Miami, New York, Las Vegas, and markets nationwide.</p>
      <div class="footer-locations" style="margin-bottom:8px">Miami, FL &bull; New York, NY &bull; Las Vegas, NV</div>
      <div class="footer-social">
        <a href="https://www.instagram.com/agoragraphics/" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        <a href="https://www.linkedin.com/company/agora-graphics" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
        <a href="https://www.facebook.com/AgoraGraphics" target="_blank" rel="noopener" aria-label="Facebook">fb</a>
      </div>
    </div>
    <div class="footer-col">
      <div class="footer-col-head" style="color:var(--iwc-gold)">Contact</div>
      <a href="mailto:mike@agoragraphics.com">mike@agoragraphics.com</a>
      <a href="mailto:info@agoravisuals.com">info@agoravisuals.com</a>
      <a href="tel:+15162830363">+1 (516) 283-0363</a>
      <a href="https://experienceagora.com" target="_blank" rel="noopener">experienceagora.com</a>
    </div>
  </div>
  <div class="footer-legal">
    <span>&copy; 2025 Agora Graphics, LLC &bull; 1440 Church St, Bohemia, NY 11716</span>
    <div class="footer-legal-links">
      <a onclick="openLegal('msa')">Master Services Agreement</a>
      <span class="dot">&bull;</span>
      <a onclick="openLegal('terms')">Terms &amp; Conditions</a>
      <span class="dot">&bull;</span>
      <a onclick="openLegal('privacy')">Privacy &amp; Confidentiality</a>
    </div>
  </div>
</footer>

<!-- STRUCTURED DATA (SEO) -->

<!-- LEGAL PANELS -->
<div class="legal-overlay" onclick="closeLegal()"></div>

<div class="legal-panel" id="panel-msa">
  <div class="legal-panel-header">
    <h3>Master Services Agreement</h3>
    <button class="legal-close" onclick="closeLegal()">&times;</button>
  </div>
  <div class="legal-panel-body">
    <p style="color:var(--iwc-gold);font-size:10px;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px">Agora Graphics, LLC &mdash; 2025 Master Services Agreement</p>

    <h4><div class="section-num">S1 &mdash; Parties &amp; Engagement</div>Parties to This Agreement</h4>
    <p>This Master Services Agreement (&ldquo;Agreement&rdquo;) is entered into between Agora Graphics, LLC (&ldquo;Agora,&rdquo; &ldquo;Company,&rdquo; &ldquo;We&rdquo;) and the client identified on the executed Proposal or Estimate (&ldquo;Client,&rdquo; &ldquo;You&rdquo;). Execution of any Proposal, Estimate, or Work Order constitutes acceptance of this Agreement in its entirety.</p>

    <h4><div class="section-num">S2 &mdash; Scope of Work</div>Scope of Services</h4>
    <ol>
      <li>Agora will provide scenic fabrication, graphics production, printing, millwork, display construction, installation, and related services as described in the executed Proposal or Estimate.</li>
      <li>Services are limited to the narrative and itemized scope outlined in each project document. Items not explicitly described are excluded unless added via written Change Order.</li>
      <li>All work is performed on a project basis. This Agreement does not create an employment, partnership, or joint venture relationship.</li>
    </ol>

    <h4><div class="section-num">S3 &mdash; Estimates &amp; Pricing</div>Basis of Estimate</h4>
    <ol>
      <li>All proposals are based on preliminary dimensions, creative materials, and project scope provided at the time of estimating.</li>
      <li>Final pricing may adjust based on confirmed dimensions, finalized creative, engineering requirements, material availability, or scope changes.</li>
      <li>Estimates are valid for thirty (30) days unless otherwise noted. Material costs and availability are subject to change after this period.</li>
    </ol>

    <h4><div class="section-num">S4 &mdash; Client Responsibilities</div>Client Obligations</h4>
    <ol>
      <li>Client shall provide print-ready artwork, brand guidelines, and all creative assets by agreed deadlines.</li>
      <li>Client is responsible for confirming venue requirements, access schedules, floor plans, and any landlord or building approvals required for installation.</li>
      <li>On-site discrepancies between provided information and actual site conditions may result in additional costs billed as a Change Order.</li>
      <li>Client is responsible for final review and approval of all artwork including copy, spelling, dimensions, and layout prior to production.</li>
    </ol>

    <h4><div class="section-num">S5 &mdash; Payment Terms</div>Payment</h4>
    <ol>
      <li>All payments are accepted exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted.</li>
      <li>Unless otherwise specified, payment terms are 60% deposit upon execution and 40% balance due three (3) business days prior to delivery or installation.</li>
      <li>Deposit initiates engineering, procurement, and fabrication. Work will not commence until deposit is received.</li>
      <li>Change Order invoices are due in full upon approval.</li>
      <li>Production schedule and delivery dates may be delayed if payments are not received when due.</li>
      <li>Late payments are subject to a 1.5% monthly interest charge on outstanding balances.</li>
    </ol>

    <h4><div class="section-num">S6 &mdash; Shipping, Delivery &amp; Installation</div>Logistics</h4>
    <ol>
      <li>Delivery and installation pricing is based on standard business hours unless otherwise noted in the Proposal.</li>
      <li>Overnight, weekend, or holiday labor is subject to premium rates and will be itemized in the Proposal or billed as a Change Order.</li>
      <li>Venue labor requirements (union, drayage, rigging) are the responsibility of the Client unless explicitly included in the Agora scope.</li>
      <li>Risk of loss transfers to Client upon delivery to site or completion of installation.</li>
    </ol>

    <h4><div class="section-num">S7 &mdash; Artwork &amp; Proofing</div>Creative Production</h4>
    <ol>
      <li>Agora is not liable for errors in client-approved artwork, including color reproduction, spelling, or dimensional accuracy.</li>
      <li>Digital proofs are provided for review. Physical color matching is approximate due to variations in substrates, inks, and viewing conditions.</li>
      <li>Post-approval changes will be billed as additional work.</li>
    </ol>

    <h4><div class="section-num">S8 &mdash; Intellectual Property</div>Ownership &amp; IP</h4>
    <ol>
      <li>Client-provided artwork, logos, and brand assets remain the property of the Client.</li>
      <li>Agora retains ownership of all custom engineering drawings, structural designs, and proprietary fabrication methods.</li>
      <li>Fabricated elements remain the property of Agora until paid in full.</li>
      <li>Agora reserves the right to photograph completed work for portfolio use following public installation or event.</li>
    </ol>

    <h4><div class="section-num">S9 &mdash; Warranties &amp; Liability</div>Warranties</h4>
    <ol>
      <li>Agora warrants that all work will be performed in a professional and workmanlike manner consistent with industry standards.</li>
      <li>Fabricated elements are warranted against defects in materials and workmanship for the duration of the project installation period.</li>
      <li>Agora&rsquo;s total liability under this Agreement shall not exceed the total fees paid by Client for the specific project.</li>
      <li>Agora shall not be liable for indirect, incidental, consequential, or punitive damages.</li>
    </ol>

    <h4><div class="section-num">S10 &mdash; Cancellation</div>Cancellation &amp; Termination</h4>
    <ol>
      <li>Post-approval cancellation: Client is liable for all costs incurred to date including materials ordered, fabrication in progress, and labor expended.</li>
      <li>In-progress fabrication and custom materials are non-refundable.</li>
      <li>Cancellation within seven (7) days of scheduled delivery or installation: Client is liable for 100% of the project value.</li>
    </ol>

    <h4><div class="section-num">S11 &mdash; Force Majeure</div>Force Majeure</h4>
    <p>Neither party shall be liable for delays or failure to perform due to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, material shortages, transportation disruptions, or labor disputes.</p>

    <h4><div class="section-num">S12 &mdash; Indemnification</div>Indemnification</h4>
    <p>Client agrees to indemnify and hold harmless Agora Graphics, LLC, its officers, employees, and agents from any claims, damages, losses, or expenses arising from Client&rsquo;s use of delivered materials, venue conditions, or third-party interactions related to the project.</p>

    <h4><div class="section-num">S13 &mdash; Governing Law</div>Governing Law &amp; Disputes</h4>
    <p>This Agreement shall be governed by and construed in accordance with the laws of the State of New York. Any disputes shall be resolved through binding arbitration in Suffolk County, New York, in accordance with the rules of the American Arbitration Association.</p>

    <h4><div class="section-num">S14 &mdash; Entire Agreement</div>Entire Agreement</h4>
    <p>This Agreement, together with any executed Proposals, Estimates, Work Orders, and Change Orders, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements. Amendments must be in writing and signed by both parties.</p>

    <p style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:10px;color:rgba(138,138,149,0.4)">Agora Graphics, LLC &bull; 1440 Church St, Bohemia, NY 11716 &bull; EIN on file &bull; This document is incorporated by reference into all project Proposals and Estimates.</p>
  </div>
</div>

<div class="legal-panel" id="panel-terms">
  <div class="legal-panel-header">
    <h3>Terms &amp; Conditions</h3>
    <button class="legal-close" onclick="closeLegal()">&times;</button>
  </div>
  <div class="legal-panel-body">
    <p>The Terms &amp; Conditions governing this engagement are outlined in the <a onclick="closeLegal();setTimeout(()=>document.getElementById('terms').scrollIntoView({behavior:'smooth'}),400)" style="color:var(--mercedes-teal);cursor:pointer;text-decoration:underline">Terms &amp; Conditions section</a> of this proposal and are further detailed in the Master Services Agreement.</p>
    <p style="margin-top:12px">Key provisions include: Basis of Estimate, Scope of Work, Payment Terms (60/40), Change Orders, Client Responsibilities, Artwork &amp; Proofing, Ownership &amp; Risk Transfer, and Cancellation &amp; Liability.</p>
    <p style="margin-top:12px">For the complete contractual framework, please review the <a onclick="closeLegal();setTimeout(()=>openLegal('msa'),400)" style="color:var(--mercedes-teal);cursor:pointer;text-decoration:underline">Master Services Agreement</a>.</p>
  </div>
</div>

<div class="legal-panel" id="panel-privacy">
  <div class="legal-panel-header">
    <h3>Privacy &amp; Confidentiality</h3>
    <button class="legal-close" onclick="closeLegal()">&times;</button>
  </div>
  <div class="legal-panel-body">
    <h4>Confidentiality</h4>
    <p>This proposal and all associated documents, pricing, technical specifications, and creative materials are confidential and proprietary to Agora Graphics, LLC. This document has been prepared solely for the use of 3CS Productions, LLC in connection with IWC Schaffhausen&rsquo;s Formula 1 Miami Grand Prix programming.</p>
    <p style="margin-top:10px">Recipient agrees not to disclose, distribute, or reproduce this document or its contents to any third party without the prior written consent of Agora Graphics, LLC.</p>

    <h4>Data Handling</h4>
    <p>Agora Graphics collects and processes only the information necessary to fulfill project obligations: contact details, project specifications, creative assets, and payment information. We do not sell, share, or distribute client information to third parties except as required to perform contracted services (e.g., shipping carriers, venue coordination).</p>

    <h4>Document Security</h4>
    <p>This digital proposal is served via a secure, access-controlled link. Document version history and access are tracked. Proposal content, pricing, and terms are subject to the confidentiality provisions of the Master Services Agreement (S8).</p>

    <p style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:10px;color:rgba(138,138,149,0.4)">Document: IWC-F1-MIA-001 &bull; Estimate #4005373 &bull; Confidential &amp; Proprietary</p>
  </div>
</div>`;

export default function ProposalPage() {
  useEffect(() => {
    // Legal panels
    function openLegal(type: string) {
      const overlay = document.querySelector('.legal-overlay');
      if (overlay) overlay.classList.add('open');
      const panel = document.getElementById('panel-' + type);
      if (panel) panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLegal() {
      const overlay = document.querySelector('.legal-overlay');
      if (overlay) overlay.classList.remove('open');
      document.querySelectorAll('.legal-panel').forEach(p => p.classList.remove('open'));
      document.body.style.overflow = '';
    }

    // Digital Signature Canvas
    function initCanvas(id: string) {
      const c = document.getElementById(id) as HTMLCanvasElement | null;
      if (!c) return;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      c.width = c.offsetWidth * 2;
      c.height = c.offsetHeight * 2;
      ctx.scale(2, 2);
      ctx.strokeStyle = '#C8A456';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      let drawing = false;
      let hasSig = false;
      function getPos(e: PointerEvent | TouchEvent) {
        const r = c!.getBoundingClientRect();
        const t = 'touches' in e ? e.touches[0] : e;
        return { x: t.clientX - r.left, y: t.clientY - r.top };
      }
      c.addEventListener('pointerdown', (e: PointerEvent) => {
        drawing = true;
        const p = getPos(e);
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        e.preventDefault();
      });
      c.addEventListener('pointermove', (e: PointerEvent) => {
        if (!drawing) return;
        const p = getPos(e);
        ctx!.lineTo(p.x, p.y);
        ctx!.stroke();
        hasSig = true;
        c!.classList.add('signed');
        checkReady();
        e.preventDefault();
      });
      c.addEventListener('pointerup', () => { drawing = false; });
      c.addEventListener('pointerleave', () => { drawing = false; });
      (c as any)._clear = () => {
        ctx!.clearRect(0, 0, c!.width, c!.height);
        hasSig = false;
        c!.classList.remove('signed');
        checkReady();
      };
      (c as any)._hasSig = () => hasSig;
    }

    function clearCanvas(role: string) {
      const c = document.getElementById('sig-canvas-' + role) as any;
      if (c && c._clear) c._clear();
    }

    function checkReady() {
      const tab = document.querySelector('.sig-tab.active');
      const btn = document.getElementById('sig-submit-btn') as HTMLButtonElement | null;
      if (!tab || !btn) return;
      let ready = false;
      if (tab.id === 'sig-tab-draw') {
        const cc = document.getElementById('sig-canvas-client') as any;
        const nc = document.getElementById('sig-name-client') as HTMLInputElement | null;
        ready = cc && cc._hasSig && cc._hasSig() && nc !== null && nc.value.trim().length > 0;
      } else {
        const tc = document.getElementById('sig-typed-client') as HTMLInputElement | null;
        ready = tc !== null && tc.value.trim().length > 2;
      }
      btn.disabled = !ready;
      if (ready) { btn.classList.add('ready'); } else { btn.classList.remove('ready'); }
    }

    function switchSigTab(tab: string, btn: HTMLElement) {
      document.querySelectorAll('.sig-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sig-opt-btn').forEach(b => {
        b.classList.remove('active');
        (b as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
        (b as HTMLElement).style.color = 'var(--text)';
      });
      const tabEl = document.getElementById('sig-tab-' + tab);
      if (tabEl) tabEl.classList.add('active');
      btn.classList.add('active');
      btn.style.background = 'var(--iwc-gold)';
      btn.style.color = 'var(--dark)';
      checkReady();
    }

    function updateTypedSig(role: string) {
      const input = document.getElementById('sig-typed-' + role) as HTMLInputElement | null;
      const preview = document.getElementById('sig-typed-preview-' + role);
      if (input && preview) {
        preview.textContent = input.value;
      }
      checkReady();
    }

    function submitSignature() {
      const now = new Date();
      const ts = now.toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
      });
      const hash = 'SIG-' + now.getTime().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const submitWrap = document.getElementById('sig-submit-wrap');
      if (submitWrap) submitWrap.style.display = 'none';
      document.querySelectorAll('.sig-tab').forEach(t => (t as HTMLElement).style.display = 'none');
      document.querySelectorAll('.sig-options').forEach(o => (o as HTMLElement).style.display = 'none');
      const conf = document.getElementById('sig-confirmation');
      if (conf) conf.classList.add('show');
      const confirmTs = document.getElementById('sig-confirm-timestamp');
      if (confirmTs) confirmTs.textContent = 'Executed: ' + ts + ' | Reference: ' + hash;
    }

    function openDocuSignModal() {
      const subject = encodeURIComponent('IWC Formula 1 Miami \u2014 Proposal for Digital Signature | IWC-F1-MIA-001');
      const body = encodeURIComponent('Please find the IWC Formula 1 Miami Grand Prix Programming proposal attached for digital signature.\n\nDocument: IWC-F1-MIA-001\nEstimate: #4005373\nProject Investment: $66,300\n\nPlease review and execute at your earliest convenience.\n\n---\nAgora Graphics, LLC');
      window.location.href = 'mailto:mike@agoragraphics.com,michael@agoragraphics.com,julian@agvmiami.com?cc=info@agoravisuals.com&subject=' + subject + '&body=' + body;
    }

    function togglePhase(el: HTMLElement) {
      const wasOpen = el.classList.contains('open');
      document.querySelectorAll('.phase-head').forEach(h => {
        h.classList.remove('open');
        const toggle = h.querySelector('.phase-toggle') as HTMLElement | null;
        if (toggle) {
          toggle.style.transform = '';
          toggle.style.background = 'transparent';
          toggle.style.color = toggle.style.borderColor;
        }
      });
      document.querySelectorAll('.phase-body').forEach(b => b.classList.remove('open'));
      if (!wasOpen) {
        el.classList.add('open');
        const t = el.querySelector('.phase-toggle') as HTMLElement | null;
        if (t) {
          t.style.transform = 'rotate(45deg)';
          t.style.background = t.style.borderColor;
          t.style.color = 'var(--dark)';
        }
        const sibling = el.nextElementSibling;
        if (sibling) sibling.classList.add('open');
      }
    }

    function toggleAddon(el: HTMLElement) {
      el.classList.toggle('checked');
      const c = el.querySelector('.addon-check');
      if (c) c.textContent = el.classList.contains('checked') ? '+' : '';
    }

    // Attach all functions to window so inline onclick handlers work
    (window as any).openLegal = openLegal;
    (window as any).closeLegal = closeLegal;
    (window as any).initCanvas = initCanvas;
    (window as any).clearCanvas = clearCanvas;
    (window as any).checkReady = checkReady;
    (window as any).switchSigTab = switchSigTab;
    (window as any).updateTypedSig = updateTypedSig;
    (window as any).submitSignature = submitSignature;
    (window as any).openDocuSignModal = openDocuSignModal;
    (window as any).togglePhase = togglePhase;
    (window as any).toggleAddon = toggleAddon;

    // Escape key to close legal panels
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLegal(); };
    document.addEventListener('keydown', handleKeyDown);

    // Initialize canvases
    initCanvas('sig-canvas-client');
    initCanvas('sig-canvas-producer');

    // Add input listeners for signature fields
    ['sig-name-client', 'sig-title-client', 'sig-name-producer', 'sig-title-producer'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', checkReady);
    });

    // Scroll animations - IntersectionObserver
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('[data-a]').forEach(el => obs.observe(el));

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      obs.disconnect();
      delete (window as any).openLegal;
      delete (window as any).closeLegal;
      delete (window as any).initCanvas;
      delete (window as any).clearCanvas;
      delete (window as any).checkReady;
      delete (window as any).switchSigTab;
      delete (window as any).updateTypedSig;
      delete (window as any).submitSignature;
      delete (window as any).openDocuSignModal;
      delete (window as any).togglePhase;
      delete (window as any).toggleAddon;
    };
  }, []);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
