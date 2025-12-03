"use client"

import { Send, Github, ExternalLink, CheckCircle } from "lucide-react"

export default function AnimeMDView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold glow-text text-primary mb-2">Anime MD</h1>
        <p className="text-foreground/70 text-sm md:text-base">
          Link your account via WhatsApp and manage anime content seamlessly
        </p>
      </div>

      {/* Main Feature */}
      <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Welcome to Anime MD</h2>
          <p className="text-foreground/80 leading-relaxed">
            Experience the ultimate bot for anime communities. Connect your account via Telegram, manage your anime
            content, share latest updates, and engage with your community seamlessly. Anime MD is your personal multi device
            companion powered by James Tech Incorporative.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
            <a
              href="https://t.me/queenanime_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-start gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 group active:scale-95"
            >
              <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Link Account Via Telegram
            </a>
            <a
              href="https://github.com/jamestechpy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-start gap-2 px-6 py-3 bg-secondary/30 text-secondary border border-secondary/50 font-semibold rounded-lg hover:bg-secondary/40 transition-all active:scale-95"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Account Linking"
          description="Securely link your WhatsApp account to access all Anime MD features"
          icon="🔐"
        />
        <FeatureCard
          title="Content Management"
          description="Easy management of anime features, access, and community posts"
          icon="📺"
        />
        <FeatureCard
          title="Real-time Updates"
          description="Instant notifications for new features "
          icon="🔔"
        />
        <FeatureCard
          title="Community Engagement"
          description="Connect with anime enthusiasts and share your passion"
          icon="👥"
        />
        <FeatureCard
          title="Advanced Filtering"
          description="vibe by genre, rating, status, and personal preferences"
          icon="🔍"
        />
        <FeatureCard
          title="Custom Commands"
          description="Create custom commands for your server and anime community"
          icon="⚙️"
        />
      </div>

      <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-primary mb-6">Getting Started with Anime MD</h3>
        <div className="space-y-4">
          <StepItem step={1} title="Open Telegram" description="Launch Telegram and search for @queenanime_bot" />
          <StepItem step={2} title="Start the Bot" description="Click /start to initialize Anime MD and begin setup" />
          <StepItem
            step={3}
            title="Link Your Account"
            description="click /pair to connect your WhatsApp account "
          />
          <StepItem
            step={4}
            title="Configure Preferences"
            description="Set your settings preferences, genres, and notification settings"
          />
          <StepItem
            step={5}
            title="Invite Friends"
            description="Share link and grow our anime community"
          />
          <StepItem
            step={6}
            title="Start Enjoying"
            description="Access all Anime MD features and manage your content effortlessly"
          />
        </div>
        <a
          href="https://james-bestwishes.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-primary hover:text-accent font-semibold transition-colors hover:gap-3"
        >
          Read Full Documentation
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card/50 border border-border/50 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Why Jamestech?
          </h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Secure and encrypted</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Access from any device instantly</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Fast and reliable notifications</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Privacy-first architecture</span>
            </li>
          </ul>
        </div>

        <div className="bg-card/50 border border-border/50 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Key Features
          </h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>100+ anime database with daily updates</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Personalized recommendations engine</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Community forums and discussions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>Member-exclusive events and contests</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Support section */}
      <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 backdrop-blur-sm text-center">
        <h3 className="text-xl font-bold text-primary mb-3">Need Help?</h3>
        <p className="text-foreground/80 mb-4">
          Our support team is available 24/7 on Telegram to assist you with any questions or issues.
        </p>
        <a
          href="https://t.me/jamespydev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 text-primary hover:text-accent font-semibold transition-colors hover:gap-3"
        >
          Contact Support on Telegram
          <Send className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group bg-card/50 border border-border/50 rounded-lg p-6 hover:bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{title}</h4>
      <p className="text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors">{description}</p>
    </div>
  )
}

interface StepItemProps {
  step: number
  title: string
  description: string
}

function StepItem({ step, title, description }: StepItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 text-primary font-bold text-sm">
          {step}
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-foreground mb-1">{title}</h5>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  )
}
