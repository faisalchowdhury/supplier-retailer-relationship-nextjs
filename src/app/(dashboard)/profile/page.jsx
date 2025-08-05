"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { handleCloudinary } from "@/lib/handleCloudinary";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: session, status } = useSession();

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

  // Handle Image upload

  const imageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // handle update

  const submitProfileUpdate = async (data) => {
    let imgValue = null;
    if (selectedFile) {
      imgValue = await handleCloudinary(selectedFile);
    }

    const payload = {
      ...data,
      image_url: imgValue || profileData?.image_url,
    };
    const fetchData = await fetch(`/api/user?email=${session?.user?.email}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const result = await fetchData.json();
    if (result.modifiedCount) {
      toast.success("Profile Information Updated Successfully");
      router.refresh();
    }
  };
  return (
    <div className="p-10 m-10 border rounded-lg space-y-5">
      <img
        src={profileData?.image_url}
        alt=""
        className="rounded-full w-[100px] h-[100px] object-cover object-top"
      />
      <form
        onSubmit={handleSubmit(submitProfileUpdate)}
        action=""
        className="space-y-5">
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              defaultValue={profileData?.name}
              {...register("name", { required: true })}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors.name?.type === "required" && (
                <span>This field is required</span>
              )}
            </p>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              defaultValue={session?.user?.email}
              readOnly
              {...register("email", { required: true })}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors.email?.type === "required" && (
                <span>This field is required</span>
              )}
            </p>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              defaultValue={profileData?.phone}
              {...register("phone", { required: true })}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors.phone?.type === "required" && (
                <span>This field is required</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Profile Picture
            </label>
            <input
              defaultValue={profileData?.image_url}
              type="file"
              name="image_url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Image"
              onChange={imageUpload}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
              defaultValue={profileData?.companyName}
              {...register("companyName", { required: true })}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors.companyName?.type === "required" && (
                <span>This field is required</span>
              )}
            </p>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Area</label>
            <input
              type="text"
              name="area"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter coverage area"
              defaultValue={profileData?.area}
              {...register("area", { required: true })}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors.area?.type === "required" && (
                <span>This field is required</span>
              )}
            </p>
          </div>
        </div>

        <Button type="submit" variant="default">
          Update
        </Button>
      </form>
    </div>
  );
};

export default Profile;
