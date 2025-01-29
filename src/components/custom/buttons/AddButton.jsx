import { Plus } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const AddButton = ({ title, target }) => {
  const tb = useTranslations("Buttons");

  return (
    <div className="flex items-center justify-end mb-4">
      <Link
        href={target}
        className="focus:outline-none text-white bg-yellow-400 duration-300 hover:bg-yellow-500 hover:-translate-y-1 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-lg px-4 py-2.5 dark:focus:ring-yellow-900 flex items-center justify-end gap-1"
        title="Add page"
      >
        <Plus className="w-6 h-6" />
        <span>{title?.length > 0 ? tb(title.toLowerCase()) : tb("add")}</span>
      </Link>
    </div>
  );
};
export default AddButton;
