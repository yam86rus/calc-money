import React, {Component} from 'react';
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {

    state = {
        transactions: [],
        description: '',
        amount: '',
    }

    addTransaction(add) {
        const transction = {
            id: `cmr${(+new Date).toString(16)}`,
            description: 'this.state.description',
            amount: 'this.state.amount',
            add
        }
    }

    addAmount = e => {
        this.setState({amount: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Кошелек</h1>
                    <h2>Калькулятор расходов</h2>
                </header>
                <div className="container">
                    <Total/>
                    <History/>
                    <Operation
                        addTransaction={this.addTransaction}
                        addAmount={this.addAmount}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default App;
