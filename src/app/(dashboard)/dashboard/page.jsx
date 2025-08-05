"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div>
      <h2 className="text-2xl">Welcome {session?.user?.name}</h2>
    </div>
  );
};

export default Dashboard;
