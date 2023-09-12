"use client";
import { useState } from "react";
import { Button, Group, Stack, Textarea, Title } from "@mantine/core";
import { convertSrtToUnits, textsStr, timesStr } from "@/srt_utils";

const SRTDivider = () => {
  const [inputStr, setInputStr] = useState("");
  const [textStr, setTextStr] = useState("");
  const [timeStr, setTimeStr] = useState("");

  return (
    <Group justify="center" align="start">
      <Stack my="xs" gap="xs">
        <Title order={3}>Input</Title>
        <Textarea
          w="40vw"
          value={inputStr}
          rows={32}
          onChange={(e) => setInputStr(e.currentTarget.value)}
        />
      </Stack>
      <Button
        my="sm"
        onClick={() => {
          const units = convertSrtToUnits(inputStr);
          setTextStr(textsStr(units));
          setTimeStr(timesStr(units));
        }}
      >
        Divide
      </Button>
      <Stack w="40vw" my="xs" gap="xs">
        <Title order={3}>Text</Title>
        <Textarea value={textStr} rows={15} readOnly />
        <Title order={3}>Time</Title>
        <Textarea value={timeStr} rows={15} readOnly />
      </Stack>
    </Group>
  );
};

export default SRTDivider;
