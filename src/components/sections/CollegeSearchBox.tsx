import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useCombobox } from "downshift";
import { useMutation } from "@tanstack/react-query";
import { httpRequest } from "@/services";
import axios from "@/libs/axios";
import { CollegeSpecificDetailsResponse, Paginate } from "@/types";
import { debounce } from "lodash";
import { XIcon } from "@/assets/icons/icon";
import { ConditionallyRender } from "@/utils/helpers";
import SimpleBar from "simplebar-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const CollegeSearchBox = () => {
  const {
    setValue,
    formState: { isSubmitted },
  } = useFormContext();

  const [paginate] = useState<Partial<Paginate>>({
    limit: 20,
  });

  const { data, mutateAsync, isPending, isError } = useMutation({
    mutationKey: ["collegeOptions"],
    mutationFn: async ({ query }: { query: string }) => {
      return httpRequest({
        url: `/college-management/college/noauth/specific-information`,
        method: "GET",
        params: { query, ...paginate },
      })<CollegeSpecificDetailsResponse>(axios);
    },
  });

  const listRef = React.useRef();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    isOpen,
    inputValue,
    selectItem,
  } = useCombobox({
    items: data?.colleges || [],
    itemToString(item) {
      return item ? item.name : "";
    },
    onInputValueChange: ({ inputValue: newValue }) => {
      debounce(async () => {
        await mutateAsync({ query: newValue });
      }, 400)();
    },
    onStateChange: ({ selectedItem }) => {
      setValue("institution", selectedItem?.id);
    },
  });

  const toggleClear = () => {
    setValue("college", "");
    selectItem(null);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isSubmitted) {
      setValue("institution", "");
      selectItem(null);
    }
  }, [isSubmitted, setValue, selectItem]);

  return (
    <div className="relative">
      <div
        className={cn(
          "relative z-[5]",
          isError && "text-red-500"
        )}
        id="college-search"
      >
        <Label
          {...getLabelProps()}
          htmlFor="college-search"
          id="college-search-label"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Your school or college
        </Label>
        <div className="relative">
          <Input
            ref={inputRef}
            {...getInputProps({
              // clear value if user submits form
              value: isSubmitted ? "" : inputValue,
            })}
            placeholder="Search and select your school or college"
            className="pr-10"
          />
          <ConditionallyRender
            condition={Boolean(inputValue)}
            show={
              <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-1 text-red-500 hover:text-red-700 hover:bg-red-50"
                  aria-label="Clear"
                  onClick={toggleClear}
                >
                  <XIcon width={16} height={16} />
                </Button>
              </div>
            }
          />
        </div>
      </div>

      <div {...getMenuProps({ ref: listRef })}>
        <div className="relative">
          <div key="total-size" className="h-auto" />
          {isOpen && inputValue && (
            <div
              key="virtual-list"
              className="absolute top-1 left-0 w-full bg-white shadow-sm border border-gray-200 rounded-lg p-2 z-10"
            >
              <ConditionallyRender
                condition={isPending}
                show={
                  <div className="flex justify-center mx-auto w-full py-3">
                    <Spinner className="h-4 w-4" />
                  </div>
                }
                elseShow={
                  <SimpleBar style={{ maxHeight: "130px" }}>
                    {data?.colleges?.map((college: any, index: number) => (
                      <Button
                        key={college.id}
                        {...getItemProps({
                          index,
                          item: college,
                        })}
                        className={cn(
                          "w-full justify-start rounded-lg mb-1 last:mb-0",
                          highlightedIndex === index 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-transparent hover:bg-gray-100"
                        )}
                        variant="ghost"
                      >
                        {college.name}
                      </Button>
                    ))}
                  </SimpleBar>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeSearchBox;
