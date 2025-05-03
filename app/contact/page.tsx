import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Liên hệ - Nolan Le",
  description: "Liên hệ với Nolan Le để thảo luận về các dự án blockchain.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Liên hệ</h1>

        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Thông tin liên hệ</h2>
              <p className="text-muted-foreground mb-6">
                Bạn có dự án blockchain cần triển khai? Hãy liên hệ với tôi để được tư vấn và hỗ trợ.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@nolanle.xyz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+84 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Mạng xã hội</h2>
              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Thời gian làm việc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Thứ Hai - Thứ Sáu:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thứ Bảy:</span>
                  <span>9:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Chủ Nhật:</span>
                  <span>Nghỉ</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn</CardTitle>
              <CardDescription>Điền thông tin của bạn và tôi sẽ liên hệ lại sớm nhất có thể.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Họ
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Nhập họ của bạn"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tên
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Chủ đề
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nhập chủ đề"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nhập tin nhắn của bạn"
                  ></textarea>
                </div>
                <Button className="w-full">Gửi tin nhắn</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
