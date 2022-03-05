import React, { useEffect, useState } from 'react';
import { IItem } from "../interfaces/item";
import { IGlobalState } from "../interfaces/globalState";
import { RootContext } from './root.context';
import { IRootProviderProps } from "./root.contect.interface";

function RootProvider({children}: IRootProviderProps) {
  const [state, setState] = useState<IGlobalState>({});

  const addToCart = (item: IItem) => {
    let selectedItem = state?.cart?.itemList?.findIndex(({_id}) => _id === item._id);
    const itemList = [...(state?.cart?.itemList || [])];

    if (typeof selectedItem === 'number' && selectedItem >= 0) {
      ++itemList[selectedItem].count
    } else {
      itemList.push({...item, count: 1})
    }
    setState({...state, cart: {itemList, total: itemList.length}, })
  }

  return (
    <RootContext.Provider value={{addToCart: (data) => addToCart(data), state}}>
      {children}
    </RootContext.Provider>
  );
}

export default RootProvider;
