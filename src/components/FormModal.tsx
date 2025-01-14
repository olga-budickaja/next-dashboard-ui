"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const TrainableForm = dynamic(() => import("./forms/TrainableForm"), {
  loading: () => <h1>Завантаження...</h1>
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  trainables: (type, data) => <TrainableForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "trainables"
    | "subjects"
    | "results"
    | "feedback"
    | "modules"
    | "announsements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-buddaYellow"
      : type === "update"
      ? "bg-buddaSky"
      : "bg-buddaPurple";

  const elementTable =
    table === "trainables"
      ? "покупця"
      : table === "subjects"
      ? "пакет"
      : table === "results"
      ? "результат тренування"
      : table === "feedback"
      ? "зворотній дзвінок"
      : table === "modules"
      ? "модуль тренування"
      : "посилання на пост";

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Всі дані буде видалено для цього елемента. Ви впевнені, що хочете
          видалити {elementTable}?
        </span>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Видалити
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Форму не знайдено!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] overflow-auto max-h-[80vh]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Зачинити" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
