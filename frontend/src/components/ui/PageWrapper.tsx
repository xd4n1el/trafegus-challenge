export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-svh flex flex-col overflow-y-auto">
      {children}
    </div>
  );
};
