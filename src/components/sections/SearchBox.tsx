"use client";
import { forwardRef, useCallback, useState } from "react";
import { SearchOutline } from "@/assets/icons/icon";
import CurveLine from "@/components/CurveLine";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SearchBoxProps = {
  parentProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ parentProps, ...inputProps }, ref) => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");

    const submit = useCallback(() => {
      if (!value) return;
      router?.push(`/search/all?query=${value}`);
    }, [value, router]);

    return (
      <div
        className={cn(
          "border border-[#CBD2D6] bg-white rounded-full flex items-center justify-between px-6 w-4/5 h-[4.5rem] mx-auto relative",
          parentProps?.className
        )}
        style={{ padding: "5.708px 24px" }}
        {...parentProps}
      >
        <Input
          placeholder="Search your questions"
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              submit();
            }
          }}
          {...inputProps}
        />
        <Button
          variant="ghost"
          size="sm"
          className="bg-transparent hover:bg-transparent p-2"
          aria-label="Search"
          onClick={submit}
        >
          <SearchOutline stroke="#005EF6" color="#005EF6" />
        </Button>
        <div className="absolute left-[-9rem] bottom-[-6rem]">
          <CurveLine variant={2} fill="#FFA500" />
        </div>
      </div>
    );
  }
);

export default SearchBox;
