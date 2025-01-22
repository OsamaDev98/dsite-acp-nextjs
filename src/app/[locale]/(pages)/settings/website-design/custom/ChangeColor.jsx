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
            <Pencil
              className="w-4 h-4 text-[#b2b2b2] z-20 cursor-pointer absolute top-5 ltr:right-2 rtl:left-2"
              onClick={(e) => handlePickColor(e)}
            />
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
