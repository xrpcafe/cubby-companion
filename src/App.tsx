import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import toast, { Toaster } from "react-hot-toast";
import { apiServices } from "./ApiServices";
import crypto from "crypto";
import { Wallet } from "xrpl";
import Vault from "./Vault";
import { signer } from "./Signer";
import { common } from "./Common";
import { Storage } from "@ionic/storage";
import { Account } from 'xrpl-secret-numbers'
import "./css/mvp.css";
import "./css/cozystyles.css";
import "./css/styles.css";
import { SetStateAction, useEffect, useState } from "react";
import { setFlagsFromString } from "v8";
setupIonicReact();

const App: React.FC = () => {
  const [seedEncrypted, setSeedEncrypted] = useState("");
  const [seed, setSeed] = useState("");
  const [pw, setpw] = useState("");
  const [secretNumberA, setSecretNumberA] = useState("");
  const [secretNumberB, setSecretNumberB] = useState("");
  const [secretNumberC, setSecretNumberC] = useState("");
  const [secretNumberD, setSecretNumberD] = useState("");
  const [secretNumberE, setSecretNumberE] = useState("");
  const [secretNumberF, setSecretNumberF] = useState("");
  const [secretNumberG, setSecretNumberG] = useState("");
  const [secretNumberH, setSecretNumberH] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [currentTransactionId, setCurrentTransactionId] = useState("");
  const [bulkTransactions, setBulkTransactions] = useState([]);
  const [currentTransactionText, setCurrentTransactionText] = useState("");
  const [confirmBulkTxn, setConfirmBulkTxn] = useState(false);
  const [confirmBulkSpinner, setConfirmBulkSpinner] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [keyType, setKeyType] = useState("family_seed");
  const invokeNotification = (notifyMessage: string) => toast(notifyMessage);
  const v = new Vault();
  const [vault, setVault] = useState<Vault>(new Vault());
  useEffect(() => {
    const getEncryptedSeed = async () => {
      let seedEncrypted = await vault.get("xrp.cafe_seed");

      if (seedEncrypted != "" && seedEncrypted != undefined) {
        setSeedEncrypted(seedEncrypted);
      }
    };

    getEncryptedSeed();
  }, []);

  function handleSeedChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSeed(event.target.value);
  }

  function handleSecretNumberAChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberA(event.target.value);
  }

  function handleSecretNumberBChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberB(event.target.value);
  }

  function handleSecretNumberCChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberC(event.target.value);
  }

  function handleSecretNumberDChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberD(event.target.value);
  }

  function handleSecretNumberEChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberE(event.target.value);
  }

  function handleSecretNumberFChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberF(event.target.value);
  }

  function handleSecretNumberGChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberG(event.target.value);
  }

  function handleSecretNumberHChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSecretNumberH(event.target.value);
  }

  function handleAgreeToTerms(event) {
    setAgreeToTerms(event.target.value);
  }

  async function unlockAccount() {
    const decodedText = decrypt(seedEncrypted, pw);
    if (decodedText === undefined) {
      invokeNotification("Invalid Password");
      return;
    }
    let wallet = Wallet.fromSeed(decodedText);
    setUserAccount(wallet.address);
    setpw("");
    //Check for new transactions
    let txns = await apiServices.getBulkOffers(wallet.address);
    if (txns.success) {
      setBulkTransactions(txns.data);
    }
  }

  async function reset() {
    await vault.clear();
    setUserAccount("");
    setSeedEncrypted("");
    invokeNotification("Account has been removed");
  }

  const encrypt = (plainText: string, password: string) => {
    try {
      const iv = crypto.randomBytes(16);
      const key = crypto
        .createHash("sha256")
        .update(password)
        .digest("base64")
        .substr(0, 32);
      const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

      let encrypted = cipher.update(plainText);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return iv.toString("hex") + ":" + encrypted.toString("hex");
    } catch (error) {
      console.log(error);
    }
  };

  const decrypt = (encryptedText: string, password: string) => {
    try {
      const textParts = encryptedText.split(":");
      const iv = Buffer.from(textParts.shift(), "hex");

      const encryptedData = Buffer.from(textParts.join(":"), "hex");
      const key = crypto
        .createHash("sha256")
        .update(password)
        .digest("base64")
        .substr(0, 32);
      const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

      const decrypted = decipher.update(encryptedData);
      const decryptedText = Buffer.concat([decrypted, decipher.final()]);
      return decryptedText.toString();
    } catch (error) {
      console.log(error);
    }
  };

  function handlepwChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setpw(event.target.value);
  }

  function handlepwConfirmChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setPwConfirm(event.target.value);
  }

  async function addAccount() {
    if (pw != pwConfirm) {
      invokeNotification("Password/Pin does not match.");
      return;
    }

    if(agreeToTerms === false)
    {
      invokeNotification("You must agree to the terms and conditions to continue.");
      return;
    }

    try {
      let wallet = Wallet.fromSeed(seed);
      setUserAccount(wallet.address);
      //Encrypt Key and store
      const encText = encrypt(seed, pwConfirm);
      await vault.set("xrp.cafe_seed", encText);
      setSeedEncrypted(encText);
      setSeed("");
      setpw("");
      setPwConfirm("");
      invokeNotification("Wallet added successfully");
    } catch (err) {
      console.log(err);
      invokeNotification("Invalid family seed");
    }
  }

