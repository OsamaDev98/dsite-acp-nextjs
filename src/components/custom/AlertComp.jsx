import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertComp = ({ variant, title, description }) => {
  return (
    <Alert variant={variant} className="mb-8 p-6">
      <AlertTitle className="mb-4 text-[16px]">{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
export default AlertComp;
