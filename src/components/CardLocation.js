const CardLocation = ({ id, name, dimension, type }) => 
   <div className="cardLocations">
       <h4>Location</h4>
       <p>Name: {name}</p>
       <p>Dinension: {dimension}</p>
       <p>Type: {type}</p>
   </div>

export default CardLocation
