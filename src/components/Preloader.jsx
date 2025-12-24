const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-green-50">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-200 border-t-green-600"></div>
      
      <p className="mt-4 animate-pulse font-mono text-green-950">
        Dubem is building...
      </p>
    </div>
  );
};

export default Preloader;