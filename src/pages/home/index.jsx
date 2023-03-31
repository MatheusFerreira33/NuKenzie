import styles2 from "./styles2.module.css"
import logo from "../../assets/logo.svg";
import grop from "../../assets/Group 262.svg"

export function Home({children}) {

    return (
        <main className={styles2.mainHome}>
            <div className={styles2.containerMain}>

                <div className={styles2.box1Main}>

                    <img src={logo}/>
                    <h1>Centralize o controle das suas finanças</h1>
                    <span>de forma rápida e segura</span><br/>
                    {children}
                </div>
                <div className={styles2.box2Main}>
                        <img src={grop}/>
                </div>
            </div>
           
        </main>
    )
}