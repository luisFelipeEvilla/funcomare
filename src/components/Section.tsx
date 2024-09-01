export const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <section
    className={`flex flex-col gap-4 max-w-[1024px] mx-auto py-8 ${className}`}
  >
    {children}
  </section>
);
