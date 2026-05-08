import { Menu } from "lucide-react";

export default function TopBar() {
    return (
        <div className="flex items-center justify-between bg-black border-b-2 border-gray px-6 py-4">
            <img src="assets/logos/crown.svg" className="w-6" />
            <Menu className="text-white"/>
        </div>
    );
}