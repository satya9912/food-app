import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from "../utils/reduxSlices/cartSlice";

const CategoryItem = ({category}) => {
    const dispatch = useDispatch();
     const handleCart = (c) => {
      dispatch(addItems(c));
  }

  return (
    <div>
         <div className="flex justify-between items-center mb-4 p-4 border-b rounded-2xl shadow-sm hover:shadow-md bg-white" >
            <div className="flex-1 pr-4">
                <p className="font-semibold text-gray-800 text-lg mb-1">{category.card.info.name}</p>
                <p className="text-sm text-gray-400 mb-2">{category.card.info.description}</p>
                <p className="font-medium text-gray-700">₹{category.card.info.price / 100}</p>
                {/* <p>{category.card.info.description/1000}</p> */}
            </div>
            <div className="flex-shrink-0 w-20 h-20">
                <img className="w-[full] h-full rounnded-lg object-cover shadow-md " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/${category.card.info.imageId}`}       />
                 <button className="px-4 py-1 mt-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 active:bg-green-700 transition duration-200 cursor-pointer"
                 onClick={() => handleCart(category)}> Add 
                 </button>
            </div>    
        </div>  
    </div>
  
  )
}

export default CategoryItem