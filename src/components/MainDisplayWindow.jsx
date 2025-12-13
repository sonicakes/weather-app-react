import LocationSummary from "./LocationSummary";
import LoadingBlock from "./ui/LoadingBlock";
const MainDisplayWindow = ({selectedLocInfo, selectedLocLoading, selectedLocation}) => {
    return ( 
        <>
        <div className="rounded-lg mt-10">
          {selectedLocInfo && !selectedLocLoading && (
          <LocationSummary loc={selectedLocation} info={selectedLocInfo} />
        )}

        {selectedLocLoading && <LoadingBlock />}
        </div>
        </>
     );
}
 
export default MainDisplayWindow;