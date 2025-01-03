import React from "react";
import { Table, Card } from "antd";
import { Province } from "@kaderisasi/data-model";

import { TABLE_SCHEMA } from "../constants/schema";


interface DataTypeProps {
  data?: {
    data: Province[];
  };
  loading: boolean;
  setParameter: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
  openModal: (id?: number, name?: string) => void;
}

const ProvinceTable = ({
  data,
  loading,
  setParameter,
  openModal,
}: DataTypeProps) => {
  return (
    <Card>
      <Table
        rowKey="id"
        columns={TABLE_SCHEMA(openModal)}
        dataSource={data?.data}
        // pagination={{
        //   current: data?.meta?.current_page,
        //   pageSize: data?.meta?.per_page,
        //   showSizeChanger: true,
        //   total: data?.meta?.total,
        // }}
        loading={loading}
        onChange={() =>
          setParameter((prev) => ({
            ...prev,
          }))
        }
        scroll={{ x: 1200 }}
      />
    </Card>
  );
};

export default ProvinceTable;
