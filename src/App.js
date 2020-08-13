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

    addTransaction() {
        const transction = {
            id: `cmr${(+new Date).toString(16)}`,
            description: 'this.state.description',
            amount: 'this.state.amount',
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Total/>
                    <History/>
                    <Operation/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
