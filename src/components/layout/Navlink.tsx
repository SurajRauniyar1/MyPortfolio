interface Props {
  title: string;
}

export default function NavLink({ title }: Props) {
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <a
      href={`#${sectionId}`}
      className="
        group
        relative
        text-sm
        font-medium
        tracking-wide
        text-gray-400
        transition-all
        duration-300
        hover:text-white
      "
    >
      {title}

      <span
        className="
          absolute
          -bottom-2
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          transition-all
          duration-300
          group-hover:w-full
        "
      />

      <span
        className="
          absolute
          inset-0
          -z-10
          rounded-lg
          bg-blue-500/20
          opacity-0
          blur-xl
          transition-all
          duration-300
          group-hover:opacity-100
        "
      />
    </a>
  );
}