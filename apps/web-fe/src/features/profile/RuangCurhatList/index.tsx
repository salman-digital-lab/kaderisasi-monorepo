"use client";

import { RuangCurhatData } from "@kaderisasi/data-model";
import { Flex, Paper } from "@mantine/core";

import RuangCurhatCard from "@/components/common/RuangCurhatCard";

type PersonalActivityDataProps = {
  data: RuangCurhatData[];
};

export default function RuangCurhatList({ data }: PersonalActivityDataProps) {
  return (
    <Paper radius="md" withBorder p="lg">
      <Flex direction="column" gap="md">
        {data.map((item) => (
          <RuangCurhatCard key={item.id} data={item} />
        ))}
      </Flex>
    </Paper>
  );
}
