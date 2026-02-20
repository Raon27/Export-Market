"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, TrendingUp, DollarSign, Globe2 } from 'lucide-react';

const exportData = [
  { name: '1월', value: 4000 },
  { name: '2월', value: 3000 },
  { name: '3월', value: 2000 },
  { name: '4월', value: 2780 },
  { name: '5월', value: 1890 },
  { name: '6월', value: 2390 },
  { name: '7월', value: 3490 },
];

const countryData = [
  { name: '미국', share: 35 },
  { name: '중국', share: 25 },
  { name: '베트남', share: 15 },
  { name: '일본', share: 10 },
  { name: '기타', share: 15 },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">수출 현황 대시보드</h1>
          <p className="text-slate-500 mt-2">전 세계 수출 시장 및 주요 품목 현황을 한눈에 파악하세요.</p>
        </div>
        <div className="text-sm text-slate-400">
          Last updated: 2024.08.15
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="총 수출액"
          value="$12.4B"
          change="+12.5%"
          icon={<DollarSign className="text-emerald-500" />}
        />
        <StatCard
          title="성장률 (YoY)"
          value="8.2%"
          change="+2.4%"
          icon={<TrendingUp className="text-blue-500" />}
        />
        <StatCard
          title="주요 수출국"
          value="24개국"
          change="+3개국"
          icon={<Globe2 className="text-purple-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadown-sm border-slate-200">
          <CardHeader>
            <CardTitle>월별 수출 실적 추이</CardTitle>
            <CardDescription>최근 6개월간의 수출액 변동 추이입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={exportData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadown-sm border-slate-200">
          <CardHeader>
            <CardTitle>국가별 수출 점유율</CardTitle>
            <CardDescription>상위 5개국의 수출 비중입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={60} axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="share" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode }) {
  return (
    <Card className="bg-white shadow-sm border-slate-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium">
          <ArrowUpRight size={16} className="mr-1" />
          <span>{change}</span>
          <span className="text-slate-400 font-normal ml-2">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
