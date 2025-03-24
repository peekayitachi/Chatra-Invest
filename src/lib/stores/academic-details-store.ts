"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AcademicEntry } from "@/lib/types"

interface AcademicDetailsState {
  academicEntries: AcademicEntry[]
  addAcademicEntry: (entry: AcademicEntry) => void
  updateAcademicEntry: (index: number, entry: AcademicEntry) => void
  removeAcademicEntry: (index: number) => void
  saveAcademicDetails: () => void
  resetAcademicDetails: () => void
}

export const useAcademicDetailsStore = create<AcademicDetailsState>()(
  persist(
    (set) => ({
      academicEntries: [],
      addAcademicEntry: (entry) =>
        set((state) => ({
          academicEntries: [...state.academicEntries, entry],
        })),
      updateAcademicEntry: (index, entry) =>
        set((state) => ({
          academicEntries: state.academicEntries.map((item, i) => (i === index ? entry : item)),
        })),
      removeAcademicEntry: (index) =>
        set((state) => ({
          academicEntries: state.academicEntries.filter((_, i) => i !== index),
        })),
      saveAcademicDetails: () => set({}), // Just trigger a save
      resetAcademicDetails: () => set({ academicEntries: [] }),
    }),
    {
      name: "academic-details-storage",
    },
  ),
)

