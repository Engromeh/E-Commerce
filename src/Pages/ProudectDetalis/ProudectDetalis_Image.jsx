import React from 'react'

const ProudectDetalis_Image = ({productsDetalis, mainImg, setMainImg}) => {
  return (
    <>
       <div className="IteamImg_Detalis">
                  <div className="MainImg">
                    <img src={mainImg} alt={productsDetalis.title} />
                  </div>
      
                  <div className="SubImg">
                    {productsDetalis.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={productsDetalis.title}
                        onClick={() => setMainImg(img)}
                      />
                    ))}
                  </div>
                </div>
    </>
  )
}

export default ProudectDetalis_Image
