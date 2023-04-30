import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fetchFile from "../utils/fetchFile";
import Loader from "../components/Loader";
import ScrollToTopButton from "../components/ScrollToTopButton";

const PageDownload = () => {
  const { data, isLoading } = useQuery(["fileAsset"], fetchFile);
  const navigate = useNavigate();

  // Scroll to a section
  const handleMenuClick = (e) => {
    const position = document.getElementById(e.target.text);

    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="prose relative mx-auto mt-10 flex h-auto w-3/4 flex-row items-start pb-12 text-slate-50">
        <motion.button
          className="absolute -left-14 top-1 hidden md:block"
          whileHover={{ scale: 1.3, color: "#f87171", originX: "center" }}
          onClick={() => navigate(-1)}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002"
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.57 10.7701L7 9.19012L8.57 7.62012"
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
        {/* side menu */}
        {data.some((item) => item.title) && (
          <div className="absolute -left-64 top-20 hidden w-56 rounded-2xl bg-slate-300 bg-opacity-25 xl:block">
            {data.map(({ title, _id }) => {
              return (
                <ul key={_id} className="text-sky-900">
                  {title && (
                    <li className="px-1">
                      <Link
                        to={{ hash: `#${title.toLowerCase()}` }}
                        className="no-underline"
                        onClick={(e) => handleMenuClick(e)}
                      >
                        {title}
                      </Link>
                    </li>
                  )}
                </ul>
              );
            })}
          </div>
        )}
        {/* body of the page */}
        <div className="flex flex-col">
          <h2 className="mt-0">Fichierthèque</h2>
          {data.map(({ _id, title, fileUrl, description }) => {
            return (
              <div key={_id}>
                <h3 id={title}>{title}</h3>
                <p>{description}</p>
                <a
                  className="w-fit no-underline"
                  href={fileUrl}
                  download={title}
                >
                  <button className="btn rounded-md normal-case">
                    <svg
                      className="mr-2"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3"
                        stroke="#020617"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {truncateTitle(title, 20)}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default PageDownload;
