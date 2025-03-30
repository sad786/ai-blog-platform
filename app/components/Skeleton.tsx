export default function BlogSkeleton() {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg animate-pulse">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
  
        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
         
  
        {/* Date Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-4"></div>
      </div>
    );
  }