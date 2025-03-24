"use client"

import { useState } from "react"
import { useBasicDetailsStore } from "@/lib/stores/basic-details-store"
import { useAcademicDetailsStore } from "@/lib/stores/academic-details-store"
import { BasicDetailsForm } from "@/components/profile/basic-details-form"
import { AcademicDetailsList } from "@/components/profile/academic-details-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { User, GraduationCap, Save } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("basic")
  const { saveBasicDetails } = useBasicDetailsStore()
  const { saveAcademicDetails } = useAcademicDetailsStore()

  const handleSave = () => {
    if (activeTab === "basic") {
      saveBasicDetails()
      toast({
        title: "Basic details saved",
        description: "Your profile information has been updated successfully.",
      })
    } else {
      saveAcademicDetails()
      toast({
        title: "Academic details saved",
        description: "Your education information has been updated successfully.",
      })
    }
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your personal and academic information</p>
        </div>
        <Button onClick={handleSave} className="shrink-0">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Basic Details</span>
          </TabsTrigger>
          <TabsTrigger value="academic" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Details</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Details</CardTitle>
              <CardDescription>Update your personal information and contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <BasicDetailsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Details</CardTitle>
              <CardDescription>Add your education history and academic achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <AcademicDetailsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

