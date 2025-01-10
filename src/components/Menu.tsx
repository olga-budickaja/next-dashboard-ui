import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Головна",
        href: "/admin",
        visible: ["admin", "trainer", "trainable"],
      },
      // {
      //   icon: "/trainer.png",
      //   label: "Trainers",
      //   href: "/list/trainers",
      //   visible: ["admin", "trainer"],
      // },
      {
        icon: "/student.png",
        label: "Підопічні",
        href: "/list/trainables",
        visible: ["admin", "trainer"],
      },
      // {
      //   icon: "/parent.png",
      //   label: "Parents",
      //   href: "/list/parents",
      //   visible: ["admin", "teacher"],
      // },
      {
        icon: "/subject.png",
        label: "Пакети тренувань",
        href: "/list/subjects",
        visible: ["admin", "trainables"],
      },
      {
        icon: "/class.png",
        label: "Календар тренувань",
        href: "/list/trainings",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/lesson.png",
        label: "Trainings",
        href: "/list/trainings",
        visible: ["admin", "trainer"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "trainer", "trainable"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "trainer", "trainable"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "trainer", "trainable"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm p-4">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-buddaSkyLight"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
