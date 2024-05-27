import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faThunderstorm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-2 fixed">
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold">Weather Application</h2>
            <div className="flex flex-row gap-2 px-2">
              <FontAwesomeIcon icon={faSun} size="2xl" />{" "}
              <FontAwesomeIcon icon={faCloud} size="2xl" />{" "}
              <FontAwesomeIcon icon={faThunderstorm} size="2xl" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Header;
