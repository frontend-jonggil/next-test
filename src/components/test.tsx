import type React from "react";
import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
  role: "admin" | "user" | "manager";
  metadata: {
    loginCount: number;
    createdAt: string;
    preferences: {
      theme: "light" | "dark";
      notifications: boolean;
    };
  };
}

interface SystemStats {
  activeUsers: number;
  totalUsers: number;
  newUsersToday: number;
  systemLoad: number;
  storageUsed: number;
  lastUpdated: string;
}

interface TempComponentProps {
  title?: string;
  showDetails?: boolean;
  onUserSelect?: (user: User) => void;
}

const generateMockData = (): { users: User[]; stats: SystemStats } => {
  const users: User[] = Array.from({ length: 10 }, (_, index) => ({
    id: `USER_${index + 1}`,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    status:
      index % 3 === 0 ? "active" : index % 3 === 1 ? "inactive" : "pending",
    lastLogin: '20040420',
    role: index % 3 === 0 ? "admin" : index % 3 === 1 ? "manager" : "user",
    metadata: {
      loginCount: Math.floor(Math.random() * 100),
      createdAt: '20040420',
      preferences: {
        theme: Math.random() > 0.5 ? "light" : "dark",
        notifications: Math.random() > 0.3,
      },
    },
  }));

  const stats: SystemStats = {
    activeUsers: users.filter((u) => u.status === "active").length,
    totalUsers: users.length,
    newUsersToday: Math.floor(Math.random() * 5),
    systemLoad: Math.random() * 100,
    storageUsed: Math.random() * 1000,
    lastUpdated: '20040420',
  };

  return { users, stats };
};

const TestComponent: React.FC<TempComponentProps> = ({
  title = "시스템 대시보드",
  showDetails = true,
  onUserSelect,
}) => {
  const [data, setData] = useState<{ users: User[]; stats: SystemStats }>({
    users: [],
    stats: {
      activeUsers: 0,
      totalUsers: 0,
      newUsersToday: 0,
      systemLoad: 0,
      storageUsed: 0,
      lastUpdated: '20040420',
    },
  });

  useEffect(() => {
    setData(generateMockData());
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* 통계 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">사용자 통계</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">활성 사용자</span>
              <span className="font-medium">{data.stats.activeUsers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">전체 사용자</span>
              <span className="font-medium">{data.stats.totalUsers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">신규 사용자</span>
              <span className="font-medium">{data.stats.newUsersToday}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">시스템 상태</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">시스템 부하</span>
              <span className="font-medium">
                {data.stats.systemLoad.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">저장소 사용량</span>
              <span className="font-medium">
                {data.stats.storageUsed.toFixed(1)} GB
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">최근 업데이트</h3>
          <div className="text-sm text-gray-600">
            {new Date(data.stats.lastUpdated).toLocaleString()}
          </div>
        </div>
      </div>

      {/* 사용자 목록 */}
      {showDetails && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  이름
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  역할
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => onUserSelect?.(user)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "inactive"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {user.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
