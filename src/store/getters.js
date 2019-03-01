 /**
  * @file common 模块 getter 文件
  *
  * @Author: HaiYang
  * @Date: 2017-04-17 17:05:42
  */

const COMM_LOADING = state => state.loading;
const hasNewCase = state => state.hasNewCase;
const hasNewMediator = state => state.hasNewMediator;
const hasNewOperator = state => state.hasNewOperator;
const hasNewMedicalStaff = state => state.hasNewMedicalStaff;
const mediatorUnhandleCount = state => state.mediatorUnhandleCount;
const operatorUnhandleCount = state => state.operatorUnhandleCount;
const medicalStaffUnhandleCount = state => state.medicalStaffUnhandleCount;

export {
  COMM_LOADING,
  hasNewCase,
  hasNewMediator,
  hasNewOperator,
  hasNewMedicalStaff,
  mediatorUnhandleCount,
  operatorUnhandleCount,
  medicalStaffUnhandleCount
};
