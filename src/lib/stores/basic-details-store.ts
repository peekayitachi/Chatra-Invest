"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { BasicDetails } from "@/lib/types"

interface BasicDetailsState {
  basicDetails: BasicDetails
  isEditing: boolean
  updateBasicDetails: (updates: Partial<BasicDetails>) => void
  saveBasicDetails: () => void
  resetBasicDetails: () => void
}

export const useBasicDetailsStore = create<BasicDetailsState>()(
  persist(
    (set) => ({
      basicDetails: {
        firstName: "",
        lastName: "",
        headline: "",
        bio: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        avatarUrl: "",
        linkedin: "",
        twitter: "",
        github: "",
        dribbble: "",
      },
      isEditing: true,
      updateBasicDetails: (updates) =>
        set((state) => ({
          basicDetails: { ...state.basicDetails, ...updates },
        })),
      saveBasicDetails: () => set({ isEditing: true }),
      resetBasicDetails: () =>
        set({
          basicDetails: {
            firstName: "",
            lastName: "",
            headline: "",
            bio: "",
            email: "",
            phone: "",
            location: "",
            website: "",
            avatarUrl: "",
            linkedin: "",
            twitter: "",
            github: "",
            dribbble: "",
          },
        }),
    }),
    {
      name: "basic-details-storage",
    },
  ),
)

