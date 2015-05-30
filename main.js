var Clock = function() {
    

};

Clock.prototype.update = function (cb) {
    var self = this;
    setInterval(function () {
        cb(self.build());
    }, 1000);
    
};
Clock.prototype.build = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month =Clock.helper(date.getMonth() + 1);
    var day = Clock.helper(date.getDate());
    var hour = Clock.helper(date.getHours());
    var minutes = Clock.helper(date.getMinutes());
    var sec = Clock.helper(date.getSeconds());
    var res = year + '/' + month + '/' + day + ' ' + hour + ':' + minutes + ':' + sec;
    return res;
};
Clock.prototype.print = function (str) {
    console.clear();
    console.log(str);
}
Clock.helper = function (num) {
    return (num<10) ? '0' + num : String(num); 
}
module.exports = Clock;
