import { MdOutlineContentCopy } from "react-icons/md";

const CopyInput = ({value, className}: {value: string, className?: string}) => {
    const handleCopy = () => window.navigator.clipboard.writeText(value).then(() => alert('Copied.'));

    return (
        <div className={"border-[1px] flex items-center justify-center px-1 " + className}>
            <input value={value} className="w-full px-1 py-2 font-semibold focus:outline-none" readOnly />
            <MdOutlineContentCopy onClick={handleCopy} size={24} className="text-gray-700 cursor-pointer" />
        </div>
    )
}

export default CopyInput;