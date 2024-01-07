import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/fooddata", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setFoodCat(data.foodcategory);
      setFoodItem(data.fooddata);

      // console.log("yedatahai",data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div>

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id='carousel'>
              <div className="carousel-caption" style={{ zIndex: 1 }}>
                <div className="d-flex justify-content-center">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                  <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                </div>
              </div>
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/1920x1080/?lamborghini" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/720x1280" />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/1920x1080/?audi" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/720x1280" />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/1920x1080/?buggati" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="https://source.unsplash.com/random/720x1280" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div></div>
      <div className='container'>
        {foodCat !== [] ? (
          foodCat.map((data) => (
            <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3 ' >
                {data.CategoryName}
              </div>
              <hr />
              {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                .map(filterItems => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItem={filterItems}
                        options={filterItems.options[0]}
                        // imgSrc={filterItems.img}
                        ></Card>
                    </div>
                  )
                }) : <div>No such data found</div>}
            </div>
          ))
        ) : (
          <div>"No category data available"</div>
        )}


      </div>
      <Footer />
    </div>
  );
}
