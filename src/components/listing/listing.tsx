import InfiniteScroll from "react-infinite-scroll-component";
import { IListing } from "./listing.interface";

const Listing = ({listLength, onListEnd, children}: IListing) => {
  return (
    <div id="scrollableDiv" style={{height: '100%', overflow: "auto"}}>
      <InfiniteScroll
        style={{display: 'flex', flexWrap: 'wrap'}}
        scrollableTarget="scrollableDiv"
        dataLength={listLength || 0}
        next={() => onListEnd()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {children}
      </InfiniteScroll>
    </div>
  )
}

export default Listing;
