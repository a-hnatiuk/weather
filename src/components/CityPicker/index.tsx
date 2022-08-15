import { List, ListItemButton, ListItemText, TextField } from '@mui/material';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
// import useOnclickOutside from 'react-cool-onclickoutside';

const CityPicker = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  // const ref = useOnclickOutside(() => {
  //   // When user clicks outside of the component, we can dismiss
  //   // the searched suggestions by calling this method
  //   clearSuggestions();
  // });

  const handleInput = (e: any) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // eslint-disable-next-line
      // debugger;
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        // eslint-disable-next-line
        // debugger;
        const { lat, lng } = getLatLng(results[0]);
        console.log('📍 Coordinates: ', { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ListItemButton key={place_id} onClick={handleSelect(suggestion)}>
          <ListItemText
            primary={<strong>{main_text}</strong>}
            secondary={secondary_text}
          />
        </ListItemButton>
      );
    });

  return (
    <div>
      <TextField
        value={value}
        onChange={handleInput}
        disabled={!ready}
        variant="standard"
        label="Select your region"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && (
        <List component="nav" aria-label="main mailbox folders">
          {renderSuggestions()}
        </List>
      )}
    </div>
  );
};

export default CityPicker;
