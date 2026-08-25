import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
    return null;
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const userEmails = user.emailAddresses.map(({ emailAddress }) => emailAddress.toLowerCase());

  if (!adminEmail || !userEmails.includes(adminEmail)) redirect("/");

  return <AdminDashboardClient />;
}

export default AdminPage;