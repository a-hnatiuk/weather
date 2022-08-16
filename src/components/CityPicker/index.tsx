import { ChangeEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import {
  List,
  ListItemButton,
  ListItemText,
  TextField,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { Coordinates } from '../../containers/Context/Coordinates';
import { RouterLinks } from '../Routes';

const StyledCityPicker = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 600,
});

const CityPicker = () => {
  const { setCoordinates } = useContext(Coordinates);
  const navigate = useNavigate();
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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        if (setCoordinates) {
          const coordinates = { lat, lon: lng };
          console.log('coo: ', coordinates);
          setCoordinates(coordinates);
          navigate(RouterLinks.forecast, { replace: true });
        }
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
    <StyledCityPicker>
      <div>
        <TextField
          // fullWidth
          value={value}
          onChange={handleInput}
          disabled={!ready}
          variant="standard"
          label="Select your region"
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && (
        <List component="nav" aria-label="main mailbox folders">
          {renderSuggestions()}
        </List>
      )}
    </StyledCityPicker>
  );
};

export default CityPicker;
