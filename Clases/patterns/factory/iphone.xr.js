const Phone = require ("./phone");

class iPhoneXR{
    constructor(serialNum){
        return new Phone (
            serialNum,
            'iPhone XR',
            'A13',
            '6 GB',
            70.9,
            143.6,
            '1250 * 2600'
        )
    }
}

module.exports = iPhoneXR;