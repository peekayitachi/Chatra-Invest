
"use client"

import React from "react"

export default function CampaignHistoryPage() {
  // Hard-coded sample data for completed campaigns
  const pastCampaigns = [
    {
      id: 1,
      title: "Medical Treatment for Sarah",
      daysLeft: 0,
      raised: 25000,
      goal: 25000,
      completedDate: "Mar 15, 2023",
    },
    {
      id: 2,
      title: "Rebuild After the Flood",
      daysLeft: 0,
      raised: 10000,
      goal: 10000,
      completedDate: "Jan 10, 2023",
    },
    {
      id: 3,
      title: "Education for Rural Children",
      daysLeft: 0,
      raised: 20000,
      goal: 20000,
      completedDate: "Dec 1, 2022",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Campaign History</h1>
      <p className="text-gray-500 mb-8">
        Here is a record of your previously executed campaigns.
      </p>

      <div className="space-y-6">
        {pastCampaigns.map((campaign) => {
          const progress = (campaign.raised / campaign.goal) * 100

          return (
            <div
              key={campaign.id}
              className="bg-white rounded-md shadow p-4 flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{campaign.title}</h2>
                <p className="text-sm text-gray-500">
                  Completed on {campaign.completedDate}
                </p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full w-full max-w-md">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${progress}%` }} // ✅ Fixed this line
                  />
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Raised: ₹{campaign.raised.toLocaleString()} of ₹
                  {campaign.goal.toLocaleString()} (100% Complete)
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
