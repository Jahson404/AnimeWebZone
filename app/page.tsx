"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("wishes")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="lucid-bg min-h-screen bg-background relative">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-primary/30 hover:bg-primary/50 text-primary transition-all shadow-lg"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          role="presentation"
        />
      )}

      <div className="flex gap-0 min-h-screen">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab)
            setSidebarOpen(false)
          }}
          isOpen={sidebarOpen}
        />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  )
}
