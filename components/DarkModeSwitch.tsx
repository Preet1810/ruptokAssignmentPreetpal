import { Switch } from 'antd';
const DarkModeSwitch = () => {
    return (
        <div className="h-[40px] w-[150px] bg-white shadow-md flex items-center gap-x-5 p-2 rounded-3xl">
            <p className="text-slate-500 text-[11px] font-semibold text-nowrap">Dark Mode</p>
            <Switch defaultChecked={true} />
        </div>
    )
}

export default DarkModeSwitch