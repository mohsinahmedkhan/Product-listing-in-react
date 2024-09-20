import Cards from './component/product';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [products, setProduct] = useState([]);
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = (() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilter(data);
      })
      .catch((err) => {
        console.error(err);
      })
  })

  const searchProduct = () => {
    if (search) {
      const filterProduct = products.filter((product) => product.category === search);
      setFilter(filterProduct);
    }
    else {
      setFilter(products);
    }
  }

  const uniqueCategories = [...new Set(products.map((data) => data.category))];

  return (
    <>
      <div className='container mx-auto'>
        <div className='main bg-black '>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sky_Store_Logo_2020.svg/1200px-Sky_Store_Logo_2020.svg.png?20220515162315" alt="logo" />

          <div className='dropdown'>
            <select onChange={(e) => setSearch(e.target.value)}>
              <option disabled value="select">Select Item</option>
              {
                uniqueCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))
              }
            </select>
            <button onClick={searchProduct} className='btn'>
              <img className='image-search' src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="search-image" />
            </button>
          </div>
        </div>

        <div className='main-box'>
          <div className='flex flex-wrap'>
            <Cards product={filter} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
