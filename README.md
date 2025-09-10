# 🧠 Investing IQ - AI-Powered Stock Dashboard
A sophisticated, real-time investment dashboard powered by artificial intelligence, built with Next.js 15, React 19, and modern web technologies

![Investing IQ Dashboard](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🤖 AI-Powered Investment Advisor
- **Intelligent Chatbot**: Get personalized investment advice through natural language conversations
- **Context-Aware Responses**: AI understands your portfolio and provides tailored recommendations
- **Real-time Analysis**: Instant stock analysis, risk assessment, and market insights
- **Smart Suggestions**: Quick action buttons and follow-up question recommendations

### 📊 Real-Time Market Data
- **Live Stock Prices**: Real-time price updates with animated counters
- **Interactive Charts**: Dynamic area charts with gradient fills and smooth animations
- **Market Heatmap**: Visual representation of stock performance with color-coded indicators
- **Sector Analysis**: Pie charts showing sector distribution and performance

### 🎯 Advanced Analytics
- **AI Scoring System**: Machine learning-powered stock ratings (0-100 scale)
- **Sentiment Analysis**: Real-time market sentiment tracking with visual indicators
- **Volatility Metrics**: Risk assessment with momentum and volatility calculations
- **Prediction Engine**: AI-generated price targets and confidence intervals

### 🎮 Gamification & User Experience
- **Level System**: User progression with XP tracking and achievements
- **Achievement Badges**: Unlock rewards for trading milestones
- **Interactive Animations**: Smooth transitions, hover effects, and micro-interactions
- **Sound Notifications**: Audio feedback for important events

### 📱 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Gradient Backgrounds**: Beautiful animated gradients and particle effects
- **Glass Morphism**: Modern frosted glass effects with backdrop blur

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/investing-iq-dashboard.git
   cd investing-iq-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   # Using bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   # Using bun
   bun dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🏗️ Project Structure

\`\`\`
investing-iq-dashboard/
├── app/                          # Next.js 15 App Router
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout component
│   ├── loading.tsx              # Loading UI component
│   └── page.tsx                 # Main dashboard page
├── components/
│   └── ui/                      # Reusable UI components
│       ├── avatar.tsx           # User avatar component
│       ├── badge.tsx            # Status badges
│       ├── button.tsx           # Interactive buttons
│       ├── card.tsx             # Content cards
│       ├── chart.tsx            # Chart components
│       ├── input.tsx            # Form inputs
│       ├── progress.tsx         # Progress bars
│       ├── scroll-area.tsx      # Scrollable areas
│       ├── select.tsx           # Dropdown selects
│       └── tabs.tsx             # Tab navigation
├── lib/
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── README.md                    # Project documentation
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3b82f6 → #8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Neutral**: Gray scale with OKLCH color space

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Animations
- **Smooth Transitions**: 200ms ease-in-out for all elements
- **Gradient Animation**: 3-second infinite background animation
- **Micro-interactions**: Hover effects, scale transforms, and pulse animations

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Optional: Add your API keys here
NEXT_PUBLIC_API_URL=your_api_endpoint
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
\`\`\`

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration:
- **Custom Colors**: Extended color palette with CSS variables
- **Animations**: Custom keyframes and animation utilities
- **Components**: Pre-built component classes

## 📊 Features Deep Dive

### AI Chatbot Capabilities
The AI investment advisor can help with:

- **Stock Analysis**: "Tell me about NVDA" → Detailed analysis with metrics
- **Portfolio Review**: "How's my portfolio performing?" → Performance insights
- **Market Outlook**: "What's the market outlook?" → Trend analysis
- **Risk Assessment**: "Analyze my risk exposure" → Risk metrics and suggestions
- **Investment Recommendations**: "What should I buy?" → Personalized stock picks

### Real-Time Data Simulation
The dashboard simulates real-time market data with:
- **Price Updates**: Every 2 seconds with realistic fluctuations
- **Volume Changes**: Simulated trading volume variations
- **Sentiment Shifts**: Dynamic sentiment score updates
- **News Feed**: Rotating financial news with impact ratings

### Interactive Elements
- **Stock Selection**: Click any stock to view detailed charts
- **Time Frame Controls**: Switch between 1D, 1W, 1M, 3M, 1Y views
- **Search Functionality**: Real-time stock search with filtering
- **Tab Navigation**: Seamless switching between dashboard sections

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The dashboard can be deployed to any platform that supports Next.js:
- **Netlify**: Static site generation
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

## 🛠️ Development

### Available Scripts
\`\`\`bash
# Development server
bun dev

# Production build
bun build

# Start production server
bun start

# Type checking
bun run type-check

# Linting
bun run lint
\`\`\`

### Code Quality
- **TypeScript**: Full type safety with strict mode
- **ESLint**: Code linting with Next.js recommended rules
- **Prettier**: Code formatting (configure as needed)

## 🎯 Roadmap

### Upcoming Features
- [ ] **Real API Integration**: Connect to live market data APIs
- [ ] **User Authentication**: Secure login and portfolio persistence
- [ ] **Advanced Charting**: Candlestick charts and technical indicators
- [ ] **Portfolio Tracking**: Real portfolio management with transactions
- [ ] **Mobile App**: React Native companion app
- [ ] **Voice Commands**: Voice-controlled AI interactions
- [ ] **Social Features**: Share insights and follow other investors

### Performance Optimizations
- [ ] **Code Splitting**: Lazy loading for better performance
- [ ] **Image Optimization**: Next.js Image component integration
- [ ] **Caching Strategy**: Redis caching for API responses
- [ ] **PWA Support**: Progressive Web App capabilities

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful UI components
- **Recharts**: Powerful charting library
- **Lucide React**: Consistent icon system
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join GitHub Discussions for questions

---

<div align="center">
  <p>Built with ❤️ by the Investing IQ team</p>
  <p>
    <a href="https://github.com/your-username/investing-iq-dashboard">⭐ Star this repo</a> •
    <a href="https://github.com/your-username/investing-iq-dashboard/issues">🐛 Report Bug</a> •
    <a href="https://github.com/your-username/investing-iq-dashboard/discussions">💬 Discussions</a>
  </p>
</div>
