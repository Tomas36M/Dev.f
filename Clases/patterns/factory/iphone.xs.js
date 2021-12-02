const Phone = require ("./phone");

class iPhoneXS{
    constructor(serialNum){
        return new Phone (
            serialNum,
            'iPhone XS',
            'A12',
            '4 GB',
            70.9,
            143.6,
            '1125 * 2436'
        )
    }
}

module.exports = iPhoneXS;