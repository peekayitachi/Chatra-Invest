import Link from "next/link"
import { BarChart3, Heart, Users, CreditCard, Clock, TrendingUp, ListFilter, Download, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl lg:hidden">
          <Heart className="h-6 w-6" />
          <span>FundRaiser</span>
        </Link>
        <div className="w-full flex-1">
          <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/create">
            <Button size="sm" className="hidden md:flex gap-2">
              <Plus className="h-4 w-4" />
              New Campaign
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
                className="rounded-full"
                height={32}
                width={32}
              />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </header>
      <div className="flex-1 flex">
        <aside className="hidden lg:flex w-64 flex-col border-r bg-muted/40">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Heart className="h-6 w-6" />
              <span>FundRaiser</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <Link href="/dashboard">
                  <Button variant="secondary" className="w-full justify-start gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Overview
                  </Button>
                </Link>
                <Link href="/dashboard/campaigns">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    My Campaigns
                  </Button>
                </Link>
                <Link href="/dashboard/donations">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Donations
                  </Button>
                </Link>
                <Link href="/dashboard/supporters">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Users className="h-4 w-4" />
                    Supporters
                  </Button>
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Settings</h2>
              <div className="space-y-1">
                <Link href="/dashboard/profile">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    Profile
                  </Button>
                </Link>
                <Link href="/dashboard/account">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    Account
                  </Button>
                </Link>
                <Link href="/dashboard/notifications">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    Notifications
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+2 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Supporters</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">+18.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Donation</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$132.40</div>
                  <p className="text-xs text-muted-foreground">+7.4% from last month</p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="overview" className="mt-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span>Filter</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Download className="h-3.5 w-3.5" />
                    <span>Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Campaign Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                        <p className="text-sm text-muted-foreground">Campaign performance chart would appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Donations</CardTitle>
                      <CardDescription>You received 12 donations this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentDonations.map((donation) => (
                          <div key={donation.id} className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <Heart className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">{donation.name}</p>
                              <p className="text-sm text-muted-foreground">{donation.campaign}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <p className="text-sm font-medium">${donation.amount}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{donation.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Campaigns</CardTitle>
                    <CardDescription>Track the progress of your active fundraising campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {activeCampaigns.map((campaign) => (
                        <div key={campaign.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{campaign.title}</p>
                              <p className="text-sm text-muted-foreground">{campaign.daysLeft} days left</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">
                                ${campaign.raised.toLocaleString()} of ${campaign.goal.toLocaleString()}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {Math.round((campaign.raised / campaign.goal) * 100)}% Complete
                              </p>
                            </div>
                          </div>
                          <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="campaigns" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Campaigns</CardTitle>
                    <CardDescription>Manage and monitor all your fundraising campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Campaigns table would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Detailed analytics and insights about your fundraising activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Analytics dashboard would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

// Sample data
const recentDonations = [
  {
    id: 1,
    name: "John Smith",
    campaign: "Medical Treatment for Sarah",
    amount: 150,
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Emily Johnson",
    campaign: "Rebuild After the Flood",
    amount: 75,
    time: "5 hours ago",
  },
  {
    id: 3,
    name: "Michael Brown",
    campaign: "Education for Rural Children",
    amount: 200,
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Anonymous",
    campaign: "Medical Treatment for Sarah",
    amount: 50,
    time: "Yesterday",
  },
]

const activeCampaigns = [
  {
    id: 1,
    title: "Medical Treatment for Sarah",
    raised: 15000,
    goal: 25000,
    daysLeft: 12,
  },
  {
    id: 2,
    title: "Rebuild After the Flood",
    raised: 45000,
    goal: 100000,
    daysLeft: 30,
  },
  {
    id: 3,
    title: "Education for Rural Children",
    raised: 12000,
    goal: 20000,
    daysLeft: 45,
  },
]

