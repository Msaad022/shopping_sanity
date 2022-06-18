import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";

export const Canceled = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <AiOutlineCheck />
        </p>
        <h2> payment has been cancelled and will not be charged </h2>
        <Link href="/">
          <button
            type="button"
            width="300px"
            className="btn btn-cancel"
          >
            OK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
