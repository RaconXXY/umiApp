/**
 * @Description demo-models
 */

import api from '@/services/demo';
const {
    getMockData, //获取他科授权治疗配置信息
} = api;

export default {
    namespace: 'demo',
    state: {
        mockdata: {}, //mock数据
    },
    effects: {
        /**
         * @description: 获取他科授权治疗配置信息
         * @param {*}
         * @return {*}
         */
        *getMockData({ payload }, { call, put, select }) {
            const response = yield call(getMockData, payload);
            if (response.code == "200") {
                yield put({
                    type: 'reducer',
                    mockdata: response.data.mockdata ? response.data.mockdata : {},
                });
            }
        },
    },
    reducers: {
        reducer(state, action) {
            return {
                ...state,
                ...action
            }
        },
    },
};