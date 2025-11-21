import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Compass, 
  User, 
  Sun, 
  CheckCircle2,
  Download,
  Smile
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // 图片资源配置
  const assets = {
    logo: "https://cdn.jsdelivr.net/gh/Broderick-23/ENTwebsite@main/logo.jpg",
    screens: {
      // 已更新为新的图片链接
      home: "https://cdn.jsdelivr.net/gh/Broderick-23/ENTwebsite@main/home.jpg",
      ai: "https://cdn.jsdelivr.net/gh/Broderick-23/ENTwebsite@main/AI.png",
      discover: "https://cdn.jsdelivr.net/gh/Broderick-23/ENTwebsite@main/finding.png",
      profile: "https://cdn.jsdelivr.net/gh/Broderick-23/ENTwebsite@main/profile.png"
    }
  };

  // 渲染手机屏幕内容
  const renderPhoneScreen = () => {
    let imgSrc = "";
    let marginTop = "40px"; // 默认首页 (home) 使用 40px 向下偏移 (原 mt-10)

    switch (activeTab) {
      case 'home': 
        imgSrc = assets.screens.home; 
        marginTop = "40px"; // 首页保持 40px 偏移 (不变)
        break;
      case 'ai': 
        imgSrc = assets.screens.ai;
        // 相对首页上移 10px (40px - 10px = 30px)
        marginTop = "30px"; 
        break;
      case 'discover': 
        imgSrc = assets.screens.discover; 
        // 相对首页上移 6px (40px - 6px = 34px)
        marginTop = "34px"; 
        break;
      case 'profile': 
        imgSrc = assets.screens.profile; 
        // 相对首页上移 6px (40px - 6px = 34px)
        marginTop = "34px"; 
        break;
      default: 
        imgSrc = assets.screens.home;
        marginTop = "40px";
    }

    // 移除 mt-10，使用内联样式控制 margin-top
    const imageClasses = "w-full h-full object-cover animate-fade-in block relative";

    return (
      <img 
        src={imgSrc} 
        alt={`${activeTab} screen`} 
        className={imageClasses}
        style={{ marginTop: marginTop }}
      />
    );
  };

  // 顺滑滚动函数
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-stone-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={assets.logo} 
              alt="Xinyue Logo" 
              className="w-10 h-10 rounded-full shadow-sm object-cover"
            />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">Xinyue</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-gray-600 hover:text-orange-500 font-medium transition">功能特色</a>
            <a href="#demo" onClick={(e) => handleScroll(e, 'demo')} className="text-gray-600 hover:text-orange-500 font-medium transition">APP 预览</a>
            <a href="#mission" onClick={(e) => handleScroll(e, 'mission')} className="text-gray-600 hover:text-orange-500 font-medium transition">关于我们</a>
          </div>

          <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition transform hover:scale-105 flex items-center gap-2">
            <Download className="w-4 h-4" />
            下载 APP
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-sky-50 rounded-b-[3rem]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-white rounded-full text-sky-600 text-sm font-semibold mb-6 shadow-sm border border-sky-100 animate-fade-in-up">
            专为中国大学生打造的心理健康伙伴
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-normal animate-fade-in-up delay-100">
            Thoughts Heard, <br />
            <span className="text-sky-500">Mind Nurtured.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            倾听你的心声，抚慰你的心灵。Xinyue 结合先进 AI 技术与专业心理学，
            在那些感到压力的时刻，为你提供一个温暖的出口。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
             <a 
               href="https://preview.kuafuai.net?shard_param=dGgyZUJOWUlxY0JheHN4ZjZhb1l2R3p5U0pQTTF6OUFGQUlSMGdiTVRXRkdqTmJnckF6TUpJc1ljZFAwc3VxVVg4YlM4dE13ZkxOTUthTDhheHF3dkE9PQ==&app_id=248215"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-sky-200 transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center"
             >
              开始免费测评
            </a>
             <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition w-full md:w-auto">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Features Detail */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择 Xinyue？</h2>
            <p className="text-gray-600">三大核心功能，不仅是工具，更是你口袋里的心理咨询师。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">即时心情记录</h3>
              <p className="text-gray-600 leading-relaxed">
                无需复杂的文字，只需轻点几下，即可记录当下的情绪。系统会自动生成属于你的“情绪日记”，帮你觉察内心变化。
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <MessageCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 深度交互</h3>
              <p className="text-gray-600 leading-relaxed">
                先进的 NLP 技术让 AI 读懂你的言外之意。通过多轮递进式对话，精准捕捉影响你情绪的因子，并给出温暖的建议。
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">专业心理支持</h3>
              <p className="text-gray-600 leading-relaxed">
                除了 AI 陪伴，我们还连接了海量专业心理测评与认证心理医生，在需要时为你提供更深度的专业帮助。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive App Preview Section */}
      <section id="demo" className="py-24 px-6 bg-teal-50 rounded-[3rem] mx-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Controls */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              四个维度，<br/>全方位守护你的内心
            </h2>
            <p className="text-gray-600">点击下方按钮，预览 Xinyue APP 的不同功能模块。</p>
            
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${activeTab === 'home' ? 'bg-white border-orange-200 shadow-md scale-105' : 'bg-white/50 border-transparent hover:bg-white/80'}`}
              >
                <div className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">首页 · 即时记录</h4>
                  <p className="text-sm text-gray-500">轻松记录心情事件，获取即时个性化建议。</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('ai')}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${activeTab === 'ai' ? 'bg-white border-teal-200 shadow-md scale-105' : 'bg-white/50 border-transparent hover:bg-white/80'}`}
              >
                <div className={`p-3 rounded-full ${activeTab === 'ai' ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500'}`}>
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI 助手 · 深度陪伴</h4>
                  <p className="text-sm text-gray-500">递进式问答捕捉情绪因子，给予正向干预。</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('discover')}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${activeTab === 'discover' ? 'bg-white border-purple-200 shadow-md scale-105' : 'bg-white/50 border-transparent hover:bg-white/80'}`}
              >
                <div className={`p-3 rounded-full ${activeTab === 'discover' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">发现 · 专业支持</h4>
                  <p className="text-sm text-gray-500">AI 推荐的专业测评题与心理医生咨询服务。</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('profile')}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${activeTab === 'profile' ? 'bg-white border-blue-200 shadow-md scale-105' : 'bg-white/50 border-transparent hover:bg-white/80'}`}
              >
                <div className={`p-3 rounded-full ${activeTab === 'profile' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">个人中心 · 历史曲线</h4>
                  <p className="text-sm text-gray-500">可视化查看自己的情绪变化历史。</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden">
              {/* Notch: z-20 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Screen Content: 屏幕容器背景色设置为 #F5F5F5 */}
              <div 
                className="h-full w-full flex flex-col overflow-hidden relative"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                {renderPhoneScreen()}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Mission Section */}
      <section id="mission" className="py-24 px-6 bg-orange-50/50">
        <div className="max-w-4xl mx-auto text-center">
           <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-700">
             <Smile className="w-8 h-8" />
           </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">如果你感到疲惫，没关系的</h2>
          <p className="text-lg text-gray-600 leading-loose">
            面对繁重的学业、复杂的社交关系，以及对未来的迷茫，中国大学生的心理压力日益增长。
            我们深知这种“孤岛”般的感受。Xinyue 的诞生，就是为了利用先进的 AI 技术，
            对潜在的心理困扰进行<span className="bg-orange-100 px-1 text-orange-700 font-bold rounded mx-1">正向干预</span>。
            我们希望当你每次打开 APP，都能感受到一种被接纳、被理解的温暖。我们不是冷冰冰的机器，而是你心灵花园的守护者。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-3 mb-4">
              <img 
                src={assets.logo} 
                alt="Xinyue Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">Xinyue</span>
            </div>
            <p className="text-gray-400 text-sm">Thoughts Heard, Mind Nurtured.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">隐私政策</a>
            <a href="#" className="hover:text-white transition">用户协议</a>
            <a href="#" className="hover:text-white transition">联系我们</a>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; 2023 Xinyue Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
