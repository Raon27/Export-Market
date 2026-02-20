"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, FileText } from 'lucide-react';

const reports = [
    { title: "2024 상반기 반도체 수출 동향", date: "2024.07.15", size: "2.4 MB" },
    { title: "미국 시장 진출 전략 보고서 (자동차 부품)", date: "2024.06.30", size: "1.8 MB" },
    { title: "대중국 수출 규제 영향 분석", date: "2024.06.15", size: "3.2 MB" },
    { title: "K-Beauty 동남아 시장 트렌드", date: "2024.05.20", size: "5.1 MB" },
];

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">보고서 센터</h1>
                <p className="text-slate-500 mt-2">AI가 생성한 맞춤형 시장 분석 보고서를 다운로드하세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, index) => (
                    <Card key={index} className="bg-white shadow-sm border-slate-200 hover:shadow-md transition-shadow cursor-pointer group">
                        <CardContent className="p-6 flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{report.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">생성일: {report.date} • 크기: {report.size}</p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <FileDown size={20} />
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
