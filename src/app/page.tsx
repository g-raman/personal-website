import Main from "@/components/Main/Main";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <ProfileCard />
      <Main />
    </div>
  );
}