async function addAccountSecretNumbers() {
  if (pw != pwConfirm) {
    invokeNotification("Password/Pin does not match.");
    return;
  }

  if(agreeToTerms === false)
  {
    invokeNotification("You must agree to the terms and conditions to continue.");
    return;
  }

  if(secretNumberA.trim() != "" && secretNumberB.trim() != "" && secretNumberC.trim() != "" && secretNumberD.trim() != "" && secretNumberE.trim() != "" && secretNumberF.trim() != "" && secretNumberG.trim() != "" && secretNumberH.trim() != "")
  {
    try {
      const secret = secretNumberA.trim() + " " + secretNumberB.trim() + " " + secretNumberC.trim() + " " + secretNumberD.trim() + " " + secretNumberE.trim() + " " + secretNumberF.trim() + " " + secretNumberG.trim() + " " + secretNumberH.trim()

      const account = new Account(secret)
  
      setUserAccount(account.getAddress());
      let familySeed = account.getFamilySeed()
      //Encrypt Key and store
      const encText = encrypt(familySeed, pwConfirm);
      await vault.set("xrp.cafe_seed", encText);
      setSeedEncrypted(encText);
      setSeed("");
      setpw("");
      setPwConfirm("");
      invokeNotification("Wallet added successfully");
    } catch (err) {
      invokeNotification("Invalid secret numbers");
    }
  } else {
    invokeNotification("Invalid secret numbers");
  }

}

  async function refresh() {
    let txns = await apiServices.getBulkOffers(userAccount);
    if (txns.success) {
      setBulkTransactions(txns.data);
    }
  }

  function confirmBulkDialog(
    transactions: SetStateAction<string>,
    id: SetStateAction<string>
  ) {
    setCurrentTransactionId(id);
    setCurrentTransactionText(transactions);
    setConfirmBulkTxn(true);
  }

  async function confirmBulkTransaction(transactions: string) {
    try
    {   let decodedText = '';
        let wallet = null;
      try{
        decodedText = decrypt(seedEncrypted, pw);
        wallet = Wallet.fromSeed(decodedText);
      } catch(err) {
        invokeNotification("Invalid password")
        return;
      }
      setConfirmBulkSpinner(true)
      setpw("");

      let signedTransactions = await signer.signTransactions(
        transactions,
        decodedText
      );
      setCurrentTransactionText("");
      let response = await apiServices.submitTransactions(
        wallet.address,
        signedTransactions,
        currentTransactionId
      );

      if(response.success)
      {
        await fetchBulkStatus(parseInt(currentTransactionId))
      }

    } catch(err)
    {
      setCurrentTransactionText("");
      setpw("");
      setCurrentTransactionId("");
      invokeNotification("An Error has occurred")
      refresh()
    }
  }

  async function fetchBulkStatus(id: number)
    {
        return new Promise(async (resolve,reject)=>{
            let bulkStatus = await apiServices.getBulkTransactionStatus(id);

            if(bulkStatus.success)
            {
              if(bulkStatus.data.length > 0)
              {
                if(bulkStatus.data[0].processed == 0)
                {
                  setTimeout(async function() {
                    await fetchBulkStatus(id);
                  }, 2000);
                } else {
                  if(bulkStatus.data[0].processed == 1)
                  {
                      setConfirmBulkTxn(false)
                      setConfirmBulkSpinner(false)
                      invokeNotification('Sweep has been executed successfully')
                      setCurrentTransactionId("");
                      refresh()
                      resolve(true)
                  } else {
                    setConfirmBulkTxn(false)
                    setConfirmBulkSpinner(false)
                    invokeNotification('Error: ' + bulkStatus.data[0].result)
                    setCurrentTransactionId("");
                    refresh()
                    resolve(true)
                  }
                }
              }
            } else {
              setTimeout(async function() {
                await fetchBulkStatus(id);
              }, 2000);
            }
        });
    }

  function onKeyTypeChange(event) {
    setKeyType(event.target.value);
  }

  async function rejectTransaction(id: number)
  {
     let result = await apiServices.rejectTransaction(id, userAccount);
     if(result.success)
     {
      invokeNotification('Transaction rejected')
      refresh()
     }
  }

  return (
    <IonApp>
      <main className="bulk-app" style={{marginTop:'70px'}}>
        <header>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 376.43 84.2"><defs></defs><path d="M106.06 41.21c0-15.05 9.44-25.26 25.39-25.26 14.42 0 23.51 8.29 23.6 21.05h-16.33c-.48-5.13-3.13-7.91-7.02-7.91-4.62 0-7.65 3.95-7.65 11.99s3.03 11.99 7.65 11.99c3.86 0 6.63-2.77 7.02-7.91h16.33c-.19 12.98-9.09 21.3-23.6 21.3-15.95 0-25.39-10.21-25.39-25.26ZM191.83 16.59h17.61v48.99h-16.71v-9.31h-.51c-2.14 6.25-7.75 9.95-15.05 9.95-10.3 0-17.06-7.65-17.09-18.37V16.6h17.61v27.55c.03 4.85 2.58 7.78 7.02 7.78s7.18-2.93 7.14-7.78V16.6ZM215.86.26h17.61v24.88h.26c1.91-4.98 6.51-9.18 13.78-9.18 9.69 0 19.14 7.4 19.14 25.13s-8.8 25.13-19.26 25.13c-6.89 0-11.61-3.7-13.65-8.67h-.38v8.04h-17.48V.26Zm25 52.43c4.85 0 7.65-4.34 7.65-11.61s-2.81-11.61-7.65-11.61-7.78 4.34-7.78 11.61 2.93 11.61 7.78 11.61ZM271.52.26h17.61v24.88h.26c1.91-4.98 6.51-9.18 13.78-9.18 9.69 0 19.14 7.4 19.14 25.13s-8.8 25.13-19.26 25.13c-6.89 0-11.61-3.7-13.65-8.67h-.38v8.04h-17.48V.26Zm25 52.43c4.85 0 7.65-4.34 7.65-11.61s-2.81-11.61-7.65-11.61-7.78 4.34-7.78 11.61 2.93 11.61 7.78 11.61ZM326.04 82.22l3.83-12.5c4.34 1.53 7.75 1.63 8.93-1.09l.38-.89-17.22-51.15h18.37l7.91 33.93h.51l8.04-33.93h18.5l-17.86 53.07c-2.71 8.1-8.48 14.29-20.79 14.29-4.05 0-7.85-.64-10.59-1.72ZM59.28 77.55H15.92c-8.14 0-14.77-6.62-14.77-14.77V19.43c.01-8.15 6.63-14.77 14.77-14.77h43.36c8.14 0 14.77 6.62 14.77 14.77v43.36c0 8.14-6.62 14.77-14.77 14.77ZM15.92 13.61c-3.21 0-5.82 2.61-5.82 5.82v43.36c0 3.21 2.61 5.82 5.82 5.82h43.36c3.21 0 5.82-2.61 5.82-5.82V19.43c0-3.21-2.61-5.82-5.82-5.82H15.92Z" className="cls-1"></path><path d="M37.6 53.09c-8.81 0-15.98-7.17-15.98-15.98a4.01 4.01 0 1 1 8.02 0c0 4.39 3.57 7.95 7.95 7.95s7.95-3.57 7.95-7.95a4.01 4.01 0 1 1 8.02 0c0 8.81-7.17 15.98-15.98 15.98Z" className="cls-1"></path></svg>
        </header>

        <Toaster position="bottom-center"
  reverseOrder={false}></Toaster>

        <div
          id="modal_confirmBulkTxn"
          className={`modal ${confirmBulkTxn ? `is-active` : ``}`}
        >
          <div
            className="modal-background"
            onClick={() => setConfirmBulkTxn(!confirmBulkTxn)}
          ></div>
          <div className="modal-card">
            <section className="modal-card-body">
              <div className="field">
                <div className="control is-flex is-align-items-center">
                  Enter password/pin to confirm:{" "}
                  <input
                    type="password"
                    onChange={handlepwChange}
                    className="input"
                    value={pw}
                  />
                </div>
              </div>
              <p className="mb mb-2 has-text-centered notification">
                Confirming will send all transactions to the ledger.
              </p>
            </section>
            <footer className="modal-card-foot">
              <button
                className={`button is-primary is-medium is-fullwidth ${confirmBulkSpinner ? `is-loading disabled` : ``}`}
                onClick={() => confirmBulkTransaction(currentTransactionText)}
              >
                Confirm
              </button>
              <button
                className="button is-medium is-fullwidth"
                onClick={() => setConfirmBulkTxn(false)}
              >
                Cancel
              </button>
            </footer>
          </div>
        </div>

        {userAccount != "" ? (
          <div className="app-screen">
            <section className="section">
              <div className="wallet">
                <div className="buttons has-addons is-centered">
                  <div
                    className="button is-small is-rounded is-primary is-light is-truncate"
                    title={userAccount}
                  >
                    {userAccount}
                  </div>
                  <button
                    className="button is-small is-rounded is-danger"
                    onClick={reset}
                  >
                    Remove
                  </button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="button is-icon"
                  aria-label="refresh"
                  onClick={refresh}
                >
                  <div className="icon is-large">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.12921 0.999998L9.55132 3.4221C9.94184 3.81263 9.94184 4.44579 9.55132 4.83632L7.12921 7.25842"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M14.1765 10.6425C14.1765 14.1537 11.3301 17 7.81899 17C4.30784 17 1.4615 14.1537 1.4615 10.6425C1.4615 7.13138 4.30784 4.28503 7.81899 4.28503H8.75504"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="bulk-cards">
                {bulkTransactions.length === 0 ? (
                  <div className="notification">
                  No transactions found
              </div>
                ) : (
                  <></>
                )}
                {bulkTransactions.map((txn, i) => (
                  <div className="card">
                    <div className="card-content">
                      <div className="tag">{txn.txn_type} transaction - {common.SplitTime(txn.datetime).Minutes} Minute(s) ago</div>
                      <div className="title">{txn.collection_name}</div>
                      <div className="price">
                        {common.countArrayItems(txn.txn_text)} NFTs -{" "}
                        <span>
                          {common.getTotalXRPAmount(txn.txn_text)} XRP
                        </span>
                      </div>
                      <div className="buttons">
                        <button
                          className="button is-success"
                          onClick={() =>
                            confirmBulkDialog(txn.txn_text, txn.id)
                          }
                        >
                          Confirm
                        </button>
                        <button className="button is-danger" onClick={() => rejectTransaction(txn.id)}>Cancel</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : seedEncrypted != "" ? (



        <div className="app-screen">
                <section className="section">
                    <div className="field">
                        <label className="label">Enter password</label>
                        <div className="control">
                            <input className="input" type="password" onChange={handlepwChange} placeholder="" />
                        </div>
                    </div>
                    <div className="buttons mt mt-5">
                        <button className="button is-success" onClick={unlockAccount}>Unlock</button>
                        <button className="button is-white" onClick={reset}>Reset</button>
                    </div>
                </section>
            </div>
        ) : (
          <div className="app-screen">
            <section className="section">

            <div className="field">
                <label className="label">Key type</label>
                <div className="control">
                    <label className="radio is-custom">Family seed
                    <input
                        type="radio"
                        name="storage"
                        value="family_seed"
                        checked={keyType === "family_seed"}
                        onChange={onKeyTypeChange}
                      />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio is-custom">Secret numbers
                    <input
                        type="radio"
                        name="storage"
                        value="secret_numbers"
                        checked={keyType === "secret_numbers"}
                        onChange={onKeyTypeChange}
                      />
                        <span className="checkmark"></span>
                    </label>
                </div>

            </div>
              {keyType === "family_seed" ? (
                <>
                  <div className="field">
                    <label className="label">Enter family seed</label>
                    <div className="control">
                      <input
                        type="text"
                        onChange={handleSeedChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Create password</label>
                    <div className="control">
                      <input
                        type="password"
                        onChange={handlepwChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm password</label>
                    <div className="control">
                      <input
                        type="password"
                        onChange={handlepwConfirmChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="term-control">
                    <label className="checkbox">
                        <input type="checkbox" onChange={handleAgreeToTerms}  />
                        I agree to the 
                        <span className="checkmark"></span>
                    </label>
                    <a role="button" href="https://xrp.cafe/terms" target="_blank">terms</a> <label>and</label> <a role="button" href="https://xrp.cafe/privacy" target="_blank">privacy policy</a>
                </div>
                  <div className="buttons mt mt-5">
                    <button className="button is-success" onClick={addAccount}>
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}

              {keyType === "secret_numbers" ? (
                <>
                  <div className="field">
                    <label className="label">A</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberAChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">B</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberBChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">C</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberCChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">D</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberDChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">E</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberEChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">F</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberFChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">G</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberGChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">H</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        onChange={handleSecretNumberHChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Create password</label>
                    <div className="control">
                      <input
                        type="password"
                        onChange={handlepwChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm password</label>
                    <div className="control">
                      <input
                        type="password"
                        onChange={handlepwConfirmChange}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="term-control">
                    <label className="checkbox">
                        <input type="checkbox" onChange={handleAgreeToTerms}  />
                        I agree to the 
                        <span className="checkmark"></span>
                    </label>
                    <a role="button" href="https://xrp.cafe/terms" target="_blank">terms</a><label>and</label> <a role="button" href="https://xrp.cafe/privacy" target="_blank">privacy policy</a>
                </div>
                  <div className="buttons mt mt-5">
                    <button className="button is-success" onClick={addAccountSecretNumbers}>
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </section>
          </div>
        )}
      </main>
    </IonApp>
  );
};

export default App;
