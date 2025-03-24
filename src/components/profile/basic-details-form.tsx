"use client"

import type React from "react"

import { useBasicDetailsStore } from "@/lib/stores/basic-details-store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Globe, Mail, MapPin, Phone, Upload } from "lucide-react"

export function BasicDetailsForm() {
  const { basicDetails, updateBasicDetails, isEditing } = useBasicDetailsStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateBasicDetails({ [name]: value })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src={basicDetails.avatarUrl || "/placeholder.svg?height=96&width=96"} alt="Profile" />
            <AvatarFallback className="text-2xl">
              {basicDetails.firstName?.charAt(0) || "U"}
              {basicDetails.lastName?.charAt(0) || ""}
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="mt-2">
            <Upload className="mr-2 h-4 w-4" />
            Upload Photo
          </Button>
        </div>

        <div className="grid flex-1 gap-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={basicDetails.firstName || ""}
                onChange={handleChange}
                placeholder="Enter your first name"
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={basicDetails.lastName || ""}
                onChange={handleChange}
                placeholder="Enter your last name"
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline">Professional Headline</Label>
            <Input
              id="headline"
              name="headline"
              value={basicDetails.headline || ""}
              onChange={handleChange}
              placeholder="e.g., Senior Software Engineer at Company"
              disabled={!isEditing}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">About</Label>
            <Textarea
              id="bio"
              name="bio"
              value={basicDetails.bio || ""}
              onChange={handleChange}
              placeholder="Write a short bio about yourself"
              className="min-h-[100px]"
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={basicDetails.email || ""}
            onChange={handleChange}
            placeholder="your.email@example.com"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            value={basicDetails.phone || ""}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            Location
          </Label>
          <Input
            id="location"
            name="location"
            value={basicDetails.location || ""}
            onChange={handleChange}
            placeholder="City, Country"
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            Website
          </Label>
          <Input
            id="website"
            name="website"
            value={basicDetails.website || ""}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Social Profiles</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin" className="text-sm text-muted-foreground">
              LinkedIn
            </Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={basicDetails.linkedin || ""}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter" className="text-sm text-muted-foreground">
              Twitter
            </Label>
            <Input
              id="twitter"
              name="twitter"
              value={basicDetails.twitter || ""}
              onChange={handleChange}
              placeholder="https://twitter.com/username"
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github" className="text-sm text-muted-foreground">
              GitHub
            </Label>
            <Input
              id="github"
              name="github"
              value={basicDetails.github || ""}
              onChange={handleChange}
              placeholder="https://github.com/username"
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dribbble" className="text-sm text-muted-foreground">
              Dribbble
            </Label>
            <Input
              id="dribbble"
              name="dribbble"
              value={basicDetails.dribbble || ""}
              onChange={handleChange}
              placeholder="https://dribbble.com/username"
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

