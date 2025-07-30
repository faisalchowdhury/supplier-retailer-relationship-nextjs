"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Store, Handshake } from "lucide-react";

export default function RegisterOption() {
  const router = useRouter();

  return (
    <div className="py-20 flex items-center justify-center px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Retailer Card */}

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="space-y-5">
              <Store className="w-14 h-14 text-primary" />
              <CardTitle className="text-xl">Are you a Retailer?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>
              Join our platform to easily discover suppliers and order products
              directly from verified sales representatives.
            </p>
            <p>
              Manage your inventory, receive updates, and grow your business
              with us.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/register/retailer")}>
              Register as Retailer
            </Button>
          </CardFooter>
        </Card>

        {/* Sales Representative Card */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="space-y-5">
              <Handshake className="w-14 h-14 text-primary" />
              <CardTitle className="text-xl">
                Are you a Sales Representative?
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>
              Reach hundreds of retailers, showcase your product stock, and
              streamline your sales process using our powerful platform.
            </p>
            <p>
              Get notified when retailers connect with you and manage orders
              effortlessly.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/register/sales")}>
              Register as Sales Representative
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
