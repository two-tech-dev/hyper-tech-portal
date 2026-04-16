// Team data — edit this file to update members
// To add a member: add a new object to the array below

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  // Optional extras — add as needed
  bio?: string;
  skills?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Viết Hiếu",
    role: "Founder",
    avatar: "https://cdn.rydenprotocol.xyz/588467093_122233398140155885_6755016248776118242_n.jpg",
    bio: "Người sáng lập 2Tech, đam mê xây dựng sản phẩm kỹ thuật số.",
    skills: ["Leadership", "Product", "Full-Stack"],
  },
  {
    name: "Trần Thiên Nam",
    role: "Co-Founder",
    avatar: "https://cdn.rydenprotocol.xyz/294261853_854954728798061_659796097419169387_n.jpg",
    bio: "Đồng sáng lập, chịu trách nhiệm chiến lược và phát triển.",
    skills: ["Strategy", "Backend", "DevOps"],
  },
  {
    name: "Phùng Trung Nhân",
    role: "Moderator",
    avatar: "https://cdn.rydenprotocol.xyz/591268000_846618858121080_4513224150407081793_n.jpg",
    bio: "Thành viên chính, đóng góp vào các dự án của nhóm.",
    skills: ["Development"],
  },
  {
    name: "Trần Huy Bảo",
    role: "Operator",
    avatar: "https://cdn.rydenprotocol.xyz/215422899.jpg",
    bio: "Vận hành và điều phối các dự án của studio.",
    skills: ["Operations", "Management"],
  },
  {
    name: "Trần Nhựt Phát",
    role: "Member",
    avatar: "https://cdn.rydenprotocol.xyz/553307145_1335093674835927_4180731484480884994_n.jpg",
    bio: "Thành viên chính, đóng góp vào các dự án của nhóm.",
    skills: ["Development"],
  },
];

export const roleOrder: Record<string, number> = {
  Founder: 0,
  "Co-Founder": 1,
  Operator: 2,
  Member: 3,
};
