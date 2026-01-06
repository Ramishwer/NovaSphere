
import React from 'react';
import Navbar from './components/Navbar';
import AIConsultant from './components/AIConsultant';
import { SERVICES, TEAM, PROJECTS } from './constants';

const HeroSection: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/techbg/1920/1080?blur=5" 
        alt="Background" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
        Innovating Beyond <span className="text-blue-500">The Edge</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        Empowering global enterprises with bespoke cloud solutions and intelligence-driven transformation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in zoom-in duration-1000 delay-500">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Explore Our Solutions
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-bold py-4 px-10 rounded-full border border-white/20 transition-all hover:scale-105">
          Watch Showreel
        </button>
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">What we do</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Core Expertise</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-300 inline-block">{service.icon}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PortfolioSection: React.FC = () => (
  <section id="portfolio" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Case Studies</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Selected Works</h3>
        </div>
        <button className="text-blue-600 font-bold hover:underline flex items-center group">
          View All Projects 
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="relative group overflow-hidden rounded-3xl cursor-pointer">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-blue-400 font-medium mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold text-white">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection: React.FC = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">The People</h2>
      <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-16">Meet Our Visionaries</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {TEAM.map((member) => (
          <div key={member.id} className="text-center group">
            <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full ring-4 ring-slate-100 group-hover:ring-blue-100 transition-all duration-300">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
            <p className="text-blue-600 font-medium mb-4">{member.role}</p>
            <p className="text-slate-600 px-4 max-w-sm mx-auto">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Get in touch</h2>
          <h3 className="text-4xl font-extrabold sm:text-6xl mb-8 leading-tight">Ready to start your next project?</h3>
          <p className="text-slate-400 text-lg mb-12">
            Whether you have a specific inquiry or just want to explore how NovaSphere can help your business, we're here to listen and guide.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-medium">hello@novasphere.digital</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-medium">San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-950 py-12 text-slate-500 text-center border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-xl font-bold text-white mb-6 tracking-tighter">NovaSphere</p>
      <div className="flex justify-center space-x-8 mb-8">
        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Career</a>
      </div>
      <p>&copy; {new Date().getFullYear()} NovaSphere Digital Solutions. Built with Future-Ready JS.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <AIConsultant />
    </div>
  );
}

export default App;
