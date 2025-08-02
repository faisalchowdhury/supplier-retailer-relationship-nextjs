"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
const Profile = () => {

  const {register , formState : {errors}} = useForm();
  const {data :session ,status } = useSession(); 
  console.log(session)

  useEffect(()=> {
    async () => {
      const profileFetch = await fetch(`${process.env.NEXTAUTH_URL}/api/user?email=${session?.user?.email}`);
  const profileData = await profileFetch.json();
  console.log(profileData)
    }
  }, [session])
  
  return (
    <div className="p-10 m-10 border rounded-lg space-y-5">
      <img src="https://scontent.fcla1-1.fna.fbcdn.net/v/t39.30808-6/440435523_3646325575678239_210446255797893009_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&cb=99be929b-878c9f95&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Ia6D5ULY6MQQ7kNvwHohukg&_nc_oc=AdnHIOW3Jgduigaq2M175_oxuzHCp5lMEMw6ky7CkUN5iY5pw--9Typ5eFsgYqMZM5I&_nc_zt=23&_nc_ht=scontent.fcla1-1.fna&_nc_gid=H1pu4jq3RHSX4LhC6uWzGw&oh=00_AfTYWdi2QsW_vgCgou1K3OrVQeRBTOu3DEoQ89I6iIH18g&oe=6893A1C0" alt="" className="rounded-full w-[100px] h-[100px]" />
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
              defaultValue={session?.user?.email}
              readOnly
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
