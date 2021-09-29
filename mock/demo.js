import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';

const mock = {
    'POST /api/mock': (req, res) => {
        res.send(mockjs.mock({
            'list|5': [{
                reportDept: '@city',
                'number|+1': 1,
            }],
        }));
    }
};

//模拟网络延时 单位ms
export default delay(mock, 200);