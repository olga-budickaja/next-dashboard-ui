"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { FieldError } from "react-hook-form";
import Checkbox from "./Checkbox";

type InputFieldsProps = {
  label: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  require?: boolean;
  sameNumbers: {
    type: string;
    setNumber: Dispatch<SetStateAction<string>>;
  }[];
};

const PhoneField = ({
  label,
  register,
  name,
  defaultValue,
  error,
  require,
  sameNumbers,
}: InputFieldsProps) => {
  const [checkedTelegram, setCheckedTelegram] = useState(false);
  const [checkedWhatsapp, setCheckedWhatsapp] = useState(false);
  const [checkedViber, setCheckedViber] = useState(false);

  const phoneMask = [
    "+",
    "3",
    "8",
    " ",
    "(",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  useEffect(() => {
    if (checkedTelegram && defaultValue) {
      sameNumbers[0].setNumber(defaultValue);
    } else if (!checkedTelegram) {
      sameNumbers[0].setNumber("");
    }
    if (checkedWhatsapp && defaultValue) {
      sameNumbers[1].setNumber(defaultValue);
    } else if (!checkedWhatsapp) {
      sameNumbers[1].setNumber("");
    }
    if (checkedViber && defaultValue) {
      sameNumbers[2].setNumber(defaultValue);
    } else if (!checkedViber) {
      sameNumbers[2].setNumber("");
    }
  }, [
    checkedTelegram,
    checkedWhatsapp,
    checkedViber,
    defaultValue,
    sameNumbers,
  ]);

  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor={name} className="text-sm text-gray-500 w-max relative">
        {label}
        {require && (
          <span className="text-sm text-red-500 absolute top-0 -right-2">
            *
          </span>
        )}
      </label>
      <MaskedInput
        name={name}
        mask={phoneMask}
        defaultValue={defaultValue}
        className="ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 rounded-md text-sm w-full"
        {...register(name, {
          required: "Телефон обов'язковий для заповнення!",
          pattern: {
            value: /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/,
            message: "Невірний формат телефону!",
          },
        })}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
      {sameNumbers.map((item) => (
        <Checkbox
          key={item.type}
          onChange={(isChecked) => {
            if (item.type === "telegram") {
              setCheckedTelegram(isChecked);
            } else if (item.type === "whatsapp") {
              setCheckedWhatsapp(isChecked);
            } else {
              setCheckedViber(isChecked);
            }
          }}
          isChecked={
            item.type === "telegram"
              ? checkedTelegram
              : item.type === "whatsapp"
              ? checkedWhatsapp
              : checkedViber
          }
        >
          Співпадає з{" "}
          {item.type === "telegram"
            ? "Telegram"
            : item.type === "whatsapp"
            ? "WhatsaApp"
            : "Viber"}
        </Checkbox>
      ))}
    </div>
  );
};

export default PhoneField;
