"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Bell,
  Brain,
  DollarSign,
  Activity,
  BarChart3,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Target,
  Flame,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Rocket,
  Crown,
  Trophy,
  MessageCircle,
  Send,
  Bot,
  User,
} from "lucide-react"

// Enhanced mock data with more realistic fluctuations
const stockData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.43,
    change: 2.34,
    changePercent: 1.35,
    volume: "45.2M",
    marketCap: "2.8T",
    sector: "Technology",
    volatility: 0.23,
    momentum: 0.78,
    sentiment: 0.85,
    aiScore: 92,
    trending: true,
    watchlisted: true,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 142.56,
    change: -1.23,
    changePercent: -0.85,
    volume: "28.1M",
    marketCap: "1.8T",
    sector: "Technology",
    volatility: 0.31,
    momentum: 0.45,
    sentiment: 0.72,
    aiScore: 78,
    trending: false,
    watchlisted: false,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 378.85,
    change: 5.67,
    changePercent: 1.52,
    volume: "32.4M",
    marketCap: "2.9T",
    sector: "Technology",
    volatility: 0.19,
    momentum: 0.89,
    sentiment: 0.91,
    aiScore: 95,
    trending: true,
    watchlisted: true,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 248.42,
    change: -8.34,
    changePercent: -3.25,
    volume: "67.8M",
    marketCap: "789B",
    sector: "Automotive",
    volatility: 0.67,
    momentum: 0.23,
    sentiment: 0.34,
    aiScore: 45,
    trending: false,
    watchlisted: false,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    price: 875.28,
    change: 15.67,
    changePercent: 1.82,
    volume: "41.2M",
    marketCap: "2.1T",
    sector: "Technology",
    volatility: 0.45,
    momentum: 0.95,
    sentiment: 0.98,
    aiScore: 98,
    trending: true,
    watchlisted: true,
  },
]

// Real-time chart data with more points
const generateChartData = () => {
  const baseData = []
  const now = new Date()
  for (let i = 30; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000)
    baseData.push({
      time: time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
      AAPL: 173.2 + Math.random() * 4 - 2,
      GOOGL: 141.8 + Math.random() * 3 - 1.5,
      MSFT: 375.1 + Math.random() * 6 - 3,
      TSLA: 252.1 + Math.random() * 10 - 5,
      NVDA: 862.4 + Math.random() * 20 - 10,
    })
  }
  return baseData
}

const aiPredictions = [
  {
    symbol: "AAPL",
    prediction: "BUY",
    confidence: 87,
    targetPrice: 185.0,
    timeframe: "3 months",
    reasoning: "Strong iPhone 15 sales and services growth",
    riskLevel: "Low",
    expectedReturn: 12.5,
  },
  {
    symbol: "GOOGL",
    prediction: "HOLD",
    confidence: 72,
    targetPrice: 148.0,
    timeframe: "6 months",
    reasoning: "AI investments showing promise, ad revenue stable",
    riskLevel: "Medium",
    expectedReturn: 8.2,
  },
  {
    symbol: "MSFT",
    prediction: "BUY",
    confidence: 91,
    targetPrice: 395.0,
    timeframe: "3 months",
    reasoning: "Azure growth and AI integration driving value",
    riskLevel: "Low",
    expectedReturn: 15.8,
  },
  {
    symbol: "TSLA",
    prediction: "SELL",
    confidence: 68,
    targetPrice: 220.0,
    timeframe: "2 months",
    reasoning: "Production concerns and increased competition",
    riskLevel: "High",
    expectedReturn: -11.4,
  },
  {
    symbol: "NVDA",
    prediction: "STRONG BUY",
    confidence: 94,
    targetPrice: 950.0,
    timeframe: "6 months",
    reasoning: "AI boom continues, data center demand surging",
    riskLevel: "Medium",
    expectedReturn: 22.3,
  },
]

