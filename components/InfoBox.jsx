import clsx from "clsx";
import Link from "next/link";

const InfoBox = ({
  children,
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
}) => {
  return (
    <div
      className={clsx(" p-6 rounded-lg shadow-md", backgroundColor, textColor)}
    >
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={buttonInfo.link}
        className={clsx(
          "inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700",
          buttonInfo.backgroundColor
        )}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
