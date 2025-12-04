
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, User, RefreshCw, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateCreativeIdea } from '../services/geminiService';
import { BrainstormMessage, BotState } from '../types';

const Brainstorm: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<BrainstormMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm your AI Creative Assistant. Tell me a rough idea for your video project (e.g., 'A moody car commercial' or 'A travel vlog about Japan'), and I'll generate a concept, mood board, and shot list for you."
    }
  ]);
  const [state, setState] = useState<BotState>(BotState.IDLE);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || state === BotState.THINKING) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setState(BotState.THINKING);

    const response = await generateCreativeIdea(userMessage);

    setState(BotState.RESPONDING);
    // Simulate typing effect slightly
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: response }]);
        setState(BotState.IDLE);
    }, 500);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-transparent pb-10 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl h-[calc(100vh-140px)] flex flex-col">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-3">
              <Sparkles className="text-cinema-accent" />
              Creative Studio
            </h1>
            <p className="text-gray-400 text-sm mt-1">Powered by Gemini 2.5 Flash</p>
          </div>
          <button 
            onClick={() => setMessages([messages[0]])}
            className="p-2 text-gray-500 hover:text-white transition-colors"
            title="Clear Chat"
          >
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Chat Window */}
        <div className="flex-1 bg-cinema-800/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col relative backdrop-blur-md">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'model' ? 'bg-gradient-to-br from-cinema-500 to-cinema-accent' : 'bg-gray-700'}`}>
                  {msg.role === 'model' ? <Bot size={20} text-white /> : <User size={20} />}
                </div>
                
                <div className={`max-w-[80%] rounded-2xl p-5 ${msg.role === 'model' ? 'bg-cinema-800/90 border border-white/5' : 'bg-cinema-accent text-white'}`}>
                  {msg.role === 'model' ? (
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                      <button 
                        onClick={() => handleCopy(msg.text, idx)}
                        className="mt-4 flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                        {copiedIndex === idx ? 'Copied' : 'Copy Concept'}
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.text}</p>
                  )}
                </div>
              </motion.div>
            ))}
            
            {state === BotState.THINKING && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cinema-500 to-cinema-accent flex items-center justify-center flex-shrink-0">
                    <Bot size={20} color="white" />
                 </div>
                 <div className="bg-cinema-800 border border-white/5 rounded-2xl p-5 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                 </div>
              </motion.div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-cinema-900/50 border-t border-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your idea (e.g. 'A high-energy gym promo video')..."
                className="w-full bg-cinema-800/80 border border-white/10 rounded-xl py-4 pl-5 pr-14 text-white focus:outline-none focus:border-cinema-accent transition-colors"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || state === BotState.THINKING}
                className="absolute right-2 top-2 p-2 bg-cinema-accent rounded-lg text-white hover:bg-cinema-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brainstorm;
