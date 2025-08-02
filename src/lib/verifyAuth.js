import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const verifyAuth = async (req, userRole = null) => {
  const session = await getServerSession({ req, authOptions });
  console.log(session);
  if (!session) {
    return { status: 401, message: "Unauthorized access" };
  }
  if (userRole && userRole !== session.user.role) {
    return { status: 403, message: "Forbidden Access" };
  }
  return { authorized: true, session };
};