const newsData = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cuts in 2024",
    source: "Financial Times",
    time: "2 hours ago",
    sentiment: "positive",
    impact: "high",
    category: "monetary-policy",
  },
  {
    id: 2,
    title: "Tech Stocks Rally on AI Optimism",
    source: "Reuters",
    time: "4 hours ago",
    sentiment: "positive",
    impact: "medium",
    category: "technology",
  },
  {
    id: 3,
    title: "Tesla Faces Production Challenges in Q4",
    source: "Bloomberg",
    time: "6 hours ago",
    sentiment: "negative",
    impact: "medium",
    category: "automotive",
  },
  {
    id: 4,
    title: "Apple Reports Strong Services Revenue Growth",
    source: "CNBC",
    time: "8 hours ago",
    sentiment: "positive",
    impact: "high",
    category: "earnings",
  },
  {
    id: 5,
    title: "Market Volatility Expected Ahead of Earnings",
    source: "Wall Street Journal",
    time: "12 hours ago",
    sentiment: "neutral",
    impact: "low",
    category: "market-analysis",
  },
]

const sectorData = [
  { name: "Technology", value: 35, color: "#3b82f6", change: 2.4 },
  { name: "Healthcare", value: 18, color: "#10b981", change: 1.2 },
  { name: "Finance", value: 15, color: "#f59e0b", change: -0.8 },
  { name: "Energy", value: 12, color: "#ef4444", change: 3.1 },
  { name: "Consumer", value: 20, color: "#8b5cf6", change: 0.9 },
]

// Heatmap data
const heatmapData = [
  { symbol: "AAPL", performance: 2.34, volume: 45.2, volatility: 0.23 },
  { symbol: "GOOGL", performance: -1.23, volume: 28.1, volatility: 0.31 },
  { symbol: "MSFT", performance: 5.67, volume: 32.4, volatility: 0.19 },
  { symbol: "TSLA", performance: -8.34, volume: 67.8, volatility: 0.67 },
  { symbol: "NVDA", performance: 15.67, volume: 41.2, volatility: 0.45 },
]

// User achievements
const achievements = [
  { id: 1, title: "First Trade", description: "Made your first trade", unlocked: true, icon: Trophy },
  { id: 2, title: "Profit Master", description: "Achieved 10% portfolio gain", unlocked: true, icon: Crown },
  { id: 3, title: "AI Whisperer", description: "Followed 5 AI predictions", unlocked: false, icon: Brain },
  { id: 4, title: "Diamond Hands", description: "Held a position for 30 days", unlocked: false, icon: Sparkles },
]

// Chat message types
interface ChatMessage {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
  stockData?: any
}

