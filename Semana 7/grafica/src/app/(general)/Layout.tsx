
export default function  GraficosLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Root Name

        {children}
      </h1>
    </div>
  );
}