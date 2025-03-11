import {redirect} from "next/navigation";

export default function Home() {
  redirect("/en"); // Chuyển hướng mặc định sang tiếng Anh
}
