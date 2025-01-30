import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

const ChangeColor = ({ form, name, title, color }) => {
  const handlePickColor = async (e) => {
    e.stopPropagation();
    e.persist();
    if (typeof window !== "undefined") {
      if (!window.EyeDropper) {
        toast.error("EyeDropper is not supported in your browser.");
        return;
      }
    }

    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      const targetElement = e.target;
      form.setValue(name, result.sRGBHex);
      targetElement.nextSibling.style.backgroundColor = result.sRGBHex;
    } catch (err) {
      toast.error("Failed to pick a color.");
    }
  };

  const handleColor = (e) => {
    e.stopPropagation();
    const targetElement = e.target;
    const colorValue = e.target.value;
    form.setValue(name, colorValue);
    targetElement.previousSibling.style.backgroundColor = colorValue;
  };

  return (
    <div className="flex items-center md:justify-center justify-start flex-wrap relative">
      <p className="min-w-52 text-lg text-gray-500 dark:text-mainDark-200">
        {title}
      </p>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="relative">
            <span
              className="cursor-pointer absolute top-3.5 ltr:right-1 rtl:left-1 z-20 bg-slate-50 border w-7 h-7 flex items-center justify-center rounded-full"
              onClick={handlePickColor}
            >
              <Pencil className="w-3.5 h-3.5 text-[#b2b2b2] pointer-events-none" />
            </span>
            <FormLabel
              className="flex w-32 h-10 relative rounded-md border cursor-pointer z-10"
              style={{ backgroundColor: color }}
            ></FormLabel>
            <FormControl>
              <input
                type="color"
                name={name}
                className="color-input w-0 h-0 absolute top-1 left-12"
                onChange={(e) => handleColor(e)}
              />
            </FormControl>
            <FormMessage className="mt-2" />
          </FormItem>
        )}
      />
    </div>
  );
};
export default ChangeColor;
