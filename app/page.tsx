import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Nolan Le</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Giới thiệu
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Kỹ năng
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Dự án
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Liên hệ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl">Nolan Le</span>
                </Link>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="#contact">Liên hệ</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nolan Le</h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Blockchain Developer chuyên nghiệp với kinh nghiệm xây dựng và triển khai các giải pháp blockchain tùy
                chỉnh.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="#projects">
                    Xem dự án <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Liên hệ</Link>
                </Button>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square h-full max-h-[400px] w-full max-w-[400px] overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Nolan Le"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Giới thiệu</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Tôi là Nolan Le, một Blockchain Developer với hơn 5 năm kinh nghiệm trong việc phát triển và triển khai
              các giải pháp blockchain tùy chỉnh. Tôi chuyên về việc xây dựng các blockchain theo yêu cầu, từ việc fork
              các blockchain hiện có như Bitcoin, Ethereum/BSC, Solana đến việc phát triển các ứng dụng phi tập trung
              (dApps) và hợp đồng thông minh (smart contracts).
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Với nền tảng vững chắc về các ngôn ngữ lập trình như JavaScript/TypeScript, Rust, Java và Go, tôi có thể
              làm việc trên nhiều nền tảng blockchain khác nhau và đáp ứng các yêu cầu đa dạng của khách hàng.
            </p>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Kỹ năng</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Các kỹ năng và công nghệ tôi thành thạo
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Ngôn ngữ lập trình</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="Rust" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="Go" />
                  <SkillBadge name="Solidity" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Blockchain</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Bitcoin" />
                  <SkillBadge name="Ethereum" />
                  <SkillBadge name="BSC" />
                  <SkillBadge name="Solana" />
                  <SkillBadge name="Smart Contracts" />
                  <SkillBadge name="DeFi" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Công cụ & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Hardhat" />
                  <SkillBadge name="Truffle" />
                  <SkillBadge name="Web3.js" />
                  <SkillBadge name="Ethers.js" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Node.js" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Dự án</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Một số dự án tiêu biểu tôi đã thực hiện
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Bitcoin Fork"
              description="Phát triển và triển khai một fork của Bitcoin với các tính năng tùy chỉnh và cải tiến về hiệu suất."
              tags={["Bitcoin", "C++", "Blockchain"]}
            />
            <ProjectCard
              title="Ethereum Private Chain"
              description="Xây dựng chuỗi khối Ethereum riêng tư cho doanh nghiệp với cơ chế đồng thuận tùy chỉnh."
              tags={["Ethereum", "Solidity", "Go"]}
            />
            <ProjectCard
              title="BSC DeFi Platform"
              description="Phát triển nền tảng DeFi trên Binance Smart Chain với các hợp đồng thông minh an toàn và hiệu quả."
              tags={["BSC", "DeFi", "Solidity"]}
            />
            <ProjectCard
              title="Solana NFT Marketplace"
              description="Xây dựng sàn giao dịch NFT trên Solana với hiệu suất cao và phí giao dịch thấp."
              tags={["Solana", "Rust", "NFT"]}
            />
            <ProjectCard
              title="Cross-chain Bridge"
              description="Phát triển cầu nối giữa các blockchain khác nhau, cho phép chuyển tài sản giữa các mạng."
              tags={["Cross-chain", "Rust", "Solidity"]}
            />
            <ProjectCard
              title="Smart Contract Audit"
              description="Cung cấp dịch vụ kiểm toán hợp đồng thông minh, phát hiện và khắc phục các lỗ hổng bảo mật."
              tags={["Security", "Audit", "Smart Contracts"]}
            />
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Liên hệ với tôi</h2>
              <p className="text-muted-foreground md:text-xl">
                Bạn có dự án blockchain cần triển khai? Hãy liên hệ với tôi để được tư vấn và hỗ trợ.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>contact@nolanle.xyz</span>
                </div>
                <div className="flex gap-4 mt-4">
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
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Gửi tin nhắn</h3>
                <p className="text-sm text-muted-foreground">
                  Điền thông tin của bạn và tôi sẽ liên hệ lại sớm nhất có thể.
                </p>
              </div>
              <div className="p-6 space-y-4">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Nolan Le. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
