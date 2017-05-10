/**
 * Created by christ on 2017/5/10.
 */


module.exports = function (orm,db) {
    var User = db.define('user',{
        custName : {type:'text',required:true},
    },
    )
}