"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function CheckoutForm() {
  const [email, setEmail] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Your Email Address"
            type="email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Your Phone"
            type="tel"
            className="w-full"
          />
        </div>

        <Input
          placeholder="Your Address"
          className="w-full"
        />

        <Textarea
          placeholder="Notes Your Orders"
          className="min-h-[150px] w-full"
        />

        <Input
          placeholder="Add New Address"
          className="w-full"
        />

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Continue Shopping
          </Button>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Place Order
          </Button>
        </div>

        <div className="relative">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10"
          />
          <Button
            type="button"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            variant="ghost"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="Enter your mail"
              type="email"
              className="flex-1"
            />
            <Button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
            >
              Subscribe now
            </Button>
          </div>

          <div className="flex gap-4">
            <Input
              placeholder="Enter here code"
              className="flex-1"
            />
            <Button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Apply
            </Button>
          </div>
        </div>

        <Button
          type="button"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          Proceed to Checkout
        </Button>
      </form>
    </div>
  )
}

