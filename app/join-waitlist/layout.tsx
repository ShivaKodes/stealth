export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full  min-h-screen bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
        {children}
    </div>
  )
}