'use client'

import { useState } from 'react'

interface Message {
  content: string
  type: 'user' | 'ai'
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your FLHA assistant. I'll help you create a comprehensive Field Level Hazard Assessment. Let's start with some basic information about your work.\n\nWhat type of work will you be performing today?",
      type: 'ai'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      content: input,
      type: 'user'
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()
      
      // Add AI response
      const aiMessage: Message = {
        content: data.message,
        type: 'ai'
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      // Add error message
      const errorMessage: Message = {
        content: 'Sorry, there was an error processing your request.',
        type: 'ai'
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-amber-600 text-black'
                  : 'bg-zinc-800/50 text-zinc-300 border border-amber-600/20'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800/50 rounded-lg p-3 text-zinc-400 border border-amber-600/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-amber-600/20">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 bg-zinc-800/50 border border-amber-600/20 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-amber-600 text-black rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
} 