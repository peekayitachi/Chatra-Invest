"use client"

import React from "react"
import { BadgeCheck, FileText } from "lucide-react" // Example icons, can be replaced

// (Optional) If you want to add a custom page title in the HTML <head>:
// export const metadata = {
//   title: "Notifications | FundRaiser",
// }

export default function NotificationsPage() {
  // Sample random data for demonstration:
  const notificationsData = [
    {
      date: "Mar 25, 2023",
      campaign: "Medical Treatment for Sarah",
      amount: 250,
      status: "Completed",
      receipt: "Receipt_ABC123",
    },
    {
      date: "Feb 28, 2023",
      campaign: "Education for Rural Children",
      amount: 300,
      status: "Completed",
      receipt: "Receipt_XYZ789",
    },
    {
      date: "Jan 10, 2023",
      campaign: "Rebuild After the Flood",
      amount: 150,
      status: "Completed",
      receipt: "Receipt_777888",
    },
    {
      date: "Dec 25, 2022",
      campaign: "New Books for Kids",
      amount: 200,
      status: "Pending",
      receipt: null,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 
        Title Section 
        If you want a banner/hero image, place it as a background or an <img> here.
      */}
      <div className="mb-8">
        {/* Example of a title image (hero). Replace '/path/to/hero.jpg' with your image. */}
        {/* 
          <div 
            className="h-40 bg-cover bg-center rounded-md mb-4" 
            style={{ backgroundImage: "url('/path/to/hero.jpg')" }} 
          /> 
        */}
        <h1 className="text-2xl font-bold tracking-tight mb-1">Notifications</h1>
        <p className="text-gray-500 text-sm">
          Track all your donations and their impact
        </p>
      </div>

      {/* Notification Stats (Optional) */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Total Donated</p>
          <h2 className="text-xl font-semibold">₹1,250</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Campaigns Supported</p>
          <h2 className="text-xl font-semibold">7</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Average Donation</p>
          <h2 className="text-xl font-semibold">₹178</h2>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-md shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Donation History</h2>
          <p className="text-sm text-gray-500">
            See details of your donations and their status
          </p>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-gray-500 text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-gray-500 text-sm font-medium">Campaign</th>
              <th className="py-3 px-4 text-gray-500 text-sm font-medium">Amount (₹)</th>
              <th className="py-3 px-4 text-gray-500 text-sm font-medium">Status</th>
              <th className="py-3 px-4 text-gray-500 text-sm font-medium">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {notificationsData.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">{item.date}</td>
                <td className="py-3 px-4 text-sm">{item.campaign}</td>
                <td className="py-3 px-4 text-sm">₹{item.amount}</td>
                <td className="py-3 px-4 text-sm flex items-center gap-2">
                  {item.status === "Completed" ? (
                    <div className="inline-flex items-center text-green-600">
                      <BadgeCheck className="h-4 w-4 mr-1" />
                      {item.status}
                    </div>
                  ) : (
                    <span className="text-orange-600">{item.status}</span>
                  )}
                </td>
                <td className="py-3 px-4 text-sm">
                  {item.receipt ? (
                    <button className="inline-flex items-center gap-1 text-blue-600 hover:underline">
                      <FileText className="h-4 w-4" />
                      {item.receipt}
                    </button>
                  ) : (
                    <span className="text-gray-400">N/A</span>
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
