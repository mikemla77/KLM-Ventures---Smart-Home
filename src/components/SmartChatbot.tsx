import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, MessageCircle, Sparkles, User, Bot, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestSms?: boolean;
}

export const SmartChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Hello! I am the KLM Ventures assistant. Whether you have questions about smart home automation, architectural lighting, or want to dispatch a direct SMS text message to Mike at ${BUSINESS_CONFIG.displayPhone}, I'm here to help.`,
      timestamp: new Date(),
      suggestSms: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Helper to open device's native SMS app prefilled with message
  const triggerSms = (textPrompt?: string) => {
    const defaultBody = textPrompt || (inputValue ? inputValue : "Hi Mike, I saw your KLM Ventures website and would like to discuss a smart home / low-voltage project.");
    // Clean target phone (e.g., +13239901101)
    const rawNumber = BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, '');
    
    // iOS and Android compatible sms URI
    // iOS prefers sms:+13239901101&body=... while Android / desktop prefers sms:+13239901101?body=...
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    const smsUrl = `sms:${rawNumber}${separator}body=${encodeURIComponent(defaultBody)}`;

    window.location.href = smsUrl;
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanInput = inputValue.trim();
    if (!cleanInput || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: cleanInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: cleanInput,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "Thanks for your message. You can text Mike directly using the button below.",
        timestamp: new Date(),
        suggestSms: true,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: `I've noted your question regarding "${cleanInput}". You can send this directly as an SMS text message to Mike's phone at ${BUSINESS_CONFIG.displayPhone} with one click below:`,
          timestamp: new Date(),
          suggestSms: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick preset inquiry tags
  const quickPrompts = [
    "Text Mike about Lutron Lighting",
    "Request Smart Home Assessment",
    "Pre-Wiring & Low-Voltage Quote",
    "CCTV Security Integration",
  ];

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#111315]/95 hover:bg-[#16181A] border border-[#B7E61C]/50 hover:border-[#B7E61C] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(183,230,28,0.25)] text-white group transition-all duration-300 transform hover:scale-105"
          aria-label="Open KLM Ventures Chat & SMS Assistant"
        >
          <div className="relative">
            <span className="w-8 h-8 rounded-full bg-[#B7E61C] text-[#111315] flex items-center justify-center font-bold">
              <MessageCircle className="w-4 h-4" />
            </span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#B7E61C] border-2 border-[#111315] rounded-full animate-ping" />
            )}
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-xs font-semibold tracking-wide text-white group-hover:text-[#B7E61C] transition-colors flex items-center gap-1.5">
              Ask AI or Text Mike
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] animate-pulse" />
            </span>
            <span className="text-[10px] text-[#70756F] font-mono">
              Direct SMS: {BUSINESS_CONFIG.displayPhone}
            </span>
          </div>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[calc(100vh-2rem)] bg-[#111315] border border-[#2C3236] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(183,230,28,0.15)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#16181A] border-b border-[#2C3236] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-[#B7E61C]/15 border border-[#B7E61C]/40 flex items-center justify-center text-[#B7E61C]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B7E61C] border-2 border-[#16181A]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    KLM Smart Assistant
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-[#B7E61C]/15 text-[#B7E61C] border border-[#B7E61C]/30">
                    Live
                  </span>
                </div>
                <p className="text-[10px] text-[#70756F] font-mono">
                  Direct SMS connected to {BUSINESS_CONFIG.displayPhone}
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-[#70756F] hover:text-white hover:bg-[#202428] transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Direct SMS Dispatch Banner */}
          <div className="bg-gradient-to-r from-[#B7E61C]/10 via-[#B7E61C]/5 to-transparent border-b border-[#B7E61C]/20 px-4 py-2.5 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B7E61C] shrink-0" />
              <span className="text-[#F5F7F2]/90 text-[11px] leading-tight">
                Want immediate dispatch? Text Mike directly:
              </span>
            </div>
            <button
              onClick={() => triggerSms()}
              className="px-2.5 py-1 rounded bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors flex items-center gap-1 shadow-sm"
            >
              <span>Text Mike</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0E1012]">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-6 h-6 rounded-md bg-[#1B1F22] border border-[#2C3236] flex items-center justify-center text-[#B7E61C] shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    isAssistant
                      ? 'bg-[#16181A] border border-[#2C3236] text-[#F5F7F2]'
                      : 'bg-[#B7E61C] text-[#111315] font-medium shadow-sm'
                  }`}>
                    <p className="whitespace-pre-line">{msg.content}</p>

                    {/* If assistant suggests sending this via SMS */}
                    {isAssistant && msg.suggestSms && (
                      <div className="mt-2.5 pt-2 border-t border-[#2C3236]/80 flex flex-col gap-1.5">
                        <button
                          onClick={() => triggerSms(msg.content)}
                          className="w-full flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#202529] hover:bg-[#282E33] border border-[#B7E61C]/40 text-[#B7E61C] text-[11px] font-mono transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Tap to send as SMS to Mike ({BUSINESS_CONFIG.displayPhone})</span>
                        </button>
                      </div>
                    )}

                    <span className={`block text-[9px] mt-1 font-mono ${
                      isAssistant ? 'text-[#70756F]' : 'text-[#111315]/70 text-right'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {!isAssistant && (
                    <div className="w-6 h-6 rounded-md bg-[#B7E61C] text-[#111315] flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-md bg-[#1B1F22] border border-[#2C3236] flex items-center justify-center text-[#B7E61C] shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="rounded-xl px-3.5 py-2.5 bg-[#16181A] border border-[#2C3236] text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] text-[#70756F] font-mono ml-1">Consulting engineering knowledge...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="p-2 bg-[#121416] border-t border-[#2C3236] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => {
                  setInputValue(prompt);
                  triggerSms(prompt);
                }}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-[#181B1E] hover:bg-[#202428] border border-[#2C3236] hover:border-[#B7E61C]/50 text-[10px] font-mono text-[#F5F7F2]/80 hover:text-[#B7E61C] transition-colors shrink-0 flex items-center gap-1"
              >
                <span>💬 {prompt}</span>
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#16181A] border-t border-[#2C3236] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question or type text for Mike..."
              className="flex-1 bg-[#0E1012] border border-[#2C3236] focus:border-[#B7E61C] rounded-lg px-3 py-2 text-xs text-white placeholder-[#70756F] focus:outline-none transition-colors"
            />

            {/* Direct SMS from phone button */}
            <button
              type="button"
              onClick={() => triggerSms(inputValue)}
              title="Open phone SMS app to text Mike directly"
              className="p-2 rounded-lg bg-[#202529] hover:bg-[#282E33] text-[#B7E61C] border border-[#B7E61C]/40 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </button>

            {/* Send button */}
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2 rounded-lg bg-[#B7E61C] hover:bg-[#C8F52A] disabled:opacity-40 disabled:hover:bg-[#B7E61C] text-[#111315] font-bold transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
