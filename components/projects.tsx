import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Một nền tảng thương mại điện tử đầy đủ tính năng với thanh toán, quản lý sản phẩm và phân tích.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nolanle/project1",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Website portfolio cá nhân với thiết kế hiện đại và tối ưu hóa hiệu suất.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nolanle/project2",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc với các tính năng kéo thả, thông báo và báo cáo.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nolanle/project3",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dự án</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">Một số dự án gần đây mà tôi đã làm việc</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
