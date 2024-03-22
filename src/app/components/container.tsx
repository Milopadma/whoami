export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {children}
    </div>
  );
};
