import { Card, Table } from "antd";

import { TABLE_SCHEMA_ROLES } from "../constants/schema";
import { useState } from "react";
import { useRequest } from "ahooks";
import { getRoles } from "../../../../api/services/adminuser";

const RolesTable = () => {
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
  });

  const { data, loading } = useRequest(
    () =>
      getRoles({
        per_page: String(params.per_page),
        page: String(params.page),
      }),
    {
      refreshDeps: [params],
    },
  );

  return (
    <Card>
      <Table
        rowKey="id"
        columns={TABLE_SCHEMA_ROLES}
        dataSource={data?.data}
        pagination={{
          current: data?.meta.current_page,
          pageSize: data?.meta.per_page,
          showSizeChanger: true,
          total: data?.meta.total,
        }}
        loading={loading}
        onChange={(pagination) =>
          setParams((prev) => ({
            ...prev,
            page: pagination.current || 1,
            per_page: pagination.pageSize || 10,
          }))
        }
        scroll={{ x: 1200 }}
      />
    </Card>
  );
};

export default RolesTable;