"use client"

import type React from "react"

import { useAcademicDetailsStore } from "@/lib/stores/academic-details-store"
import type { AcademicEntry } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface AcademicEntryFormProps {
  entry?: AcademicEntry
  index?: number
  onCancel: () => void
}

export function AcademicEntryForm({ entry, index, onCancel }: AcademicEntryFormProps) {
  const { addAcademicEntry, updateAcademicEntry } = useAcademicDetailsStore()
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(entry?.endDate === undefined)

  const [formData, setFormData] = useState<AcademicEntry>(
    entry || {
      university: "",
      degree: "",
      fieldOfStudy: "",
      currentcgpa: "",
      startDate: "",
      endDate: "",
      grade: "",
      achievements: "",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setIsCurrentlyStudying(checked)
    if (checked) {
      setFormData((prev) => ({ ...prev, endDate: undefined }))
    } else {
      setFormData((prev) => ({ ...prev, endDate: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (index !== undefined) {
      updateAcademicEntry(index, formData)
    } else {
      addAcademicEntry(formData)
    }

    onCancel()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="university">University/Institution</Label>
            <Input
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="e.g., Stanford University"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g., Bachelor of Science"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">Field of Study</Label>
              <Input
                id="fieldOfStudy"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                required
              />
              <div className="space-y-2">
                <Label htmlFor="currentcgpa">Current CGPA</Label>
                <Input
                  id="currentcgpa"
                  name="currentcgpa"
                  value={formData.currentcgpa}
                  onChange={handleChange}
                  placeholder="e.g : 8"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                type="month"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                type="month"
                value={formData.endDate || ""}
                onChange={handleChange}
                disabled={isCurrentlyStudying}
                required={!isCurrentlyStudying}
              />
              <div className="flex items-center space-x-2 pt-1">
                <Checkbox id="currentlyStudying" checked={isCurrentlyStudying} onCheckedChange={handleCheckboxChange} />
                <label
                  htmlFor="currentlyStudying"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I am currently studying here
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="grade">Grade/GPA (Optional)</Label>
            <Input
              id="grade"
              name="grade"
              value={formData.grade || ""}
              onChange={handleChange}
              placeholder="e.g., 3.8/4.0 or First Class Honours"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="achievements">Achievements & Activities (Optional)</Label>
            <Textarea
              id="achievements"
              name="achievements"
              value={formData.achievements || ""}
              onChange={handleChange}
              placeholder="List notable achievements, activities, societies, etc."
              className="min-h-[100px]"
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{index !== undefined ? "Update" : "Add"} Education</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

