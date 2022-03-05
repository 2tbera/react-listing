import { createContext } from "react";
import { IGlobalState } from "../interfaces/globalState";
import { IItem } from "../interfaces/item";

export const RootContext = createContext<{ addToCart?: (data: IItem) => void,  state?: IGlobalState}>({})
