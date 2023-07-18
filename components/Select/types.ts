import { Dispatch, SetStateAction } from "react";

export type Select = {
  items: { label: string; value: string }[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
};
