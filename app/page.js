"use client";

import { useState } from "react";
import styles from "./home.module.css";

const carriers = [
    {
        name: "Loggi",
        url: "https://www.loggi.com/rastreador/",
        match: /^(BR)([0-9]{13})$/,
    },
    {
        name: "Correios",
        url: "https://rastreamento.correios.com.br/app/index.php",
        match: /^([A-Z]{2})([0-9]{9})(BR)$/,
    },
    {
        name: "PotSpeed",
        url: "https://www.potspeed.com.br/",
        match: /^((BR)([0-9]{12})([A-Z]{1}))$|^([0-9]{11})$|^((BR)([0-9]{13}))$/,
    },
    {
        name: "J&T Express",
        url: "https://www.jtexpress.com.br/",
        match: /^((BR)([0-9]{12})([A-Z]{1}))$/,
    },
    {
        name: "Total Express",
        url: "https://totalexpress.com.br/",
        match: /^((BR)([0-9]{12})([A-Z]{1}))$/,
    }
];

export default function Home() {
    const [trackCode, setTrackCode] = useState("");

    return (
        <main className={styles.page}>
            <section className={styles.section}>
                <h1 className={styles.titleText}>
                    Insira o seu código de rastreio e veja de qual
                    transportadora ele é!
                </h1>

                <div className={styles.trackCodeInputArea}>
                    <label
                        htmlFor="track-code-input"
                        className={styles.inputLabel}
                    >
                        código de rastreio:
                    </label>
                    <input
                        name="track-code-input"
                        className={styles.codeInput}
                        onChange={(e) =>
                            setTrackCode(e.target.value.toUpperCase())
                        }
                        maxLength={15}
                        value={trackCode}
                    />
                </div>
            </section>

            <section className={styles.section}>
                <table className={styles.carriersTable}>
                    <thead>
                        <tr>
                            <th className={styles.tableHeader}>
                                transportadora
                            </th>
                            <th className={styles.tableHeader}>
                                código confere?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {carriers.map((carrier) => (
                            <tr key={carrier.name}>
                                <td className={styles.carrierInfo}>
                                    <a
                                        className={styles.carrierURL}
                                        href={carrier.url}
                                        target="_blank"
                                    >
                                        {carrier.name} 🔗
                                    </a>
                                </td>

                                <td className={styles.carrierInfo}>
                                    {carrier.match.test(trackCode)
                                        ? "✅"
                                        : "❌"}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <caption className={styles.tableCaption}>
                        Clique no nome da transportadora para ir para o site
                        dela
                    </caption>
                </table>
            </section>
        </main>
    );
}