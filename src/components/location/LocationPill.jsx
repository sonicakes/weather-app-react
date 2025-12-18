import iconLoading from "../../assets/images/icon-loading.svg";
import CircleFlag from "../common/CircleFlag";
const LocationPill = ({ res, isLoading = false, onClickSelection }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex items-center text-sm gap-3 border-neutral-700 border rounded-lg text-neutral-200 p-2 mb-2 last:mb-0">
          <img className="w-4" src={iconLoading} />
          <div className="flex flex-col">
            <div className="flex">
              <p className="font-bold">{res.name && res.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => onClickSelection(res)}
          className="flex items-center text-sm gap-3 cursor-pointer hover:bg-neutral-700 hover:border-neutral-600 border-neutral-700 border transition-all rounded-lg text-neutral-200 p-2 mb-2 last:mb-0"
        >
          {res.country_code && <CircleFlag countryCode={res.country_code} />}

          <div className="flex flex-col">
            <div className="flex">
              <p className="font-bold">{res.name && res.name}</p>
              <p>
                <span className="mr-1">,</span>
                {res.country && res.country}
                <span className="font-bric font-medium text-neutral-300 ml-1">
                  ({res.country_code && res.country_code})
                </span>
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-xs">{res.admin1 && res.admin1}</p>
              {res.admin2 && (
                <>
                  <span>&#8226;</span>
                  <p className="text-xs">{res.admin2 && res.admin2}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationPill;
