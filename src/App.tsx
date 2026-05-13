/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronRight, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Megaphone, 
  ShieldCheck, 
  Fingerprint, 
  Target, 
  Search, 
  TrendingUp, 
  Activity, 
  Mail,
  Scale
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tighter text-brand-900">
              STATE<span className="text-accent">CRAFT</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-900 transition-colors">Services</a>
            <a href="#approach" className="hover:text-brand-900 transition-colors">Approach</a>
            <a href="#about" className="hover:text-brand-900 transition-colors">About</a>
            <a 
              href="mailto:info@cerebralhub.com" 
              className="bg-brand-900 text-white px-6 py-2.5 rounded-full hover:bg-brand-800 transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent"></span>
              <span className="text-accent font-display font-medium uppercase tracking-[0.2em] text-xs">
                Political Strategy & Intelligence
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[1.1] text-brand-900 tracking-tight mb-8">
              Political Strategy. <br />
              Public Engagement. <br />
              <span className="italic font-normal text-slate-400">Data-Driven Victory.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light mb-10">
              In every election cycle, visibility is important. But visibility alone does not win elections. 
              Winning requires strategy, clarity, and the ability to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-2xl shadow-brand-900/20 hover:bg-brand-800 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                Build Your Persona <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-200 text-brand-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-slate-50 transition-all cursor-pointer">
                The 2027 Roadmap
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Background Image */}
        <div className="absolute top-0 right-0 w-full h-full md:w-3/4 opacity-[0.05] pointer-events-none -z-10 bg-slate-900">
           <img 
             src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover grayscale" 
             alt="African Cityscape"
           />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-brand-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Moving from visibility <br />
                to <span className="text-accent italic font-normal underline underline-offset-8">strategic influence.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                STATECRAFT is a political strategy and communication platform developed by Cerebral Hub. 
                We help political actors move beyond slogans to build strong public identities and shape compelling narratives.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l border-white/10 pl-6 py-2">
                  <div className="text-3xl font-serif font-bold text-accent mb-1">2027</div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest font-display">Target Election</div>
                </div>
                <div className="border-l border-white/10 pl-6 py-2">
                  <div className="text-3xl font-serif font-bold text-accent mb-1">DATA</div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest font-display">Machine Driven</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-white/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                alt="African Political Strategist" 
                className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div {...fadeIn}>
              <span className="text-accent font-display font-semibold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">The Strategic Machinery</h2>
              <p className="text-lg text-slate-600">
                Politics has changed. We provide the tools to help you navigate a vocal electorate 
                and a powerful digital space with precision.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Fingerprint className="w-8 h-8" />,
                title: "Political Brand Strategy",
                desc: "Candidate persona development, public image positioning, and message architecture that resonates emotionally.",
                features: ["Candidate Persona", "Campaign Aesthetics", "Issue Framing"]
              },
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Strategic Communication & PR",
                desc: "Stay clear, consistent, and compelling across every platform. Land your message with force and purpose.",
                features: ["Crisis Comms", "Speechwriting", "Media Engagement"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Grassroots Mobilisation",
                desc: "Engage voters where they truly are. Ward-level communication and community activation that builds trust.",
                features: ["Ward-level Planning", "Field Activation", "Town Halls"]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Digital Political Engagement",
                desc: "Persuade rather than just post. Social media strategy, content production, and digital advertising.",
                features: ["Content Strategy", "Sentiment Tracking", "Video Production"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Voter Intelligence",
                desc: "Deep research, field feedback, and voter mapping to understand the people you want to reach.",
                features: ["Constituency Analysis", "Real-time Intelligence", "Polling Support"]
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Campaign Advisory",
                desc: "Strategic roadmaps, stakeholder mapping, and political risk analysis for high-stakes decisions.",
                features: ["Risk Analysis", "Advisory", "Stakeholder Mapping"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-accent font-display font-semibold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Designed to Deliver</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We do not believe in random campaign activity. We believe in deliberate political architecture.
              </p>
              <div className="mt-8 relative h-48 rounded-2xl overflow-hidden grayscale">
                 <img 
                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                   className="w-full h-full object-cover"
                   alt="Strategic focus"
                 />
                 <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-12">
              {[
                { step: "01", title: "We Listen", desc: "Understanding your goals, target audience, constituency realities, and current public perception." },
                { step: "02", title: "We Research", desc: "Studying the political landscape, voter behaviour, media environment, and opposition narratives." },
                { step: "03", title: "We Strategise", desc: "Developing a clear roadmap for political communication, public engagement, and campaign visibility." },
                { step: "04", title: "We Execute", desc: "Creating the content, messaging, digital campaigns, and grassroots engagement tools." },
                { step: "05", title: "We Measure", desc: "Tracking feedback, monitoring perception, and refining strategy based on real-time data." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="text-5xl font-serif font-black text-slate-100 group-hover:text-accent/20 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-brand-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-lg max-w-xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-brand-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Who We Work With</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Political Candidates", "Public Office Holders", "Political Parties", 
                "Campaign Organisations", "Government Institutions", "Advocacy Groups",
                "Policy Organisations", "Political Consultants", "Civic Platforms"
              ].map((item, i) => (
                <span 
                  key={i}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-accent/10 hover:border-accent hover:text-accent transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 mb-24">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-900 mb-8 tracking-tight">
                Build the Persona <br />
                Voters Can Trust.
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-md">
                The road to 2027 has already begun. Let us help you design the strategy 
                required for meaningful political impact.
              </p>
              <div className="flex items-center gap-6">
                <a href="mailto:info@cerebralhub.com" className="flex items-center gap-3 text-brand-900 font-bold group">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  info@cerebralhub.com
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-accent font-display font-medium uppercase tracking-[0.2em] text-xs block mb-4">Final Thought</span>
                <p className="text-2xl font-serif text-brand-900 italic leading-relaxed">
                  "Your political message deserves more than attention. It deserves direction."
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-200 flex items-center justify-between">
                 <div className="font-serif text-2xl font-bold tracking-tighter text-brand-900">
                    STATE<span className="text-accent">CRAFT</span>
                 </div>
                 <p className="text-xs text-slate-400 font-display tracking-widest uppercase">
                   2027 Strategy Platform
                 </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-8">
            <p className="text-sm text-slate-500 font-light">
              © {new Date().getFullYear()} Cerebral Hub. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-brand-900">Privacy</a>
              <a href="#" className="hover:text-brand-900">Terms</a>
              <a href="#" className="hover:text-brand-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
