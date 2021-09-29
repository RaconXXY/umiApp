import styles from './index.css';
import { connect } from 'dva';
import React from 'react';

@connect(({ demo }) => ({
  demo
}))
class Index extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'demo/getMockData',
      payload: {
        id: 1
      }
    })
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Index;