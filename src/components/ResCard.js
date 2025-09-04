import { RES_CDN_URL } from '../utils/constants';

const ResCard = ({resData}) => {
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info;
  return (
    <div className='res-card w-[250px]'>
        
        <img alt='res-icon' className='w-full object-cover h-[200px] rounded-xl' src={`${RES_CDN_URL}${cloudinaryImageId}`}/>
        <div className='mt-2 space-y-1'>
          <h3 className='font-semibold text-lg'>{name}</h3>
          <p className='text-sm text-gray-600'>{cuisines.join(", ")}</p>
          <p className="text-sm">{avgRating} ⭐</p>
          <p className='text-sm'>{costForTwo/100}rs for two</p>
        </div>
    </div>
    
)}

export default ResCard