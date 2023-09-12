"use client";
import { useState } from "react";
import { Button, Group, Stack, Textarea, Title } from "@mantine/core";
import {
  combineSubtitles,
  convertUnitsToSrt,
  textsStr,
  timesStr,
} from "@/srt_utils";

const SRTMerge = () => {
  const [textStr, setTextStr] = useState("");
  const [timeStr, setTimeStr] = useState("");
  const [exportStr, setExportStr] = useState("");

  return (
    <Group justify="center" align="start">
      <Stack w="40vw" my="xs" gap="xs">
        <Title order={3}>Text</Title>
        <Textarea
          value={textStr}
          rows={15}
          onChange={(e) => setTextStr(e.currentTarget.value)}
        />
        <Title order={3}>Time</Title>
        <Textarea
          value={timeStr}
          rows={15}
          onChange={(e) => setTimeStr(e.currentTarget.value)}
        />
      </Stack>
      <Button
        my="sm"
        onClick={() => {
          const units = combineSubtitles(textStr, timeStr);
          setExportStr(convertUnitsToSrt(units));
          setTextStr(textsStr(units));
          setTimeStr(timesStr(units));
        }}
      >
        Merge
      </Button>
      <Stack my="xs" gap="xs">
        <Title order={3}>Export</Title>
        <Textarea
          w="40vw"
          value={exportStr}
          rows={32}
          readOnly
        />
      </Stack>
    </Group>
  );
};

export default SRTMerge;
