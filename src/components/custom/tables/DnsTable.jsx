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
    title: "Name",
  },
  {
    id: 2,
    title: "Content",
  },
  {
    id: 3,
    title: "Type",
  },
  {
    id: 4,
    title: "Actions",
  },
];

const records = [
  {
    id: "1",
    name: "TXM-12-RECORD",
    content:
      "You can think of a set of DNS records like a business listing on Yelp. That listing will give you a bunch of useful information about a business such as their location, hours, services offered, etc. All domains are required to have at least a few essential DNS records for a user to be able to access their website using a domain name, and there are several optional records that serve additional purposes.",
    type: "CDNSKEY record",
    action: "-",
  },
  {
    id: "2",
    name: "TXM-12-RECORD",
    content:
      "You can think of a set of DNS records like a business listing on Yelp. That listing will give you a bunch of useful information about a business such as their location, hours, services offered, etc. All domains are required to have at least a few essential DNS records for a user to be able to access their website using a domain name, and there are several optional records that serve additional purposes.",
    type: "CDNSKEY record",
    action: "-",
  },
  {
    id: "3",
    name: "TXM-12-RECORD",
    content:
      "You can think of a set of DNS records like a business listing on Yelp. That listing will give you a bunch of useful information about a business such as their location, hours, services offered, etc. All domains are required to have at least a few essential DNS records for a user to be able to access their website using a domain name, and there are several optional records that serve additional purposes.",
    type: "CDNSKEY record",
    action: "-",
  },
];

export function DnsTable() {
  const t = useTranslations("DomainSettings");

  return (
    <Table className="min-w-[900px] w-full">
      <TableHeader>
        <TableRow>
          {headTable?.map((item) => {
            return (
              <TableHead key={item.id} className="text-[16px] font-semibold">
                {t(item.title.toLowerCase())}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {records?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell className="max-w-60">{item.content}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
