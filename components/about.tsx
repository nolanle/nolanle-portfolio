import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Giới thiệu</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Nolan Le" fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Nolan Le</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tôi là một Web Developer với hơn 5 năm kinh nghiệm trong việc phát triển các ứng dụng web hiện đại. Tôi
              đam mê tạo ra những trải nghiệm người dùng tuyệt vời và giải quyết các vấn đề phức tạp thông qua code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Với kiến thức chuyên sâu về React, Next.js, và các công nghệ front-end hiện đại, tôi luôn tìm kiếm những
              cách để tối ưu hóa hiệu suất và cải thiện trải nghiệm người dùng.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">contact@nolanle.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Vị trí:</h4>
                <p className="text-gray-600 dark:text-gray-400">Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
