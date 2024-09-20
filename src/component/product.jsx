import { useState } from "react";

function Cards({ product }) {
  const [hover, setHover] = useState(null)

  return (
    <div className='main-box'>
      <div className='flex flex-wrap'>
        {
          product.map((data) => {
            return (
              <div key={data.id}
                className='box'
                onMouseEnter={() => setHover(data.id)}
                onMouseLeave={() => setHover(null)}
              >
                {hover !== data.id && (
                  <>
                    <img src={data.image} alt={data.title} className='data-image' />
                    <p className='data-category'>{data.category}</p>
                    <h2 className='data-title'>{data.title}</h2>
                    <p className='data-price'>${data.price}</p>
                  </>
                )}
                {
                  hover === data.id && (
                    <p className="dec ">${data.description}</p>
                  )}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
export default Cards;
