import { Link } from "@/i18n/routing";

const PlanCard = ({ plansData, planType }) => {
  return (
    <>
      {plansData?.map((item) => {
        return (
          <div
            className="w-full p-6 duration-300 transition-all rounded-lg border md:w-96 bg-gray-50 dark:bg-mainDark-900 hover:-translate-y-2 hover:shadow-lg"
            key={item.title}
          >
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                {item.subtitle}
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-mainColor-500 dark:text-gray-100">
                {planType.toLowerCase() == "annually"
                  ? item.price.annually
                  : item.price.monthly}
              </h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                {planType == "annually" ? "SAR/Year" : "SAR/Month"}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                including VAT
              </p>
            </div>
            <div className="mt-8 space-y-8">
              {item.features?.map((feature) => {
                return (
                  <div className="flex items-center" key={feature}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-mainColor-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>
            <Link
              href="/"
              className="flex items-center justify-center w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-mainColor-500 rounded-md hover:bg-mainColor-400 focus:outline-none focus:bg-mainColor-600"
            >
              Choose Plan
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default PlanCard;
