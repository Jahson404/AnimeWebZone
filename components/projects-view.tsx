"use client"

import { ExternalLink, Star } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  status: "Active" | "Coming Soon"
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "VAMPIRE KILLER",
    description: "",
    tech: ["node.js", "json", "canvas"],
    status: "Coming Soon",
    link: "https://chat.whatsapp.com/KkZLAXdytZV8OVYvGwYePY",
  },
  {
    id: 2,
    title: "Anime MD V1",
    description: "Advanced WhatsApp bot for automation and community management",
    tech: ["Node.js", "WhatsApp API", "MongoDB"],
    status: "Active",
    link: "https://t.me/queenanime_bot",
  },
  {
    id: 3,
    title: "Anime Md V2",
    description: "anime md version 2 advanced multi device",
    tech: ["next.js", "node.js", "Redux"],
    status: "Active",
    link: "https://t.me/queenanime2_bot",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics and insights for our projects",
    tech: ["Next.js", "Chart.js", "PostgreSQL"],
    status: "Coming Soon",
  },
]

export default function ProjectsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold glow-text text-primary mb-2">Our Projects</h1>
        <p className="text-foreground/70">Innovative solutions from James Tech Incorporative</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-card border border-border/50 hover:border-accent/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 backdrop-blur-sm flex flex-col">
      <div className="space-y-3 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.status === "Active" && (
            <div className="flex items-center gap-1 text-xs font-semibold text-accent">
              <Star className="w-3 h-3 fill-accent" />
              Active
            </div>
          )}
        </div>
        <p className="text-sm text-foreground/70">{project.description}</p>
      </div>

      <div className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-secondary/30 text-secondary border border-secondary/50"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {project.status === "Coming Soon" && <div className="text-sm font-semibold text-accent">Coming Soon</div>}
      </div>
    </div>
  )
}
