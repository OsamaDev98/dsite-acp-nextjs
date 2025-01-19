import TextForm from "./inputs/TextForm";
import MobileForm from "./inputs/MobileForm";
import EmailForm from "./inputs/EmailForm";
import DateForm from "./inputs/DateForm";
import TimeForm from "./inputs/TimeForm";
import SelectForm from "./inputs/SelectForm";
import RadioForm from "./inputs/RadioForm";
import TextareaForm from "./inputs/TextareaForm";
import {
  AlarmClock,
  Calendar,
  CircleDot,
  Hash,
  Mail,
  NotepadText,
  SquareCheck,
  Type,
} from "lucide-react";

const CreateInput = ({ selectedValue, i, form, sectionName }) => {
  const renderSwitch = () => {
    switch (selectedValue) {
      case "text":
        return (
          <TextForm
            key={i}
            form={form}
            name_en={`${sectionName}_Text${i}_en`}
            name_ar={`${sectionName}_Text${i}_ar`}
            placeholder_en="Text"
            placeholder_ar="النص"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredText"
            icon={<Type className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "mobile":
        return (
          <MobileForm
            key={i}
            form={form}
            name_en={`${sectionName}_Mobile${i}_en`}
            name_ar={`${sectionName}_Mobile${i}_ar`}
            placeholder_en="Mobile"
            placeholder_ar="الموبايل"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredMobile"
            icon={<Hash className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "email":
        return (
          <EmailForm
            key={i}
            form={form}
            name_en={`${sectionName}_Email${i}_en`}
            name_ar={`${sectionName}_Email${i}_ar`}
            placeholder_en="Email"
            placeholder_ar="الميل"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredEmail"
            icon={<Mail className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "date":
        return (
          <DateForm
            key={i}
            form={form}
            name_en={`${sectionName}_Date${i}_en`}
            name_ar={`${sectionName}_Date${i}_ar`}
            placeholder_en="Date"
            placeholder_ar="التاريخ"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredDate"
            icon={<Calendar className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "time":
        return (
          <TimeForm
            key={i}
            form={form}
            name_en={`${sectionName}_Time${i}_en`}
            name_ar={`${sectionName}_Time${i}_ar`}
            placeholder_en="Time"
            placeholder_ar="الوقت"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredTime"
            icon={<AlarmClock className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "textarea":
        return (
          <TextareaForm
            key={i}
            form={form}
            name_en={`${sectionName}_Textarea${i}_en`}
            name_ar={`${sectionName}_Textarea${i}_ar`}
            placeholder_en="Textarea"
            placeholder_ar="نص محتوي"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredTextarea"
            icon={<NotepadText className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "select":
        return (
          <SelectForm
            key={i}
            form={form}
            name_en={`${sectionName}_Select${i}_en`}
            name_ar={`${sectionName}_Select${i}_ar`}
            placeholder_en="City"
            placeholder_ar="المدينة"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredSelect"
            icon={<SquareCheck className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      case "radio":
        return (
          <RadioForm
            key={i}
            form={form}
            name_en={`${sectionName}_Radio${i}_en`}
            name_ar={`${sectionName}_Radio${i}_ar`}
            placeholder_en="Gander"
            placeholder_ar="الجنس"
            removeAction={() => formRemove(i)}
            index={i + 1}
            boxId="requiredRadio"
            icon={<CircleDot className="text-gray-500 w-5 h-5" />}
          />
        );
        break;
      default:
        return "No value selected.";
        break;
    }
  };

  return (
    <>
      {console.log(selectedValue)}
      {renderSwitch()}
    </>
  );
};
export default CreateInput;
