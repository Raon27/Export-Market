"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Search } from 'lucide-react';

const comparisonData = [
    { name: '대만', value: 400, korea: 240 },
    { name: '일본', value: 300, korea: 139 },
    { name: '중국', value: 200, korea: 980 },
    { name: '베트남', value: 278, korea: 390 },
    { name: '미국', value: 189, korea: 480 },
];

export default function AnalysisPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">시장 정밀 분석</h1>
                <p className="text-slate-500 mt-2">국가별/품목별 상세 데이터를 비교 분석합니다.</p>
            </div>

            {/* Search Filter Mock */}
            <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="품목명 또는 HS Code 검색..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <select className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>전체 국가</option>
                    <option>미국</option>
                    <option>중국</option>
                    <option>베트남</option>
                </select>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    분석 실행
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-white shadow-sm border-slate-200">
                    <CardHeader>
                        <CardTitle>주요 경쟁국 대비 수출 현황 (단위: 백만 달러)</CardTitle>
                        <CardDescription>선택된 품목(반도체)에 대한 한국 vs 경쟁국 수출액 비교</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <Tooltip cursor={{ fill: 'transparent' }} />
                                    <Legend />
                                    <Bar dataKey="value" name="경쟁국 평균" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="korea" name="한국" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
