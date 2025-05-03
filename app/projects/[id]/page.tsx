import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  year: string
  challenges: string[]
  solutions: string[]
  technologies: string[]
  results: string[]
}

const projects: Project[] = [
  {
    id: "bitcoin-fork",
    title: "Bitcoin Fork",
    description: "Phát triển và triển khai một fork của Bitcoin với các tính năng tùy chỉnh và cải tiến về hiệu suất.",
    longDescription:
      "Dự án này tập trung vào việc tạo ra một phiên bản fork của Bitcoin với các tính năng tùy chỉnh nhằm cải thiện hiệu suất và khả năng mở rộng. Mục tiêu chính là tăng kích thước khối và tốc độ xác nhận giao dịch, đồng thời duy trì tính bảo mật và phi tập trung của mạng lưới.",
    tags: ["Bitcoin", "C++", "Blockchain"],
    year: "2018",
    challenges: [
      "Tối ưu hóa thuật toán đồng thuận để cải thiện hiệu suất",
      "Duy trì tính tương thích với mạng lưới Bitcoin hiện tại",
      "Triển khai các tính năng mới mà không ảnh hưởng đến bảo mật",
      "Xây dựng cộng đồng và hệ sinh thái xung quanh fork mới",
    ],
    solutions: [
      "Phát triển thuật toán đồng thuận cải tiến với thời gian xác nhận khối nhanh hơn",
      "Thiết kế cơ chế tương thích ngược để đảm bảo chuyển đổi mượt mà",
      "Triển khai các bài kiểm tra bảo mật toàn diện và kiểm toán mã nguồn",
      "Xây dựng tài liệu chi tiết và công cụ hỗ trợ cho cộng đồng phát triển",
    ],
    technologies: ["C++", "Bitcoin Core", "Cryptography", "P2P Networking", "Consensus Algorithms"],
    results: [
      "Tăng thông lượng giao dịch lên 3 lần so với Bitcoin",
      "Giảm thời gian xác nhận giao dịch xuống còn 5 phút",
      "Xây dựng cộng đồng với hơn 1000 node hoạt động",
      "Được áp dụng bởi nhiều doanh nghiệp cho các giải pháp thanh toán",
    ],
  },
  {
    id: "ethereum-private-chain",
    title: "Ethereum Private Chain",
    description: "Xây dựng chuỗi khối Ethereum riêng tư cho doanh nghiệp với cơ chế đồng thuận tùy chỉnh.",
    longDescription:
      "Dự án này tập trung vào việc phát triển một chuỗi khối Ethereum riêng tư cho một tập đoàn tài chính lớn. Mục tiêu là tạo ra một mạng lưới blockchain có khả năng xử lý giao dịch nhanh chóng, bảo mật cao và có thể tích hợp với các hệ thống hiện có của doanh nghiệp.",
    tags: ["Ethereum", "Solidity", "Go"],
    year: "2019",
    challenges: [
      "Thiết kế cơ chế đồng thuận phù hợp với yêu cầu của doanh nghiệp",
      "Đảm bảo quyền riêng tư và bảo mật cho dữ liệu giao dịch",
      "Tích hợp với hệ thống quản lý danh tính hiện có",
      "Đáp ứng yêu cầu về hiệu suất và khả năng mở rộng",
    ],
    solutions: [
      "Phát triển cơ chế đồng thuận Proof of Authority tùy chỉnh",
      "Triển khai các kênh riêng tư và mã hóa dữ liệu giao dịch",
      "Xây dựng cầu nối tích hợp với hệ thống quản lý danh tính",
      "Tối ưu hóa cấu trúc dữ liệu và thuật toán xử lý giao dịch",
    ],
    technologies: ["Ethereum", "Geth", "Solidity", "Go", "Smart Contracts", "Proof of Authority"],
    results: [
      "Xử lý hơn 1000 giao dịch mỗi giây",
      "Giảm 70% chi phí vận hành so với hệ thống truyền thống",
      "Tăng tính minh bạch và khả năng kiểm toán",
      "Triển khai thành công cho 5 bộ phận trong tập đoàn",
    ],
  },
  {
    id: "bsc-defi-platform",
    title: "BSC DeFi Platform",
    description: "Phát triển nền tảng DeFi trên Binance Smart Chain với các hợp đồng thông minh an toàn và hiệu quả.",
    longDescription:
      "Dự án này tập trung vào việc xây dựng một nền tảng DeFi toàn diện trên Binance Smart Chain, bao gồm các tính năng như trao đổi phi tập trung, cho vay, staking và farming. Mục tiêu là tạo ra một hệ sinh thái DeFi hoàn chỉnh với phí giao dịch thấp và tốc độ xử lý cao.",
    tags: ["BSC", "DeFi", "Solidity"],
    year: "2020",
    challenges: [
      "Đảm bảo an toàn cho các hợp đồng thông minh quản lý tài sản",
      "Tối ưu hóa chi phí gas cho các giao dịch phức tạp",
      "Thiết kế tokenomics bền vững cho hệ sinh thái",
      "Xây dựng giao diện người dùng thân thiện cho người dùng không chuyên về crypto",
    ],
    solutions: [
      "Áp dụng các mẫu thiết kế hợp đồng thông minh an toàn và kiểm toán bảo mật",
      "Tối ưu hóa mã Solidity để giảm chi phí gas",
      "Phát triển mô hình tokenomics với cơ chế khuyến khích dài hạn",
      "Thiết kế UI/UX đơn giản hóa các khái niệm DeFi phức tạp",
    ],
    technologies: ["Binance Smart Chain", "Solidity", "React", "Web3.js", "Truffle", "Hardhat"],
    results: [
      "Đạt 100 triệu USD tổng giá trị khóa (TVL) trong 6 tháng",
      "Xây dựng cộng đồng với hơn 50,000 người dùng hoạt động",
      "Không xảy ra sự cố bảo mật nào kể từ khi ra mắt",
      "Được đánh giá là một trong những nền tảng DeFi hàng đầu trên BSC",
    ],
  },
  {
    id: "solana-nft-marketplace",
    title: "Solana NFT Marketplace",
    description: "Xây dựng sàn giao dịch NFT trên Solana với hiệu suất cao và phí giao dịch thấp.",
    longDescription:
      "Dự án này tập trung vào việc phát triển một sàn giao dịch NFT trên blockchain Solana, tận dụng ưu điểm về tốc độ và chi phí giao dịch thấp của nền tảng này. Sàn giao dịch hỗ trợ việc tạo, mua bán và đấu giá NFT với trải nghiệm người dùng mượt mà.",
    tags: ["Solana", "Rust", "NFT"],
    year: "2021",
    challenges: [
      "Tối ưu hóa hiệu suất cho việc xử lý khối lượng lớn NFT",
      "Phát triển cơ chế đấu giá công bằng và minh bạch",
      "Tích hợp với các ví Solana phổ biến",
      "Xây dựng hệ thống lưu trữ metadata hiệu quả",
    ],
    solutions: [
      "Phát triển chương trình Solana tối ưu bằng Rust",
      "Thiết kế cơ chế đấu giá thời gian thực với xác nhận trên chuỗi",
      "Tích hợp với Phantom, Solflare và các ví Solana phổ biến khác",
      "Sử dụng IPFS và Arweave cho lưu trữ metadata phi tập trung",
    ],
    technologies: ["Solana", "Rust", "TypeScript", "React", "IPFS", "Arweave"],
    results: [
      "Xử lý hơn 10,000 giao dịch NFT mỗi ngày",
      "Phí giao dịch thấp hơn 99% so với các sàn NFT trên Ethereum",
      "Thu hút hơn 500 nghệ sĩ và nhà sáng tạo nội dung",
      "Tổng khối lượng giao dịch đạt 25 triệu USD trong năm đầu tiên",
    ],
  },
  {
    id: "cross-chain-bridge",
    title: "Cross-chain Bridge",
    description: "Phát triển cầu nối giữa các blockchain khác nhau, cho phép chuyển tài sản giữa các mạng.",
    longDescription:
      "Dự án này tập trung vào việc xây dựng một cầu nối giữa các blockchain khác nhau, cho phép người dùng chuyển tài sản kỹ thuật số một cách an toàn và hiệu quả giữa Ethereum, Binance Smart Chain, Solana và Polygon. Mục tiêu là tạo ra một giải pháp liên kết các hệ sinh thái blockchain riêng biệt.",
    tags: ["Cross-chain", "Rust", "Solidity"],
    year: "2022",
    challenges: [
      "Đảm bảo an toàn cho tài sản trong quá trình chuyển đổi giữa các chuỗi",
      "Xử lý sự khác biệt về cơ chế đồng thuận và mô hình giao dịch",
      "Tối ưu hóa chi phí và thời gian xác nhận giao dịch",
      "Thiết kế cơ chế quản trị phi tập trung",
    ],
    solutions: [
      "Triển khai mô hình khóa tài sản và mint token với cơ chế đa chữ ký",
      "Phát triển các adapter riêng cho từng blockchain",
      "Tối ưu hóa quy trình xác nhận giao dịch với hệ thống relayer",
      "Xây dựng DAO cho việc quản trị và nâng cấp cầu nối",
    ],
    technologies: ["Solidity", "Rust", "TypeScript", "zkSNARKs", "Multi-signature", "DAO"],
    results: [
      "Hỗ trợ chuyển đổi hơn 20 loại token giữa 4 blockchain",
      "Xử lý hơn 1 tỷ USD giá trị giao dịch",
      "Thời gian xác nhận giao dịch trung bình dưới 5 phút",
      "Không xảy ra sự cố bảo mật nào kể từ khi ra mắt",
    ],
  },
  {
    id: "smart-contract-audit",
    title: "Smart Contract Audit",
    description: "Cung cấp dịch vụ kiểm toán hợp đồng thông minh, phát hiện và khắc phục các lỗ hổng bảo mật.",
    longDescription:
      "Dự án này tập trung vào việc cung cấp dịch vụ kiểm toán hợp đồng thông minh chuyên nghiệp cho các dự án DeFi, NFT và các ứng dụng blockchain khác. Mục tiêu là phát hiện và khắc phục các lỗ hổng bảo mật tiềm ẩn trước khi chúng bị khai thác.",
    tags: ["Security", "Audit", "Smart Contracts"],
    year: "2023",
    challenges: [
      "Phát hiện các lỗ hổng bảo mật phức tạp trong mã hợp đồng",
      "Phân tích các vector tấn công tiềm ẩn",
      "Đánh giá rủi ro và đề xuất giải pháp khắc phục",
      "Theo dõi và cập nhật về các lỗ hổng mới",
    ],
    solutions: [
      "Phát triển bộ công cụ phân tích tĩnh và động cho mã Solidity",
      "Áp dụng kỹ thuật fuzzing và symbolic execution",
      "Xây dựng quy trình kiểm toán toàn diện với nhiều lớp kiểm tra",
      "Duy trì cơ sở dữ liệu về các lỗ hổng và mẫu tấn công",
    ],
    technologies: ["Solidity", "Mythril", "Slither", "Echidna", "MythX", "Manticore"],
    results: [
      "Kiểm toán hơn 50 dự án với tổng giá trị khóa trên 2 tỷ USD",
      "Phát hiện và ngăn chặn hơn 100 lỗ hổng bảo mật nghiêm trọng",
      "Tiết kiệm cho khách hàng ước tính 500 triệu USD tiềm năng bị mất",
      "Xây dựng danh tiếng là một trong những dịch vụ kiểm toán đáng tin cậy nhất",
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại dự án
          </Link>
        </Button>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tổng quan dự án</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Thách thức</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Giải pháp</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Công nghệ sử dụng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kết quả</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contact">
                Liên hệ để biết thêm chi tiết <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
