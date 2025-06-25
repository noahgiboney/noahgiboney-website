import { FaTrademark } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return <div className="flex gap-2 justify-center py-7 text-gray-500">
        <div className="flex gap-0">
        <p>Noah Giboney</p>
        <FaTrademark />
        </div>
        <p>{currentYear}</p>
    </div>
}
