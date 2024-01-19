'use client'

import UserTable from "@/components/Tables/UserTable";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { UserProps } from "@/lib/types";
import { message } from 'antd'
import { getUsers } from "@/lib/userApis";
import { useDebounce } from "@/helpers/helper";


const Users = () => {
    const [search, setSearch] = useState<string>("");
    const [users, setUsers] = useState<UserProps[] | undefined>()


    const debouncedSearch = useDebounce(search, 500);


    const gettingUsers = (search: string) => {
        setUsers(undefined);
        getUsers(search).then((data) => {
            setUsers(data);
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        gettingUsers(debouncedSearch);
    }, [debouncedSearch])

    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 justify-between items-center  ">
                <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 items-center gap-x-10">
                    <p className="text-[20px] font-[600]">Users List</p>
                    <div className="flex items-center w-[300px] h-[38px] rounded-md border-2 border-grey px-3">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setUsers(undefined)
                                setSearch(e.target.value)
                            }}
                            placeholder="Search by name"
                            className="bg-transparent focus:outline-none w-full"
                        />
                        <IoMdSearch className="text-2xl" />
                    </div>
                </div>
                <div>
                    <button
                        className="w-[8rem] h-[3rem] bg-green-800 text-white rounded-lg "
                    >Add User</button>
                </div>
            </div>
            <div>
                <UserTable
                    users={users}
                />
            </div>
        </div>
    )
}

export default Users