import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, X, Check, Eye } from 'lucide-react';
import { PROJECTS_GALLERY, ProjectItem } from '../config/business';

interface ProjectsGalleryProps {
  onOpenConsultation: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'smart-home', label: 'Smart Home' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
              ENGINEERED SPACES. <br />
              <span className="text-[#B7E61C]">PROVEN INTEGRATION.</span>
            </h2>
            <p className="text-base text-[#F5F7F2]/80 leading-relaxed font-light">
              Explore how architectural lighting, enterprise networking, and whole-property automation integrate seamlessly into luxury residences and commercial spaces.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button elements allowed per zero-pill rules) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#1B1E20] border border-[#2C3236] rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#B7E61C] text-[#111315] shadow-sm'
                      : 'text-[#F5F7F2]/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#1B1E20] border border-[#2C3236] hover:border-[#B7E61C]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#16181A]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E20] via-transparent to-transparent opacity-80" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono tracking-wider uppercase bg-[#111315]/90 backdrop-blur-md text-[#B7E61C] px-3 py-1 rounded border border-[#2C3236]">
                    {project.type}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#B7E61C] text-[#111315] rounded text-xs font-bold uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B7E61C] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#F5F7F2]/80 leading-relaxed mb-4 font-light">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags (Zero-Pill Discipline: Clean unboxed metadata) */}
                <div className="pt-4 border-t border-[#2C3236] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#70756F]">
                  <span className="text-[#B7E61C] font-semibold">Tech Installed:</span>
                  {project.techInstalled.map((tech, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-[#F5F7F2]/80">{tech}</span>
                      {idx < project.techInstalled.length - 1 && <span className="text-[#70756F]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-[#1B1E20] border border-[#2C3236] rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#111315]/80 text-[#F5F7F2] hover:text-[#B7E61C] rounded-full transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E20] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-1">
                  {selectedProject.type}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#F5F7F2]/85 leading-relaxed mb-6 font-light">
                  {selectedProject.summary}
                </p>

                <div className="bg-[#111315] p-4 rounded-xl border border-[#2C3236] mb-6">
                  <span className="text-xs font-mono text-[#70756F] uppercase block mb-1">Engineering Scope</span>
                  <p className="text-xs text-white leading-relaxed">{selectedProject.scope}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2C3236]">
                  <div className="flex flex-wrap gap-2 text-xs text-[#70756F]">
                    {selectedProject.techInstalled.map((t, idx) => (
                      <span key={idx} className="bg-[#16181A] px-2.5 py-1 rounded text-[#F5F7F2]/80 border border-[#2C3236]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-colors"
                  >
                    <span>Request Similar Project Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
