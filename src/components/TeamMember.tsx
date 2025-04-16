import React from "react";

interface TeamMemberProps {
  name: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imageUrl }) => {
  return (
    <article className="text-center">
      <img
        src={imageUrl}
        className="object-cover rounded-xl h-[352px] w-[336px] max-md:w-full max-md:h-auto"
        alt={name}
      />
      <h3 className="mt-2.5 text-4xl text-black max-sm:text-2xl">{name}</h3>
    </article>
  );
};

export default TeamMember;
