import WebsiteContentTable from "@/app/[locale]/(pages)/settings/website-content/tables/WebsiteContentTable";
import {
  columns,
  tableData,
} from "@/app/[locale]/(pages)/settings/website-content/data/websiteContent";

const WebsiteContent = () => {
  return (
    <div className="section-container">
      <div className="card-style mt-2">
        <WebsiteContentTable columns={columns} tableData={tableData} />
      </div>
    </div>
  );
};
export default WebsiteContent;
