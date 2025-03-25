import Link from "next/link"
import Image from "next/image"
import { Heart, BarChart3, TrendingUp, ArrowRight, DollarSign, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getAllItems } from "lib/db";

const campaignsData = await getAllItems("campaigns");

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6" />
            <span>Dakshina</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/aboutus" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contactus" className="text-sm font-medium hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Make a difference today with your support
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of supporters who are changing lives through our platform. Every contribution counts,
                  whether you donate or lend.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/donate">
                    <Button size="lg" className="px-8">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/lend">
                    <Button variant="outline" size="lg" className="px-8">
                      Lend Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/Main-page-main-image.jpg"
                  alt="People helping each other"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Current Fundraising Requests
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through the campaigns that need your support right now
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {campaignsData.map((campaign) => (
                <Card key={campaign.campaign_id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardDescription className="line-clamp-2">{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">not in db rn</span>
                        <span className="text-muted-foreground">of ${campaign.total_fund.toLocaleString()}</span>
                      </div>
                      <Progress value={(100 / campaign.total_fund) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{Math.round((100 / campaign.total_fund) * 100)}% Funded</span>
                        <span>{7} days left</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <Link href={`/donate`} className="col-span-3 sm:col-span-1">
                        <Button variant="default" size="sm" className="w-full flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>Donate</span>
                        </Button>
                      </Link>
                      <Link href={`/lend`} className="col-span-3 sm:col-span-1">
                        <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                          <Landmark className="h-4 w-4" />
                          <span>Lend</span>
                        </Button>
                      </Link>
                      <Link href={`/lend`} className="col-span-3 sm:col-span-1">
                        <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>Lend+</span>
                        </Button>
                      </Link>
                    </div>
                    <Link href={`/campaigns`} className="w-full">
                      <Button variant="ghost" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/campaigns">
                <Button variant="outline" className="gap-2">
                  View All Campaigns
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Three Ways to Support</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose how you want to make an impact
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Donate 💰</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make a direct donation with 0% interest. Your contribution goes directly to the cause with no
                    expectation of return.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/donate" className="w-full">
                    <Button variant="default" className="w-full">
                      Donate Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lend (No Interest) 🏦</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lend money interest-free to support campaigns. Your funds will be returned to you after the
                    campaign's completion.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/lend?type=no-interest" className="w-full">
                    <Button variant="outline" className="w-full">
                      Lend Without Interest
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lend (With Interest) 📈</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lend money with interest rates set by borrowers. Support campaigns while earning a return on your
                    investment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/lend?type=with-interest" className="w-full">
                    <Button variant="outline" className="w-full">
                      Lend With Interest
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to support campaigns in multiple ways
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Choose a Campaign</h3>
                <p className="text-muted-foreground">
                  Browse through verified campaigns and find causes you want to support.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Select Support Type</h3>
                <p className="text-muted-foreground">
                  Decide whether you want to donate or lend with or without interest.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Secure Transaction</h3>
                <p className="text-muted-foreground">
                  We act as an escrow service, ensuring your funds are handled securely.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Track Impact</h3>
                <p className="text-muted-foreground">
                  Follow the progress of campaigns you've supported and see your impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-6 w-6" />
              <span>Dakshina</span>
            </Link>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Dakshina. All rights reserved.
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
    description: "Help Sarah get the life-saving surgery she needs to overcome her rare condition.",
    image: "/sarah.png",
    raised: 15000,
    goal: 25000,
    daysLeft: 12,
    category: "Medical",
    urgent: true,
  },
  {
    id: 2,
    title: "Rebuild After the Flood",
    description: "Support families who lost their homes in the recent flooding in the coastal region.",
    image: "/Flood.png",
    raised: 45000,
    goal: 100000,
    daysLeft: 30,
    category: "Disaster",
    urgent: false,
  },
  {
    id: 3,
    title: "Education for Rural Children",
    description: "Provide books, supplies and infrastructure for a school in an underserved rural community.",
    image: "/education.png",
    raised: 12000,
    goal: 20000,
    daysLeft: 45,
    category: "Education",
    urgent: false,
  },
]

