import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
  {
    "id": 1,
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "nature"
  },
  {
    "id": 2,
    "url": "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "nature"
  },
  {
    "id": 3,
    "url": "https://images.unsplash.com/photo-1678001965135-675f0fd9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "city"
  },
  {
    "id": 4,
    "url": "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW90ZXJjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "bike"
  },
  {
    "id": 5,
    "url": "//images.unsplash.com/photo-1677741448195-56652c9e1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=6",
    "mode": "potrait",
    "cat": "nature"
  },
  {
    "id": 6,
    "url": "https://images.unsplash.com/photo-1678084559483-65e6ba4d9aba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "nature"
  },
  {
    "id": 7,
    "url": "https://images.unsplash.com/photo-1677746550508-5d1338102aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "nature"
  },
  {
    "id": 8,
    "url": "https://images.unsplash.com/photo-1677835500542-50bd76a26bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "women"
  },
  {
    "id": 9,
    "url": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "car"
  },
  {
    "id": 10,
    "url": "https://images.unsplash.com/photo-1677577441903-a4825471384d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "portrait",
    "cat": "shop"
  },
  {
    "id": 11,
    "url": "https://images.unsplash.com/photo-1677629322846-606e5b24d718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "portrait",
    "cat": "nature"
  },
  {
    "id": 12,
    "url": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "electronics"
  },
  {
    "id": 13,
    "url": "https://images.unsplash.com/photo-1677629322095-48f027b9f384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "city"
  },
  {
    "id": 14,
    "url": "https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "men"
  },
  {
    "id": 15,
    "url": "https://plus.unsplash.com/premium_photo-1669226091919-4e5beb1af27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "food"
  },
  {
    "id": 16,
    "url": "https://images.unsplash.com/photo-1653038282408-13b605af0ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "sunglasses"
  },
  {
    "id": 17,
    "url": "https://images.unsplash.com/photo-1677063864330-972a220ef661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "nature"
  },
  {
    "id": 18,
    "url": "https://images.unsplash.com/photo-1677003289745-57a3ccddab78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "nature"
  },
  {
    "id": 19,
    "url": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "food"
  },
  {
    "id": 20,
    "url": "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "potrait",
    "cat": "food"
  },
  {
    "id": 21,
    "url": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "car"
  },
  {
    "id": 22,
    "url": "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "mode": "landscape",
    "cat": "men, cycle,bike"
  },
  

]
export default function App() {
  const [search, setSearch] = useState("")
  const [mode, setmode] = useState("all")
  const [filterImages, setfilterImages] = useState([])

  const catSearch = (value) => {
    setfilterImages(
      images.filter((item) => item.cat.includes(value))
    )
  }

  useEffect(() => {
    mode == "all" ? setfilterImages(images) : setfilterImages(images.filter(image => image.mode == mode))
  }, [mode])

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <h1 className='text-center text-danger'>Masonry Gallery</h1>
        <div className="d-flex justify-content-between align-item-center my-4">
          <div className="filter">
            <label htmlFor="sort by" className='text-light'  >Sort By </label>
            <select className='form-select' onChange={e => setmode(e.target.value)}>
              <option value="all">All</option>
              <option value="potrait">Potrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          <div className="search" >
            <label htmlFor="sort by" className='text-light'  >Search</label>
            <input type="search" className='form-control' onChange={e => catSearch(e.target.value)} placeholder='Search' />
          </div>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry columnsCount={4} gutter="15px">
            {filterImages.map((image, i) => (<>
              <img
                key={i}
                src={image.url}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
              {/* <p>{image.mode}</p> */}
            </>))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}
