import {
  ChevronDown,
  ChevronRightIcon,
  InfoIcon,
  PlusIcon,
} from "lucide-react";
import { cn } from "src/utils/cn";
import { UserAvatar } from "./UserAvatar";
import { Card, CardHeader } from "./primitives/Card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./primitives/DropdownMenu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./primitives/Tooltip";

const UserRecommendation: React.FC<{
  name: string;
  imageUrl: string;
  subtext: string;
}> = ({ name, subtext, imageUrl }) => {
  return (
    <div className="flex flex-row p-3">
      <UserAvatar imageUrl={imageUrl} />
      <div className="w-full ml-2">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-zinc-500 mb-2">{subtext}</div>
        <span
          className={cn(
            "rounded-2xl font-semibold text-zinc-500 border-zinc-500 hover:border-zinc-700 text-sm w-24 p-1",
            "flex flex-row items-center border justify-center hover:bg-zinc-200 cursor-pointer transition-all"
          )}
        >
          <PlusIcon size={18} /> <span className="ml-1">Follow</span>
        </span>
      </div>
    </div>
  );
};

const AsideHeader = () => {
  return (
    <>
      <div className="font-semibold w-full">Add to your feed</div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="cursor-pointer">
            <InfoIcon size={16} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="w-48">
              Follow things that interest you to personalize your feed.{" "}
              <span className="text-underline font-semibold text-blue-600">
                Learn more.
              </span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

const AsideFooterLink: React.FC<{
  text: string;
  subItems?: { href: string; text: string }[];
}> = ({ text, subItems }) => {
  return (
    <span className="m-1 cursor-pointer hover:underline hover:text-blue-500 ">
      {subItems ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="flex flex-row">
              {text}
              <ChevronDown size={15} />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {subItems.map((item) => (
              <DropdownMenuItem key={item.text}>
                <span>{item.text}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        text
      )}
    </span>
  );
};

const AsideFooter = () => {
  return (
    <div className="text-xs text-zinc-500 flex flex-wrap p-4 m-2 justify-center sticky top-14">
      <AsideFooterLink text="About" />
      <AsideFooterLink text="Accessibility" />
      <AsideFooterLink text="Help Center" />
      <AsideFooterLink
        text="Privacy & Terms"
        subItems={[
          {
            text: "Privacy Policy",
            href: "#",
          },
          {
            text: "User Agreement",
            href: "#",
          },
          {
            text: "Pages Terms",
            href: "#",
          },
          {
            text: "Cookie Policy",
            href: "#",
          },
          {
            text: "Copyright Policy",
            href: "#",
          },
        ]}
      />
      <AsideFooterLink text="Ad Choices" />
      <AsideFooterLink text="Advertising" />
      <AsideFooterLink text="Business Services" />
    </div>
  );
};

export const Aside = () => {
  return (
    <aside style={{ gridArea: "aside" }}>
      <Card>
        <CardHeader className="p-3 flex flex-row">
          <AsideHeader />
        </CardHeader>
        <UserRecommendation
          name="Bill Gates"
          imageUrl="data:image/png;base64,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"
          subtext="Co-chair, Bill & Melinda Gates Foundation"
        />
        <UserRecommendation
          name="Satya Nadella"
          imageUrl="data:image/png;base64,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"
          subtext="Chairman and CEO at Microsoft"
        />
        <UserRecommendation
          name="Clara Shih"
          imageUrl="data:image/png;base64,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"
          subtext="CEO of Salesforce AI, Board Director & Entrepreneur"
        />
        <div className="mt-1 ml-3 text-zinc-500 flex flex-row text-sm p-2 items-center font-semibold cursor-pointer">
          View all recommendations <ChevronRightIcon size={18} />
        </div>
      </Card>
      <AsideFooter />
    </aside>
  );
};
