import AlertComp from "@/components/custom/AlertComp";
import SettingsNav from "../../../sections/navbar/custom/SettingsNav";

const layout = ({ children }) => {
  const alertDescription = (
    <ul className="flex flex-col gap-2 px-6">
      <li>
        <i>Primary NS: anastasia.ns.cloudflare.com</i>
      </li>
      <li>
        <i>Secondary NS: jakub.ns.cloudflare.com</i>
      </li>
    </ul>
  );

  return (
    <div>
      <AlertComp
        variant="warning"
        title="Note: your current domain is not pointed to dsite name servers"
        description={alertDescription}
      />
      <div className="grid w-full">
        <SettingsNav />
      </div>
      {children}
    </div>
  );
};
export default layout;
