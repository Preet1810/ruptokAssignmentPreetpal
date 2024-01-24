import { ColorSchemeProps } from "@/lib/types"
const ColorScheme = (props: ColorSchemeProps) => {

    return (
        <div className="w-full h-[40px] rounded-3xl p-2 shadow-md bg-white flex items-center justify-between gap-x-3">
            <p className="text-slate-500 text-[11px] font-semibold text-nowrap">Color Scheme</p>
            <div className="flex items-center gap-x-1">
                {props.colors.map((color, index) => (
                    <div
                        key={index}
                        className={`w-6 h-6 flex items-center justify-center rounded-full ${color === "#084d3b" ? "bg-[#6d938f]" : ""}`}
                    >
                        <div

                            style={{ backgroundColor: color }}
                            className="h-5 w-5 rounded-full ">
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ColorScheme