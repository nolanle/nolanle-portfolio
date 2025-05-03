import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export const metadata = {
  title: "Kỹ năng - Nolan Le",
  description: "Các kỹ năng và công nghệ mà Nolan Le thành thạo.",
}

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Ngôn ngữ lập trình",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Rust", level: 85 },
      { name: "Solidity", level: 90 },
      { name: "Java", level: 80 },
      { name: "Go", level: 75 },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Bitcoin", level: 85 },
      { name: "Ethereum", level: 95 },
      { name: "BSC", level: 90 },
      { name: "Solana", level: 80 },
      { name: "Smart Contracts", level: 95 },
      { name: "DeFi", level: 85 },
    ],
  },
  {
    title: "Công cụ & Frameworks",
    skills: [
      { name: "Hardhat", level: 90 },
      { name: "Truffle", level: 85 },
      { name: "Web3.js", level: 95 },
      { name: "Ethers.js", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 90 },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Kỹ năng</h1>

        <div className="grid gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tổng quan</h2>
            <p className="text-muted-foreground">
              Với hơn 7 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và 6 năm chuyên sâu về blockchain, tôi đã
              phát triển một bộ kỹ năng đa dạng và chuyên sâu trong nhiều công nghệ khác nhau. Dưới đây là các kỹ năng
              chính mà tôi thành thạo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Chứng chỉ & Khóa học</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-bold">Certified Blockchain Developer</h3>
                <p className="text-sm text-muted-foreground">2019</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-bold">Advanced Smart Contract Development</h3>
                <p className="text-sm text-muted-foreground">2020</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-bold">Solana Blockchain Development</h3>
                <p className="text-sm text-muted-foreground">2021</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Các công nghệ khác</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Git</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">AWS</Badge>
              <Badge variant="outline">Linux</Badge>
              <Badge variant="outline">CI/CD</Badge>
              <Badge variant="outline">RESTful API</Badge>
              <Badge variant="outline">GraphQL</Badge>
              <Badge variant="outline">MongoDB</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Redis</Badge>
              <Badge variant="outline">IPFS</Badge>
              <Badge variant="outline">Cryptography</Badge>
              <Badge variant="outline">Consensus Algorithms</Badge>
              <Badge variant="outline">P2P Networks</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
