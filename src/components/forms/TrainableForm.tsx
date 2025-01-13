"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputField from "./InputField";
import { role } from "@/lib/data";
import SelectField from "./SelectField";
import UploadField from "./UploadField";

const schema = z.object({
  firstName: z.string().min(2, { message: "Ім`я обов`язкове для заповнення!" }),
  lastName: z
    .string()
    .min(2, { message: "Прізвище повинно бути не меньше 2-x символів!!" }),
  shortName: z
    .string()
    .min(3, { message: "Ім`я повинно бути не меньше 3-x символів!" })
    .max(20, {
      message: "Ім`я повинно бути не більше 20-ти символів!",
    }),
  email: z.string().email({ message: "Невірно введенний email!" }),
  password: z
    .string()
    .min(6, { message: "Пароль повинен бути не меньше 6-ти символів!" })
    .max(20, {
      message:
        "Максимальна довжина імені не повинна бути більшою за 20 символів!",
    }),
  weight: z.number().min(2, "Вага обов`язкова для заповнення!"),
  height: z.number().min(3, "Зріст обов`язкова для заповнення!"),
  phone: z.number().min(3, "Номер телефону обов`язковий для заповнення!"),
  telegram: z.number({ message: "" }),
  viber: z.number({ message: "" }),
  whatsapp: z.number({ message: "" }),
  birthday: z.date({ message: "" }),
  img: z.instanceof(File, { message: "Невірний формат фото!" }),
  role: z.enum(["admin", "trainable"], { message: "" }),
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

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Створити нового покупця</h1>
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
      <div className="flex gap-1 flex-wrap justify-between gap-4 items-center">
        <InputField
          label="Ім`я"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
          require
        />
        <InputField
          label="Телефон"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
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
        <InputField
          label="Телеграм"
          name="telegram"
          defaultValue={data?.telegram}
          register={register}
          error={errors?.telegram}
        />
        <InputField
          label="WhatsApp"
          name="whatsapp"
          defaultValue={data?.whatsapp}
          register={register}
          error={errors?.whatsapp}
        />
        <InputField
          label="Viber"
          name="viber"
          defaultValue={data?.viber}
          register={register}
          error={errors?.viber}
        />
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
