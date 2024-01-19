'use client'

import Table, { ColumnsType } from "antd/es/table";
import { UserProps } from "@/lib/types";
import { UserTableProps } from "@/lib/types";
const UserTable = (props: UserTableProps) => {
    const { users } = props;
    const columns: ColumnsType<UserProps> = [
        {
            title: 'UserId',
            dataIndex: 'id',
            render: (_, { id }) => (<p className="!font-normal">{id}</p>),
            className: 'text-[14px] font-[600]  text-[#1E3146] ',
            align: 'center',
            width: "16rem"
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
            render: (_, { firstName }) => (
                <p
                    className="!font-normal max-w-[25rem] overflow-hidden line-clamp-2"
                    style={{ WebkitBoxOrient: 'vertical' }}
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
            className="flex flex-col flex-grow w-full h-[calc(100vh-230px)] overflow-y-auto ">
            <Table
                loading={users ? false : true}
                bordered={false}
                scroll={{ x: 'max-content', }}
                columns={columns}
                dataSource={users}
                rowKey={"_id"}
                className='max-w-[100%]'
                pagination={false}
                sticky={true}
            />
        </div>
    )
}

export default UserTable