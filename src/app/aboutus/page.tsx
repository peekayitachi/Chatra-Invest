
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>


          <h1 className="text-3xl font-bold tracking-tight mb-2">About Us</h1>
          <p className="text-muted-foreground">Our mission and story</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We connect students who need financial assistance with donors and lenders who believe in their potential.
            </p>
            <p className="mb-6">
              At StudentFund, we believe that financial constraints should never limit a student's potential. Our
              platform bridges the gap between ambitious students with promising ideas and individuals who want to make
              a meaningful impact through their financial support.
            </p>
            <p>
              Whether it's funding education, supporting a small business idea, or helping with a community project, we
              provide a transparent and secure platform for students to raise the capital they need to succeed.
            </p>
          </section>

          <div className="border-t border-b py-12">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">How Arjun Beat the Odds</CardTitle>
                <CardDescription>A story of perseverance and community support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative aspect-square md:aspect-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Arjun's story"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      Arjun was on the verge of dropping out due to tuition fees. With our platform, he received small
                      loans from caring individuals across India and turned his life around.
                    </p>
                    <p className="mb-4">
                      Coming from a small village in rural India, Arjun had secured admission to a prestigious
                      engineering college but couldn't afford the fees. His family had already sold their small plot of
                      land to fund his first semester.
                    </p>
                    <p>
                      Through StudentFund, Arjun created a campaign that caught the attention of 15 lenders who
                      collectively funded his education. Today, Arjun works at a leading tech company and has repaid all
                      his loans. He now regularly contributes to other students' campaigns on our platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Transparent funding model</h3>
                  <p className="text-muted-foreground">
                    Choose between donation or lending with clear terms and conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Secure escrow service</h3>
                  <p className="text-muted-foreground">
                    We handle all transactions securely and ensure funds are used as intended.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Real impact stories</h3>
                  <p className="text-muted-foreground">
                    Track how your contribution is making a difference in students' lives.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Flexible interest options</h3>
                  <p className="text-muted-foreground">
                    Lend with or without interest based on your preference and the student's needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt={`Team member ${member}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Team Member {member}</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
