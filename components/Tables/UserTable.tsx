'use client'

import Table, { ColumnsType } from "antd/es/table";
import { UserProps } from "@/lib/types";
import { UserTableProps } from "@/lib/types";
import { Space } from "antd";
import "./UserTable.css"
const UserTable = (props: UserTableProps) => {
    const { users } = props;
    const columns: ColumnsType<UserProps> = [
        {
            title: 'UserId',
            dataIndex: 'id',
            render: (_, { id }) => (<p className="!font-normal">{id}</p>),
            className: 'text-[14px] font-[600]  text-[#1E3146] ',
            align: 'center',
            width: "10rem"
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
            render: (_, { firstName }) => (
                <p
                    className="!font-normal  overflow-hidden "
                >
                    {firstName}
                </p>
            ),
            className: '!text-[14px] font-[600]  !text-[#1E3146]',
            align: 'center'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            render: (_, { email }) => (<p className="!font-normal">{email}</p>),
            className: '!text-[14px] font-[600] !leading-[150%] !text-[#1E3146]',
            align: 'center'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            render: (_, { phone }) => (<p className="!font-normal">{phone}</p>),
            className: '!text-[14px] font-[600] !leading-[150%] !text-[#1E3146]',
            align: 'center'
        },

    ];

    return (
        <div
            className="flex flex-col flex-grow w-full md:h-[calc(100vh-180px)] h-[calc(100vh-260px)] overflow-y-auto ">
            <Table
                // style={{ columnGap: "20px" }}
                loading={users ? false : true}
                bordered={false}
                scroll={{ x: 'max-content', }}
                columns={columns}
                dataSource={users}
                rowKey={"id"}
                className=' !bg-[#f1f4f9]'
                pagination={false}
                sticky={true}
                rowClassName={() => "table-rows"}

            />
        </div>
    )
}

export default UserTable