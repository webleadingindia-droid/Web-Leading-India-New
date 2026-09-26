import React from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogPostDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({ slug, onNavigate, onOpenAudit }) => {
  const post: BlogPost = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Blog', path: '/blog' },
          { label: post.title }
        ]} 
        onNavigate={onNavigate} 
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Post Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#071A3A] tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-slate-500 pt-2">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-6">
          <div className="p-4 bg-blue-50/60 border-l-4 border-[#0B5ED7] rounded-r-xl text-xs text-slate-800 italic">
            {post.excerpt}
          </div>

          <div className="space-y-4 whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Post Footer & Next Steps */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#071A3A]">
              Want this strategy implemented for your medical clinic?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Get in touch with our healthcare marketing strategists today.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/get-quote')}
            className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Get Practice Strategy Proposal
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>
        </div>

      </article>
    </div>
  );
};
