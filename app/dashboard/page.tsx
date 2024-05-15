import Header from "@/components/header";
import Footer from "@/components/footer";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <p className="pt-40 pl-40">this is a Dashboard</p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
