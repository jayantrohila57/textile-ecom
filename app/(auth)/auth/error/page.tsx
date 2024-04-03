
const ErrorPage = async ({ params }: { params: { error: string } }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-5 ">Error:{params.error && params.error}</div>
  )
}
export default ErrorPage
