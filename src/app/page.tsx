import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-72 py-16">
      <Header />
      <Main />
    </div>
  );
}