// AI responses based on context
const getAIResponse = (message: string, portfolioValue: number, selectedStock: string): ChatMessage => {
  const lowerMessage = message.toLowerCase()
  const timestamp = new Date()

  // Stock-specific responses
  if (lowerMessage.includes("aapl") || lowerMessage.includes("apple")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "🍎 Apple (AAPL) is showing strong momentum! Currently at $175.43 (+1.35%). My AI analysis gives it a 92/100 score. The iPhone 15 sales are exceeding expectations, and their services revenue continues to grow. I recommend considering it for your portfolio.",
      timestamp,
      suggestions: ["Show AAPL chart", "Compare with MSFT", "Set price alert"],
      stockData: stockData.find((s) => s.symbol === "AAPL"),
    }
  }

  if (lowerMessage.includes("nvda") || lowerMessage.includes("nvidia")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "🚀 NVIDIA (NVDA) is my top pick right now! At $875.28 (+1.82%), it has a perfect 98/100 AI score. The AI boom is driving massive demand for their GPUs. I predict a target price of $950 within 6 months. This could be a 22.3% return opportunity!",
      timestamp,
      suggestions: ["Analyze NVDA risks", "Compare AI stocks", "Set buy order"],
      stockData: stockData.find((s) => s.symbol === "NVDA"),
    }
  }

  if (lowerMessage.includes("tsla") || lowerMessage.includes("tesla")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "⚠️ Tesla (TSLA) is facing headwinds. Down -3.25% today at $248.42. My AI analysis shows only 45/100 confidence. Production challenges and increased competition are concerns. I'd recommend waiting for a better entry point or considering other EV plays.",
      timestamp,
      suggestions: ["Show alternatives", "Set price alert", "Risk analysis"],
      stockData: stockData.find((s) => s.symbol === "TSLA"),
    }
  }

  // Portfolio-related responses
  if (lowerMessage.includes("portfolio") || lowerMessage.includes("performance")) {
    const gain = (((portfolioValue - 122660) / 122660) * 100).toFixed(2)
    return {
      id: Date.now().toString(),
      type: "ai",
      content: `📊 Your portfolio is performing well! Current value: $${portfolioValue.toLocaleString()} (${gain >= "0" ? "+" : ""}${gain}%). You're up $2,340 today! Your tech-heavy allocation is paying off. Consider diversifying into healthcare or energy for better risk management.`,
      timestamp,
      suggestions: ["Rebalance portfolio", "Show sector allocation", "Risk assessment"],
    }
  }

  // Market analysis
  if (lowerMessage.includes("market") || lowerMessage.includes("outlook")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "📈 Market outlook is cautiously optimistic! The Fed's dovish signals are boosting sentiment. Tech stocks are leading with AI momentum. However, watch for earnings volatility ahead. I recommend maintaining 60% tech, 20% healthcare, 20% defensive positions.",
      timestamp,
      suggestions: ["Show market heatmap", "Sector analysis", "Risk factors"],
    }
  }

  // Investment advice
  if (lowerMessage.includes("buy") || lowerMessage.includes("invest") || lowerMessage.includes("recommend")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "💡 Based on current market conditions and your risk profile, I recommend: 1) NVDA for AI growth (Strong Buy), 2) MSFT for stability (Buy), 3) AAPL for balanced growth (Buy). Avoid TSLA for now. Consider dollar-cost averaging over 2-3 months.",
      timestamp,
      suggestions: ["Create investment plan", "Set alerts", "Compare options"],
    }
  }

  // Risk management
  if (lowerMessage.includes("risk") || lowerMessage.includes("safe")) {
    return {
      id: Date.now().toString(),
      type: "ai",
      content:
        "🛡️ Risk management is crucial! Your current portfolio has moderate risk. Consider: 1) Stop-loss orders at -10%, 2) Diversify beyond tech, 3) Keep 10% cash for opportunities. Your volatility score is 0.34 - within acceptable range for growth investing.",
      timestamp,
      suggestions: ["Set stop losses", "Diversification plan", "Risk calculator"],
    }
  }

  // Default responses
  const defaultResponses = [
    {
      content:
        "👋 Hi! I'm your AI investment advisor. I can help you analyze stocks, optimize your portfolio, and make informed investment decisions. What would you like to know?",
      suggestions: ["Analyze my portfolio", "Show top picks", "Market outlook", "Risk assessment"],
    },
    {
      content:
        "🤖 I'm here to help with your investment strategy! I can provide real-time analysis, personalized recommendations, and risk assessments. How can I assist you today?",
      suggestions: ["Stock recommendations", "Portfolio review", "Market trends", "Set alerts"],
    },
    {
      content:
        "📊 Let me help you make smarter investment decisions! I analyze market data, track trends, and provide personalized advice based on your goals. What's on your mind?",
      suggestions: ["Best stocks to buy", "Portfolio optimization", "Risk analysis", "Market news"],
    },
  ]

  const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]

  return {
    id: Date.now().toString(),
    type: "ai",
    content: randomResponse.content,
    timestamp,
    suggestions: randomResponse.suggestions,
  }
}

