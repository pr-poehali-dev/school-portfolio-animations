import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [visitors, setVisitors] = useState(123456);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const [marqueeText] = useState('✨ ДОБРО ПОЖАЛОВАТЬ НА МОЙ СУПЕР САЙТ!!! ✨ ЛУЧШИЙ САЙТ В МИРЕ!!! ✨ ');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  const playSound = (type: string) => {
    const audioContext = getAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch(type) {
      case 'boing':
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
      case 'pew':
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
      case 'honk':
        oscillator.frequency.value = 200;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      case 'bleep':
        oscillator.frequency.value = 1500;
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
        break;
      case 'bounce':
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.05);
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
      case 'laser':
        oscillator.frequency.setValueAtTime(2000, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      case 'pop':
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.08);
        gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.08);
        break;
      case 'coin':
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1500, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
      case 'doot':
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
    }
  };

  const playBackgroundMusic = () => {
    const audioContext = getAudioContext();
    const now = audioContext.currentTime;
    const beatDuration = 0.5;
    
    const playBass = (time: number, freq: number) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + beatDuration);
      osc.start(time);
      osc.stop(time + beatDuration);
    };
    
    const playKick = (time: number) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.frequency.setValueAtTime(150, time);
      osc.frequency.exponentialRampToValueAtTime(40, time + 0.1);
      gain.gain.setValueAtTime(0.5, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
      osc.start(time);
      osc.stop(time + 0.1);
    };
    
    const playHihat = (time: number) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.type = 'square';
      osc.frequency.value = 8000;
      gain.gain.setValueAtTime(0.05, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
      osc.start(time);
      osc.stop(time + 0.05);
    };
    
    const bassLine = [65, 65, 73, 73, 82, 82, 73, 65];
    
    for (let i = 0; i < 8; i++) {
      const t = now + i * beatDuration;
      playBass(t, bassLine[i]);
      playKick(t);
      if (i % 2 === 1) playHihat(t);
    }
    
    setTimeout(() => {
      if (isPlaying) playBackgroundMusic();
    }, 4000);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      playBackgroundMusic();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 animate-gradient-slow">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
        
        * {
          font-family: 'Comic Neue', 'Comic Sans MS', cursive !important;
        }
        
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-slow {
          background-size: 400% 400%;
          animation: gradient-slow 15s ease infinite;
        }
        
        .rainbow-text {
          animation: rainbow 3s linear infinite;
        }
        
        .blink {
          animation: blink 1s infinite;
        }
        
        .spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .wiggle {
          animation: wiggle 0.5s ease-in-out infinite;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .retro-border {
          border: 5px ridge gold !important;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), inset 0 0 20px rgba(255, 215, 0, 0.3);
        }
        
        .retro-card {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
          background-size: 400% 400%;
          animation: gradient-slow 3s ease infinite;
          border: 3px solid #000;
          box-shadow: 5px 5px 0px #000;
        }
        
        .text-3d {
          text-shadow: 
            2px 2px 0px #ff00ff,
            4px 4px 0px #00ffff,
            6px 6px 0px #ffff00,
            8px 8px 10px rgba(0,0,0,0.5);
        }
        
        .glow {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de;
        }

        marquee {
          background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
          color: white;
          font-weight: bold;
          padding: 10px;
          border: 3px dashed yellow;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 border-b-4 border-black">
        <marquee behavior="scroll" direction="left" className="text-xl py-2">
          {marqueeText.repeat(5)}
        </marquee>
      </div>

      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        <Button
          onClick={toggleMusic}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold border-4 border-black shadow-lg hover:scale-110 wiggle"
          onMouseEnter={() => playSound('boing')}
        >
          {isPlaying ? '🔊 СТОП' : '🎵 МУЗЫКА'}
        </Button>
        <div className="retro-border bg-yellow-300 text-black p-3 text-center font-bold">
          <div className="blink text-red-600">👁️ ONLINE 👁️</div>
          <div className="text-2xl">{visitors}</div>
        </div>
      </div>

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black mb-6 text-3d rainbow-text blink">
              ✨🎮 АЛЕКСАНДР 🎮✨
            </h1>
            <div className="inline-block spin-slow text-8xl mb-6">
              🤓
            </div>
            <h2 className="text-4xl font-bold glow mb-4">
              ЛУЧШИЙ ПРОГРАММИСТ В МИРЕ!!!
            </h2>
            <p className="text-2xl font-bold text-white bg-gradient-to-r from-red-500 to-purple-500 p-4 border-4 border-yellow-400 inline-block wiggle">
              ⚡ СОЗДАЮ САЙТЫ И ВЗРЫВАЮ ИНТЕРНЕТ ⚡
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              size="lg"
              className="retro-card text-black text-xl font-black border-4 border-black hover:scale-125 transform transition-transform"
              onClick={() => playSound('laser')}
              onMouseEnter={() => playSound('bleep')}
            >
              ✉️ НАПИСАТЬ МНЕ
            </Button>
            <Button 
              size="lg"
              className="retro-card text-black text-xl font-black border-4 border-black hover:scale-125 transform transition-transform"
              onClick={() => playSound('coin')}
              onMouseEnter={() => playSound('pop')}
            >
              🎮 GITHUB
            </Button>
            <Button 
              size="lg"
              className="retro-card text-black text-xl font-black border-4 border-black hover:scale-125 transform transition-transform"
              onClick={() => playSound('honk')}
              onMouseEnter={() => playSound('doot')}
            >
              🔥 ВК
            </Button>
          </div>

          <div className="retro-border bg-gradient-to-r from-yellow-200 to-pink-200 p-6 mb-8">
            <h2 className="text-4xl font-black text-center mb-6 text-3d">
              🏆 МОИ ПРОЕКТЫ 🏆
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'САЙТ-ВИЗИТКА', emoji: '🌐', desc: 'САМЫЙ КРУТОЙ САЙТ!!!' },
                { title: 'КАЛЬКУЛЯТОР', emoji: '🧮', desc: 'СЧИТАЕТ ОЦЕНКИ!!!' },
                { title: 'ПОРТФОЛИО', emoji: '🎨', desc: 'КРАСОТА!!! ВАУ!!!' }
              ].map((project, i) => (
                <div
                  key={i}
                  className="retro-card p-6 cursor-pointer hover:scale-110 transform transition-transform float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                  onClick={() => playSound('pew')}
                  onMouseEnter={() => playSound('bounce')}
                >
                  <div className="text-6xl mb-3 spin-slow">{project.emoji}</div>
                  <h3 className="text-2xl font-black mb-2 glow">{project.title}</h3>
                  <p className="text-lg font-bold text-red-600 blink">{project.desc}</p>
                  <Badge className="mt-3 bg-yellow-400 text-black border-2 border-black text-lg wiggle">
                    КЛИК!!!
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="retro-border bg-gradient-to-r from-green-200 to-blue-200 p-6 mb-8">
            <h2 className="text-4xl font-black text-center mb-6 text-3d blink">
              💪 МОИ НАВЫКИ 💪
            </h2>
            <div className="space-y-4">
              {[
                { name: 'HTML/CSS', level: 90, emoji: '💻' },
                { name: 'JAVASCRIPT', level: 75, emoji: '⚡' },
                { name: 'REACT', level: 70, emoji: '⚛️' }
              ].map((skill, i) => (
                <div
                  key={i}
                  className="bg-white border-4 border-black p-4 hover:scale-105 transform transition-transform cursor-pointer"
                  onClick={() => playSound('coin')}
                  onMouseEnter={() => playSound('bleep')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl wiggle">{skill.emoji}</span>
                      <span className="text-2xl font-black">{skill.name}</span>
                    </div>
                    <span className="text-3xl font-black text-red-600 blink">{skill.level}%!!!</span>
                  </div>
                  <div className="h-8 bg-gray-300 border-4 border-black">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rainbow-text"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="retro-border bg-gradient-to-r from-purple-200 to-pink-200 p-6 mb-8">
            <h2 className="text-4xl font-black text-center mb-6 text-3d">
              🏅 ДОСТИЖЕНИЯ 🏅
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'ПОБЕДИТЕЛЬ', emoji: '🏆', year: '2024' },
                { title: 'СЕРТИФИКАТ', emoji: '📜', year: '2023' },
                { title: 'GITHUB STAR', emoji: '⭐', year: '2024' }
              ].map((achievement, i) => (
                <div
                  key={i}
                  className="retro-card p-6 text-center cursor-pointer hover:rotate-12 transform transition-transform"
                  onClick={() => playSound('laser')}
                  onMouseEnter={() => playSound('pop')}
                >
                  <div className="text-7xl mb-3 float" style={{ animationDelay: `${i * 0.5}s` }}>
                    {achievement.emoji}
                  </div>
                  <Badge className="bg-red-500 text-white text-xl font-black border-2 border-black mb-3 blink">
                    {achievement.year}
                  </Badge>
                  <h3 className="text-2xl font-black glow">{achievement.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="retro-border bg-yellow-300 p-8 text-center">
            <h2 className="text-5xl font-black mb-4 text-3d blink">
              📧 СВЯЖИСЬ СО МНОЙ!!! 📧
            </h2>
            <div className="flex gap-4 justify-center mb-6 flex-wrap">
              {['✉️', '🎮', '💬', '📱'].map((emoji, i) => (
                <button
                  key={i}
                  className="text-6xl hover:scale-150 transform transition-transform wiggle cursor-pointer"
                  onClick={() => playSound('honk')}
                  onMouseEnter={() => playSound('doot')}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <p className="text-2xl font-black glow rainbow-text">
              © 2005 АЛЕКСАНДР - ЛУЧШИЙ САЙТ В МИРЕ!!!
            </p>
            <div className="mt-4 text-xl font-bold text-red-600 blink">
              ⚠️ ВНИМАНИЕ!!! ЭТОТ САЙТ ВЗОРВЕТ ВАШ МОЗГ!!! ⚠️
            </div>
          </div>

          <div className="fixed bottom-4 left-4 flex flex-col gap-2">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Ctext x='44' y='20' font-size='20' text-anchor='middle'%3E🔥FIRE🔥%3E/text%3E%3C/svg%3E" 
              alt="fire"
              className="wiggle cursor-pointer"
              onClick={() => playSound('laser')}
            />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Ctext x='44' y='20' font-size='20' text-anchor='middle'%3E⚡COOL⚡%3C/text%3E%3C/svg%3E" 
              alt="cool"
              className="float cursor-pointer"
              onClick={() => playSound('coin')}
            />
          </div>

          <div className="fixed bottom-4 right-4">
            <div className="retro-border bg-red-500 text-white p-3 text-center font-black blink cursor-pointer"
              onClick={() => playSound('honk')}
            >
              <div className="text-xl">👆 КЛИКНИ МЕНЯ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;