import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-4 py-16 px-24">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[20px]">Users List</p>
        </div>
        <div>
          <button>Add User</button>
        </div>
      </div>
    </main>
  );
}
