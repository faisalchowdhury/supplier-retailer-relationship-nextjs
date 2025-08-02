"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const {
    register,
    formState: { errors },
  } = useForm();
  const { data: session, status } = useSession();
  console.log(session);

  useEffect(() => {
    if (!session?.user?.email) return;
    const fetchData = async () => {
      const profileFetch = await fetch(
        `/api/user?email=${session?.user?.email}`,
        {
          credentials: "include",
        }
      );
      const profileData = await profileFetch.json();
      setProfileData(profileData);
      console.log(profileData);
    };
    fetchData();
  }, [session]);

  return (
    <div className="p-10 m-10 border rounded-lg space-y-5">
      <img
        src={profileData?.image_url}
        alt=""
        className="rounded-full w-[100px] h-[100px] object-cover object-top"
      />
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
              defaultValue={profileData?.name}
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
              defaultValue={session?.user?.email}
              readOnly
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              required
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              defaultValue={profileData?.phone}
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
              defaultValue={profileData?.companyName}
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
              defaultValue={profileData?.area}
            />
          </div>
        </div>

        <Button variant="default">Update</Button>
      </form>
    </div>
  );
};

export default Profile;
