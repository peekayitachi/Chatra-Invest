export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Add a header or navigation if needed */}
            {children}
        </div>
    );
}
