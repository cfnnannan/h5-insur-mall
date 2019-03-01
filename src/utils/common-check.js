import utilsDate from '@/utils/date'
var guideId = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
var guidePhone = /^1(3|4|5|7|8)\d{9}$/;
export default  {
    commonCheck: {
    /**
     * 正则判断
     * @param regular 正则公式
     * @param subject 对象主体
     * @return 通过返回false 不通过返回true
     */
    checkRegular(type, subject) {
        if((1== type && !guideId.test(subject))
            || (2 == type && !guidePhone.test(subject))) {
            return true;
        }
        return false;
    },
      /**
       * 非空判断
       * @param subject 对象主体
       * @return 通过返回false 不通过返回true
       */
      checkNull(subject) { 
        if (subject == '') {
          return true;
        }
        return false;
      },
      /**
       * 判断年龄是否在范围内
       * @param currentDate 当前年月日
       * @param cardId 证件号
       * @param start 开始年龄(含)
       * @param end 结束年龄(含)
       * @return 通过返回false 不通过返回true
       */
      checkAge(currentDate, cardId, start, end) {
        let age = cardId.substring(6, 14)
        if (start != -1 && currentDate - age < start * 10000) {
          return true;
        }
        if (end != -1 && currentDate - age > end * 10000) {
          return true;
        }
        return false;
      },
      getDate(day, type) {
        if(type == 1)
            return utilsDate.formatDate.parse(
                utilsDate.formatDate.getZeroDate(new Date(), day), 'yyyy-MM-dd hh:mm:ss').getTime()
        if(type == 2)
            return utilsDate.formatDate.parse(
              utilsDate.formatDate.getYearLaterDate(new Date(), day), 'yyyy-MM-dd hh:mm:ss').getTime()
      },
      judgeSexRel(cardId) {
        return cardId.substring(17,1)%2 == 1 ? '1' : '2'
      },
    }
}