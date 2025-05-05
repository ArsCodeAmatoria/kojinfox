import { Metadata } from "next"
import { ChatInterface } from "@/components/ai-demo/chat-interface"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import { Bot, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "AI FLHA Demo | Kojin Fox",
  description: "Experience our AI-powered Field Level Hazard Assessment creator",
}

export default function AIDemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <FadeIn className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
            <span className="text-xs font-medium text-amber-600">AI INNOVATION</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
            AI-Powered <span className="text-amber-600">FLHA</span> Creator
          </h1>
          <p className="mt-4 text-zinc-400 max-w-2xl text-center">
            Experience our cutting-edge AI assistant that helps create comprehensive Field Level Hazard Assessments. 
            Simply describe your work activities, and our AI will guide you through identifying potential hazards and control measures.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Features */}
            <div className="lg:col-span-4">
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-amber-600/20">
                <h2 className="text-xl font-semibold mb-6 text-zinc-200">Key Features</h2>
                <ul className="space-y-4">
                  {[
                    "Interactive AI conversation",
                    "Dynamic hazard assessment",
                    "Real-time control measure suggestions",
                    "Export to PDF functionality",
                    "Industry-standard compliance",
                    "Customizable templates"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-zinc-300">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="lg:col-span-8">
              <div className="bg-zinc-900/50 rounded-2xl border border-amber-600/20 overflow-hidden">
                <div className="p-6 border-b border-amber-600/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-zinc-300 font-medium">AI Assistant</span>
                  </div>
                </div>
                <div className="h-[600px]">
                  <ChatInterface />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 