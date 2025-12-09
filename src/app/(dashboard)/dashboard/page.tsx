const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your tasks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">{/* side content */}</div>
    </div>
  );
};

export default DashboardPage;
