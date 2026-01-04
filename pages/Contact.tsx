
import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Send, AlertCircle, CheckCircle2, MapPin, Calendar, ArrowRight } from 'lucide-react';

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Message received. Harsha will get back to you shortly.');
      setFormState({ name: '', email: '', projectType: 'Web Development', message: '' });
      setTouched({});
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName: keyof FormErrors) => {
    const base = "w-full bg-zinc-900/50 border rounded-2xl px-6 py-4 focus:outline-none transition-all duration-500 font-light ";
    if (touched[fieldName] && errors[fieldName]) return base + "border-red-500/30 focus:border-red-500 bg-red-500/5";
    if (touched[fieldName] && !errors[fieldName]) return base + "border-emerald-500/20 focus:border-emerald-500/50";
    return base + "border-white/5 focus:border-white/20";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-64">
      {/* Hero Section */}
      <header className="mb-24 space-y-8">
        <div className="flex items-center gap-3 text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
          <span className="w-8 h-[1px] bg-zinc-800"></span> 05 // Connection
        </div>
        <h1 className="text-6xl md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-white">
          Let’s Build <br />
          <span className="serif italic font-normal text-zinc-400">Something New.</span>
        </h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl italic serif">
          Currently accepting new projects and creative collaborations. If you have an idea that needs a technical or visual edge, let's talk.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Contact Details */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-10">
            {/* Availability Badge */}
            <div className="flex items-center gap-4 px-6 py-4 glass rounded-2xl border border-white/5 w-fit">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500/80">Available for Q4 2025</span>
            </div>

            <div className="space-y-6">
              <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Contact Information</h3>
              
              <a href="mailto:bachamharsha4091@gmail.com" className="group block p-8 glass rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <Mail size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                    <p className="text-xl font-bold break-all">bachamharsha4091@gmail.com</p>
                    <p className="text-xs text-zinc-500">Expect a response within 24 hours.</p>
                  </div>
                  <ArrowRight size={18} className="text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <div className="p-8 glass rounded-[2rem] border border-white/5 space-y-6">
                <div className="flex items-center gap-4 text-zinc-400">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Remote / Global</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-400">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Mon — Fri, 9am — 6pm</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Follow My Process</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={20} />, label: 'GitHub', link: 'https://github.com/harshabacham' },
                  { icon: <Linkedin size={20} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/harsha-bacham' },
                  { icon: <MessageSquare size={20} />, label: 'Twitter', link: '#' }
                ].map((social) => (
                  <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Modern Form */}
        <div className="lg:col-span-8">
          <div className="glass p-8 md:p-16 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="Enter your name"
                    className={getInputClass('name')}
                  />
                  {touched.name && errors.name && <p className="text-[10px] text-red-500 uppercase tracking-widest mt-2 ml-1">{errors.name}</p>}
                </div>
                
                {/* Email */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="email@example.com"
                    className={getInputClass('email')}
                  />
                  {touched.email && errors.email && <p className="text-[10px] text-red-500 uppercase tracking-widest mt-2 ml-1">{errors.email}</p>}
                </div>
              </div>

              {/* Project Type Selector */}
              <div className="space-y-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">I'm interested in...</label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => selectProjectType(type)}
                      className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 border ${
                        formState.projectType === type 
                        ? 'bg-white text-black border-white' 
                        : 'bg-white/5 text-zinc-400 border-white/5 hover:border-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Tell me about the project</label>
                <textarea 
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Goals, timeline, and any specific requirements..."
                  className={`${getInputClass('message')} resize-none`}
                ></textarea>
                {touched.message && errors.message && <p className="text-[10px] text-red-500 uppercase tracking-widest mt-2 ml-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`group relative w-full py-6 rounded-2xl font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 ${
                  isSubmitting ? 'bg-zinc-800 text-zinc-500' : 'bg-white text-black hover:scale-[1.01] active:scale-[0.98]'
                }`}
              >
                <span className={`flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                  Send Inquiry <Send size={16} />
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-zinc-600 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
