import { CloudOff, CloudUpload } from "lucide-react";
import { DnsTable } from "@/components/custom/tables/DnsTable";
import MainButton from "@/components/custom/buttons/MainButton";
import CopyButton from "@/components/custom/buttons/CopyButton";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Domains page",
};

const page = () => {
  return (
    <div className="section-container mt-8">
      <div className="card-style mt-2">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          Domains
        </h1>
        <div className="flex flex-col gap-10 justify-start w-full">
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">Domain status</h3>
            <div className="flex items-center gap-8 flex-wrap">
              <p className="bg-gray-100 py-2 px-8 rounded-lg dark:bg-mainDark-700">
                osama4.sa
              </p>
              <p className="text-red-500 flex items-center gap-2">
                <CloudOff /> <span>Not connected</span>
              </p>
              <p className="text-green-500 flex items-center gap-2">
                <CloudUpload /> <span>Connected</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">Your name server is</h3>
            <p className="domain-style dark:bg-mainDark-700">
              anastasia.ns.cloudflare.com
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">Verification token</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <p className="domain-style max-w-96 w-full break-all dark:bg-mainDark-700">
                UGJoRlNYb0Y2cTdkd1M5Zm1CYlp2TVM2QXJqUTN4dGhzOEhrc3hkbEV5cz0=
              </p>
              <CopyButton targetText="UGJoRlNYb0Y2cTdkd1M5Zm1CYlp2TVM2QXJqUTN4dGhzOEhrc3hkbEV5cz0=" />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="w-52 hidden lg:flex"></p>
            <MainButton buttonName="verify" buttonPath="/" />
          </div>
          <div className="flex items-start gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">
              Replace your domains name server to:
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <p className="domain-style dark:bg-mainDark-700">
                  anastasia.ns.cloudflare.com
                </p>
                <CopyButton targetText="anastasia.ns.cloudflare.com" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <p className="domain-style dark:bg-mainDark-700">
                  jakub.ns.cloudflare.com
                </p>
                <CopyButton targetText="jakub.ns.cloudflare.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-style mt-12">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          DNS records
        </h1>
        <div className="grid scroll-container overflow-x-auto w-full">
          <DnsTable />
        </div>
      </div>
    </div>
  );
};
export default page;
