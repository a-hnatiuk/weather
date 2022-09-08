import { FC, ChangeEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { ListItemText, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {
  appendLocalStorageItem,
  initLocalStorageItem,
  lsKyes,
} from 'helpers/localforage';

import { RouterLinks } from 'components/Routes';
import { Coordinates } from 'containers/Context/Coordinates';

import * as S from 'components/CityPicker/styled';
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
        <S.StyledListItemButton
          key={place_id}
          onClick={handleSelect(suggestion)}
          divider
        >
          <ListItemText
            primary={<strong>{main_text}</strong>}
            secondary={secondary_text}
          />
        </S.StyledListItemButton>
      );
    });

  const handleSearch = () => {
    navigate(RouterLinks.forecast, { replace: true });
  };

  return (
    <S.StyledCityPicker>
      <S.StyledInputWrapper>
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
      </S.StyledInputWrapper>
      {status === 'OK' && (
        <S.StyledList component="nav" aria-label="list of locations">
          {renderSuggestions()}
        </S.StyledList>
      )}
    </S.StyledCityPicker>
  );
};

export default CityPicker;
