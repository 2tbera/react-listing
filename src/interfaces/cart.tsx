import { IItem } from "./item";

export interface ICart {
  itemList?: IItem[];
  total?: number
}
