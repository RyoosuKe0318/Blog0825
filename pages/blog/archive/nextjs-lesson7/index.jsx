import { useState } from "react";
import { useRouter } from "next/router";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    birthday: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blank = [];
    if (!formData.salutation) blank.push("salutation");
    if (!formData.firstname) blank.push("first name");
    if (!formData.lastname) blank.push("last name");
    if (!formData.gender) blank.push("gender");
    if (!formData.email) blank.push("email");
    if (!formData.birthday) blank.push("date of birth");

    if (blank.length > 0) {
      alert(`${blank.join(", ")} is required!`);
      return;
    }

    // 現在のURLを取得して末尾のスラッシュを取り除く
    const currentPath = router.asPath.endsWith("/")
      ? router.asPath.slice(0, -1)
      : router.asPath;

    // 現在のURLの末尾に /confirm を追加して遷移
    router.push({
      pathname: `${currentPath}/confirm`,
      query: formData,
    });
  };

  return (
    <ArchiveLayout>
      <div className="w-[500px] mx-auto">
        <form onSubmit={handleSubmit}>
          <fieldset className="border rounded p-4">
            <legend className="px-2 text-lg font-semibold">
              Personal Data
            </legend>

            <div className="flex flex-col gap-4">
              <label>
                Salutation:
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="border"
                >
                  <option value="">--none--</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </label>

              <label>
                First Name:
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="border"
                />
              </label>

              <label>
                Last Name:
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="border"
                />
              </label>

              <label>
                Gender:
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border"
                />
              </label>

              <label>
                Date of Birth:
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="border"
                  max={new Date().toISOString().split("T")[0]}
                />
              </label>

              <div className="flex flex-col">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border"
                />
              </div>

              <button type="submit" className="w-[80px] border">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </ArchiveLayout>
  );
}
