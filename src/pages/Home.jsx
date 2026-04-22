import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, BarChart3, PieChart, Activity, User } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Invest Crypto Smarter<br/>With AI Assistant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore market opportunities and grow your portfolio with AI insights.
        </motion.p>
        
        <motion.div 
          className="subscribe-form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <input type="email" placeholder="Enter your email here" />
          <button className="btn-gradient">Subscribe for free ✦</button>
        </motion.div>
      </section>

      <div className="dashboard-cluster">
        {/* Card 1: Chart */}
        <motion.div 
          className="glass-card card-1"
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>$1,948.121</span>
            <Activity size={18} color="var(--muted)" />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>+649.0</h3>
            <span style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '4px' }}>▲ 20%</span>
          </div>
          <svg style={{ width: '100%', height: '60px', marginTop: '20px', overflow: 'visible' }}>
            <path d="M0,50 Q40,40 80,50 T160,20 T240,30 L240,60 L0,60 Z" fill="url(#grad)" />
            <path d="M0,50 Q40,40 80,50 T160,20 T240,30" fill="none" stroke="var(--primary)" strokeWidth="3" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Card 2: Main Balance */}
        <motion.div 
          className="glass-card card-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <p style={{ color: 'var(--muted)', margin: '0 0 8px 0', fontSize: '0.9rem' }}>Balance (USD)</p>
          <h2 style={{ margin: '0 0 24px 0', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-1px' }}>$27,942.65</h2>
          <div style={{ width: '100%', height: '140px', background: 'radial-gradient(circle at center, rgba(192,66,255,0.4) 0%, transparent 70%)', display: 'grid', placeItems: 'center', borderRadius: '16px' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #a855f7, #ec4899)', borderRadius: '50%', boxShadow: '0 10px 30px rgba(168,85,247,0.5)', display: 'grid', placeItems: 'center' }}>
               <div style={{ width: '40px', height: '40px', border: '4px solid white', borderRadius: '8px', transform: 'rotate(45deg)' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Phase AI */}
        <motion.div 
          className="glass-card card-3"
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div style={{ width: '100%', height: '120px', borderRadius: '12px', background: 'linear-gradient(135deg, #f43f5e, #8b5cf6)', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={64} color="white" opacity={0.5} />
          </div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>Phase AI</h4>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Curr Portfolio</span>
            <span style={{ color: 'white' }}>$129.55</span>
          </p>
        </motion.div>

        {/* Card 4: AI Insights text */}
        <motion.div 
          className="glass-card card-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center' }}>
              <img src="https://ui-avatars.com/api/?name=AI&background=random" alt="AI" style={{ width: '100%', borderRadius: '50%' }} />
            </div>
            <span style={{ fontWeight: 600 }}>Quantral Insights</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
             "Bitcoin will be number 1 asset in the next 10 years, beating gold & silver."
          </p>
        </motion.div>

        {/* Card 5: Shield / Security */}
        <motion.div 
          className="glass-card card-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle at center, rgba(239,68,68,0.4) 0%, transparent 70%)', display: 'grid', placeItems: 'center' }}>
               <Shield color="var(--danger)" />
             </div>
             <div style={{ textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem' }}>$10,840</h3>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.8rem' }}>Secured</p>
             </div>
          </div>
        </motion.div>

        {/* Card 6: Small Transaction List */}
        <motion.div 
          className="glass-card card-6"
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Transactions</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>See all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                 <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                 <span style={{ fontSize: '0.85rem' }}>Alexander</span>
               </div>
               <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>$1,200</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                 <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                 <span style={{ fontSize: '0.85rem' }}>Michael</span>
               </div>
               <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>$700</span>
            </div>
          </div>
          <button style={{ width: '100%', marginTop: '16px', background: 'rgba(192,66,255,0.2)', border: 'none', padding: '8px', borderRadius: '8px', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>
             Send Fund +
          </button>
        </motion.div>
      </div>
    </div>
  );
}
