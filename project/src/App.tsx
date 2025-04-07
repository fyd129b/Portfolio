import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Hero Section */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">Hi, I'm [Your Name]</h1>
            <p className="text-xl mb-8 text-purple-200/80">Full Stack Developer passionate about building exceptional web experiences</p>
            <div className="flex justify-center space-x-4">
              <a href="#projects" className="border-2 border-purple-500/50 px-6 py-2 rounded-lg font-medium text-white hover:bg-purple-500/10 transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-64"></div>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-purple-300 to-white bg-clip-text">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-purple-200/80 leading-relaxed mb-6">
              I'm a full-stack developer with expertise in modern web technologies. 
              I specialize in building scalable web applications using React, Node.js, 
              and other cutting-edge technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <SkillCard title="Frontend" items={['React', 'TypeScript', 'Tailwind CSS']} />
              <SkillCard title="Backend" items={['Node.js', 'Express', 'PostgreSQL']} />
              <SkillCard title="Tools" items={['Git', 'Docker', 'VS Code']} />
              <SkillCard title="Soft Skills" items={['Communication', 'Leadership', 'Problem Solving']} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-purple-300 to-white bg-clip-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Project One"
              description="A full-stack web application built with React and Node.js"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="Project Two"
              description="Mobile-first e-commerce platform with real-time updates"
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="Project Three"
              description="AI-powered data visualization dashboard"
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8">
            <SocialLink href="https://github.com" icon={<Github size={32} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={32} />} label="LinkedIn" />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail size={32} />} label="Email" />
          </div>
        </div>
      </section>

      <footer className="bg-black/50 text-white py-8 border-t border-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-200/60">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 bg-black/50 rounded-lg shadow-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-purple-300">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-purple-200/80">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  image
}: { 
  title: string; 
  description: string; 
  image: string;
}) {
  return (
    <div className="bg-black/50 rounded-lg shadow-xl overflow-hidden border border-purple-500/20 backdrop-blur-sm group hover:border-purple-500/40 transition-colors">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-300">{title}</h3>
        <p className="text-purple-200/80">{description}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-purple-300/70 hover:text-purple-300 transition-colors transform hover:scale-110 duration-200"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default App;