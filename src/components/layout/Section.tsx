interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`py-5 ${className ?? ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}