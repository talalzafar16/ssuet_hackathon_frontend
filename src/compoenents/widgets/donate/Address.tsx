import  { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px', 
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194, 
};

const Address = ({ setCurrent,setAddress,setSelectedLocation,selectedLocation }: any) => {
  const [showMap, setShowMap] = useState(false);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBGl3uEOndfmjZTH_x5UI5V8gqwY0-3u80', 
    libraries: ['places'],
  });

  const handlePlaceSelect = (autocomplete: any) => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      setSelectedLocation({ lat: location.lat(), lng: location.lng() });
      setAddress(place.formatted_address);
    }
  };

  const initAutocomplete = (input: any) => {
    if (!isLoaded || !input) return;
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => handlePlaceSelect(autocomplete));
  };

  return (
    <div className="text-black flex w-full items-center flex-col">
      <h1 className="text-primary font-bold  text-lg">HELP US WITH YOUR EXACT LOCATION</h1>
      <p className="text-sm md:text-base mt-2 text-center">
        This allows us to check if your area is<br /> within our coverage
      </p>
      <div className="flex flex-col gap-y-3 md:flex-row w-full mt-7">
        <input
          className="px-4 py-[6px] border text-base rounded-tl-md rounded-bl-md w-full md:w-[400px]"
          placeholder="Enter your address"
          ref={(input) => initAutocomplete(input)} 
        />
        <button
          className="px-7 py-[6px] text-base rounded-tr-md rounded-br-md bg-primary text-white"
          onClick={() =>setShowMap(true)}
        >
          Search
        </button>
      </div>

      <div className="w-full mt-6">
        {isLoaded &&selectedLocation&& showMap&& (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={selectedLocation } 
            zoom={14} 
          >
            <Marker
            position={selectedLocation} />
          </GoogleMap>
        ) }
      </div>

      {selectedLocation&& showMap&&(
        <div className='flex justify-end w-full'>
        <button
          className="px-7 mt-4 py-[6px] text-base rounded-md bg-primary text-white"
          onClick={() => setCurrent(1)}
          >
          Submit
        </button>
    </div>
      )}
    </div>
  );
};

export default Address;
