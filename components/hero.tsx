import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Xin chào, tôi là <span className="text-emerald-600 dark:text-emerald-500">Nolan Le</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Web Developer chuyên về Next.js, React và các công nghệ hiện đại
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium flex items-center justify-center gap-2"
            >
              Xem dự án của tôi
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md font-medium"
            >
              Liên hệ với tôi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
