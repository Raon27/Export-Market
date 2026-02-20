import Link from 'next/link';
import { LayoutDashboard, BarChart2, FileText, Globe } from 'lucide-react';

export function Navigation() {
    return (
        <nav className="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white p-4">
            <div className="flex items-center gap-2 mb-8 px-2">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Global Insight
                </span>
            </div>

            <div className="flex flex-col gap-2">
                <NavLink href="/" icon={<LayoutDashboard size={20} />} label="대시보드" />
                <NavLink href="/analysis" icon={<BarChart2 size={20} />} label="시장 분석" />
                <NavLink href="/reports" icon={<FileText size={20} />} label="보고서 생성" />
            </div>

            <div className="absolute bottom-4 left-4 text-xs text-slate-500">
                © 2024 Global Insight Platform
            </div>
        </nav>
    );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}
