"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputField from "./InputField";
import { role } from "@/lib/data";
import SelectField from "./SelectField";
import UploadField from "./UploadField";
import PhoneField from "./PhoneField";
import { useState } from "react";
import Checkbox from "./Checkbox";

const schema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "Ім`я обов`язкове для заповнення!" })
    .min(2, { message: "Ім`я повинно бути не меньше 2-x символів!" }),
  lastName: z.preprocess(
    (value) =>
      typeof value === "string" && value.trim() === "" ? undefined : value,
    z
      .string()
      .min(2, { message: "Прізвище повинно бути не меньше 2-x символів!!" })
      .optional()
  ),
  shortName: z.preprocess(
    (value) =>
      typeof value === "string" && value.trim() === "" ? undefined : value,
    z
      .string()
      .min(3, { message: "Ім`я повинно бути не меньше 3-х символів!" })
      .max(20, { message: "Ім`я повинно бути не більше 20-ти символів!" })
      .optional()
  ),
  email: z
    .string()
    .nonempty({ message: "Email обов`язковий для заповнення!" })
    .email({ message: "Невірно введенний email!" }),
  password: z
    .string()
    .nonempty({ message: "Пароль обов`язковий для заповнення!" })
    .min(6, { message: "Пароль повинен бути не меньше 6-ти символів!" })
    .max(20, {
      message:
        "Максимальна довжина імені не повинна бути більшою за 20 символів!",
    }),
  weight: z
    .number({ required_error: "Вага обов`язкова для заповнення!" })
    .min(2, "Вага не повинна бути меньша за 2 символи!"),
  height: z
    .number({ required_error: "Зріст обов`язковий для заповнення!" })
    .min(2, "Зріст не повиннен бути меньшим за 3 символи!"),
  phone: z
    .string()
    .nonempty({ message: "Телефон обов`язковий для заповнення!" }),
  telegram: z.string(),
  viber: z.string(),
  whatsapp: z.string(),
  birthday: z.date({ message: "День народження обов`язковий для заповнення!" }),
  img: z.instanceof(File, { message: "Невірний формат фото!" }),
  role: z.enum(["admin", "trainable"]),
});

const options = [
  { id: 1, value: "trainable", name: "Покупець" },
  { id: 2, value: "admin", name: "Админ" },
];

type Inputs = z.infer<typeof schema>;

const TrainableForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const [telegramNumber, setTelegramNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [viberNumber, setViberNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const sameNumbers = [
    { type: "telegram", setNumber: setTelegramNumber },
    { type: "whatsapp", setNumber: setWhatsappNumber },
    { type: "viber", setNumber: setViberNumber },
  ];

  console.log("telegramNumber: ", telegramNumber);
  console.log("whatsappNumber: ", whatsappNumber);
  console.log("viberNumber: ", viberNumber);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">{type === "create" ? "Створити нового": "Редагувати"} покупця</h1>
      <span className="text-xs text-gray-400 font-medium">
        Інформація для регистрації
      </span>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
          require
        />
        <InputField
          label="Пароль"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
          require
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Персональні дані
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Ім`я"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
          require
        />

        <InputField
          label="Вага"
          name="weight"
          type="number"
          defaultValue={data?.weight}
          register={register}
          error={errors?.weight}
          require
        />
        <InputField
          label="Зріст"
          name="height"
          type="number"
          defaultValue={data?.height}
          register={register}
          error={errors?.height}
          require
        />
        <PhoneField
          label="Телефон"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
          require
          sameNumbers={sameNumbers}
        />
        <InputField
          label="День народження"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
          require
        />

        <InputField
          label="Прізвище"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        {role === "admin" && (
          <InputField
            label="Прізвисько"
            name="shortName"
            defaultValue={data?.shortName}
            register={register}
            error={errors?.shortName}
          />
        )}
        <UploadField
          label="Аватар"
          name="img"
          type="file"
          defaultValue={data?.img}
          register={register}
          error={errors?.img}
          require
        />
        {role === "admin" && (
          <SelectField
            label="Роль"
            name="role"
            defaultValue={data?.role}
            register={register}
            error={errors?.role}
            options={options}
          />
        )}
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Створити" : "Редагувати"}
      </button>
    </form>
  );
};

export default TrainableForm;
