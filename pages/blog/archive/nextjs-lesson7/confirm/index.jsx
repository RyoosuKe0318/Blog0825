import ArchiveLayout from "@/components/archive/ArchiveLayout";
import { useRouter } from "next/router";

export default function ConfirmPage() {
  const router = useRouter();
  const { salutation, firstname, lastname, gender, email, birthday, address } =
    router.query;

  return (
    <ArchiveLayout>
      <div className="w-[500px] mx-auto">
        <fieldset className="border rounded p-4">
          <legend className="px-2 text-lg font-semibold">Confirmation</legend>
          <div className="flex flex-col gap-4">
            <p>Salutation: {salutation}</p>
            <p>First name: {firstname}</p>
            <p>Last name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Gender: {gender}</p>
            <p>Date of birth: {birthday}</p>
            <p>Address: {address}</p>

            <button
              onClick={() => router.back()}
              className="w-[80px] border rounded px-2 py-1"
            >
              Back
            </button>
          </div>
        </fieldset>
      </div>
    </ArchiveLayout>
  );
}
