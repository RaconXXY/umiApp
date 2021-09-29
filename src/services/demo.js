/**
 * @Description demo-API
 */
import gen from './index';
const demoapi = {
    //获取mock数据
    getMockData: `POST /api/mock`,
};
const APIFunction = {}
for (const key in demoapi) {
    APIFunction[key] = gen(demoapi[key]);
}

export default APIFunction