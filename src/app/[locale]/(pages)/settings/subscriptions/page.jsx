import { Link } from "@/i18n/routing";
import { SubscriptionTable } from "@/components/custom/tables/SubscriptionTable";
import Status from "@/components/custom/Status/Status";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <div className="section-container mt-8">
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
                href="/packages"
                className="text-[#83a1d0] bg-[#d5ebfd] px-6 py-2 rounded-full duration-300 hover:shadow-md hover:-translate-y-1 border dark:bg-mainDark-900"
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
        <div className="grid scroll-container overflow-x-auto w-full">
          <SubscriptionTable />
        </div>
      </div>
    </div>
  );
};
export default page;
