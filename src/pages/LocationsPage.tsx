import React, { useState } from 'react';
import { ArrowRight, MapPin, Search, Building2, Stethoscope } from 'lucide-react';
import { locationsData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationsPageProps {
  onNavigate: (path: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'North India', 'South India', 'West India', 'East India', 'Central India'];

  const filteredLocations = locationsData.filter(loc => {
    const matchesRegion = selectedRegion === 'All' || loc.region === selectedRegion;
    const matchesSearch = loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loc.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Service Locations' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Pan-India Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Marketing In Major Indian Medical Metros
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We deliver local SEO, Google Ads, and custom healthcare websites across 24+ primary medical and surgical hubs in India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full sm:w-auto">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedRegion === r
                    ? 'bg-white text-[#071A3A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city or state..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map(loc => (
            <div key={loc.slug} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-[#0B5ED7]">{loc.state}</span>
                  <span>{loc.region}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#071A3A] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#14B8C4]" />
                  <span>{loc.city}</span>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{loc.description}</p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs mb-3">
                  <span className="font-semibold text-slate-700 text-[11px] block mb-1">Local Healthcare Demand:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {loc.keySpecialtiesInDemand.map((spec, i) => (
                      <span key={i} className="text-[10px] bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/locations/${loc.slug}`)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Healthcare Marketing in {loc.city}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
