import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send, User, Bot, Loader2, Phone, RotateCcw } from 'lucide-react';
import { businessInfo } from '../data/websiteData';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface GeminiHealthcareAdvisorProps {
  onNavigate: (path: string) => void;
}

export const GeminiHealthcareAdvisor: React.FC<GeminiHealthcareAdvisorProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: `Hello! I am your **Healthcare Digital Strategy Advisor** from Web Leading India. 

How can I help you grow your hospital, clinic, or doctor practice today? You can ask about:
- **Local SEO & Google 3-Pack rankings** for your area
- **Google Ads strategy** for high-value surgical procedures
- **Clinic Website Development** starting at ₹35,000
- **Doctor personal branding & video marketing**`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    'How do I rank my clinic in Google Maps?',
    'What is the budget for Google Ads for IVF / Dental?',
    'What is included in the ₹35,000 Clinic Website plan?',
    'How do senior surgeons build personal brands?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputValue.trim();
    if (!messageText || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: messageText }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          userMessage: messageText
        })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'model', text: data.reply }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'model',
            text: 'I apologize, but I could not generate an immediate response. Please feel free to reach our healthcare strategy team directly at +91 8376817258.'
          }
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'model',
          text: 'Our strategy team can help you directly. Please contact Web Leading India at +91 8376817258 or info@webleadingindia.com.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'model',
        text: 'Chat history reset. How can I assist your medical practice growth strategy today?'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-[#0B5ED7] hover:bg-[#082B63] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] focus:ring-offset-2"
            aria-label="Open AI Healthcare Growth Advisor"
          >
            <Sparkles className="w-5 h-5 text-[#14B8C4]" />
            <span className="text-xs font-bold tracking-wide">AI Healthcare Advisor</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#071A3A] text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B5ED7] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-[#14B8C4]" />
              </div>
              <div>
                <span className="font-bold text-sm block">Healthcare Growth Advisor</span>
                <span className="text-[11px] text-slate-400 block -mt-0.5">Powered by Web Leading India AI</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-slate-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-md bg-[#0B5ED7] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#0B5ED7] text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-500 text-xs pl-8">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0B5ED7]" />
                <span>Formulating healthcare growth strategy...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0B5ED7] rounded-full border border-slate-200 transition-colors shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about SEO, Google Ads, or clinic growth..."
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7] focus:bg-white"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-[#0B5ED7] text-white rounded-xl hover:bg-[#082B63] disabled:opacity-50 transition-colors cursor-pointer shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Footer Assistance */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span>Speak with our strategist:</span>
            <a
              href={`tel:${businessInfo.phone}`}
              className="font-semibold text-[#0B5ED7] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {businessInfo.phone}
            </a>
          </div>

        </div>
      )}
    </>
  );
};
