import React, { useState } from 'react';
import { Layers, Network, CheckSquare, ChevronRight, Compass, ShoppingBag, Radio, Shield, HelpCircle, FileText } from 'lucide-react';

interface SitemapPage {
  name: string;
  category: 'core' | 'commerce' | 'editorial' | 'member';
  purpose: string;
  uiHighlights: string[];
  techRequirement: string;
}

export default function Step2Sitemap() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'commerce' | 'editorial' | 'member'>('all');
  const [activeDetailIndex, setActiveDetailIndex] = useState<number>(0);

  const pages: SitemapPage[] = [
    {
      name: "Home (Landing Hub)",
      category: "core",
      purpose: "The ultimate brand entry point. Immerse the user with standard video backgrounds, interactive CROCOO branding, real-time countdown drop banners, and direct gateways into new collections.",
      uiHighlights: ["Glitch hero headers", "Live countdown ticker", "Instant UGC integration grid"],
      techRequirement: "Vite SPA routing / lazy loaded webm loops"
    },
    {
      name: "Shop (Matrix Product Grid)",
      category: "commerce",
      purpose: "Our high-performance clothing catalog. Features reactive faceted filter sidebars (size, category, technical material, fit), robust query search, and immediate Quick View toggles.",
      uiHighlights: ["Glassmorphic category headers", "Tactile hover zoom", "Direct add-to-cart drawer"],
      techRequirement: "Faceted search indexing / client-side cache"
    },
    {
      name: "Collections (Seasonal Archives)",
      category: "editorial",
      purpose: "High-concept capsules of streetwear style. Curated visual drop groupings reflecting editorial themes, e.g., 'CYBER_ARMOR_v1' or 'DARK_MESH_WINTER'.",
      uiHighlights: ["Horizontal scroll panels", "Parallax asset slides", "Storyteller layout blocks"],
      techRequirement: "Dynamic routing by capsule ID"
    },
    {
      name: "New Arrivals",
      category: "commerce",
      purpose: "Immediate real-time feed of newly cataloged garments. Keeps the catalog fresh and active for frequent return visitors.",
      uiHighlights: ["Staggered grid entries", "New release HUD stickers", "Priority sorting models"],
      techRequirement: "Sort-by-date server filter"
    },
    {
      name: "Limited Drops",
      category: "commerce",
      purpose: "Highly exclusive, limited-quantity streetwear releases. Features active countdown timers, reservation codes, and immediate push notifications to create massive FOMO.",
      uiHighlights: ["Live countdown sub-clock", "Real-time stock depletion tracker", "Captcha gate integration"],
      techRequirement: "Real-time WebSockets / SSE for inventory state"
    },
    {
      name: "Lookbook",
      category: "editorial",
      purpose: "Interactive cybernetic editorial magazine. High-definition styled imagery allowing customers to hover over any model to immediately identify, select, and add pieces directly to cart.",
      uiHighlights: ["Interactive hotspot tags", "Cinematic portrait arrays", "Seamless buy-from-image popup"],
      techRequirement: "Hotspot vector positioning systems"
    },
    {
      name: "Community (Street Feed)",
      category: "editorial",
      purpose: "User-generated streetwear catalog. Customers upload their styled look photos using #CROCOO to participate in rewards and show real-world fit proof.",
      uiHighlights: ["UGC masonry scroll", "Style rating counters", "Fit parameters breakdown"],
      techRequirement: "Cloud storage upload / moderation pipeline"
    },
    {
      name: "About Us",
      category: "editorial",
      purpose: "Deep brand history, materials research, and ecological sustainability standards. Highlights our technological manufacturing practices and futuristic ethical philosophy.",
      uiHighlights: ["Interactive timeline matrix", "Fabric specifications sheet", "Slogan ticker loop"],
      techRequirement: "Static markup optimization"
    },
    {
      name: "Membership (The Cyber Syndicate)",
      category: "member",
      purpose: "Customer loyalty hub. Shows member levels, locked VIP drops, private Discord invitation links, accumulated drop points (CRO-Points), and special event passes.",
      uiHighlights: ["Syndicate card pass generator", "Locked item galleries", "Points conversion playground"],
      techRequirement: "Firebase / Auth subscription role validation"
    },
    {
      name: "Contact (Support Terminal)",
      category: "core",
      purpose: "Direct support system designed as a futuristic utility console. Features chat options, tracking queries, and immediate FAQ accordions.",
      uiHighlights: ["Secure terminal input fields", "AI automated helper bot toggle", "Animated query tracker"],
      techRequirement: "API ticketing submission / Helpdesk proxy"
    },
    {
      name: "Cart (Order Manifest)",
      category: "commerce",
      purpose: "Seamless preview drawer and full-screen manifest of selected apparel. Displays sizes, quantities, and real-time shipping estimators prior to absolute billing.",
      uiHighlights: ["Interactive quantity adjusters", "Express checkout quicklinks", "Progress indicator bar"],
      techRequirement: "Redux / LocalStorage sync state"
    },
    {
      name: "Wishlist (Radar Saved List)",
      category: "commerce",
      purpose: "Personalized curated lists of desired garments. Sends alert notifications when saved items get discount updates or stock drops below 5 units.",
      uiHighlights: ["Sleek hearth indicator state", "Quick transfer to cart", "Shareable catalog codes"],
      techRequirement: "Authenticated database user-doc sync"
    },
    {
      name: "Account (Nomad Dashboard)",
      category: "member",
      purpose: "Personal profile console. View active order tracking, historic invoices, saved size fit measurements, and profile settings.",
      uiHighlights: ["Tactical shipment maps", "Stored biometric fit data", "Digital wallet links"],
      techRequirement: "OAuth user sessions / OAuth order database tracking"
    }
  ];

  const filteredPages = selectedCategory === 'all' 
    ? pages 
    : pages.filter(p => p.category === selectedCategory);

  const activePage = pages[activeDetailIndex];

  return (
    <div className="space-y-12 animate-fade-in" id="website-structure-container">
      {/* Sitemap Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-mono tracking-widest uppercase">
            <Network className="w-3.5 h-3.5" /> Architecture Sitemap v1.0
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-display text-white">
            E-Commerce Map & Page Purpose Breakdown
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            We have designed a highly cohesive 13-page structure optimized to maximize conversions, build streetwear cultural FOMO, and scale brand engagement through community and membership loops.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap gap-1.5 bg-black/60 p-1.5 rounded-lg border border-white/5">
          {(['all', 'core', 'commerce', 'editorial', 'member'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const firstMatch = pages.findIndex(p => cat === 'all' || p.category === cat);
                if (firstMatch !== -1) setActiveDetailIndex(firstMatch);
              }}
              className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyber-purple text-white font-bold shadow-[0_0_8px_rgba(189,0,255,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Pages & Visual Interactive Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sitemap List */}
        <div className="lg:col-span-6 space-y-2 max-h-[550px] overflow-y-auto pr-2">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-3">
            CROCOO Directory Indexes ({filteredPages.length} Pages Available)
          </span>
          
          {pages.map((page, index) => {
            // Check if active or if it fits selected filter
            const isVisible = selectedCategory === 'all' || page.category === selectedCategory;
            const isActive = activeDetailIndex === index;
            
            if (!isVisible) return null;

            return (
              <div
                key={page.name}
                onClick={() => setActiveDetailIndex(index)}
                className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyber-purple/10 border-cyber-purple/50 shadow-[0_0_12px_rgba(189,0,255,0.1)]'
                    : 'bg-white/5 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isActive ? 'bg-cyber-purple text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-display font-medium text-sm">{page.name}</h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500">
                      SYS_CAT://{page.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    page.category === 'commerce' ? 'bg-cyber-blue' : page.category === 'member' ? 'bg-cyber-purple' : 'bg-gray-500'
                  }`}></span>
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${isActive ? 'translate-x-1 text-cyber-purple' : 'group-hover:translate-x-0.5'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Page Deep Inspector Block */}
        <div className="lg:col-span-6 glass-morphic border border-cyber-blue/20 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden h-[550px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyber-blue/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-6">
            {/* Inspector Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyber-blue animate-spin-slow" />
                <span className="font-mono text-xs text-cyber-blue uppercase tracking-widest">SITEMAP_INSPECTOR_RECV</span>
              </div>
              <span className="font-mono text-[10px] text-gray-500">ACTIVE_SPEC_0{activeDetailIndex + 1}</span>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-1">
              <h2 className="text-white font-display font-bold text-2xl tracking-tight uppercase">
                {activePage.name}
              </h2>
              <div className="flex gap-2">
                <span className="px-2.5 py-0.5 rounded bg-white/5 font-mono text-[9px] uppercase tracking-wider text-gray-300">
                  CATEGORY: {activePage.category.toUpperCase()}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-cyber-blue/10 font-mono text-[9px] uppercase tracking-widest text-cyber-blue">
                  SECURE_GATEWAY
                </span>
              </div>
            </div>

            {/* Core Purpose Statement */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Functional Architecture Purpose:</span>
              <p className="text-gray-300 text-sm leading-relaxed font-sans bg-black/40 p-4 rounded-xl border border-white/5">
                {activePage.purpose}
              </p>
            </div>

            {/* Key UI Features */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Curated UI Experiences:</span>
              <div className="flex flex-wrap gap-2">
                {activePage.uiHighlights.map((hl) => (
                  <span key={hl} className="px-2.5 py-1 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-[10px] font-mono">
                    ✦ {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Pipeline specifications */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyber-blue" />
              <span>Pipeline: <span className="text-gray-300">{activePage.techRequirement}</span></span>
            </div>
            <span className="text-emerald-500 font-bold uppercase tracking-wider text-[10px]">SECURE_SCHEMA://VERIFIED</span>
          </div>
        </div>
      </div>

      {/* User Journey Roadmap Visualizer */}
      <div className="p-6 bg-cyber-dark border border-white/5 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-white font-cyber text-sm tracking-wider uppercase flex items-center gap-2">
            <Network className="w-4 h-4 text-cyber-blue" /> User conversion pipeline (Sitemap Journey Flow)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-black/80 border border-white/5 space-y-1 relative text-center">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyber-blue text-black font-mono text-[8px] font-bold">STAGE_01</div>
              <h5 className="text-white text-xs font-cyber pt-2">AWARENESS // LOOKBOOK</h5>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                User lands on lookbook, explores cinematic grids, is guided by visual tags.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-white/5 space-y-1 relative text-center">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyber-purple text-white font-mono text-[8px] font-bold">STAGE_02</div>
              <h5 className="text-white text-xs font-cyber pt-2">DESIRE // LIMITED DROPS</h5>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Real-time stock indicators and ticking clocks establish immediate FOMO.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-white/5 space-y-1 relative text-center">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyber-blue text-black font-mono text-[8px] font-bold">STAGE_03</div>
              <h5 className="text-white text-xs font-cyber pt-2">CONVERSION // MATRIX SHOP</h5>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Premium faceted search makes size-finding immediate. Checkout finishes in 1 click.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-white/5 space-y-1 relative text-center">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-cyber-purple text-white font-mono text-[8px] font-bold">STAGE_04</div>
              <h5 className="text-white text-xs font-cyber pt-2">RETENTION // MEMBER PASS</h5>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Syndicate memberships reward buyers with points, locked forums, and private drops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
