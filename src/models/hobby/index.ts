import { string } from "prop-types";

export type Hobby = {
  passion: "medium" | "high" | "low";
  name: string;
  year: number;
  id: string;
};
