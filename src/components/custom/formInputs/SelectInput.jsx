import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useState } from "react";

const SelectInput = ({
  form,
  placeholder = "",
  title = "",
  name = "",
  selectData,
  defaultValue,
  isSearch = false,
  isFlex = false,
  flexClasses = "",
  setSelectedValue,
}) => {
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on search term
  const filteredOptions = selectData.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle opening/closing the dropdown and reset search term when closed
  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setSearchTerm(""); // Reset search term when closing
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`lg:grid-cols-6 items-start w-full ${
            isFlex ? flexClasses : "grid"
          }`}
        >
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <Select
              onValueChange={(value) => {
                field.onChange(value); // Update the form value
                isFlex && setSelectedValue(value); // Update the select value
              }}
              value={field.value ? field.value : defaultValue}
              defaultValue={defaultValue ? defaultValue : field.value}
              onOpenChange={handleOpenChange}
              name={name}
              dir={locale == "en" ? "ltr" : "rtl"}
            >
              <FormControl className="h-12 dark:bg-mainDark-900">
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="dark:bg-mainDark-900">
                {isSearch && (
                  <div className="px-2 py-1">
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-2 py-1 mb-2 border rounded outline-none"
                    />
                  </div>
                )}
                <SelectGroup>
                  {filteredOptions.length > 0 ? (
                    filteredOptions?.map((item, i) => {
                      return (
                        <SelectItem key={i} value={item.value}>
                          {item.title}
                        </SelectItem>
                      );
                    })
                  ) : (
                    <SelectItem disabled key="no-results-key">
                      No results found
                    </SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};
export default SelectInput;
