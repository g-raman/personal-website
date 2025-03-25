import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col gap-4 px-96 py-16">
      <Header />
      <ProfileCard />
      <Main />
      <Footer />
    </div>
  );
}
