import { CloudOff, CloudUpload, Copy } from "lucide-react";
import MainButton from "../../components/custom/buttons/MainButton";
import { DnsTable } from "@/components/custom/tables/DnsTable";

const Domains = () => {
  return (
    <div className="section-container">
      <div className="card-style mt-2">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          Domains
        </h1>
        <div className="flex flex-col gap-10 justify-start w-full">
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">Domain status</h3>
            <div className="flex items-center gap-8 flex-wrap">
              <p className="bg-gray-100 py-2 px-8 rounded-lg">osama4.sa</p>
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
            <p className="domain-style">anastasia.ns.cloudflare.com</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="w-52 font-semibold">Verification token</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <p className="domain-style max-w-96 w-full break-all">
                UGJoRlNYb0Y2cTdkd1M5Zm1CYlp2TVM2QXJqUTN4dGhzOEhrc3hkbEV5cz0=
              </p>
              <button className="copy-style">
                <Copy className="h-4 w-4" />
                <span>Click to copy</span>
              </button>
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
                <p className="domain-style">anastasia.ns.cloudflare.com</p>
                <button className="copy-style">
                  <Copy className="h-4 w-4" />
                  <span>Click to copy</span>
                </button>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <p className="domain-style">jakub.ns.cloudflare.com</p>
                <button className="copy-style">
                  <Copy className="h-4 w-4" />
                  <span>Click to copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-style mt-12">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          DNS records
        </h1>
        <div className="scroll-container overflow-x-auto w-full">
          <DnsTable />
        </div>
      </div>
    </div>
  );
};
export default Domains;
