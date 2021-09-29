import request from '@/utils/request';

export default function gen(params) {
    let url = params;
    let method = 'GET';
    const paramsArray = params.split(' ')
    if (paramsArray.length === 2) {
        method = paramsArray[0];
        url = paramsArray[1];
    }

    return function (data) {
        return request({
            url,
            data,
            method,
        })
    }
}