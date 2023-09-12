"use client";
import { Tabs } from "@mantine/core";
import SRTDivider from "@/components/SRTDivider";
import SRTMerge from "@/components/SRTMerger";

const TopTabs = () => {
  return (
    <Tabs>
      <Tabs.List defaultValue="divide">
        <Tabs.Tab value="divide">Divide</Tabs.Tab>
        <Tabs.Tab value="merge">Merge</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="divide">
        <SRTDivider />
      </Tabs.Panel>
      <Tabs.Panel value="merge">
        <SRTMerge />
      </Tabs.Panel>
    </Tabs>
  );
};

export default TopTabs;
