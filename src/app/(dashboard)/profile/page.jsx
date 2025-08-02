"use client";
import React from "react";
import { Button } from "@/components/ui/button";
const Profile = () => {
  return (
    <div className="p-10 m-10 border rounded-lg">
      <form action="" className="space-y-5">
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="name"
              required
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              required
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              required
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              required
              name="image_url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Image"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              required
              name="companyName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Area</label>
            <input
              type="text"
              required
              name="area"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter coverage area"
            />
          </div>
        </div>

        <Button variant="default">Update</Button>
      </form>
    </div>
  );
};

export default Profile;
