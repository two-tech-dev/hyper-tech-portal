import MemberCard from "./MemberCard";

const TeamSection = () => {
    const hyperStudioMembers = [
        {
            name: "Nguyễn Viết Hiếu",
            role: "Founder",
            avatar: "https://cdn.rydenprotocol.xyz/588467093_122233398140155885_6755016248776118242_n.jpg",
        },
        {
            name: "Trần Thiên Nam",
            role: "Co-Founder",
            avatar: "https://cdn.rydenprotocol.xyz/294261853_854954728798061_659796097419169387_n.jpg",
        },
    ];

    const jasperWildMembers = [
        {
            name: "Trần Huy Bảo",
            role: "Operator",
            avatar: "https://cdn.rydenprotocol.xyz/215422899.jpg",
        },
        {
            name: "Phùng Trung Nhân",
            role: "Operator",
            avatar: "https://cdn.rydenprotocol.xyz/591268000_846618858121080_4513224150407081793_n.jpg",
        },
        {
            name: "Trần Nhựt Phát",
            role: "Member",
            avatar: "https://cdn.rydenprotocol.xyz/553307145_1335093674835927_4180731484480884994_n.jpg",
        }
    ];

    return (
        <section
            id="team"
            className="py-32 px-6 w-full max-w-6xl mx-auto space-y-40 relative z-10"
        >
            {/* Main Team Section */}
            <div className="animate-fade-in-up">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-100/50 px-4 py-1.5 rounded-full">
                        Core Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight font-display">
                        Hyper Tech Studios
                    </h2>
                    <p className="text-slate-500 max-w-sm text-center text-sm leading-relaxed">
                        The founding architects behind the systems and vision of
                        Hyper Tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {hyperStudioMembers.map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </div>
            </div>

            {/* Jasper Wild Section */}
            <div className="animate-fade-in-up">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-100/50 px-4 py-1.5 rounded-full">
                        Server Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight font-display">
                        Jasper Wild
                    </h2>
                    <p className="text-slate-500 max-w-sm text-center text-sm leading-relaxed">
                        The dedicated team managing the bedrock Minecraft
                        ecosystem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jasperWildMembers.map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </div>
            </div>

            {/* Bottom spacer deco */}
            <div className="pt-20 flex justify-center opacity-30">
                <div className="h-px w-full max-w-md bg-linear-to-r from-transparent via-emerald-200 to-transparent" />
            </div>
        </section>
    );
};

export default TeamSection;
