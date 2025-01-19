import { Link } from "@/i18n/routing";
import Status from "../../components/custom/Status/Status";
import { SubscriptionTable } from "@/components/custom/tables/SubscriptionTable";

const Subscriptions = () => {
  return (
    <div className="section-container">
      <div className="card-style mt-2">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          Subscription
        </h1>
        <div className="flex flex-col gap-10 justify-start w-full">
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="min-w-52 font-semibold">Plan name</h3>
            <div className="flex items-center gap-8 flex-wrap">
              <p className="text-xl font-bold text-mainColor-500">Trail</p>
              <Link
                href="/"
                className="text-[#83a1d0] bg-[#d5ebfd] px-6 py-2 rounded-full duration-300 hover:shadow-md hover:-translate-y-1"
              >
                Renew subscription
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="min-w-52 font-semibold">Status</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Status statusType="active" />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="min-w-52 font-semibold">Expiry date</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <p>15-11-2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-style mt-12">
        <h1 className="text-2xl text-mainColor-500 text-start w-full font-bold capitalize mb-12">
          Order history
        </h1>
        <div className="scroll-container overflow-x-auto w-full">
          <SubscriptionTable />
        </div>
      </div>
    </div>
  );
};
export default Subscriptions;
