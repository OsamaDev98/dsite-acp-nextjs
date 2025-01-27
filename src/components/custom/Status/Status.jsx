import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Status = ({ statusType }) => {
  const t = useTranslations("Status");

  const statusTypes = {
    active: {
      statusName: "Active",
      statusColor: "#00c306",
      statusBg: "#e8f9f1",
      statusPath: "/packages",
    },
    warning: {
      statusName: "Warning",
      statusColor: "#ffc000",
      statusBg: "#fff8e4",
      statusPath: "/packages",
    },
    inactive: {
      statusName: "Inactive",
      statusColor: "#ff0005",
      statusBg: "#faeeee",
      statusPath: "/packages",
    },
    trial: {
      statusName: "Trial",
      statusColor: "#147da8",
      statusBg: "#d6f9ff",
      statusPath: "/packages",
    },
    suspended: {
      statusName: "Suspended",
      statusColor: "#4c4c4c",
      statusBg: "#ededed",
      statusPath: "/packages",
    },
    error: {
      statusName: "Error",
      statusColor: "#c14719",
      statusBg: "#ffe6d8",
      statusPath: "/packages",
    },
  };

  const statusStyle = `rounded-full px-3 lg:px-4 py-3 font-semibold flex items-center justify-center gap-2 duration-300 hover:shadow-md`;

  const dotStyle = `inline-block w-2 h-2 rounded-full`;

  return (
    <>
      {statusType && statusTypes[statusType] && (
        <Link
          href={statusTypes[statusType].statusPath}
          title={statusTypes[statusType].statusName}
          className={statusStyle}
          style={{
            backgroundColor: statusTypes[statusType].statusBg,
            color: statusTypes[statusType].statusColor,
          }}
        >
          <span
            className={dotStyle}
            style={{ backgroundColor: statusTypes[statusType].statusColor }}
          ></span>
          <span className="hidden md:flex">
            {t(statusTypes[statusType].statusName.toLowerCase())}
          </span>
        </Link>
      )}
    </>
  );
};
export default Status;
