import Footer from "@/components/Footer";
import { constants } from "@/constants";
import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <main className="flex flex-col items-center overflow-x-hidden z-10">
        <div className="h-screen">
          <div className="pt-96">
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 xl:px-6 py-2 xl:py-3 rounded-xl mr-2"
              href={constants.paymentLinks.lifeTimeMembership}
            >
              Start a family
            </a>
          </div>
        </div>
        <div className="flex items-end w-full bg-white">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
