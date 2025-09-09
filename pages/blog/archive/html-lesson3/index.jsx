import ArchiveLayout from "@/components/archive/ArchiveLayout";
import styles from "./html-lesson3.module.css";

export default function HtmlLesson3() {
  return (
    <ArchiveLayout>
      <form className={styles.form}>
        <h1 className={styles.title}>お問い合わせフォーム</h1>
        <p className={styles.sub}>以下のフォームを入力し、送信してください。</p>

        <fieldset>
          <main className={styles.main}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                お名前 <div className={styles.req}>必須</div>
              </dt>
              <dd>
                <input
                  type="text"
                  name="name"
                  placeholder="田中 花子"
                  required
                  className={styles.textInput}
                />
              </dd>

              <dt className={styles.dt}>
                E-mail <div className={styles.req}>必須</div>
              </dt>
              <dd>
                <input
                  type="email"
                  name="email"
                  placeholder="tanaka@example.com"
                  required
                  className={styles.emailInput}
                />
              </dd>

              <dt className={styles.dt}>年齢</dt>
              <div className={styles.optAge}>
                {["20代", "30代", "40代", "50代", "60代以上"].map(
                  (age, index) => (
                    <dd key={age}>
                      <input
                        type="radio"
                        name="age"
                        id={`age${index + 1}`}
                        value={age}
                      />
                      <label htmlFor={`age${index + 1}`}>{age}</label>
                    </dd>
                  )
                )}
              </div>

              <dt className={styles.dt}>関心・興味</dt>
              <div className={styles.optItr}>
                {["プログラミング", "英語学習", "観光業", "マーケティング"].map(
                  (item, index) => (
                    <dd key={item}>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id={`checkbox${index + 1}`}
                        value={item}
                      />
                      <label htmlFor={`checkbox${index + 1}`}>{item}</label>
                    </dd>
                  )
                )}
                <dd>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox5"
                    value="その他"
                  />
                  <label htmlFor="checkbox5">その他</label>
                  <textarea
                    name="free"
                    rows="2"
                    placeholder="例）英語レベルはどの程度必要ですか？"
                    className={styles.textarea}
                  />
                </dd>
              </div>

              <dt className={styles.dt}>その他</dt>
              <dd>
                <textarea
                  name="free"
                  rows="2"
                  placeholder="例）英語レベルはどの程度必要ですか？"
                  className={styles.textarea}
                />
              </dd>
            </dl>
          </main>
        </fieldset>

        <div className={styles.ref}>
          <a href="https://ring-group.jp/policy/">プライバシーポリシー</a>
          <span className="not">に同意の上、「送信する」を押してください</span>
        </div>

        <div>
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree">同意する</label>
        </div>

        <input type="submit" value="送信する" className={styles.btnSbm} />
      </form>
    </ArchiveLayout>
  );
}
