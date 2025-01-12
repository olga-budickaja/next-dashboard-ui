"use client";

import Image from "next/image";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table: "trainables" | "subjects" | "results" | "feedback" | "modules" | "announsements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-buddaYellow"
      : type === "update"
      ? "bg-buddaSky"
      : "bg-buddaPurple";
  return (
    <button
      className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
    >
      <Image src={`/${type}.png`} alt={type} width={16} height={16} />
    </button>
  );
};

export default FormModal;
