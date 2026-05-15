// Team data — edit this file to update members
// To add a member: add a new object to the array below

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  // Optional extras — add as needed
  bio?: string;
  skills?: string[];
  githubUsername?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Viết Hiếu",
    role: "Founder",
    avatar: "https://cdn.rydenprotocol.xyz/588467093_122233398140155885_6755016248776118242_n.jpg",
    bio: "Founder of 2Tech, passionate about building digital products.",
    skills: ["Leadership", "Product", "Full-Stack"],
    githubUsername: "0xliam627",
  },
  {
    name: "Trần Thiên Nam",
    role: "Co-Founder",
    avatar: "https://avatars.githubusercontent.com/u/111500380?s=96&v=4",
    bio: "Co-founder, responsible for strategy and development.",
    skills: ["Strategy", "Backend", "DevOps"],
    githubUsername: "VennDev",
  },
  {
    name: "Phùng Trung Nhân",
    role: "Moderator",
    avatar: "https://avatars.githubusercontent.com/u/148054296?s=96&v=4",
    bio: "Core member, contributing to team projects.",
    skills: ["Development"],
    githubUsername: "junggamyeon",
  },
  {
    name: "Trần Huy Bảo",
    role: "Operator",
    avatar: "https://avatars.githubusercontent.com/u/215422899?s=96&v=4",
    bio: "Operating and coordinating studio projects.",
    skills: ["Operations", "Management"],
    githubUsername: "CYooBin10",
  },
  {
    name: "Trần Nhựt Phát",
    role: "Member",
    avatar: "https://avatars.githubusercontent.com/u/58399779?s=96&v=4",
    bio: "Core member, contributing to team projects.",
    skills: ["Development"],
    githubUsername: "ClickedTran",
  },
  {
    name: "Rezn1r",
    role: "Member",
    avatar: "https://avatars.githubusercontent.com/u/110711560?v=4",
    bio: "Core member, contributing to team projects.",
    skills: ["Development"],
    githubUsername: "Rezn1r",
  },
];

export const roleOrder: Record<string, number> = {
  Founder: 0,
  "Co-Founder": 1,
  Operator: 2,
  Member: 3,
};
