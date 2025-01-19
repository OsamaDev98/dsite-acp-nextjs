import { Settings } from "lucide-react";
import { Link } from "@/i18n/routing";

const ConfigButton = ({ target }) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <Link
        href={target}
        className="focus:outline-none bg-gray-500 duration-300 hover:bg-gray-700 hover:-translate-y-1 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 py-3 dark:focus:ring-gray-900"
        title="Config"
      >
        <Settings className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};
export default ConfigButton;
