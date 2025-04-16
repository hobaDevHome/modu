import React from "react";
import TeamMember from "./TeamMember";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Reina Ahmed",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2aed9ed1614749b0f78d7e5868ce26744c87d88c?placeholderIfAbsent=true",
    },
    {
      name: "Shrouk Tarek",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/798f02a4cd94b3cd4c82ae391c00170560c2b343?placeholderIfAbsent=true",
    },
    {
      name: "Mariam Osama",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d40d3c15183ed9b1efdd4c549b54e25d22b33483?placeholderIfAbsent=true",
    },
    {
      name: "Mariam Amr",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52d0baca8460845252818f6339066e64b11a90c3?placeholderIfAbsent=true",
    },
    {
      name: "Rowayna Alaa",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b9d1d09dc5b57d4b4b6a3a3f870267e83d472746?placeholderIfAbsent=true",
    },
    {
      name: "Ghena Bahaa",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8dbcb59376978169307f7e9d1fc4e32bdebb9bf4?placeholderIfAbsent=true",
    },
    {
      name: "Azza Hussein",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a30b4da06a00327f19feed98fd3f4760f3e38294?placeholderIfAbsent=true",
    },
    {
      name: "Ahmed Abdalraheem",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/10575c92187973fdecf82ceedaf67123b637b600?placeholderIfAbsent=true",
    },
  ];

  // Split team members into rows of 4
  const firstRow = teamMembers.slice(0, 4);
  const secondRow = teamMembers.slice(4);

  return (
    <section className="px-20 py-12">
      <h2 className="text-6xl text-center text-black max-sm:text-5xl">
        Our Team
      </h2>
      <div className="mt-8">
        <div className="flex gap-6 mb-8 max-md:flex-col">
          {firstRow.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
        <div className="flex gap-6 mb-8 max-md:flex-col">
          {secondRow.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
