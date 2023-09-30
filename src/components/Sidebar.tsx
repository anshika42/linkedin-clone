import { BookmarkIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Card } from "./primitives/Card";

const MyProfileHeader = () => {
  return (
    <div>
      <div
        className="bg-center bg-cover block h-14 w-full"
        style={{
          backgroundImage:
"url(data:image/jpeg;base64,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)"        }}
      ></div>
      <div className="flex justify-center">
        <img
          className="w-16 h-16 rounded-full overflow-hidden border-white border-2 mt-[-32px] z-1"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

const MyProfileProfession = () => {
  return (
    <a
      className="flex justify-center items-center flex-col mt-4 pb-4 border-b border-slate-200"
      href="https://www.linkedin.com/in/ozgurgul35/"
      target="_blank"
    >
      <div className="text-md font-medium hover:underline cursor-pointer">
        Anshika Garg
      </div>
      <div className="text-xs text-zinc-500 mt-1">Web developer</div>
    </a>
  );
};

const MyProfileStats: React.FC<{ text: string; count: number }> = ({
  text,
  count,
}) => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold px-3 p-1 cursor-pointer hover:bg-zinc-200">
      <div className="w-full text-zinc-500">{text}</div>
      <div className="text-blue-600">{count}</div>
    </div>
  );
};

const MyItems: React.FC = () => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold p-3 cursor-pointer hover:bg-zinc-200 text-zinc-600">
      <BookmarkIcon />
      <span className="ml-2">My items</span>
    </div>
  );
};

const Discover = () => {
  const discoverItem =
    "font-semibold text-blue-700 text-xs p-3 py-2 hover:underline";
  return (
    <Card className="pt-1 mt-2">
      <div className={discoverItem}>Groups</div>
      <div className={discoverItem}>Events</div>
      <div className={discoverItem}>Followed hashtags</div>
      <div className="border-t border-zinc-200 hover:bg-zinc-100 text-sm font-semibold text-zinc-500 p-3 text-center cursor-pointer transition-all">
        Discover more
      </div>
    </Card>
  );
};

const SidebarDesktopLayout = () => {
  return (
    <>
      <Card className="overflow-hidden">
        <MyProfileHeader />
        <MyProfileProfession />
        <div>
          <div className="py-3 border-b border-slate-200">
            <MyProfileStats text="Who's viewed your profile" count={50} />
            <MyProfileStats text="Impressions of your post" count={9195} />
          </div>
          <MyItems />
        </div>
      </Card>
      <div className="sticky top-16">
        <Discover />
      </div>
    </>
  );
};

const SidebarMobileLayout = () => {
  const [isShowingAllMobile, setShowingAllMobile] = useState(false);
  return (
    <>
      <Card className="overflow-hidden">
        <MyProfileHeader />
        <MyProfileProfession />
        {isShowingAllMobile && (
          <div>
            <div className="py-3 border-b border-slate-200">
              <MyProfileStats text="Who's viewed your profile" count={50} />
              <MyProfileStats text="Impressions of your post" count={9195} />
            </div>
            <MyItems />
          </div>
        )}
      </Card>
      {isShowingAllMobile && <Discover />}
      <div
        className="flex text-zinc-500 font-semibold p-1 mt-2 hover:bg-zinc-200 cursor-pointer flex-row justify-center items-center text-sm"
        onClick={() => setShowingAllMobile(!isShowingAllMobile)}
      >
        {isShowingAllMobile ? (
          <>
            Show less <ChevronUp />
          </>
        ) : (
          <>
            Show more <ChevronDown />
          </>
        )}
      </div>
    </>
  );
};

export const Sidebar = () => {
  return (
    <div style={{ gridArea: "sidebar" }}>
      <div className="hidden sm:block">
        <SidebarDesktopLayout />
      </div>
      <div className="block sm:hidden">
        <SidebarMobileLayout />
      </div>
    </div>
  );
};
