"use client"

import React from "react"

export default function DonationsPage() {
  // Hard-coded sample data
  const donationHistory = [
    {
      id: 1,
      campaign: "Medical Treatment for Sarah",
      date: "Mar 25, 2023",
      amount: 250,
      status: "Completed",
    },
    {
      id: 2,
      campaign: "Education for Rural Children",
      date: "Mar 10, 2023",
      amount: 300,
      status: "Completed",
    },
    {
      id: 3,
      campaign: "Rebuild After the Flood",
      date: "Feb 28, 2023",
      amount: 150,
      status: "Pending",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      <p className="text-gray-500 mb-8">
        Review all your donation activities below.
      </p>

      <div className="bg-white rounded-md shadow">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Donation History</h2>
          <p className="text-sm text-gray-500">
            Track your contributions and their status
          </p>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-3 px-4 text-gray-600 text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-gray-600 text-sm font-medium">Campaign</th>
              <th className="py-3 px-4 text-gray-600 text-sm font-medium">Amount (₹)</th>
              <th className="py-3 px-4 text-gray-600 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation) => (
              <tr key={donation.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">{donation.date}</td>
                <td className="py-3 px-4 text-sm">{donation.campaign}</td>
                <td className="py-3 px-4 text-sm">₹{donation.amount.toLocaleString()}</td>
                <td className="py-3 px-4 text-sm">
                  {donation.status === "Completed" ? (
                    <span className="text-green-600 font-medium">{donation.status}</span>
                  ) : (
                    <span className="text-orange-600 font-medium">{donation.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
