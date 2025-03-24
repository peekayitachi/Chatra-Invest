import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowLeft, CreditCard, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function LendCampaignPage({
  params,
  searchParams,
}: { params: { id: string }; searchParams: { type?: string } }) {
  const campaignId = Number.parseInt(params.id)
  const campaign = campaigns.find((c) => c.id === campaignId) || campaigns[0]
  const lendType = searchParams.type || "no-interest"

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6" />
            <span>FundRaiser</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-5xl py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div>
              <div className="space-y-2 mb-6">
                <h1 className="text-3xl font-bold tracking-tight">{campaign.title}</h1>
                <p className="text-muted-foreground">
                  Support this campaign by lending funds{" "}
                  {lendType === "with-interest" ? "with interest" : "interest-free"}
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge variant={campaign.urgent ? "destructive" : "secondary"}>
                        {campaign.urgent ? "Urgent" : campaign.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">${campaign.raised.toLocaleString()}</span>
                        <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{Math.round((campaign.raised / campaign.goal) * 100)}% Funded</span>
                        <span>{campaign.supporters} supporters</span>
                      </div>
                    </div>

                    <p>{campaign.description}</p>

                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Repayment Terms</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Repayment Period: {campaign.repaymentPeriod} months</li>
                        <li>• Repayment Schedule: Monthly installments</li>
                        {lendType === "with-interest" && <li>• Interest Rate: {campaign.interestRate}% per annum</li>}
                        <li>• First Payment Due: 30 days after campaign ends</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {lendType === "with-interest" ? "Lend with Interest 📈" : "Lend Interest-Free 🏦"}
                  </CardTitle>
                  <CardDescription>
                    {lendType === "with-interest"
                      ? `Support this campaign while earning ${campaign.interestRate}% interest`
                      : "Support this campaign with an interest-free loan"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="lend-amount">Amount to Lend</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="lend-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="pl-8"
                        defaultValue={lendType === "with-interest" ? "100" : "50"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="repayment-period">Repayment Period</Label>
                    <select
                      id="repayment-period"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue={campaign.repaymentPeriod}
                    >
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                    </select>
                  </div>

                  {lendType === "with-interest" && (
                    <div className="rounded-lg border p-4 bg-primary/5">
                      <h4 className="font-medium mb-2">Potential Return</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Principal Amount</p>
                          <p className="font-medium">$100.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Interest Rate</p>
                          <p className="font-medium">{campaign.interestRate}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Term</p>
                          <p className="font-medium">{campaign.repaymentPeriod} months</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Return</p>
                          <p className="font-medium">
                            ${(100 * (1 + (campaign.interestRate / 100) * (campaign.repaymentPeriod / 12))).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center gap-1 h-16 text-xs"
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Credit Card</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center gap-1 h-16 text-xs"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.5 10.5H17.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 15.5H9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 15.5H13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9V15C22 16.8856 22 17.8284 21.4142 18.4142C20.8284 19 19.8856 19 18 19H6C4.11438 19 3.17157 19 2.58579 18.4142C2 17.8284 2 16.8856 2 15V9Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>PayPal</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center gap-1 h-16 text-xs"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M14 6.5C14 7.88071 12.8807 9 11.5 9C10.1193 9 9 7.88071 9 6.5C9 5.11929 10.1193 4 11.5 4C12.8807 4 14 5.11929 14 6.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M20 11.5C20 12.8807 18.8807 14 17.5 14C16.1193 14 15 12.8807 15 11.5C15 10.1193 16.1193 9 17.5 9C18.8807 9 20 10.1193 20 11.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M14 16.5C14 17.8807 12.8807 19 11.5 19C10.1193 19 9 17.8807 9 16.5C9 15.1193 10.1193 14 11.5 14C12.8807 14 14 15.1193 14 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M6.5 14C6.5 14 9 14 11.5 14M11.5 9C11.5 9 11.5 11.5 11.5 14M17.5 14L11.5 14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span>Apple Pay</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full">Continue to Payment</Button>

                  <div className="text-xs text-center text-muted-foreground">
                    By proceeding, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-2">
                      Terms of Service
                    </Link>{" "}
                    and acknowledge that we act as an escrow service for this transaction.
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-4 flex justify-between">
                <Link
                  href={`/lend/${campaign.id}?type=${lendType === "with-interest" ? "no-interest" : "with-interest"}`}
                >
                  <Button variant="ghost" size="sm">
                    Switch to {lendType === "with-interest" ? "Interest-Free" : "With Interest"}
                  </Button>
                </Link>
                <Link href={`/donate/${campaign.id}`}>
                  <Button variant="ghost" size="sm">
                    Donate Instead
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-6 w-6" />
              <span>FundRaiser</span>
            </Link>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} FundRaiser. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample campaign data
const campaigns = [
  {
    id: 1,
    title: "Medical Treatment for Sarah",
    description:
      "Help Sarah get the life-saving surgery she needs to overcome her rare condition. Your support will cover medical expenses, hospital stay, and post-surgery care.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 15000,
    goal: 25000,
    daysLeft: 12,
    category: "Medical",
    urgent: true,
    supporters: 142,
    repaymentPeriod: 12,
    interestRate: 3,
  },
  {
    id: 2,
    title: "Rebuild After the Flood",
    description:
      "Support families who lost their homes in the recent flooding in the coastal region. Funds will help rebuild homes and provide essential supplies.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 45000,
    goal: 100000,
    daysLeft: 30,
    category: "Disaster",
    urgent: false,
    supporters: 328,
    repaymentPeriod: 24,
    interestRate: 5,
  },
  {
    id: 3,
    title: "Education for Rural Children",
    description:
      "Provide books, supplies and infrastructure for a school in an underserved rural community. Your support will help educate the next generation.",
    image: "/placeholder.svg?height=400&width=600",
    raised: 12000,
    goal: 20000,
    daysLeft: 45,
    category: "Education",
    urgent: false,
    supporters: 98,
    repaymentPeriod: 18,
    interestRate: 2,
  },
]

