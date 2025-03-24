
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Upload } from "lucide-react"

export default function CreateCampaignPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    title: "",
    purpose: "",
    totalCapital: "",
    fundingType: "donation",
    interestRate: "",
    image: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, fundingType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    console.log("Form submitted:", formState)
    // Redirect to campaigns page
    router.push("/campaigns")
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>


          <h1 className="text-3xl font-bold tracking-tight mb-2">Create a Campaign</h1>
          <p className="text-muted-foreground">Share your story and funding needs</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
              <CardDescription>
                Provide information about your campaign to help potential supporters understand your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Campaign Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="Enter a clear, descriptive title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="purpose">What is this campaign for?</Label>
                <Textarea
                  id="purpose"
                  name="purpose"
                  value={formState.purpose}
                  onChange={handleChange}
                  placeholder="Describe the purpose of your campaign and how the funds will be used"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalCapital">Total Capital Needed (₹)</Label>
                <Input
                  id="totalCapital"
                  name="totalCapital"
                  type="number"
                  value={formState.totalCapital}
                  onChange={handleChange}
                  placeholder="Enter amount in rupees"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Funding Type</Label>
                <RadioGroup
                  value={formState.fundingType}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="donation" id="donation" />
                    <Label htmlFor="donation">Donation (No repayment required)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interest-free" id="interest-free" />
                    <Label htmlFor="interest-free">Lend Interest-Free (Repayment required without interest)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="with-interest" id="with-interest" />
                    <Label htmlFor="with-interest">Lend with Interest (Repayment required with interest)</Label>
                  </div>
                </RadioGroup>
              </div>

              {formState.fundingType === "with-interest" && (
                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    name="interestRate"
                    type="number"
                    value={formState.interestRate}
                    onChange={handleChange}
                    placeholder="Enter interest rate percentage"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This is the interest rate you are willing to pay to lenders.
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label>Campaign Image</Label>
                <div className="flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Select Image
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.push("/campaigns")}>
                Cancel
              </Button>
              <Button type="submit">Create Campaign</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
