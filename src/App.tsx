import { useState } from 'react';
import { 
  Terminal, 
  ShieldAlert, 
  CheckCircle, 
  Lock, 
  ArrowRight, 
  Cpu, 
  Globe, 
  User, 
  Activity, 
  ExternalLink 
} from 'lucide-react';
import Step1BrandIdentity from './components/Step1BrandIdentity';
import Step2Sitemap from './components/Step2Sitemap';
import ThreeDBackground from './components/ThreeDBackground';
import { Step } from './types';

export default function App() {
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(1);
  const [viewingStep, setViewingStep] = useState<number>(1);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  
  // Console logs simulation state
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "INITIALIZING_CROCOO_CORE_STATION_v1.0...",
    "SECURE_GATEWAY_ESTABLISHED. ROBUST://SHELL_LOADED",
    "SUCCESS: Loaded Step 1: Brand Identity System.",
    "AWAITING_SENIOR_ARCHITECT_SIGN_OFF_ON_BRAND_DNA...",
    "3D_RENDER_ENGINE://ACTIVE (ThreeDBackground Canvas Online)"
  ]);

  const steps: Step[] = [
    { id: 1, title: "Step 1: Brand Identity", description: "DNA, Mission, Slogans & Logo Lab", status: isApproved ? 'approved' : 'review' },
    { id: 2, title: "Step 2: Website Structure", description: "13-Page Comprehensive Sitemap", status: isApproved ? 'review' : 'locked' },
    { id: 3, title: "Step 3: Homepage Design", description: "Futuristic Video Landing Experience", status: 'locked' },
    { id: 4, title: "Step 4: Shop Experience", description: "Matrix Product Grid & Facets", status: 'locked' },
    { id: 5, title: "Step 5: Product Page", description: "360 Viewer & Biometrics Guide", status: 'locked' },
    { id: 6, title: "Step 6: AI Features", description: "Stylist, Sizer & Fashion Chatbot", status: 'locked' },
    { id: 7, title: "Step 7: Community Features", description: "UGC Street Feed & Style Uploads", status: 'locked' },
    { id: 8, title: "Step 8: Membership System", description: "Syndicate Membership Pass & VIP Drops", status: 'locked' },
    { id: 9, title: "Step 9: Mobile Experience", description: "Swipe Gallery & Swipe Checkout", status: 'locked' },
    { id: 10, title: "Step 10: Final Dev Plan", description: "React, Supabase, Stripe & Deployment", status: 'locked' },
  ];

  const handleApprove = () => {
    if (isApproved) return;
    setIsApproved(true);
    setViewingStep(2);
    setCurrentActiveStep(2);
    setConsoleLogs([
      ...consoleLogs,
      "USER_ACTION: Sign-off approved on STEP_01: BRAND_IDENTITY_SYSTEM",
      "AUTHENTICITY_STAMP: VERIFIED_BY_SENIOR_ARCHITECT",
      "UPGRADING_GRID_PIPELINE: UNLOCKING_STEP_02_SITEMAP...",
      "SUCCESS: Step 2 Website Structure fully unlocked."
    ]);
  };

  const handleStepClick = (stepId: number) => {
    // Only allow viewing if step is unlocked (or approved)
    if (stepId === 1 || (stepId === 2 && isApproved)) {
      setViewingStep(stepId);
    } else {
      setConsoleLogs([
        ...consoleLogs,
        `SECURITY_ALERT: Attempted to access locked module STEP_0${stepId}.`
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Real-time 3D Interactive Canvas Environment */}
      <ThreeDBackground />

      {/* Absolute ambient lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Console Layout */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6 space-y-6 flex flex-col min-h-screen relative z-10">
        
        {/* Futuristic Dashboard Header */}
        <header className="glass-morphic rounded-2xl border border-white/10 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden">
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-cyber-blue"></div>
          <div className="absolute top-0 right-0 w-24 h-[1px] bg-cyber-purple"></div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black border border-cyber-blue/30 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-cyber font-black text-xl text-cyber-blue tracking-tighter">CR</span>
            </div>
            
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-cyber font-extrabold text-lg tracking-[3px] text-white">CROCOO</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[8px] text-gray-400">BUILD_ENV://v1.0</span>
              </div>
              <p className="text-gray-400 text-xs font-mono">Premium Futuristic Streetwear Brand Creation Console</p>
            </div>
          </div>

          {/* Tactical Metadata & External Links */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-gray-400 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-4 border-l md:border-l-0 border-white/10 pl-3 md:pl-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <User className="w-3 h-3 text-cyber-blue" />
                  <span className="text-white">OPERATOR:</span>
                </div>
                <span className="text-gray-500">sethagnyaniat@gmail.com</span>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-cyber-purple" />
                  <span className="text-white">CHRONO:</span>
                </div>
                <span className="text-gray-500">2026-06-29 UTC</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a 
                href="https://ais-dev-ahdidm23edlswifc6bo3br-137673407921.asia-southeast1.run.app" 
                target="_blank" 
                rel="noreferrer" 
                className="px-2.5 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 transition-all text-white"
              >
                Dev Host <ExternalLink className="w-3 h-3 text-cyber-blue" />
              </a>
            </div>
          </div>
        </header>

        {/* Console Workspace: Step Tree on left, Active Stage on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow items-start">
          
          {/* Left Panel: Step Tree Nav */}
          <aside className="lg:col-span-4 glass-morphic rounded-2xl border border-white/10 p-5 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-white font-cyber text-xs tracking-wider uppercase flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyber-blue" /> Brand Roadmap Pipeline
              </h3>
              <span className="font-mono text-[9px] text-gray-500">10_STEPS_TOTAL</span>
            </div>

            <nav className="space-y-2">
              {steps.map((step) => {
                const isActive = viewingStep === step.id;
                const isStepLocked = step.status === 'locked';

                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/5 border-cyber-blue/50'
                        : isStepLocked
                        ? 'bg-black/40 border-white/5 opacity-50 cursor-not-allowed'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 cursor-pointer'
                    }`}
                    disabled={isStepLocked && step.id !== 2} // Allow click event alerts on locked steps
                  >
                    <div className="space-y-0.5">
                      <h4 className="text-white font-display font-bold text-sm tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {step.description}
                      </p>
                    </div>

                    <div className="flex items-center">
                      {step.status === 'approved' && (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      )}
                      {step.status === 'review' && (
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
                        </div>
                      )}
                      {step.status === 'locked' && (
                        <Lock className="w-3.5 h-3.5 text-gray-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Panel: Content Stage */}
          <main className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Active Step Content */}
            <div className="glass-morphic rounded-2xl border border-white/10 p-6 lg:p-8 min-h-[500px]">
              {viewingStep === 1 && <Step1BrandIdentity />}
              {viewingStep === 2 && <Step2Sitemap />}
              
              {/* Fallback locked screens if clicking on simulated steps (3-10) */}
              {viewingStep > 2 && (
                <div className="h-96 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <ShieldAlert className="w-16 h-16 text-cyber-purple animate-bounce" />
                  <div className="space-y-1">
                    <h3 className="font-cyber font-black text-lg text-white">STEP MODULE LOCKED</h3>
                    <p className="text-gray-500 text-sm max-w-md">
                      This stage is scheduled for downstream development. Complete the current review step and submit approval to unlock.
                    </p>
                  </div>
                  <button 
                    onClick={() => setViewingStep(currentActiveStep)} 
                    className="px-4 py-2 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyber-blue hover:bg-white/10"
                  >
                    RETURN_TO_ACTIVE_WORKSPACE
                  </button>
                </div>
              )}
            </div>

            {/* Sovereign Approval Command Center (Terminal & Approve Panel) */}
            <div className="glass-morphic rounded-2xl border border-white/10 p-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Simulated Secure Terminal logs */}
              <div className="md:col-span-7 bg-black rounded-xl p-4 border border-white/5 font-mono text-[10px] space-y-1 h-32 overflow-y-auto">
                <div className="text-gray-600 flex items-center gap-1.5 pb-1.5 border-b border-white/5 mb-2">
                  <Terminal className="w-3.5 h-3.5 text-cyber-blue" />
                  <span>CONSTRUCTION_SHELL_LOGS //</span>
                </div>
                {consoleLogs.map((log, i) => (
                  <div key={i} className={log.startsWith("SECURITY") ? "text-rose-500" : log.startsWith("USER") ? "text-cyber-purple" : "text-emerald-400"}>
                    {`>`} {log}
                  </div>
                ))}
              </div>

              {/* Action Panel */}
              <div className="md:col-span-5 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-white font-cyber text-xs tracking-wider uppercase">ARCHITECT_AUTHORIZATION</h4>
                  <p className="text-gray-400 text-xs">
                    {!isApproved 
                      ? "Awaiting your design authorization on Step 1 to unlock the Website structure sitemap." 
                      : "Step 1 Authorized! You are exploring Step 2. Instruct the coder in chat to build Step 3."}
                  </p>
                </div>

                {!isApproved ? (
                  <button
                    onClick={handleApprove}
                    className="w-full py-3.5 rounded bg-cyber-blue hover:bg-white hover:text-black font-cyber text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all cursor-pointer active:scale-95"
                  >
                    APPROVE_&_UNLOCK_STEP_2 <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>STEP_01_APPROVED_SYS_UNLOCK_OK</span>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

