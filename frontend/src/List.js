import React from "react";
import Candidate from './Candidate';

class List extends React.Component {
  state = {
    dataKeys: null
  };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Election;
    const { candidatesCount } = this.props;
    const dataKeys = [];
    for (var i = 1; i <= candidatesCount; i++) {
      dataKeys[i] = contract.methods["candidates"].cacheCall(i);
    }
    this.setState({ dataKeys });
  }

  render() {
    const { Election } = this.props.drizzleState.contracts;
    const { dataKeys } = this.state;
    return (
      <div>
        {dataKeys && dataKeys.map(dataKey => {
          return <Candidate key={dataKey} id={dataKey} />;
        })}

      </div>
    )
  }
}

export default List;
