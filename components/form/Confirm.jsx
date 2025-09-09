import { useRouter } from "next/router";
import styles from "../../styles/Confirm.module.css";

export default function ConfirmPage() {
  const router = useRouter();
  const { name, email, message } = router.query;

  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>お問い合わせ内容確認</legend>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>お名前</td>
              <td className={styles.value}>{name}</td>
            </tr>
            <tr>
              <td className={styles.label}>Email</td>
              <td className={styles.value}>{email}</td>
            </tr>
            <tr>
              <td className={styles.label}>お問い合わせ内容</td>
              <td className={`${styles.value} ${styles.textareaValue}`}>
                {message}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.buttonWrapper}>
          <button onClick={() => router.back()} className={styles.button}>
            送信
          </button>
        </div>
      </fieldset>
    </div>
  );
}
