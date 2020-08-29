import React from "react";
import { Typography, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

const autocompleteService = {
  current: null,
};

const GoogleAutocomplete = (props) => {
  const { locationChange, location } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const autoChange = (event, val) => {
    if (!val) {
      locationChange(null);
      return;
    }
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId: val.place_id }, function (responses, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (responses.length) {
          const result = responses[0];
          const lat = result.geometry.location.lat();
          const lng = result.geometry.location.lng();
          const description = result.formatted_address;
          locationChange({ lat, lng, description, inputChanged:true });
        } else locationChange(null);
      } else {
        locationChange(null);
        alert("Can't find address: " + status);
      }
    });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    fetch(
      {
        input: inputValue,
      },
      (results) => {
        if (active) {
          setOptions(results || []);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      className="w-full"
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      value={location}
      renderInput={(params) => {
        const { InputProps, ...other } = params;
        return (
          <TextField
            {...other}
            placeholder={props.placeholder}
            className={props.classNames}
            onChange={handleChange}
            InputProps={{ ...InputProps, disableUnderline: true }}
          />
        );
      }}
      onChange={autoChange}
      renderOption={(option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length])
        );

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
            <Typography variant="body2" color="textSecondary">
              {option.structured_formatting.secondary_text}
            </Typography>
          </div>
        );
      }}
    />
  );
};

export default GoogleAutocomplete;
