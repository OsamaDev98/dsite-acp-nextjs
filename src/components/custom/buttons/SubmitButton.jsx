import { Button } from "@/components/ui/button";

const SubmitButton = ({ title }) => {
  return (
    <Button
      type="submit"
      className="text-lg h-12 px-6 bg-mainColor-500 dark:bg-mainColor-500 transition-all duration-300 hover:bg-mainColor-500/90 hover:-translate-y-1 shadow-md dark:text-white"
    >
      {title}
    </Button>
  );
};
export default SubmitButton;
