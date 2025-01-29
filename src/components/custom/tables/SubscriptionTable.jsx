import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";

const headTable = [
  {
    id: 1,
    title: "name",
  },
  {
    id: 2,
    title: "Amount",
  },
  {
    id: 3,
    title: "Type",
  },
  {
    id: 4,
    title: "Card",
  },
  {
    id: 5,
    title: "Payment",
  },
  {
    id: 6,
    title: "Date",
  },
];

const orders = [
  {
    id: "1",
    planName: "Trail",
    amount: "-",
    type: "Renew",
    paymentType: "PayPal",
    paymentVerified: "yes",
    date: "23-10-2024 06:48:46",
  },
  {
    id: "2",
    planName: "Premium",
    amount: "950SAR",
    type: "Created",
    paymentType: "Master Card",
    paymentVerified: "no",
    date: "23-10-2024 06:48:46",
  },
  {
    id: "3",
    planName: "Trail",
    amount: "-",
    type: "Renew",
    paymentType: "PayPal",
    paymentVerified: "yes",
    date: "23-10-2024 06:48:46",
  },
];

export function SubscriptionTable() {
  const t = useTranslations("Subscriptions");

  return (
    <Table className="min-w-[900px] w-full">
      <TableHeader>
        <TableRow>
          {headTable?.map((item) => {
            return (
              <TableHead
                key={item.id}
                className="text-[16px] font-semibold text-start"
              >
                {t(item.title.toLowerCase())}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="text-lg text-mainColor-500 font-semibold capitalize">
              {item.planName}
            </TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.paymentType}</TableCell>
            <TableCell
              className="font-bold text-lg capitalize"
              style={
                item.paymentVerified == "yes"
                  ? { color: "#22c55e" }
                  : { color: "#ef4444" }
              }
            >
              {item.paymentVerified}
            </TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
