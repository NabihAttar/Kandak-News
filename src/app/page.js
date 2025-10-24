import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function RootPage() {
  // Get language preference from cookies or default to 'ar'
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "ar";

  // Redirect to the language-specific home page
  redirect(`/${lang}`);
}
