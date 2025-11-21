import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Compass, 
  User, 
  Sun, 
  CheckCircle2,
  Download,
  Smile,
  Globe
} from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { language, setLanguage, t } = useLanguage();

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
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-gray-600 hover:text-orange-500 font-medium transition">{t('nav.features')}</a>
            <a href="#demo" onClick={(e) => handleScroll(e, 'demo')} className="text-gray-600 hover:text-orange-500 font-medium transition">{t('nav.demo')}</a>
            <a href="#mission" onClick={(e) => handleScroll(e, 'mission')} className="text-gray-600 hover:text-orange-500 font-medium transition">{t('nav.mission')}</a>
          </div>

          <div className="flex items-center gap-4">
            {/* 语言切换按钮 */}
            <button 
              onClick={() => setLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition text-gray-600 hover:text-orange-500"
              title={language === 'zh-CN' ? 'Switch to English' : '切换到中文'}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language === 'zh-CN' ? 'EN' : '中'}</span>
            </button>

            <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition transform hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('nav.download')}
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-sky-50 rounded-b-[3rem]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-white rounded-full text-sky-600 text-sm font-semibold mb-6 shadow-sm border border-sky-100 animate-fade-in-up">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-normal animate-fade-in-up delay-100">
            {t('hero.title1')} <br />
            <span className="text-sky-500">{t('hero.title2')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t('hero.description')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
             <a 
               href="https://preview.kuafuai.net?shard_param=dGgyZUJOWUlxY0JheHN4ZjZhb1l2R3p5U0pQTTF6OUFGQUlSMGdiTVRXRkdqTmJnckF6TUpJc1ljZFAwc3VxVVg4YlM4dE13ZkxOTUthTDhheHF3dkE9PQ==&app_id=248215"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-sky-200 transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center"
             >
              {t('hero.startTest')}
            </a>
             <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition w-full md:w-auto">
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Features Detail */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-gray-600">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.mood.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.mood.description')}
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <MessageCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.ai.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.ai.description')}
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.support.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.support.description')}
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
              {t('demo.title1')}<br/>{t('demo.title2')}
            </h2>
            <p className="text-gray-600">{t('demo.subtitle')}</p>
            
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${activeTab === 'home' ? 'bg-white border-orange-200 shadow-md scale-105' : 'bg-white/50 border-transparent hover:bg-white/80'}`}
              >
                <div className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('demo.tabs.home.title')}</h4>
                  <p className="text-sm text-gray-500">{t('demo.tabs.home.description')}</p>
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
                  <h4 className="font-bold text-lg">{t('demo.tabs.ai.title')}</h4>
                  <p className="text-sm text-gray-500">{t('demo.tabs.ai.description')}</p>
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
                  <h4 className="font-bold text-lg">{t('demo.tabs.discover.title')}</h4>
                  <p className="text-sm text-gray-500">{t('demo.tabs.discover.description')}</p>
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
                  <h4 className="font-bold text-lg">{t('demo.tabs.profile.title')}</h4>
                  <p className="text-sm text-gray-500">{t('demo.tabs.profile.description')}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('mission.title')}</h2>
          <p className="text-lg text-gray-600 leading-loose">
            {t('mission.description')}
            <span className="bg-orange-100 px-1 text-orange-700 font-bold rounded mx-1">{t('mission.highlight')}</span>
            {t('mission.description2')}
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
            <p className="text-gray-400 text-sm">{t('footer.tagline')}</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.contact')}</a>
          </div>

          <div className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
