"use client"

import { useState } from "react"
import { useAcademicDetailsStore } from "@/lib/stores/academic-details-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AcademicEntryForm } from "@/components/profile/academic-entry-form"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Pencil, Plus, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function AcademicDetailsList() {
  const { academicEntries, removeAcademicEntry } = useAcademicDetailsStore()

  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  const handleAddNew = () => {
    setIsAddingNew(true)
    setEditingIndex(null)
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index)
    setIsAddingNew(false)
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
    setIsAddingNew(false)
  }

  const handleDelete = (index: number) => {
    setDeleteIndex(index)
  }

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      removeAcademicEntry(deleteIndex)
      setDeleteIndex(null)
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Present"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="space-y-6">
      {academicEntries.length === 0 && !isAddingNew ? (
        <div className="text-center py-8">
          <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-lg font-medium">No education entries yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">Add your education history to complete your profile</p>
          <Button onClick={handleAddNew} className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>
      ) : (
        <>
          {academicEntries.map((entry, index) =>
            editingIndex === index ? (
              <AcademicEntryForm key={`edit-${index}`} entry={entry} index={index} onCancel={handleCancelEdit} />
            ) : (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-4 p-6">
                    <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                      <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <h3 className="text-lg font-medium">{entry.university}</h3>
                          <p className="text-muted-foreground">
                            {entry.degree} • {entry.fieldOfStudy}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(index)}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(index)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>
                          {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
                        </span>
                      </div>
                      {entry.grade && (
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Grade: {entry.grade}</Badge>
                        </div>
                      )}
                      {entry.achievements && (
                        <div className="pt-2">
                          <p className="text-sm font-medium">Achievements</p>
                          <p className="text-sm text-muted-foreground">{entry.achievements}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ),
          )}

          {isAddingNew && <AcademicEntryForm onCancel={() => setIsAddingNew(false)} />}

          {!isAddingNew && editingIndex === null && (
            <Button onClick={handleAddNew} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Another Education
            </Button>
          )}
        </>
      )}

      <AlertDialog open={deleteIndex !== null} onOpenChange={(open) => !open && setDeleteIndex(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this education entry from your profile.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

