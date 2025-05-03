import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata = {
  title: "Giới thiệu - Nolan Le",
  description: "Thông tin về Nolan Le, một blockchain developer chuyên nghiệp.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Giới thiệu</h1>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=300&width=300" alt="Nolan Le" fill className="object-cover" />
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium">Họ và tên</h3>
                  <p>Nolan Le</p>
                </div>
                <div>
                  <h3 className="font-medium">Năm sinh</h3>
                  <p>1995</p>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>contact@nolanle.xyz</p>
                </div>
                <div>
                  <h3 className="font-medium">Vị trí</h3>
                  <p>Blockchain Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tiểu sử</h2>
              <p className="text-muted-foreground">
                Tôi là Nolan Le, một Blockchain Developer với hơn 7 năm kinh nghiệm trong lĩnh vực phát triển phần mềm
                và 6 năm chuyên sâu về blockchain. Tôi sinh năm 1995 và tốt nghiệp cử nhân ngành Công nghệ Phần mềm tại
                Đại học Khoa học Tự nhiên, Thành phố Hồ Chí Minh.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Học vấn</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-bold">Cử nhân Công nghệ Phần mềm</h3>
                  <p>Đại học Khoa học Tự nhiên, TP.HCM</p>
                  <p className="text-sm text-muted-foreground">2013 - 2017</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Kinh nghiệm làm việc</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-bold">Blockchain Developer</h3>
                  <p>Tự do / Các dự án blockchain</p>
                  <p className="text-sm text-muted-foreground">2017 - Hiện tại</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Phát triển và triển khai các giải pháp blockchain tùy chỉnh</li>
                    <li>Xây dựng các fork của Bitcoin, Ethereum/BSC, Solana</li>
                    <li>Phát triển hợp đồng thông minh và ứng dụng phi tập trung</li>
                    <li>Tư vấn và hỗ trợ kỹ thuật cho các dự án blockchain</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-bold">Software Developer</h3>
                  <p>Công ty phần mềm</p>
                  <p className="text-sm text-muted-foreground">2016 - 2017</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Phát triển ứng dụng web và mobile</li>
                    <li>Làm việc với các công nghệ JavaScript, Node.js, React</li>
                    <li>Tham gia vào quy trình phát triển phần mềm Agile</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Tầm nhìn</h2>
              <p className="text-muted-foreground">
                Tôi tin rằng công nghệ blockchain sẽ tiếp tục phát triển và trở thành nền tảng quan trọng cho nhiều ứng
                dụng trong tương lai. Mục tiêu của tôi là đóng góp vào sự phát triển này bằng cách xây dựng các giải
                pháp blockchain an toàn, hiệu quả và dễ tiếp cận cho mọi người.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
