import React from "react";

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
          const candidate = Election.candidates[dataKey];
          return <p key={dataKey}>{candidate && candidate.value && candidate.value.name}: {candidate && candidate.value && candidate.value.voteCount}</p>
        })}

      </div>
    )
  }
}

export default List;
