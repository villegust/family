import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landingPage";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center overflow-x-hidden z-10">
        <Header />
        <LandingPage />

        <div className="flex items-end w-full bg-white">
          <Footer />
        </div>
      </main>
    </>
  );
}