export default function Dashboard() {
  const [selectedStock, setSelectedStock] = useState("AAPL")
  const [searchTerm, setSearchTerm] = useState("")
  const [timeframe, setTimeframe] = useState("1D")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [chartData, setChartData] = useState(generateChartData())
  const [isPlaying, setIsPlaying] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [portfolioValue, setPortfolioValue] = useState(125000)
  const [dailyGain, setDailyGain] = useState(2340)
  const [activeTab, setActiveTab] = useState("overview")
  const [notifications, setNotifications] = useState(3)
  const [userLevel, setUserLevel] = useState(7)
  const [xp, setXp] = useState(2450)
  const [nextLevelXp, setNextLevelXp] = useState(3000)

  // Chat states
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isChatMinimized, setIsChatMinimized] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      content:
        "👋 Welcome to Investing IQ! I'm your AI investment advisor. I can help you analyze stocks, optimize your portfolio, and make informed decisions. How can I assist you today?",
      timestamp: new Date(),
      suggestions: ["Analyze my portfolio", "Show top stock picks", "Market outlook", "Risk assessment"],
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const chatScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      if (isPlaying) {
        setChartData(generateChartData())
        // Simulate portfolio changes
        setPortfolioValue((prev) => prev + (Math.random() - 0.5) * 1000)
        setDailyGain((prev) => prev + (Math.random() - 0.5) * 100)
      }
    }, 2000)
    return () => clearInterval(timer)
  }, [isPlaying])

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight
    }
  }, [chatMessages])

  const filteredStocks = stockData.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const playNotificationSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
  }

  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setCurrentMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const aiResponse = getAIResponse(message, portfolioValue, selectedStock)
        setChatMessages((prev) => [...prev, aiResponse])
        setIsTyping(false)
        playNotificationSound()
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  const AnimatedCounter = ({
    value,
    prefix = "",
    suffix = "",
  }: { value: number; prefix?: string; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
      const duration = 1000
      const steps = 60
      const increment = (value - displayValue) / steps
      let current = displayValue

      const timer = setInterval(() => {
        current += increment
        setDisplayValue(current)
        if (Math.abs(current - value) < Math.abs(increment)) {
          setDisplayValue(value)
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [value, displayValue])

    return (
      <span className="font-bold tabular-nums">
        {prefix}
        {Math.round(displayValue).toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <audio ref={audioRef} preload="auto">
        <source
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
          type="audio/wav"
        />
      </audio>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-10"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md dark:bg-slate-900/80 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
                  <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-spin" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Investing IQ
                </h1>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex animate-bounce">
                <Rocket className="h-3 w-3 mr-1" />
                AI-Powered Dashboard
              </Badge>
              <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 px-3 py-1 rounded-full">
                <Crown className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Level {userLevel}</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
                    style={{ width: `${(xp / nextLevelXp) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{currentTime.toLocaleTimeString()} EST</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSoundEnabled(!soundEnabled)} className="relative">
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="relative">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs animate-bounce">{notifications}</Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span>Portfolio Value</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter value={portfolioValue} prefix="$" />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className={`flex items-center text-sm ${dailyGain >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {dailyGain >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  <AnimatedCounter value={Math.abs(dailyGain)} prefix={dailyGain >= 0 ? "+$" : "-$"} />
                  <span>({((dailyGain / portfolioValue) * 100).toFixed(2)}%)</span>
                </div>
                <span className="text-xs text-muted-foreground">today</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center space-x-2">
                <Brain className="h-4 w-4 text-blue-600" />
                <span>AI Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">87%</div>
              <Progress value={87} className="mt-2 h-2" />
              <p className="text-xs text-muted-foreground mt-1">Portfolio health</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center space-x-2">
                <Flame className="h-4 w-4 text-purple-600" />
                <span>Hot Stocks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="flex items-center mt-2">
                {["NVDA", "MSFT", "AAPL"].map((symbol, i) => (
                  <div
                    key={symbol}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xs text-white font-bold ${i > 0 ? "-ml-2" : ""}`}
                  >
                    {symbol[0]}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-7">
            <TabsTrigger value="overview" className="flex items-center space-x-1">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="trading" className="flex items-center space-x-1">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Trading</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center space-x-1">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">AI Insights</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-1 relative">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">AI Advisor</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">News</span>
            </TabsTrigger>
            <TabsTrigger value="heatmap" className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Heatmap</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-1">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Rewards</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search stocks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1D">1D</SelectItem>
                    <SelectItem value="1W">1W</SelectItem>
                    <SelectItem value="1M">1M</SelectItem>
                    <SelectItem value="3M">3M</SelectItem>
                    <SelectItem value="1Y">1Y</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Stock List and Chart */}
              <div className="lg:col-span-2 space-y-6">
                {/* Enhanced Stock List */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span>Top Performers</span>
                    </CardTitle>
                    <CardDescription>Real-time stock prices with AI insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredStocks.map((stock, index) => (
                        <div
                          key={stock.symbol}
                          className={`group flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                            selectedStock === stock.symbol
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 dark:from-blue-950 dark:to-purple-950 dark:border-blue-800 shadow-lg"
                              : "bg-white/70 hover:bg-white/90"
                          }`}
                          onClick={() => {
                            setSelectedStock(stock.symbol)
                            playNotificationSound()
                          }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                {stock.symbol.slice(0, 2)}
                              </div>
                              {stock.trending && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                  <Flame className="h-2 w-2 text-white" />
                                </div>
                              )}
                              {stock.watchlisted && (
                                <Star className="absolute -bottom-1 -right-1 h-4 w-4 text-yellow-500 fill-current" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold">{stock.symbol}</span>
                                <Badge variant="outline" className="text-xs">
                                  AI: {stock.aiScore}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">{stock.name}</div>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
                                    style={{ width: `${stock.sentiment * 100}%` }}
                                  />
                                </div>
                                <span className="text-xs text-muted-foreground">Sentiment</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-lg">${stock.price}</div>
                            <div
                              className={`text-sm flex items-center justify-end ${
                                stock.change >= 0 ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {stock.change >= 0 ? (
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                              ) : (
                                <ArrowDownRight className="h-3 w-3 mr-1" />
                              )}
                              {stock.change >= 0 ? "+" : ""}
                              {stock.change} ({stock.changePercent}%)
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">Vol: {stock.volume}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Chart */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-blue-600" />
                        <span>Live Chart - {selectedStock}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-muted-foreground">Live</span>
                        </div>
                      </div>
                    </CardTitle>
                    <CardDescription>Real-time price movements with volume indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        [selectedStock]: {
                          label: selectedStock,
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey={selectedStock}
                            stroke="hsl(var(--chart-1))"
                            fill="url(#colorGradient)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Sidebar */}
              <div className="space-y-6">
                {/* AI Predictions */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-purple-600 animate-pulse" />
                      <span>AI Predictions</span>
                    </CardTitle>
                    <CardDescription>ML-powered stock analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiPredictions.slice(0, 3).map((prediction) => (
                        <div
                          key={prediction.symbol}
                          className="p-3 rounded-lg border bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{prediction.symbol}</span>
                            <Badge
                              variant={
                                prediction.prediction === "STRONG BUY"
                                  ? "default"
                                  : prediction.prediction === "BUY"
                                    ? "secondary"
                                    : prediction.prediction === "HOLD"
                                      ? "outline"
                                      : "destructive"
                              }
                              className="animate-pulse"
                            >
                              {prediction.prediction}
                            </Badge>
                          </div>
                          <div className="text-sm space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Confidence:</span>
                              <div className="flex items-center space-x-2">
                                <Progress value={prediction.confidence} className="w-12 h-2" />
                                <span className="font-medium">{prediction.confidence}%</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Target:</span>
                              <span className="font-medium text-green-600">${prediction.targetPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Expected Return:</span>
                              <span
                                className={`font-medium ${prediction.expectedReturn >= 0 ? "text-green-600" : "text-red-600"}`}
                              >
                                {prediction.expectedReturn >= 0 ? "+" : ""}
                                {prediction.expectedReturn}%
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-2 p-2 bg-gray-50 rounded">
                              {prediction.reasoning}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Sector Distribution */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Sector Performance</CardTitle>
                    <CardDescription>Real-time sector analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Percentage",
                        },
                      }}
                      className="h-[200px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sectorData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {sectorData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="mt-4 space-y-2">
                      {sectorData.map((sector) => (
                        <div
                          key={sector.name}
                          className="flex items-center justify-between text-sm p-2 rounded hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                            <span>{sector.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{sector.value}%</span>
                            <span className={`text-xs ${sector.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {sector.change >= 0 ? "+" : ""}
                              {sector.change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800 h-[600px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <div className="relative">
                    <Bot className="h-6 w-6 text-blue-600" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <span>AI Investment Advisor</span>
                  <Badge variant="secondary" className="ml-2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </CardTitle>
                <CardDescription>Get personalized investment advice powered by AI</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 px-6" ref={chatScrollRef}>
                  <div className="space-y-4 pb-4">
                    {chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start space-x-3 ${
                          message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className={message.type === "user" ? "bg-blue-100" : "bg-purple-100"}>
                            {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`flex-1 max-w-[80%] ${message.type === "user" ? "text-right" : ""}`}>
                          <div
                            className={`p-3 rounded-lg ${
                              message.type === "user" ? "bg-blue-500 text-white ml-auto" : "bg-white border shadow-sm"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                          {message.suggestions && message.type === "ai" && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-7 bg-transparent"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-purple-100">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-white border shadow-sm p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask me about stocks, portfolio, or market trends..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage(currentMessage)}
                      className="flex-1"
                    />
                    <Button
                      onClick={() => sendMessage(currentMessage)}
                      disabled={!currentMessage.trim() || isTyping}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Analyze NVDA", "Portfolio review", "Market outlook", "Risk assessment"].map((quickAction) => (
                      <Button
                        key={quickAction}
                        variant="ghost"
                        size="sm"
                        className="text-xs h-7 text-muted-foreground hover:text-foreground"
                        onClick={() => sendMessage(quickAction)}
                      >
                        {quickAction}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="heatmap" className="space-y-6">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-red-600" />
                  <span>Market Heatmap</span>
                </CardTitle>
                <CardDescription>Visual representation of stock performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {heatmapData.map((stock) => (
                    <div
                      key={stock.symbol}
                      className={`p-4 rounded-lg text-center cursor-pointer transition-all duration-300 hover:scale-105 ${
                        stock.performance >= 0
                          ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
                          : "bg-gradient-to-br from-red-400 to-red-600 text-white"
                      }`}
                      style={{
                        opacity: 0.7 + Math.abs(stock.performance) * 0.03,
                      }}
                    >
                      <div className="font-bold text-lg">{stock.symbol}</div>
                      <div className="text-sm">
                        {stock.performance >= 0 ? "+" : ""}
                        {stock.performance.toFixed(2)}%
                      </div>
                      <div className="text-xs mt-1">Vol: {stock.volume}M</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span>Achievements & Rewards</span>
                </CardTitle>
                <CardDescription>Track your trading milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-300 shadow-lg"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${achievement.unlocked ? "bg-yellow-500" : "bg-gray-400"}`}>
                          <achievement.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                      {achievement.unlocked && (
                        <Badge className="mt-2 bg-yellow-500 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Unlocked!
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Market News Feed</span>
                </CardTitle>
                <CardDescription>Latest financial news with sentiment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsData.map((news) => (
                    <div
                      key={news.id}
                      className="p-4 rounded-lg border bg-white/70 hover:bg-white/90 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full mt-2 ${
                            news.sentiment === "positive"
                              ? "bg-green-500 animate-pulse"
                              : news.sentiment === "negative"
                                ? "bg-red-500 animate-pulse"
                                : "bg-yellow-500 animate-pulse"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium leading-tight">{news.title}</h4>
                            <Badge
                              variant={
                                news.impact === "high" ? "default" : news.impact === "medium" ? "secondary" : "outline"
                              }
                              className="ml-2"
                            >
                              {news.impact}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{news.source}</span>
                            <span>{news.time}</span>
                          </div>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {news.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </Button>
      )}
    </div>
  )
}
