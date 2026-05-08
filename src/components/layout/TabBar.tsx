import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Link } from "react-router";

const OPTIONS: { label: string; icon: IconName, path: string }[] = [
    { label: "INÍCIO", icon: "house", path: "/" },
    { label: "AGENDA", icon: "calendar", path: "" },
    { label: "CHECK-IN", icon: "qr-code", path: "" },
    { label: "AVISOS", icon: "megaphone", path: "" },
    { label: "PERFIL", icon: "user", path: "" },
]

export default function TabBar() {
    const activeIcon: IconName = "house";

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
            <div className="flex items-center justify-between bg-black border-2 border-gray shadow-xl px-6 py-2">
                {OPTIONS.map((opt) => {
                    const isPrimary = opt.icon === "qr-code";
                    const isActive = opt.icon === activeIcon;

                    return (
                        <Link to={opt.path}>

                            <div key={opt.icon} className="flex flex-col items-center justify-center gap-1">
                                {isPrimary ? (
                                    <div className="-mt-6 flex items-center justify-center bg-red p-3 rounded-full shadow-lg">
                                        <DynamicIcon name={opt.icon} size={20} className="text-white" />
                                    </div>
                                ) : (
                                    <DynamicIcon
                                        name={opt.icon}
                                        size={18}
                                        className={isActive ? "text-red" : "text-gray-light"}
                                    />
                                )}
                                <p className={`font-display text-[10px] font-light ${isActive ? "text-red" : "text-gray-light"}`}>
                                    {opt.label}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div >
    );
}