import React from "react";
import HistoryItem from "./HistoryItem";

const Histoty = () => (
    <section className="history">
        <h3>История расходов</h3>
        <ul className="history__list">
            <HistoryItem/>

        </ul>
    </section>
)

export default Histoty;
