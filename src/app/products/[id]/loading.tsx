<<<<<<< HEAD
export default function Loading() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
=======
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center mt-20">

        <Spinner className="size-8 text-purple-500" />
      </div>
    </>
>>>>>>> a101d78 (update from another PC)
  );
}