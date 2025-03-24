import Link from "next/link"
import { Heart, User, CreditCard, FileText, Globe, Linkedin, Twitter, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl lg:hidden">
          <Heart className="h-6 w-6" />
          <span>FundRaiser</span>
        </Link>
        <div className="w-full flex-1">
          <h1 className="font-semibold text-lg md:text-xl">My Profile</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/create">
            <Button size="sm" variant="outline">
              New Request
            </Button>
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
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
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    Overview
                  </Button>
                </Link>
                <Link href="/dashboard/profile">
                  <Button variant="secondary" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    My Profile
                  </Button>
                </Link>
                <Link href="/dashboard/donations">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Donations
                  </Button>
                </Link>
                <Link href="/dashboard/requests">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <FileText className="h-4 w-4" />
                    My Requests
                  </Button>
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Settings</h2>
              <div className="space-y-1">
                <Link href="/dashboard/settings">
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
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Details</TabsTrigger>
                <TabsTrigger value="academic">Academic Details</TabsTrigger>
                <TabsTrigger value="donations">Donated Amount</TabsTrigger>
                <TabsTrigger value="requests">Make a Request</TabsTrigger>
              </TabsList>

              {/* Basic Details Tab */}
              <TabsContent value="basic" className="space-y-6 mt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details and contact information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="flex flex-col items-center gap-2">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                            <AvatarFallback className="text-2xl">JD</AvatarFallback>
                          </Avatar>
                          <Button variant="outline" size="sm">
                            Change Photo
                          </Button>
                        </div>
                        <div className="grid flex-1 gap-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" defaultValue="Doe" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="john.doe@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" defaultValue="123 Main Street, Apt 4B, New York, NY 10001" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="New York" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" defaultValue="NY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">Zip Code</Label>
                          <Input id="zip" defaultValue="10001" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" defaultValue="United States" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                  <div className="flex flex-col gap-6 md:w-80">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="px-3 py-1">
                            Verified
                          </Badge>
                          <Badge variant="outline" className="px-3 py-1">
                            Donor
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Member Since</span>
                            <span>Jan 2023</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Total Donated</span>
                            <span>$1,250</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Campaigns Supported</span>
                            <span>7</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Requests Created</span>
                            <span>2</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-notifications" className="flex-1">
                            Email Notifications
                          </Label>
                          <input
                            type="checkbox"
                            id="email-notifications"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="sms-notifications" className="flex-1">
                            SMS Notifications
                          </Label>
                          <input type="checkbox" id="sms-notifications" className="h-4 w-4 rounded border-gray-300" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="marketing-emails" className="flex-1">
                            Marketing Emails
                          </Label>
                          <input type="checkbox" id="marketing-emails" className="h-4 w-4 rounded border-gray-300" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          Update Preferences
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Academic Details Tab */}
              <TabsContent value="academic" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic & Professional Information</CardTitle>
                    <CardDescription>Update your education, work experience, and professional profiles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Education</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="university">University/College</Label>
                          <Input id="university" defaultValue="Columbia University" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="degree">Degree</Label>
                          <Input id="degree" defaultValue="Master of Business Administration" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="field">Field of Study</Label>
                          <Input id="field" defaultValue="Finance" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="graduation">Graduation Year</Label>
                          <Input id="graduation" type="number" defaultValue="2018" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        + Add Another Education
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Work Experience</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" defaultValue="Acme Corporation" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Input id="position" defaultValue="Senior Financial Analyst" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input id="start-date" type="month" defaultValue="2018-06" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input id="end-date" type="month" defaultValue="2023-02" placeholder="Present" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-description">Description</Label>
                        <Textarea
                          id="job-description"
                          defaultValue="Led financial analysis for key company initiatives and managed a team of 5 analysts."
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        + Add Another Experience
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Professional Profiles</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Linkedin className="h-5 w-5 text-[#0077b5]" />
                          <div className="space-y-2 flex-1">
                            <Label htmlFor="linkedin">LinkedIn Profile</Label>
                            <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Github className="h-5 w-5" />
                          <div className="space-y-2 flex-1">
                            <Label htmlFor="github">GitHub Profile</Label>
                            <Input id="github" defaultValue="https://github.com/johndoe" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                          <div className="space-y-2 flex-1">
                            <Label htmlFor="twitter">Twitter Profile</Label>
                            <Input id="twitter" defaultValue="https://twitter.com/johndoe" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5" />
                          <div className="space-y-2 flex-1">
                            <Label htmlFor="website">Personal Website</Label>
                            <Input id="website" defaultValue="https://johndoe.com" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Skills & Expertise</h3>
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills (comma separated)</Label>
                        <Input
                          id="skills"
                          defaultValue="Financial Analysis, Project Management, Data Analysis, Leadership, Strategic Planning"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Donated Amount Tab */}
              <TabsContent value="donations" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Donation History</CardTitle>
                    <CardDescription>Track all your donations and their impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-2xl font-bold">$1,250</CardTitle>
                          <CardDescription>Total Donated</CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-2xl font-bold">7</CardTitle>
                          <CardDescription>Campaigns Supported</CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-2xl font-bold">$178</CardTitle>
                          <CardDescription>Average Donation</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>

                    <div className="rounded-md border">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead>
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Campaign</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                              <th className="h-12 px-4 text-left align-middle font-medium">Receipt</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donations.map((donation) => (
                              <tr
                                key={donation.id}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                              >
                                <td className="p-4 align-middle">{donation.date}</td>
                                <td className="p-4 align-middle">{donation.campaign}</td>
                                <td className="p-4 align-middle font-medium">${donation.amount}</td>
                                <td className="p-4 align-middle">
                                  <Badge variant={donation.status === "Completed" ? "success" : "outline"}>
                                    {donation.status}
                                  </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <span className="sr-only">Download receipt</span>
                                    <FileText className="h-4 w-4" />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Impact Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {impactSummary.map((impact) => (
                          <div key={impact.id} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{impact.category}</span>
                              <span>{impact.percentage}%</span>
                            </div>
                            <Progress value={impact.percentage} className="h-2" />
                            <p className="text-sm text-muted-foreground">{impact.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Link href="/donate">
                        <Button>Make a New Donation</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Make a Request Tab */}
              <TabsContent value="requests" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Create a Funding Request</CardTitle>
                        <CardDescription>Fill out the form below to create a new fundraising campaign</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="request-title">Campaign Title</Label>
                          <Input id="request-title" placeholder="Enter a clear, descriptive title" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="request-category">Category</Label>
                            <select
                              id="request-category"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">Select a category</option>
                              <option value="medical">Medical</option>
                              <option value="education">Education</option>
                              <option value="disaster">Disaster Relief</option>
                              <option value="community">Community Project</option>
                              <option value="personal">Personal Need</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="request-goal">Funding Goal ($)</Label>
                            <Input id="request-goal" type="number" placeholder="Enter amount needed" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="request-start">Start Date</Label>
                            <Input id="request-start" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="request-end">End Date</Label>
                            <Input id="request-end" type="date" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="request-summary">Short Summary</Label>
                          <Textarea id="request-summary" placeholder="Brief description (100-150 characters)" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="request-story">Your Story</Label>
                          <Textarea
                            id="request-story"
                            placeholder="Tell your complete story. Be specific about how the funds will be used."
                            className="min-h-[150px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="request-image">Campaign Image</Label>
                          <div className="flex items-center gap-4">
                            <div className="h-24 w-24 rounded-md border border-dashed border-gray-300 flex items-center justify-center">
                              <Button variant="ghost" size="sm">
                                Upload
                              </Button>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <p>Upload a high-quality image that represents your campaign.</p>
                              <p>Recommended size: 1200 x 630 pixels. Max file size: 5MB.</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Save as Draft</Button>
                        <Button>Submit Request</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Requests</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {userRequests.map((request) => (
                          <div key={request.id} className="border rounded-lg p-4 space-y-2">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{request.title}</h4>
                              <Badge
                                variant={
                                  request.status === "Active"
                                    ? "default"
                                    : request.status === "Pending"
                                      ? "outline"
                                      : request.status === "Completed"
                                        ? "success"
                                        : "destructive"
                                }
                              >
                                {request.status}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Goal:</span>
                                <span>${request.goal.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Raised:</span>
                                <span>${request.raised.toLocaleString()}</span>
                              </div>
                              <Progress value={(request.raised / request.goal) * 100} className="h-2 mt-1" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{Math.round((request.raised / request.goal) * 100)}% Funded</span>
                                <span>{request.daysLeft} days left</span>
                              </div>
                            </div>
                            <div className="pt-2 flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View All Requests
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Request Guidelines</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Tips for a Successful Campaign</h4>
                          <ul className="text-sm space-y-1 list-disc pl-4">
                            <li>Be specific about your needs and how funds will be used</li>
                            <li>Include a compelling personal story</li>
                            <li>Add high-quality photos or videos</li>
                            <li>Set a realistic funding goal</li>
                            <li>Share your campaign on social media</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Verification Process</h4>
                          <p className="text-sm text-muted-foreground">
                            All requests undergo a verification process that typically takes 1-2 business days. We may
                            contact you for additional information.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

// Sample data
const donations = [
  {
    id: 1,
    date: "Mar 15, 2023",
    campaign: "Medical Treatment for Sarah",
    amount: 250,
    status: "Completed",
  },
  {
    id: 2,
    date: "Feb 28, 2023",
    campaign: "Education for Rural Children",
    amount: 100,
    status: "Completed",
  },
  {
    id: 3,
    date: "Jan 12, 2023",
    campaign: "Rebuild After the Flood",
    amount: 300,
    status: "Completed",
  },
  {
    id: 4,
    date: "Dec 5, 2022",
    campaign: "Community Garden Project",
    amount: 150,
    status: "Completed",
  },
  {
    id: 5,
    date: "Nov 20, 2022",
    campaign: "Medical Treatment for Sarah",
    amount: 200,
    status: "Completed",
  },
  {
    id: 6,
    date: "Oct 8, 2022",
    campaign: "Disaster Relief Fund",
    amount: 250,
    status: "Completed",
  },
]

const impactSummary = [
  {
    id: 1,
    category: "Medical Assistance",
    percentage: 45,
    description: "Your donations have helped provide medical care to 3 individuals in need.",
  },
  {
    id: 2,
    category: "Education",
    percentage: 20,
    description: "You've contributed to educational resources for 12 children in underserved communities.",
  },
  {
    id: 3,
    category: "Disaster Relief",
    percentage: 25,
    description: "Your support has helped 5 families recover from natural disasters.",
  },
  {
    id: 4,
    category: "Community Projects",
    percentage: 10,
    description: "You've helped fund 2 local community improvement initiatives.",
  },
]

const userRequests = [
  {
    id: 1,
    title: "College Tuition Assistance",
    goal: 15000,
    raised: 8750,
    daysLeft: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "Medical Procedure Funding",
    goal: 25000,
    raised: 25000,
    daysLeft: 0,
    status: "Completed",
  },
  {
    id: 3,
    title: "Community Workshop Space",
    goal: 10000,
    raised: 2500,
    daysLeft: 60,
    status: "Pending",
  },
]

