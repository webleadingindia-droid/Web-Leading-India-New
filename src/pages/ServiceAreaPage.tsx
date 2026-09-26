import React, { useState } from 'react';
import { ArrowRight, Search, MapPin, Target, Stethoscope, Filter } from 'lucide-react';
import { servicesData, locationsData, industriesData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServiceAreaPageProps {
  onNavigate: (path: string) => void;
}

export const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCombos = locationsData.filter(loc => {
    const matchesCity = selectedCity === 'All' || loc.city === selectedCity;
    const matchesSearch = loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loc.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Service Area Directory' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Service + Location Directory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Digital Growth Directory
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our specialized healthcare digital marketing services, local SEO strategies, and custom website engineering solutions across Indian medical hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Filter by Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            >
              <option value="All">All Healthcare Services</option>
              {servicesData.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Filter by City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            >
              <option value="All">All Cities</option>
              {locationsData.map(l => (
                <option key={l.slug} value={l.city}>{l.city} ({l.state})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Search Keywords</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city or state..."
                className="w-full pl-8 pr-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCombos.map(loc => (
            <div key={loc.slug} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  <span>{loc.city}, {loc.state}</span>
                </div>
                <h3 className="text-base font-bold font-display text-[#071A3A] mb-2">
                  {selectedService === 'All' ? 'Healthcare Marketing' : selectedService} in {loc.city}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {loc.description}
                </p>
                <div className="space-y-1 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Top Local Specialties:</span>
                  <p>{loc.keySpecialtiesInDemand.slice(0, 3).join(', ')}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/locations/${loc.slug}`)}
                  className="w-full py-2 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Explore {loc.city} Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
