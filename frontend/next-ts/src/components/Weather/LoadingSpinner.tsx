const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <span className="animate-spin rounded-full h-6 w-6 border-4 border-blue-400 border-t-transparent" />
    </div>
  );
};
export default LoadingSpinner;
