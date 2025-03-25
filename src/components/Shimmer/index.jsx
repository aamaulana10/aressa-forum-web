function Shimmer({ width = 'w-full', height = 'h-4', className = '', rounded = 'rounded' }) {
    return (
        <div className={`${width} ${height} bg-gray-200 ${rounded} animate-pulse ${className}`} />
    );
}

export default Shimmer;