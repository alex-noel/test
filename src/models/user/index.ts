import { Hobby } from "../hobby";

export type User = {
  name: string;
  id: string;
  hobbies: Hobby[];
};
