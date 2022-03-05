import ListingPage from "../../features/listing-page";

const Home = () => {
  return (
    <div className='container' style={{height: 'calc(100vh - 200px)'}}>
      <div className="row h-100">
        <ListingPage/>
      </div>
    </div>
  )
}

export default Home
