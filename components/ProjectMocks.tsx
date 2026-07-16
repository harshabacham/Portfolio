import React from 'react';

// macOS Traffic Lights
const TrafficLights: React.FC = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-black/20">
    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
  </div>
);

// Mockup 1: Code Screenshot (Pink Background)
export const CodeScreenshotMock: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] bg-[#FDB5D8] rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative group overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {/* Container window */}
      <div className="w-full max-w-[90%] bg-[#0F0F11] rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        <TrafficLights />
        <div className="p-4 sm:p-6 flex flex-col gap-4">
          {/* Inner canvas (Ray.so style) */}
          <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-r from-[#FF5A36] via-[#FF8008] to-[#FFC837] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px]" />
            {/* Dark glass code block */}
            <div className="w-full max-w-[90%] bg-black/75 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/10 shadow-2xl font-mono text-[9px] sm:text-[11px] leading-relaxed text-left text-white/95 relative z-10 select-none">
              <span className="text-[#F43F5E]">int</span> <span className="text-[#60A5FA]">main</span>() &#123;
              <div className="pl-4">
                <span className="text-[#FB923C]">for</span> (<span className="text-[#F43F5E]">int</span> i = <span className="text-[#38BDF8]">0</span>; i &lt; <span className="text-[#38BDF8]">10</span>; i++) &#123;
                <div className="pl-4 text-emerald-400">
                  printf(<span className="text-yellow-200">"Hello"</span>);
                </div>
                &#125;
                <br />
                <span className="text-[#F43F5E]">return</span> <span className="text-[#38BDF8]">0</span>;
              </div>
              &#125;
            </div>
          </div>

          {/* Settings Bar */}
          <div className="flex items-center justify-between px-1 text-[8px] sm:text-[9px] text-neutral-400 font-mono select-none">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5A36]" />
                <span>Theme</span>
              </div>
              <div>Language</div>
              <div>Padding</div>
            </div>
            <div className="flex gap-3">
              <div>Background</div>
              <div>Platform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mockup 2: Snapalyzer (Lavender Background)
export const SnapalyzerMock: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] bg-[#D6DCFF] rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative group overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {/* Light browser window */}
      <div className="w-full max-w-[90%] bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-neutral-200/50 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-50 border-b border-neutral-100">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          </div>
          <div className="w-1/2 h-5 rounded bg-neutral-100 flex items-center justify-center text-[8px] text-neutral-400 font-mono">
            snapalyzer.ai
          </div>
          <div className="w-4" />
        </div>

        {/* Web App Body */}
        <div className="p-4 sm:p-5 flex flex-col items-center gap-4 text-center select-none bg-[#FAFAFC]">
          {/* Mock Navbar */}
          <div className="w-full flex justify-between items-center px-1">
            <span className="text-[10px] font-extrabold tracking-wider text-indigo-600 font-outfit uppercase">Snapalyzer</span>
            <div className="flex gap-2.5 text-[8px] text-neutral-400 font-medium">
              <span>Try Now</span>
              <span>How It Works</span>
              <span>Features</span>
            </div>
          </div>

          {/* Landing content */}
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-neutral-800 font-outfit">Snapalyzer</h4>
            <p className="text-[7px] sm:text-[9px] text-neutral-400 max-w-xs mx-auto leading-normal">
              An advanced image analysis tool that extracts insights using next-gen vision models.
            </p>
          </div>

          {/* Main Action Boxes */}
          <div className="w-full grid grid-cols-12 gap-3">
            {/* Drag Zone */}
            <div className="col-span-4 rounded-lg border border-dashed border-indigo-200 bg-indigo-50/20 p-2 sm:p-3 flex flex-col items-center justify-center gap-1">
              <div className="text-[8px] font-bold text-indigo-600 font-mono">Choose File</div>
              <div className="text-[6px] text-indigo-400">or drop image</div>
            </div>

            {/* Galaxy Result Box */}
            <div className="col-span-8 rounded-lg overflow-hidden bg-black relative aspect-[1.8/1] shadow-md border border-neutral-100">
              {/* Starry background gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-neutral-950 to-black flex items-center justify-center overflow-hidden">
                {/* Nebula clouds */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-violet-600/20 rounded-full blur-2xl" />
                
                {/* Tiny stars */}
                <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
                <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full opacity-60" />
                <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-90" />
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-indigo-200 rounded-full opacity-70 animate-ping" />

                {/* Main cosmic object */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-indigo-600 to-amber-300 opacity-80" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1 right-2 bg-indigo-600/80 backdrop-blur text-[5px] text-white font-mono px-1 py-0.5 rounded uppercase tracking-widest">
                Vision Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mockup 3: Collabxweb (Yellow/Lime Background)
export const CollabxwebMock: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] bg-[#EDFC9C] rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative group overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {/* Dark IDE window */}
      <div className="w-full max-w-[90%] bg-[#1A1A1E] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-neutral-800 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        <TrafficLights />
        <div className="grid grid-cols-12 h-full text-left select-none font-mono text-[7px] sm:text-[9px]">
          {/* File Explorer (col-span-4) */}
          <div className="col-span-3 border-r border-white/[0.04] bg-[#141416] p-3 text-neutral-400 space-y-3 font-sans">
            <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider block">Project Workspace</span>
            <div className="space-y-1.5 text-[8px]">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <span className="text-yellow-500 font-bold">📁</span> src
              </div>
              <div className="pl-3 flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">📄</span> App.tsx
              </div>
              <div className="pl-3 flex items-center gap-1.5 text-yellow-300 font-medium">
                <span className="text-yellow-400">📄</span> main.tsx
              </div>
              <div className="pl-3 flex items-center gap-1.5">
                <span className="text-indigo-400">📄</span> style.css
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-500">📄</span> package.json
              </div>
            </div>
          </div>

          {/* Code Window (col-span-5) */}
          <div className="col-span-5 p-3 text-neutral-300 space-y-1 bg-[#1A1A1E]">
            <div className="text-neutral-600 border-b border-white/[0.04] pb-1 mb-2">main.tsx</div>
            <div className="space-y-0.5 font-mono text-[7px] sm:text-[8px] leading-relaxed">
              <div><span className="text-[#F43F5E]">import</span> React <span className="text-[#F43F5E]">from</span> <span className="text-yellow-200">'react'</span>;</div>
              <div><span className="text-[#F43F5E]">import</span> App <span className="text-[#F43F5E]">from</span> <span className="text-yellow-200">'./App'</span>;</div>
              <div className="text-neutral-600">// Mount node</div>
              <div><span className="text-[#60A5FA]">createRoot</span>(root).<span className="text-emerald-400">render</span>(</div>
              <div className="pl-2">&lt;<span className="text-[#38BDF8]">App</span> /&gt;</div>
              <div>);</div>
            </div>
          </div>

          {/* Running Card Panel (col-span-4) */}
          <div className="col-span-4 bg-[#1E1E22] p-3 flex flex-col justify-center items-center gap-3">
            {/* JS Block Card */}
            <div className="bg-[#FCD34D] text-[#111111] p-3 sm:p-4 rounded-xl w-full text-center space-y-2 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-5 h-5 bg-[#111111] text-[#FCD34D] font-extrabold rounded flex items-center justify-center mx-auto text-[10px]">
                JS
              </div>
              <div className="font-sans font-extrabold text-[9px] uppercase tracking-wide">
                Your app has started!
              </div>
              <div className="bg-[#111111]/10 text-[#111111]/80 rounded py-1 px-1.5 text-[7px] font-mono">
                studio-1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mockup 4: IndiCov (Blue Background)
export const IndiCovMock: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] bg-[#97BDFF] rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative group overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {/* Dark Dashboard window */}
      <div className="w-full max-w-[90%] bg-[#0B0F19] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-neutral-800/80 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        <TrafficLights />
        <div className="grid grid-cols-12 text-left select-none font-sans p-3 gap-2.5">
          {/* Side navigation icons (col-span-1) */}
          <div className="col-span-1 bg-[#0E1527] rounded-xl py-4 flex flex-col items-center gap-4 border border-white/[0.02]">
            <div className="w-4 h-4 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-[8px] text-white">🏠</span>
            </div>
            <div className="w-4.5 h-4.5 rounded text-[8px] text-neutral-500 text-center">📈</div>
            <div className="w-4.5 h-4.5 rounded text-[8px] text-neutral-500 text-center">➕</div>
            <div className="w-4.5 h-4.5 rounded text-[8px] text-neutral-500 text-center">📞</div>
            <div className="w-4.5 h-4.5 rounded text-[8px] text-neutral-500 text-center">⚙️</div>
          </div>

          {/* Main Dashboard Space (col-span-11) */}
          <div className="col-span-11 space-y-2.5">
            {/* Search/Header */}
            <div className="flex justify-between items-center bg-[#0E1527] border border-white/[0.02] rounded-xl px-3 py-1.5">
              <span className="text-[7px] text-neutral-500 font-mono">search state...</span>
              <span className="text-[7px] font-bold text-neutral-300 font-mono">West Bengal</span>
            </div>

            {/* Content area: Map + Chart */}
            <div className="grid grid-cols-12 gap-2.5">
              {/* Map Outline SVG representing India (col-span-7) */}
              <div className="col-span-7 bg-[#0E1527] rounded-xl p-2.5 flex items-center justify-center border border-white/[0.02] min-h-[75px] relative">
                {/* Abstract Neon outline representation of India outline */}
                <svg viewBox="0 0 100 110" className="w-full max-w-[50px] h-auto text-indigo-500/30 opacity-80" stroke="currentColor" fill="none" strokeWidth="1.5">
                  <path d="M 50 15 L 60 22 L 68 28 L 74 25 L 80 32 L 78 40 L 72 45 L 75 52 L 68 58 L 70 65 L 62 70 L 58 78 L 52 88 L 50 100 L 48 88 L 40 78 L 32 75 L 25 78 L 22 70 L 26 62 L 20 55 L 18 45 L 26 35 L 34 38 L 40 32 L 42 22 Z" />
                  <circle cx="50" cy="55" r="2" fill="#22D3EE" className="animate-ping" />
                  <circle cx="50" cy="55" r="1.5" fill="#22D3EE" />
                </svg>
                <div className="absolute top-2 left-2.5 text-[5px] text-indigo-400 font-mono uppercase tracking-widest">Covid In India</div>
              </div>

              {/* Statistics Chart & Resources list (col-span-5) */}
              <div className="col-span-5 bg-[#0E1527] rounded-xl p-2 flex flex-col justify-between border border-white/[0.02]">
                <div className="space-y-1">
                  <span className="text-[5px] text-neutral-500 font-mono uppercase block">Resources</span>
                  <div className="space-y-0.5 text-[5px]">
                    <div className="flex justify-between text-neutral-400"><span className="text-cyan-400">🛡️</span> Oxygen</div>
                    <div className="flex justify-between text-neutral-400"><span className="text-emerald-400">🛡️</span> Ambulance</div>
                    <div className="flex justify-between text-neutral-400"><span className="text-pink-400">🛡️</span> Beds</div>
                    <div className="flex justify-between text-neutral-400"><span className="text-yellow-400">🛡️</span> Helpline</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Statistics Grid */}
            <div className="grid grid-cols-4 gap-1.5">
              <div className="bg-[#1A1523] border border-red-500/10 rounded-lg p-1 text-center">
                <div className="text-[4px] text-neutral-500 font-mono uppercase">Confirmed</div>
                <div className="text-[6px] font-extrabold text-red-400 font-mono">1,20,000</div>
              </div>
              <div className="bg-[#111C23] border border-emerald-500/10 rounded-lg p-1 text-center">
                <div className="text-[4px] text-neutral-500 font-mono uppercase">Recovered</div>
                <div className="text-[6px] font-extrabold text-emerald-400 font-mono">1,15,000</div>
              </div>
              <div className="bg-[#121A2C] border border-blue-500/10 rounded-lg p-1 text-center">
                <div className="text-[4px] text-neutral-500 font-mono uppercase">Active</div>
                <div className="text-[6px] font-extrabold text-blue-400 font-mono">5,000</div>
              </div>
              <div className="bg-[#1A1920] border border-neutral-500/10 rounded-lg p-1 text-center">
                <div className="text-[4px] text-neutral-500 font-mono uppercase">Deaths</div>
                <div className="text-[6px] font-extrabold text-neutral-400 font-mono">1,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
