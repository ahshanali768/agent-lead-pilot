import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function LandingPage() {
  useEffect(() => {
    document.title = 'SecurePlans CRM - Modern Lead Management';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold">SecurePlans</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#cta" className="hover:underline">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-32 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          The Ultimate Lead Management CRM
        </motion.h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Empower your agents, verifiers, and admins with a fast, secure, and real-time CRM built for performance.
        </p>
        <Button className="text-lg px-6 py-3" onClick={() => window.location.href = 'https://crm.secureplans.online/login.php'}>
          Start Free Trial
        </Button>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-5xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">Why Teams Choose SecurePlans CRM</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">🔐 Role-Based Access</h4>
            <p>Agents, Verifiers, Admins, and Super Admins with tailored dashboards and permissions.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">💬 Real-Time Internal Chat</h4>
            <p>Instant messaging between team members via WebSocket-based chat system.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">🌗 Dark Mode & Mobile Ready</h4>
            <p>Modern UI that adapts to your preferences and devices.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">📅 Calendar Integration</h4>
            <p>Schedule, view, and manage lead appointments with FullCalendar.js.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">📊 Analytics Dashboard</h4>
            <p>Filter leads by status, date, and DID with live charts and quick stats.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">📞 DID & Campaign Manager</h4>
            <p>Admins can assign and control DIDs for better routing and tracking.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-indigo-950">
        <h3 className="text-3xl text-center font-semibold mb-12">What Teams Are Saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <blockquote className="bg-white/10 p-6 rounded-xl shadow">
            <p className="text-white/90 mb-2">"Our lead verification process is 10x faster with SecurePlans!"</p>
            <footer className="text-white/60 text-sm">— Ahmed R., Admin</footer>
          </blockquote>
          <blockquote className="bg-white/10 p-6 rounded-xl shadow">
            <p className="text-white/90 mb-2">"The chat system and calendar keep our agents organized and responsive."</p>
            <footer className="text-white/60 text-sm">— Nisha K., Verifier</footer>
          </blockquote>
          <blockquote className="bg-white/10 p-6 rounded-xl shadow">
            <p className="text-white/90 mb-2">"We love the dark mode and fast dashboard filters. This CRM just works."</p>
            <footer className="text-white/60 text-sm">— Ravi D., Agent</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="text-center py-24 px-4 bg-purple-900">
        <h3 className="text-4xl font-bold mb-4">Start Managing Leads Like a Pro</h3>
        <p className="text-white/80 mb-8">Create your account now. No credit card needed.</p>
        <Button className="text-lg px-8 py-3" onClick={() => window.location.href = 'https://crm.secureplans.online/login.php'}>
          Launch Your CRM
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} SecurePlans CRM. Built for performance.
      </footer>
    </div>
  );
}