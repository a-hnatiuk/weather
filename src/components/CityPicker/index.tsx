import { FC, ChangeEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  ListItemButton,
  ListItemText,
  TextField,
  IconButton,
} from '@mui/material';

import {
  appendLocalStorageItem,
  initLocalStorageItem,
  lsKyes,
} from 'helpers/localforage';

import { RouterLinks } from 'components/Routes';
import { Coordinates } from 'containers/Context/Coordinates';

import {
  StyledCityPicker,
  StyledInputWrapper,
  StyledList,
} from 'components/CityPicker/styled';
import Button from 'components/Button';

const CityPicker: FC = () => {
  const { setCoordinates } = useContext(Coordinates);
  const navigate = useNavigate();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  useEffect(() => {
    initLocalStorageItem(lsKyes.LAST_REGION, []);
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const placeId = results[0].place_id;
        const { lat, lng } = getLatLng(results[0]);

        if (setCoordinates) {
          const coordinates = { lat, lon: lng };

          appendLocalStorageItem(lsKyes.LAST_REGION, {
            id: placeId,
            description,
            coordinates,
          });

          setCoordinates(coordinates);
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

  const handleSearch = () => {
    navigate(RouterLinks.forecast, { replace: true });
  };

  return (
    <StyledCityPicker>
      <StyledInputWrapper>
        <TextField
          value={value}
          onChange={handleInput}
          disabled={!ready}
          variant="standard"
          label="Select your region"
          fullWidth
        />
        <Button
          smallRound
          aria-label="search"
          onClick={handleSearch}
          variant="contained"
        >
          <SearchIcon />
        </Button>
      </StyledInputWrapper>
      {status === 'OK' && (
        <StyledList component="nav" aria-label="list of locations">
          {renderSuggestions()}
        </StyledList>
      )}
    </StyledCityPicker>
  );
};

export default CityPicker;
