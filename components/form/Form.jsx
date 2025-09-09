import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Form.module.css";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blank = [];

    if (!formData.name) blank.push("name");
    if (!formData.email) blank.push("email");

    if (blank.length > 0) {
      alert(`${blank.join(", ")} を入力してください`);
      return;
    }

    router.push({
      pathname: "/blog/form/confirm",
      query: formData,
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>お問い合わせフォーム</legend>

          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.label}>お名前*</td>
                <td className={styles.inputCell}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.label}>メールアドレス*</td>
                <td className={styles.inputCell}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </td>
              </tr>
              <tr>
                <td className={`${styles.label} ${styles.topAlign}`}>
                  お問い合わせ内容
                </td>
                <td className={styles.inputCell}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button}>
              確認
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
