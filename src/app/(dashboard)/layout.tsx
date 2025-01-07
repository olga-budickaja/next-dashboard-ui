import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-screen flex
  "
    >
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center justify-center p-4">
          <Image
            src="/logo/tania_budda.png"
            alt="Логотип Тренера Тетяни Будицької"
            className="hidden xl:block lg:block"
            width={300}
            height={57}
            priority
          />
          <Image
            src="/logo/tania _budda_min.png"
            alt="Логотип Тренера Тетяни Будицької"
            className="xl:hidden lg:hidden"
            width={32}
            height={32}
          />
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
