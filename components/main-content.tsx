"use client"

import WishesView from "@/components/wishes-view"
import ProjectsView from "@/components/projects-view"
import AnimeMDView from "@/components/anime-md-view"

interface MainContentProps {
  activeTab: string
}

export default function MainContent({ activeTab }: MainContentProps) {
  return (
    <main className="md:ml-64 flex-1 p-3 sm:p-5 md:p-8 pt-20 sm:pt-16 md:pt-8 relative z-10 max-w-full">
      {activeTab === "wishes" && <WishesView />}
      {activeTab === "projects" && <ProjectsView />}
      {activeTab === "anime-md" && <AnimeMDView />}
    </main>
  )
}
