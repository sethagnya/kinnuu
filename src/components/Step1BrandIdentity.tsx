import React, { useState } from 'react';
import { Sparkles, Copy, Sliders, Type, Layers, CheckCircle, RefreshCw, Send, Terminal, HelpCircle } from 'lucide-react';

interface Slogan {
  text: string;
  votes: number;
}

export default function Step1BrandIdentity() {
  const [logoGlow, setLogoGlow] = useState<number>(15);
  const [logoColor, setLogoColor] = useState<'blue' | 'purple' | 'cyan'>('cyan');
  const [logoAnimationSpeed, setLogoAnimationSpeed] = useState<number>(3);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  // Slogans state
  const [slogans, setSlogans] = useState<Slogan[]>([
    { text: "CYBER_TAILORED. STREET_TESTED.", votes: 42 },
    { text: "REBEL IN THE MESH.", votes: 29 },
    { text: "UPGRADE YOUR SKIN.", votes: 35 },
    { text: "CROCOO: THE FUTURE IS RESISTANT.", votes: 18 },
  ]);
  const [newSlogan, setNewSlogan] = useState("");

  // Typography state
  const [sampleText, setSampleText] = useState("UPGRADE_YOUR_SKIN_v1.0");
  const [letterSpacing, setLetterSpacing] = useState<string>("tracking-widest");

  // Style guide interactive button counters
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Logo concepts
  const logoConcepts = [
    {
      id: 'concept-1',
      name: 'The Cyber Maw',
      desc: 'A futuristic cybernetic crocodile jaw rendered in sharp technical vector paths, representing strength, resistance, and structured armor.'
    },
    {
      id: 'concept-2',
      name: 'The Binary Glyph',
      desc: 'A minimal, vertical code-tag representation [ C_R_O_C_O_O ] designed like an urban security seal, emphasizing high-tech stealth.'
    },
    {
      id: 'concept-3',
      name: 'The Glitched Ripple',
      desc: 'An organic but digitised waveform lettermark that distorts on user proximity, showcasing dynamic digital rebellion.'
    }
  ];

  // Colors
  const swatches = [
    { name: 'Abyss Deep Black', hex: '#000000', rgb: '0, 0, 0', role: 'Canvas background' },
    { name: 'Electric Cyan', hex: '#00f0ff', rgb: '0, 240, 255', role: 'Primary accent, active highlights' },
    { name: 'Neon Cyber Purple', hex: '#bd00ff', rgb: '189, 0, 255', role: 'Secondary brand glowing elements' },
    { name: 'Ghost White', hex: '#ffffff', rgb: '255, 255, 255', role: 'Primary white display typography' },
    { name: 'Muted Carbon', hex: '#121214', rgb: '18, 18, 20', role: 'Card background, borders' },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const handleAddSlogan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlogan.trim()) return;
    setSlogans([...slogans, { text: newSlogan.trim().toUpperCase(), votes: 1 }]);
    setNewSlogan("");
  };

  const handleVoteSlogan = (index: number) => {
    const updated = [...slogans];
    updated[index].votes += 1;
    setSlogans(updated);
  };

  return (
    <div className="space-y-12 animate-fade-in" id="brand-identity-container">
      {/* Brand Intro & Core Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Core Brand DNA
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            CROCOO <span className="text-cyber-blue font-mono font-light">SYSTEM_v1.0</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            CROCOO bridges raw urban grit with high-frequency technological aesthetics. 
            We do not just create garments; we manufacture functional skins for the digital nomad, 
            blending technical armor, cybernetic resilience, and premium streetwear silhouettes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="glass-morphic p-6 rounded-xl border border-white/5 space-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue group-hover:scale-y-110 transition-transform"></div>
              <h3 className="text-white font-cyber text-sm tracking-wider uppercase">Brand Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To equip Gen Z with premium, high-tech, aesthetically resistant armor for both physical street environments and virtual spaces, rejecting traditional fast-fashion constraints.
              </p>
            </div>
            
            <div className="glass-morphic p-6 rounded-xl border border-white/5 space-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-purple group-hover:scale-y-110 transition-transform"></div>
              <h3 className="text-white font-cyber text-sm tracking-wider uppercase">Brand Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To become the ultimate decentralized lifestyle guild, where premium physical streetwear, high-fidelity interactive digital experiences, and community-driven limited drops unite seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Futuristic Lore Box */}
        <div className="lg:col-span-5 glass-morphic border border-cyber-blue/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyber-purple/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-blue animate-ping"></span>
                <span className="font-mono text-xs text-cyber-blue uppercase tracking-widest">TRANSMISSION_RECV</span>
              </div>
              <span className="font-mono text-xs text-gray-500">SECURE://SHELL/09</span>
            </div>
            <h4 className="text-white font-display font-bold text-lg">The Lore of CROCOO</h4>
            <p className="text-gray-400 text-xs font-mono leading-relaxed">
              In a near-future cyberpunk landscape, the crocodile (CROCOO) serves as the ultimate symbol of physical adaptation and evolutionary resilience. Unchanged for millions of years, it represents an unbreakable survival architecture. 
              <br /><br />
              CROCOO imports this timeless evolutionary defense mechanism into streetwear apparel—using highly resilient technical fabrics, water-repellent weaves, and modular designs equipped for the future city grid.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-cyber-blue/80 flex items-center justify-between">
            <span>AUDIT://STREETWEAR_FASHION_GEN_Z</span>
            <span>VERIFIED_OK_100%</span>
          </div>
        </div>
      </div>

      {/* Interactive Logo Concept Lab */}
      <div className="glass-morphic rounded-2xl border border-white/10 p-6 lg:p-8 space-y-8 relative">
        <div className="absolute top-3 right-4 font-mono text-[10px] text-gray-500 hidden md:block">
          LOGO_GENERATOR_RENDERER v1.2
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <span className="text-cyber-blue font-mono font-normal">01.</span> Logo Concept Lab
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Analyze and fine-tune CROCOO's vectors. Interact with variables below to test brand adaptability.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(['cyan', 'purple', 'blue'] as const).map((color) => (
              <button
                key={color}
                onClick={() => setLogoColor(color)}
                className={`px-3 py-1.5 rounded font-mono text-xs transition-all uppercase ${
                  logoColor === color
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {color} Mode
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SVG Canvas Box */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-black/80 rounded-xl border border-white/5 p-8 relative overflow-hidden h-96">
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
            
            {/* SVG Interactive Rendering */}
            <svg
              className="w-48 h-48 transition-all duration-300"
              viewBox="0 0 200 200"
              style={{
                filter: `drop-shadow(0 0 ${logoGlow}px ${
                  logoColor === 'cyan' ? '#00f0ff' : logoColor === 'purple' ? '#bd00ff' : '#0066ff'
                })`,
              }}
            >
              {/* Crocodile Maw Vector Art */}
              <g
                stroke={logoColor === 'cyan' ? '#00f0ff' : logoColor === 'purple' ? '#bd00ff' : '#00aeff'}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Outer Head Shield */}
                <path d="M 30,100 L 70,40 L 160,50 L 180,80 L 130,95 L 180,110 L 160,150 L 70,160 Z" className="animate-pulse" />
                
                {/* Cybernetic Scales / Segments */}
                <path d="M 70,40 L 90,80 M 110,45 L 125,85 M 140,48 L 150,90" opacity="0.6" />
                <path d="M 70,160 L 90,120 M 110,155 L 125,115 M 140,152 L 150,110" opacity="0.6" />
                
                {/* Technical Eye (Target Reticle) */}
                <circle cx="100" cy="70" r="12" strokeWidth="1.5" />
                <circle cx="100" cy="70" r="4" fill={logoColor === 'cyan' ? '#00f0ff' : logoColor === 'purple' ? '#bd00ff' : '#00aeff'} />
                <line x1="85" y1="70" x2="115" y2="70" strokeWidth="1" />
                <line x1="100" y1="55" x2="100" y2="85" strokeWidth="1" />
                
                {/* Electric Crocodile Teeth (Interactive dynamic paths) */}
                <path
                  d="M 120,96 L 128,88 L 136,96 L 144,88 L 152,96 L 160,88 L 168,95"
                  className="transition-transform duration-500"
                  style={{
                    transform: `translateY(${Math.sin(Date.now() / 1000) * 1.5}px)`,
                  }}
                />
                <path
                  d="M 120,96 L 128,104 L 136,96 L 144,104 L 152,96 L 160,104 L 168,95"
                  className="transition-transform duration-500"
                  style={{
                    transform: `translateY(${-Math.sin(Date.now() / 1000) * 1.5}px)`,
                  }}
                />
                
                {/* Tactical HUD Data overlays */}
                <path d="M 20,80 L 15,80 L 15,120 L 20,120" strokeWidth="1.5" opacity="0.8" />
                <path d="M 180,60 L 185,60 L 185,140 L 180,140" strokeWidth="1.5" opacity="0.8" />
              </g>
              
              {/* Spinning background hud coordinate wheel */}
              <circle
                cx="100"
                cy="100"
                r="85"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
                strokeDasharray="10 15 5 5"
                style={{
                  animation: `spin ${logoAnimationSpeed * 5}s linear infinite`,
                  transformOrigin: '50% 50%',
                }}
              />
            </svg>

            {/* Glowing Logo Wordmark */}
            <div className="mt-6 text-center space-y-1">
              <div className="font-cyber font-black text-3xl tracking-[12px] text-white">
                C R O C O O
              </div>
              <div className="font-mono text-[9px] text-cyber-blue tracking-[4px] uppercase opacity-80">
                Resilience Engine // Street Apparel Unit
              </div>
            </div>
            
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
              LIVE_VECTOR_PREVIEW // {logoColor.toUpperCase()}_STRENGTH_VAL: {logoGlow}px
            </div>
          </div>

          {/* Interactive Parameters and Vector Options */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-white font-cyber text-sm tracking-wider uppercase flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyber-blue" /> Adaptive Parameters
            </h3>

            {/* Slider 1: Glow strength */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-gray-400">Neon Glow Strength</span>
                <span className="text-cyber-blue">{logoGlow}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={logoGlow}
                onChange={(e) => setLogoGlow(Number(e.target.value))}
                className="w-full accent-cyber-blue bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            {/* Slider 2: HUD Rotation Speed */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-gray-400">Tactical HUD Spin Duration</span>
                <span className="text-cyber-purple">{(logoAnimationSpeed * 5).toFixed(1)}s</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={11 - logoAnimationSpeed}
                onChange={(e) => setLogoAnimationSpeed(11 - Number(e.target.value))}
                className="w-full accent-cyber-purple bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            {/* Logo Concepts List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Logo Variation Logic</span>
              {logoConcepts.map((concept, index) => (
                <div key={concept.id} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-display font-semibold text-sm flex items-center gap-1.5">
                      <span className="text-xs text-cyber-blue font-mono">0{index + 1}.</span> {concept.name}
                    </h4>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-white uppercase">Active</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{concept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Color Palette & Typography Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Color Palette Panel */}
        <div className="lg:col-span-6 glass-morphic rounded-2xl border border-white/10 p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <span className="text-cyber-purple font-mono font-normal">02.</span> Brand Color Palette
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Select or copy these curated hex tokens representing our midnight street grid. Click to copy.
            </p>
          </div>

          <div className="space-y-3">
            {swatches.map((swatch) => (
              <div
                key={swatch.hex}
                onClick={() => handleCopyColor(swatch.hex)}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg border border-white/25 flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {swatch.hex === '#000000' && <span className="text-[10px] text-white/50">ABS</span>}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-white font-semibold text-sm">{swatch.name}</h4>
                    <p className="text-gray-400 text-xs">{swatch.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="text-gray-500 group-hover:text-cyber-blue transition-colors">{swatch.hex}</span>
                  <div className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-400 group-hover:text-white">
                    {copiedColor === swatch.hex ? (
                      <span className="text-[10px] text-green-400 font-bold font-mono">COPIED</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-cyber-blue/5 border border-cyber-blue/10 flex items-center justify-between text-xs font-mono text-cyber-blue">
            <span>STREET_ACCENT: CYAN #00f0ff</span>
            <span>WARN_ACCENT: PURPLE #bd00ff</span>
          </div>
        </div>

        {/* Typography System Panel */}
        <div className="lg:col-span-6 glass-morphic rounded-2xl border border-white/10 p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <span className="text-cyber-blue font-mono font-normal">03.</span> Typography System
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Curated architectural typefaces optimized for readability, digital-heritage, and luxury spacing.
            </p>
          </div>

          {/* Typeface Sandbox */}
          <div className="space-y-4">
            <div className="bg-black/60 p-4 rounded-xl border border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-cyber-blue uppercase">Typography Live Lab</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setLetterSpacing('tracking-normal')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      letterSpacing === 'tracking-normal' ? 'bg-cyber-blue text-black font-bold' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setLetterSpacing('tracking-widest')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      letterSpacing === 'tracking-widest' ? 'bg-cyber-blue text-black font-bold' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Extended
                  </button>
                </div>
              </div>
              
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                maxLength={30}
                className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm font-mono text-white focus:outline-none focus:border-cyber-blue"
                placeholder="Type sample text here..."
              />
            </div>

            {/* Typeface 1: Space Grotesk */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>DISPLAY SYSTEM - SPACE GROTESK</span>
                <span>HEADINGS / BOLD PRINTS</span>
              </div>
              <h3 className={`text-2xl font-bold font-display text-white ${letterSpacing}`}>
                {sampleText || "CROCOO SYSTEM"}
              </h3>
              <p className="text-xs text-gray-400">
                A technical, high-fashion sans-serif with subtle geometric anomalies ideal for display layouts.
              </p>
            </div>

            {/* Typeface 2: Orbitron */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>SUB-DISPLAY SYSTEM - ORBITRON</span>
                <span>HUD LABELS / TECHNICAL BADGES</span>
              </div>
              <h3 className={`text-xl font-black font-cyber text-cyber-blue ${letterSpacing}`}>
                {sampleText || "UPGRADE YOUR SKIN"}
              </h3>
              <p className="text-xs text-gray-400">
                A modular, sci-fi mechanical face providing instant premium technological heritage.
              </p>
            </div>

            {/* Typeface 3: Plus Jakarta Sans */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>BODY SYSTEM - PLUS JAKARTA SANS</span>
                <span>ECOMMERCE PARAGRAPHS / BUTTONS</span>
              </div>
              <p className="text-sm font-sans text-white leading-relaxed">
                CROCOO garments utilize cybernetic aesthetics. The body copy demands absolute organic readability.
              </p>
              <p className="text-xs text-gray-400">
                An elegant, modern humanist neo-grotesque optimized for mobile shopping lists & details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UI Component Style Guide Playground */}
      <div className="glass-morphic rounded-2xl border border-white/10 p-6 lg:p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
            <span className="text-cyber-blue font-mono font-normal">04.</span> Interactive UI Style Guide
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Test the tactile feel of CROCOO's frontend architecture. Hover or click to explore our spring animations and glows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Button Styles Showcase */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Futuristic Button Variants</span>
            
            <div className="p-5 bg-black/60 rounded-xl border border-white/5 space-y-4">
              {/* Button Variant 1: Cyber Action Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs font-mono">
                  <div className="text-white font-bold">1. CYBER_ACTION_BUTTON</div>
                  <div className="text-gray-400">Solid neon glow state</div>
                </div>
                <button
                  onClick={() => setButtonClickCount((prev) => prev + 1)}
                  className="relative group overflow-hidden px-5 py-2.5 rounded bg-cyber-blue text-black font-cyber text-xs font-black tracking-widest uppercase hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all cursor-pointer active:scale-95"
                >
                  <span className="relative z-10">DROP_NOW // SHIFT</span>
                </button>
              </div>

              {/* Button Variant 2: Magnet Neon Outline */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                <div className="text-xs font-mono">
                  <div className="text-white font-bold">2. NEON_OUTLINE</div>
                  <div className="text-gray-400">Double-bordered glass state</div>
                </div>
                <button
                  onClick={() => setButtonClickCount((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded border border-cyber-purple text-cyber-purple font-mono text-xs tracking-wider uppercase hover:bg-cyber-purple hover:text-white transition-all cursor-pointer active:scale-95 duration-300"
                >
                  ACQUIRE_PASS
                </button>
              </div>

              {/* Button Variant 3: Tech Bracket Label */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                <div className="text-xs font-mono">
                  <div className="text-white font-bold">3. HUD_BRACKET</div>
                  <div className="text-gray-400">Zero fill tech-hud style</div>
                </div>
                <button
                  onClick={() => setButtonClickCount((prev) => prev + 1)}
                  className="font-mono text-xs text-white hover:text-cyber-blue flex items-center gap-1.5 transition-colors cursor-pointer group"
                >
                  <span className="text-cyber-blue group-hover:translate-x-[-2px] transition-transform">[</span>
                  EXPLORE_COLLECTION
                  <span className="text-cyber-blue group-hover:translate-x-[2px] transition-transform">]</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>ACTIVE_INTERACTION_EVENTS</span>
              <span className="text-cyber-blue font-bold">COUNT: {buttonClickCount} clicks</span>
            </div>
          </div>

          {/* Interactive Card Templates */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Premium Card Layouts</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Style 1: Glassmorphic Premium */}
              <div
                className="glass-morphic p-5 rounded-xl border border-white/10 hover:border-cyber-blue/40 transition-all duration-300 space-y-3 cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>ITEM_CARD_v1</span>
                  <span className={isHovered ? 'text-cyber-blue' : ''}>Active</span>
                </div>
                <div className="w-full h-24 rounded bg-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className={`absolute w-12 h-12 rounded-full bg-cyber-blue/10 blur-xl group-hover:scale-150 transition-transform duration-500`}></div>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">TECHNICAL_VEST</span>
                </div>
                <div className="space-y-1">
                  <h5 className="text-white font-display font-medium text-xs">C-1 Utility Rig</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs font-mono">$185.00</span>
                    <span className="text-[9px] font-mono text-cyber-blue">LIMITED_DROP</span>
                  </div>
                </div>
              </div>

              {/* Card Style 2: Dense Binary Grid */}
              <div className="p-5 rounded-xl bg-cyber-dark border border-white/5 hover:border-cyber-purple/40 transition-all duration-300 space-y-3 relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid-dense opacity-30"></div>
                <div className="relative z-10 flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>DROPPING_SOON</span>
                  <span className="text-cyber-purple animate-pulse">●</span>
                </div>
                <div className="relative z-10 w-full h-24 rounded bg-black flex flex-col justify-center items-center text-center p-2">
                  <span className="font-cyber font-black text-xs text-cyber-purple">08D : 14H : 02M</span>
                  <span className="text-[8px] font-mono text-gray-500 mt-1 uppercase">TIME_TO_SYS_UPDATE</span>
                </div>
                <div className="relative z-10 space-y-0.5">
                  <h5 className="text-white font-display font-medium text-xs">C-2 Shell Jacket</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs font-mono">$240.00</span>
                    <span className="text-[9px] font-mono text-cyber-purple">MEMBER_EXCLUSIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slogans and Slogan Configurator */}
      <div className="glass-morphic rounded-2xl border border-white/10 p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
            <span className="text-cyber-purple font-mono font-normal">05.</span> Brand Slogan Playground
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Browse our core premium slogans or contribute a custom tagline. Help us shape the streetwear lexicon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slogans List */}
          <div className="lg:col-span-7 space-y-3">
            {slogans
              .sort((a, b) => b.votes - a.votes)
              .map((slogan, index) => (
                <div
                  key={slogan.text}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-gray-500">RANK_0{index + 1}</span>
                      {index === 0 && (
                        <span className="px-1.5 py-0.5 rounded bg-cyber-blue/10 text-cyber-blue text-[9px] font-mono font-bold uppercase tracking-widest">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-white font-cyber font-bold text-sm tracking-wide">{slogan.text}</p>
                  </div>

                  <button
                    onClick={() => handleVoteSlogan(index)}
                    className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-blue/50 text-gray-400 hover:text-white transition-all group"
                  >
                    <span className="font-mono text-xs text-cyber-blue group-hover:scale-110 transition-transform">
                      ▲
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 mt-1">{slogan.votes} v</span>
                  </button>
                </div>
              ))}
          </div>

          {/* Slogan Custom Adder */}
          <div className="lg:col-span-5 bg-cyber-dark rounded-xl border border-white/5 p-5 space-y-4">
            <h4 className="text-white font-cyber text-xs tracking-wider uppercase">Submit Slogan Proposal</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Propose an urban slogan expressing Gen Z street intelligence. Must be sharp, minimal, and fully capitalized.
            </p>

            <form onSubmit={handleAddSlogan} className="space-y-3">
              <input
                type="text"
                value={newSlogan}
                onChange={(e) => setNewSlogan(e.target.value)}
                maxLength={45}
                placeholder="E.G., CRYPTO_VECTORS_ON_STREET"
                className="w-full bg-black border border-white/10 rounded-lg p-3 text-xs font-mono text-white focus:outline-none focus:border-cyber-purple placeholder-gray-600 uppercase"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded bg-cyber-purple hover:bg-cyber-purple/85 text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> COMPILE_SLOGAN
              </button>
            </form>

            <div className="p-3 bg-black/40 rounded-lg text-[9px] font-mono text-gray-500 space-y-1">
              <div>// STYLE_POLICIES:</div>
              <div>- All uppercase letters</div>
              <div>- Uses underscores as spaces (recommended)</div>
              <div>- Relates technology to garments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
