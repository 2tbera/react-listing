import { useEffect, useMemo, useState } from "react";
import { useAsyncFn } from "react-use";
import { IItem } from "../interfaces/item";
import { getItemList } from "../services/item-list";
import Listing from "../components/listing/listing";
import Item from "../components/item/item";

const ListingPage = () => {

  const [dataList, setDataListState] = useState<IItem[]>([]);

  const [page, setPageState] = useState(1);

  const [list, getNextPage] = useAsyncFn((data: any) => getItemList(data))

  const displayItemList = useMemo(() => dataList.map((item: IItem) => <Item key={item?._id} data={item}
                                                                            cardClass={'col-3 p-2'}/>), [dataList]);

  useEffect(() => setDataListState([...dataList, ...(list.value?.data || [])]), [list.value]);

  useEffect(() => {
    getNextPage({page: page, size: 50})
  }, [page]);

  return (
    <Listing onListEnd={() => setPageState(page + 1)} listLength={dataList?.length}>
      {displayItemList}
    </Listing>
  )
}

export default ListingPage
