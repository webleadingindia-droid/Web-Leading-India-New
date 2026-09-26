import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, User, Search, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare Marketing Blog' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Clinical Marketing Insights
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Marketing & Practice Growth Intelligence
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Actionable guides, search optimization insights, and patient acquisition strategies written specifically for doctors, hospital directors, and clinic managers.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical marketing articles..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                  <span className="font-semibold text-[#0B5ED7]">{post.category}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="text-base font-bold font-display text-[#071A3A] mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-3 border-t border-slate-100">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="w-full py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#0B5ED7] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
