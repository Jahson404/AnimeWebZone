"use client"

import type React from "react"
import { Star, Gift, MessageCircle, Code, Send } from "lucide-react"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  isOpen: boolean
}

export default function Sidebar({ activeTab, setActiveTab, isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-60 sm:w-64 bg-sidebar border-r border-sidebar-border p-4 sm:p-6 flex flex-col gap-6 sm:gap-8 z-40 overflow-y-auto transition-transform duration-300 md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold glow-text text-sidebar-primary">✨ James Tech</h1>
        <p className="text-xs sm:text-sm text-sidebar-foreground/70">Incorporative Developers</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 sm:gap-3">
        <NavItem
          icon={<Star className="w-5 h-5" />}
          label="Wishes"
          tab="wishes"
          active={activeTab === "wishes"}
          onClick={() => setActiveTab("wishes")}
        />
        <NavItem
          icon={<Gift className="w-5 h-5" />}
          label="Projects"
          tab="projects"
          active={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
        />
        <NavItem
          icon={<Send className="w-5 h-5" />}
          label="Anime MD Bot"
          tab="anime-md"
          active={activeTab === "anime-md"}
          onClick={() => setActiveTab("anime-md")}
        />
      </nav>

      {/* Social Links */}
      <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-sidebar-border/30">
        <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Social</h3>
        <div className="flex flex-col gap-1 sm:gap-2">
          <SocialButton icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" href="https://wa.me/1234567890" />
          <SocialButton icon={<Send className="w-4 h-4" />} label="Telegram" href="https://t.me/jamestech" />
          <SocialButton icon={<Code className="w-4 h-4" />} label="GitHub" href="https://github.com/jamestech" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-3 sm:pt-4 border-t border-sidebar-border/30">
        <p className="text-xs text-sidebar-foreground/50 text-center">Powered by James Tech Incorporative</p>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  tab: string
  active: boolean
  onClick: () => void
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-sm sm:text-base ${
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-lg shadow-accent/50"
          : "text-sidebar-foreground hover:bg-sidebar-accent/10"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  href: string
}

function SocialButton({ icon, label, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded text-xs sm:text-sm text-sidebar-foreground hover:bg-sidebar-accent/20 transition-colors hover:shadow-lg hover:shadow-accent/30"
    >
      {icon}
      {label}
    </a>
  )
}
