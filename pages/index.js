import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Users, Sparkles, Clock } from 'lucide-react';

export default function GlowLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const targetCount = 1243;

  useEffect(() => {
    setIsVisible(true);
    
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setAnimatedCount(targetCount);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace('https://discord.gg/cliplabs');
  };

  const glowStyles = `
    @keyframes glow {
      0% { box-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e0aeff, 0 0 50px #e0aeff; }
      100% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e0aeff, 0 0 40px #e0aeff; }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes sparkle {
      0% { transform: scale(1) rotate(0deg); opacity: 1; }
      50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
      100% { transform: scale(1) rotate(360deg); opacity: 1; }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    .glow-button {
      animation: glow 2s ease-in-out infinite alternate, float 3s ease-in-out infinite;
    }
    .launching-soon {
      animation: pulse 2s ease-in-out infinite;
    }
    .sparkle-icon {
      animation: sparkle 2s ease-in-out infinite;
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B4BCC] via-[#563AA5] to-[#4B2A99] relative overflow-hidden">
      <style>{glowStyles}</style>
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(107,75,204,0.3),rgba(37,38,44,0.2))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-6">
          <div className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ClipLabs
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
              <Users className="w-4 h-4 text-purple-200 mr-2" />
              <span className="text-purple-100 font-medium">{animatedCount.toLocaleString()} Clippers</span>
            </div>
          </div>
        </nav>

        <div className="text-center pt-8 pb-16 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10 launching-soon">
              <Sparkles className="w-4 h-4 text-purple-200 sparkle-icon" />
              <span className="text-purple-200 font-medium">Launching Soon</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200 leading-tight">
              Get Paid to Create<br />Viral Clips
            </h1>
            
            <p className="text-xl text-purple-200">
              Join the premier marketplace connecting video editors with top streamers and brands.
            </p>

            <div className="pt-4 pb-8">
              <button
                onClick={scrollToForm}
                className="glow-button relative inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-medium 
                transition-all transform hover:scale-105 hover:translate-y-[-2px] text-lg
                border border-white/50 backdrop-blur-sm shadow-xl"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-purple-200 mt-4 text-sm">Limited spots available for early access</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {[
            { icon: DollarSign, label: 'Average Per Clip', value: '$200-2000' },
            { icon: Users, label: 'Clippers Joined', value: animatedCount.toLocaleString() },
            { icon: Clock, label: 'Time to First Clip', value: '24hr' }
          ].map(({ icon: Icon, label, value }, index) => (
            <div key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center
              border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer"
            >
              <Icon className="w-8 h-8 text-purple-200 mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-purple-200">{label}</div>
            </div>
          ))}
        </div>

        <div className="py-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Why Join ClipLabs?
            </h2>
            <div className="space-y-6">
              {[
                'Direct payments from top creators',
                'Set your own rates ($200-2000 per clip)',
                'Choose your own schedule',
                'Work with trending creators'
              ].map((feature, index) => (
                <div key={index} 
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10
                  hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                  </div>
                  <span className="text-lg text-purple-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} 
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10
            hover:bg-white/10 transition-all"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2">
                Join the Waitlist
              </h3>
              <p className="text-purple-200">Be first in line when we launch.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200 
                focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all hover:bg-white/10"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200 
                focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all hover:bg-white/10"
                required
              />
              <button
                type="submit"
                className="glow-button w-full bg-white text-purple-600 font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 
                transition-all transform hover:scale-105 border border-white/50"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-sm text-purple-200 text-center">
                Join the waitlist for free—no credit card required!
              </p>
            </form>
          </div>
        </div>

        <div className="py-12 text-center border-t border-white/10">
          <p className="text-purple-200 mb-6 font-medium">
            ClipLabs Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Twitch', 'Kick', 'Whop'].map((platform) => (
              <div key={platform} 
                className="text-2xl text-white font-semibold hover:text-purple-200 transition-all cursor-pointer transform hover:scale-105"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
