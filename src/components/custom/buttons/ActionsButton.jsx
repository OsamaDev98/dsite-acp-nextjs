import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Trash2, ChevronDown, Eye } from "lucide-react";
import { Link } from "@/i18n/routing";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const ActionsBtn = ({ editTarget, itemId, actions, setData }) => {
  const tb = useTranslations("Buttons");
  const tal = useTranslations("Alert");

  const handleRemove = () => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
    toast.success("Item has been deleted successfully!");
  };

  return (
    <div className="flex items-center bg-gray-100 h-11 rounded-lg border w-32 dark:bg-mainDark-800">
      <Link
        href={editTarget}
        className="text-center gap-1 flex-1 px-2 outline-none"
      >
        {tb("edit")}
      </Link>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-white px-2 h-full rounded-lg dark:bg-mainDark-900">
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-mainDark-900">
            {actions?.map((item, i) => {
              return (
                <DropdownMenuItem className="cursor-pointer z-[100]" key={i}>
                  {item.key.toLowerCase() == "delete" && (
                    <AlertDialogTrigger className="text-red-500 flex items-center gap-1">
                      <Trash2 className="w-[18px] h-[18px]" />
                      <span>{tb(item.title.toLowerCase())}</span>
                    </AlertDialogTrigger>
                  )}
                  {item.key.toLowerCase() == "applicants" && (
                    <>
                      <Eye className="w-5 h-5" />
                      <Link href={item.viewLink}>
                        {tb(item.title.toLowerCase())}
                      </Link>
                    </>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader className="!text-start">
            <AlertDialogTitle>{tal("title")}</AlertDialogTitle>
            <AlertDialogDescription>{tal("message")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-end items-center gap-2">
            <AlertDialogCancel>{tal("cancel")}</AlertDialogCancel>
            <AlertDialogAction className="!mx-0" onClick={() => handleRemove()}>
              {tal("continue")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
export default ActionsBtn;
