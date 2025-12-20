import InfoSquare from "./InfoSquare";

const InfoSquaresRow = ({
  selectedLocInfo,
  selectedLocLoading,
  selectedLocation,
}) => {
  return (
    <>
      <div className="my-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {selectedLocInfo && !selectedLocLoading && (
            <InfoSquare
              title="Feels Like"
              value={
                <div>
                  <span>{selectedLocInfo.current.apparent_temperature} </span>
                  <span>
                    {selectedLocInfo.current_units.apparent_temperature}
                  </span>
                </div>
              }
            />
          )}

          {selectedLocLoading && <InfoSquare title="Feels Like" value="-" />}

          {selectedLocInfo && !selectedLocLoading && (
            <InfoSquare
              title="Humidity"
              value={
                <div>
                  <span>{selectedLocInfo.current.relative_humidity_2m} </span>
                  <span>
                    {selectedLocInfo.current_units.relative_humidity_2m}
                  </span>
                </div>
              }
            />
          )}

          {selectedLocLoading && <InfoSquare title="Humidity" value="-" />}
          {selectedLocInfo && !selectedLocLoading && (
            <InfoSquare
              title="Wind"
              value={
                <div>
                  <span>{selectedLocInfo.current.wind_speed_10m} </span>
                  <span>{selectedLocInfo.current_units.wind_speed_10m}</span>
                </div>
              }
            />
          )}

          {selectedLocLoading && <InfoSquare title="Wind" value="-" />}
          {selectedLocInfo && !selectedLocLoading && (
            <InfoSquare
              title="Precipitation"
              value={
                <div>
                  <span>{selectedLocInfo.current.precipitation} </span>
                  <span>{selectedLocInfo.current_units.precipitation}</span>
                </div>
              }
            />
          )}

          {selectedLocLoading && <InfoSquare title="Precipitation" value="-" />}
        </div>
      </div>
    </>
  );
};

export default InfoSquaresRow;
