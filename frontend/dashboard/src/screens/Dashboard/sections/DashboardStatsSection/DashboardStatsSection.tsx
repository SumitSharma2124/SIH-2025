import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const DashboardStatsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const filterOptions = [
    { label: "All Type", value: "all-type" },
    { label: "All Priorities", value: "all-priorities" },
    { label: "All Status", value: "all-status" },
    { label: "All Area", value: "all-area" },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        {/* Header section with title and action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-3xl lg:text-5xl tracking-[0] leading-[normal] mb-4">
              City Issue Dashboard
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000b2] text-xl tracking-[0] leading-[normal]">
              Monitor, triage, and resolve citizen reports in real time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:mt-2">
            <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-xl h-auto py-4 px-4 rounded-[15px] border-2 border-[#b6bcc5] min-w-[182px]">
              Auto Route All
            </Button>
            <Button 
              onClick={() => navigate('/work-order/create')}
              className="bg-[#25abe9] hover:bg-[#2196d3] text-white font-bold text-xl h-auto py-4 px-4 rounded-[15px] border-2 border-[#b6bcc5] min-w-[194px]"
            >
              New Work Order
            </Button>
          </div>
        </div>

        {/* Search and filters section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:max-w-[402px]">
              <Input
                placeholder="Search Address, title..."
                className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-[#00000080] text-2xl px-4"
                defaultValue=""
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:flex-1">
              {filterOptions.map((option, index) => (
                <Select key={option.value}>
                  <SelectTrigger className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-black text-2xl px-4 min-w-[140px]">
                    <SelectValue placeholder={option.label} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              ))}
            </div>
          </div>

          <div className="flex justify-start">
            <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-2xl h-auto py-4 px-16 rounded-[7px] min-w-[192px]">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
