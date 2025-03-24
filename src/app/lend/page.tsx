import Link from "next/link"
import { Heart, ArrowLeft, CreditCard, Landmark, TrendingUp, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function LendPage() {
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
        <div className="container max-w-4xl py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Lend to a Campaign</h1>
              <p className="text-muted-foreground">
                Support campaigns by lending funds with or without interest. Your contribution makes a difference.
              </p>
            </div>
            <Tabs defaultValue="no-interest" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="no-interest" className="flex items-center gap-2">
                  <Landmark className="h-4 w-4" />
                  <span>Lend Without Interest</span>
                </TabsTrigger>
                <TabsTrigger value="with-interest" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Lend With Interest</span>
                </TabsTrigger>
              </TabsList>

              {/* No Interest Lending Tab */}
              <TabsContent value="no-interest" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Interest-Free Lending 🏦</CardTitle>
                        <CardDescription>
                          Support campaigns by lending money without expecting interest in return
                        </CardDescription>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">More information</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Your funds will be returned to you after the campaign's completion according to the
                              repayment schedule. No interest will be charged.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount-no-interest">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="custom-amount-no-interest"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="campaign-no-interest">Select Campaign</Label>
                      <select
                        id="campaign-no-interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a campaign</option>
                        <option value="1">Medical Treatment for Sarah</option>
                        <option value="2">Rebuild After the Flood</option>
                        <option value="3">Education for Rural Children</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="repayment-period-no-interest">Repayment Period</Label>
                      <select
                        id="repayment-period-no-interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                      </select>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Interest-Free Lending Terms</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Your funds will be returned according to the repayment schedule</li>
                        <li>• No interest will be charged to the borrower</li>
                        <li>• We act as an escrow service to ensure secure transactions</li>
                        <li>• You'll receive regular updates on the campaign's progress</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="space-y-2 w-full">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <CreditCard className="h-6 w-6" />
                          <span>Credit Card</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <Button className="w-full" size="lg">
                      Continue to Payment
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* With Interest Lending Tab */}
              <TabsContent value="with-interest" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Interest-Based Lending 📈</CardTitle>
                        <CardDescription>Support campaigns while earning interest on your contribution</CardDescription>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">More information</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Your funds will be returned with interest according to the rate set by the borrower. We
                              act as an escrow service to ensure secure transactions.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount-with-interest">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="custom-amount-with-interest"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="campaign-with-interest">Select Campaign</Label>
                      <select
                        id="campaign-with-interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a campaign</option>
                        <option value="1">Medical Treatment for Sarah (3% interest)</option>
                        <option value="2">Rebuild After the Flood (5% interest)</option>
                        <option value="3">Education for Rural Children (2% interest)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="repayment-period-with-interest">Repayment Period</Label>
                      <select
                        id="repayment-period-with-interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                      </select>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Interest-Based Lending Terms</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Interest rates are set by the campaign creator</li>
                        <li>• Your funds plus interest will be returned according to the repayment schedule</li>
                        <li>• We act as an escrow service to ensure secure transactions</li>
                        <li>• You'll receive regular updates on the campaign's progress</li>
                        <li>• Interest earnings may be subject to taxes in your jurisdiction</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4 bg-primary/5">
                      <h4 className="font-medium mb-2">Potential Return</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Principal Amount</p>
                          <p className="font-medium">$100.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Interest Rate</p>
                          <p className="font-medium">3.0%</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Term</p>
                          <p className="font-medium">12 months</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Return</p>
                          <p className="font-medium">$103.00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="space-y-2 w-full">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <CreditCard className="h-6 w-6" />
                          <span>Credit Card</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <Button variant="outline" className="flex flex-col items-center justify-center gap-1 h-20">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <Button className="w-full" size="lg">
                      Continue to Payment
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
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

