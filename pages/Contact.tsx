import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MapPin, Calendar, CheckCircle, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ShinyButton } from '../components/ui/ShinyButton';
import { InteractiveGridBackground } from '../components/ui/InteractiveGridBackground';
import { Wave } from '@/components/ui/Wave';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = ['Web Development', 'App Development', 'Graphic Design', 'Other'];

  useEffect(() => {
    const validate = () => {
      const newErrors: FormErrors = {};
      if (!formState.name.trim()) newErrors.name = 'Name is required';
      else if (formState.name.length < 2) newErrors.name = 'Name is too short';

      if (!formState.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = 'Invalid email format';

      if (!formState.message.trim()) newErrors.message = 'Message is required';
      else if (formState.message.length < 10) newErrors.message = 'Please provide more detail';

      setErrors(newErrors);
    };
    validate();
  }, [formState]);

  const handleBlur = (field: string) => setTouched(prev => ({ ...prev, [field]: true }));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const selectProjectType = (type: string) => {
    setFormState(prev => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormState({ name: '', email: '', projectType: 'Web Development', message: '' });
      setTouched({});
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName: keyof FormErrors) => {
    const base = "w-full bg-white dark:bg-neutral-900 text-[#111111] dark:text-[#FAF9F6] border rounded-xl px-5 py-4 focus:outline-none transition-all duration-500 font-light text-sm shadow-[0_2px_8px_rgba(0,0,0,0.01)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] ";
    if (touched[fieldName] && errors[fieldName]) return base + "border-red-500/30 focus:border-red-500 bg-red-500/[0.005] dark:bg-red-500/[0.02]";
    if (touched[fieldName] && !errors[fieldName]) return base + "border-emerald-500/20 focus:border-emerald-500/40";
    return base + "border-black/5 dark:border-white/10 focus:border-black/10 dark:focus:border-white focus:shadow-[0_4px_16px_rgba(0,0,0,0.02)]";
  };

  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black min-h-screen relative overflow-hidden font-inter">
      <Helmet>
        <title>Contact | Hire & Collaborate</title>
        <meta name="description" content="Get in touch with Harsha Bacham for freelance projects, consultations, or system audits. Start an inquiry today." />
        <meta property="og:title" content="Contact | Hire & Collaborate" />
        <meta property="og:description" content="Get in touch with Harsha Bacham for freelance projects, consultations, or system audits. Start an inquiry today." />
      </Helmet>
      {/* 21st.dev Interactive Grid Background with Cursor Tracking Spotlight */}
      <InteractiveGridBackground />
      
      {/* Soft warm aesthetic ambient orb */}
      <div className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-[#FF5A36]/[0.02] rounded-full blur-[150px] pointer-events-none animate-bounce-slow"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        
        {/* Page Header */}
        <ScrollReveal direction="up" delay={50}>
          <header className="mb-24 border-b border-black/[0.04] dark:border-white/[0.06] pb-16">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3 text-neutral-400 text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
                <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> 05 // SYSTEM CONTACT
              </div>
              <h1 className="text-5xl md:text-[6.5vw] font-outfit font-extrabold tracking-tighter leading-[0.88] uppercase text-neutral-900 dark:text-neutral-50">
                START <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-[6.5vw] md:text-[7vw] normal-case">inquiry</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                Accepting bespoke requests, system audits, and high-end visual compositions.
              </p>
            </div>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Address Links */}
          <div className="lg:col-span-4 space-y-12">
            <ScrollReveal direction="up" delay={100}>
              <div className="space-y-10">
                
                {/* Active Availability */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-transparent border border-black/5 dark:border-white/10 rounded-2xl w-fit shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold">Active Workspace</span>
                </div>

                {/* Email Direct Card */}
                <div className="space-y-6">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-bold">[ ELECTRONIC INBOX ]</span>
                  
                  <SpotlightCard className="bg-transparent rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden shadow-sm" glowColor="rgba(255, 90, 54, 0.08)">
                    <a 
                      href="mailto:bachamharsha4091@gmail.com" 
                      className="group block p-6 transition-all duration-500"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-3">
                          <Mail size={16} className="text-neutral-400 group-hover:text-[#FF5A36] transition-colors" />
                          <p className="text-base font-outfit font-extrabold uppercase text-neutral-900 dark:text-[#FAF9F6] break-all leading-tight">
                            bachamharsha4091<br />@gmail.com
                          </p>
                          <p className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold">Response &lt; 24h</p>
                        </div>
                      </div>
                    </a>
                  </SpotlightCard>

                  {/* Metadata Indicators */}
                  <SpotlightCard className="p-6 bg-transparent border border-black/5 dark:border-white/10 rounded-3xl space-y-4 shadow-sm" glowColor="rgba(255, 90, 54, 0.08)">
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 text-xs">
                      <MapPin size={14} className="text-[#FF5A36]" />
                      <span className="font-mono font-bold text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Global Integration</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400 text-xs">
                      <Calendar size={14} className="text-[#FF5A36]" />
                      <span className="font-mono font-bold text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Mon — Fri, 9am — 6pm IST</span>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Follow Protocols */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-bold">[ EXTERNAL CONNECTIONS ]</span>
                  <div className="flex gap-2">
                    {[
                      { icon: <Github size={16} />, label: 'GitHub', link: 'https://github.com/harshabacham' },
                      { icon: <Linkedin size={16} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/harsha-bacham' },
                      { icon: <Instagram size={16} />, label: 'Instagram', link: 'https://instagram.com/harshabacham' },
                    ].map((social) => (
                      <a 
                        key={social.label} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-2xl bg-transparent border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:border-black/10 dark:hover:border-white/20 transition-all shadow-sm"
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High-End Interactive Form Card */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={200}>
              <SpotlightCard 
                className="bg-transparent p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/10 relative overflow-hidden"
                glowColor="rgba(255, 90, 54, 0.08)"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A36]/[0.01] blur-3xl rounded-full pointer-events-none"></div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* Elegant success screen */
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center space-y-6 relative z-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
                        <CheckCircle size={32} className="text-emerald-500" />
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest block font-bold">ROUTING COMPLETE</span>
                        <h3 className="text-2xl font-outfit font-extrabold uppercase tracking-tight text-neutral-900 dark:text-[#FAF9F6]">Inquiry Reconciled</h3>
                        <p className="font-instrument text-xl text-neutral-600 dark:text-neutral-300 italic max-w-md mx-auto">
                          "Your project parameters have been securely stored. I will personally audit and follow up on your concept within 24 hours."
                        </p>
                      </div>

                      <button 
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3.5 bg-neutral-900 dark:bg-neutral-800 text-white font-outfit font-bold uppercase text-[10px] tracking-wider rounded-xl hover:bg-[#FF5A36] dark:hover:bg-[#FF5A36] transition-all mt-4 shadow-md shadow-black/10"
                      >
                        Draft Another Concept
                      </button>
                    </motion.div>
                  ) : (
                    /* Contact Form */
                    <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Input */}
                        <div className="space-y-2">
                          <label className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 ml-1 font-bold">CLIENT NAME // IDENTITY</label>
                          <input 
                            name="name"
                            type="text" 
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur('name')}
                            placeholder="e.g. Alexis Drake"
                            className={getInputClass('name')}
                          />
                          {touched.name && errors.name && (
                            <p className="text-[8px] font-mono text-red-500 uppercase tracking-widest mt-1 ml-1 font-bold">{errors.name}</p>
                          )}
                        </div>
                        
                        {/* Email Input */}
                        <div className="space-y-2">
                          <label className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 ml-1 font-bold">CONTACT EMAIL // LINK</label>
                          <input 
                            name="email"
                            type="email" 
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur('email')}
                            placeholder="e.g. alexis@studio.co"
                            className={getInputClass('email')}
                          />
                          {touched.email && errors.email && (
                            <p className="text-[8px] font-mono text-red-500 uppercase tracking-widest mt-1 ml-1 font-bold">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Project Segment Selection */}
                      <div className="space-y-4">
                        <label className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 ml-1 font-bold">PROJECT SEGMENT // SYSTEM VECTOR</label>
                        <div className="flex flex-wrap gap-2">
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => selectProjectType(type)}
                              className={`px-5 py-3 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all duration-300 border ${
                                formState.projectType === type 
                                  ? 'bg-[#111111] dark:bg-neutral-800 text-white border-[#111111] dark:border-white/10 font-bold shadow-md shadow-black/10' 
                                  : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-500 border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 hover:text-black dark:hover:text-white'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project brief text */}
                      <div className="space-y-2">
                        <label className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 ml-1 font-bold">BRIEF CONCEPT OUTLINE</label>
                        <textarea 
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur('message')}
                          placeholder="Parameters, core layout goals, required integrations..."
                          className={`${getInputClass('message')} resize-none`}
                        ></textarea>
                        {touched.message && errors.message && (
                          <p className="text-[8px] font-mono text-red-500 uppercase tracking-widest mt-1 ml-1 font-bold">{errors.message}</p>
                        )}
                      </div>

                      {/* Status row info */}
                      <div className="flex items-center gap-2.5 text-[9px] font-mono text-neutral-400 uppercase font-bold">
                        <Terminal size={12} className="text-[#FF5A36]" />
                        <span>INTEGRATED PROTOCOLS SECURE</span>
                      </div>

                      {/* Submit */}
                      <ShinyButton 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-xl font-outfit font-extrabold uppercase text-[10px] tracking-widest overflow-hidden transition-all duration-300 ${
                          isSubmitting ? '!bg-neutral-100 !text-neutral-400 cursor-not-allowed' : ''
                        }`}
                      >
                        <span className={`flex items-center justify-center gap-2.5 ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                          Dispatch Parameters
                        </span>
                        {isSubmitting && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Wave className="w-6 h-6 text-neutral-800 dark:text-white" />
                          </div>
                        )}
                      </ShinyButton>

                    </form>
                  )}
                </AnimatePresence>

              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
