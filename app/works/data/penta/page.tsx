import { redirect } from "next/navigation";

/** 예전 URL(/works/data/penta) 호환 */
export default function PentaLegacyRedirect() {
  redirect("/works/data/penta01");
}
