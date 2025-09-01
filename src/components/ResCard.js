import { RES_CDN_URL } from '../utils/constants';

const ResCard = ({resData}) => {
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info;
  return (
    <div className='res-card'>
        <h3>{name}</h3>
        <img alt='res-icon' className='res-logo' src={`${RES_CDN_URL}${cloudinaryImageId}`}/>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100}rs for two</h4>
    </div>
    
)}

export default ResCard