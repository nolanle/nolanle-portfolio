import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dự án - Nolan Le",
  description: "Các dự án blockchain tiêu biểu của Nolan Le.",
}

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
}

const projects: Project[] = [
  {
    id: "bitcoin-fork",
    title: "Bitcoin Fork",
    description: "Phát triển và triển khai một fork của Bitcoin với các tính năng tùy chỉnh và cải tiến về hiệu suất.",
    tags: ["Bitcoin", "C++", "Blockchain"],
    year: "2018",
  },
  {
    id: "ethereum-private-chain",
    title: "Ethereum Private Chain",
    description: "Xây dựng chuỗi khối Ethereum riêng tư cho doanh nghiệp với cơ chế đồng thuận tùy chỉnh.",
    tags: ["Ethereum", "Solidity", "Go"],
    year: "2019",
  },
  {
    id: "bsc-defi-platform",
    title: "BSC DeFi Platform",
    description: "Phát triển nền tảng DeFi trên Binance Smart Chain với các hợp đồng thông minh an toàn và hiệu quả.",
    tags: ["BSC", "DeFi", "Solidity"],
    year: "2020",
  },
  {
    id: "solana-nft-marketplace",
    title: "Solana NFT Marketplace",
    description: "Xây dựng sàn giao dịch NFT trên Solana với hiệu suất cao và phí giao dịch thấp.",
    tags: ["Solana", "Rust", "NFT"],
    year: "2021",
  },
  {
    id: "cross-chain-bridge",
    title: "Cross-chain Bridge",
    description: "Phát triển cầu nối giữa các blockchain khác nhau, cho phép chuyển tài sản giữa các mạng.",
    tags: ["Cross-chain", "Rust", "Solidity"],
    year: "2022",
  },
  {
    id: "smart-contract-audit",
    title: "Smart Contract Audit",
    description: "Cung cấp dịch vụ kiểm toán hợp đồng thông minh, phát hiện và khắc phục các lỗ hổng bảo mật.",
    tags: ["Security", "Audit", "Smart Contracts"],
    year: "2023",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Dự án</h1>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold">Các dự án tiêu biểu</h2>
          <p className="text-muted-foreground">
            Dưới đây là một số dự án blockchain tiêu biểu mà tôi đã thực hiện trong những năm qua. Mỗi dự án đều được
            thiết kế và phát triển để đáp ứng các yêu cầu cụ thể của khách hàng.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline">{project.year}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/projects/${project.id}`}>
                    Chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">Dịch vụ blockchain</h2>
          <p className="text-muted-foreground">Ngoài các dự án cụ thể, tôi còn cung cấp các dịch vụ blockchain sau:</p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tư vấn Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tư vấn về việc áp dụng công nghệ blockchain vào doanh nghiệp, lựa chọn nền tảng phù hợp và xây dựng lộ
                  trình triển khai.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phát triển Smart Contract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thiết kế và phát triển các hợp đồng thông minh an toàn, hiệu quả trên các nền tảng blockchain phổ
                  biến.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kiểm toán Bảo mật</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kiểm tra và đánh giá bảo mật cho các hợp đồng thông minh, phát hiện và khắc phục các lỗ hổng tiềm ẩn.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phát triển DApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Xây dựng các ứng dụng phi tập trung (DApp) với giao diện người dùng thân thiện và tích hợp với các
                  blockchain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
