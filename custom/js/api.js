// 接口基地址
var ajaxRoot;
if (document.location.host === 'h5.wdjky.com' || document.location.host === 'www.wdjky.com') {
  ajaxRoot = '/gw/'; // 生产环境
} else {
  if (/wdjky.com/i.test(location.href)) {
    ajaxRoot = '/gw-te/'; // 预发 测试 qyj-re.wdjky.com 实际上只要域名中有wdjky.com 就会匹配上
  } else {
    ajaxRoot = '/gw/'; // 本地代理/ip地址 如10.1.64.195
  }
}

//请求地址
var ajaxUrl = {
  assessmentPredata: ajaxRoot + 'disease-assessment-predata',     //初始化数据

  remindDetail: ajaxRoot + 'disease-remind-detail',     //用药提醒-获取用药提醒详情

  assessmentAssess: ajaxRoot + 'disease-assessment-assess',     //评估

  assessmentRecent: ajaxRoot + 'disease-assessment-recent',     //获取用户最近的风险评估结果
  assessment: ajaxRoot + 'disease-assessment',     //获取风险评估详情
  assessmentCount: ajaxRoot + 'disease-assessment-count',     //风险评估人数

  reportInspectDetail: ajaxRoot + 'disease-report-inspect-detail',     //慢病报告-检查报告详情
  reportInspect: ajaxRoot + 'disease-report-inspect',     //慢病报告-检查报告列表

  doctorAdviceList: ajaxRoot + 'disease-doctor-advice-list',     //医生建议-医生建议详情


  // 已使用接口
  bloodGlucoseRecord: ajaxRoot + 'iot-chronic-disease-index-stat',     //首页血糖获取

  assessmentHistory: ajaxRoot + 'disease-assessment-history',     //评估历史

  assessmentHistoryList: ajaxRoot + 'disease-assessment-history-list',     //风险评估-历史评估列表
  assessmentHistoryNum: ajaxRoot + 'disease-assessment-history-num',     //风险评估-历史评估数量
  assessmentEye: ajaxRoot + 'disease-assessment-eye',     //风险评估-糖尿病眼疾症状评估
  assessmentFoot: ajaxRoot + 'disease-assessment-foot',     //风险评估-糖尿病足风险评估
  assessmentKidney: ajaxRoot + 'disease-assessment-kidney',     //风险评估-糖尿病肾病症状评估

  remindEnable: ajaxRoot + 'disease-remind-enable-or-disable',     //用药提醒-启用/禁用用药提醒
  remindDelete: ajaxRoot + 'disease-remind-delete',     //用药提醒-删除用药提醒

  remindList: ajaxRoot + 'disease-remind-list',     //用药提醒-获取用药提醒列表

  medicineList: ajaxRoot + 'disease-medicine-list',     //用药提醒-获取药品列表
  remindSave: ajaxRoot + 'disease-remind-save-and-update',     //用药提醒-保存用药提醒

  remindListCums: ajaxRoot + 'disease-remind-list-cums',     //用药提醒-获取常用药品列表
  remindDeleteCum: ajaxRoot + 'disease-remind-delete-cum',     //用药提醒-删除常用药品

  followPlan: ajaxRoot + 'disease-follow-plan-follow-up',     //随访计划-根据用户获取最近一条随访计划

  reportNum: ajaxRoot + 'disease-report-num',     //慢病报告-统计报告数
  reportScreening: ajaxRoot + 'disease-report-screening',     //慢病报告-筛查报告列表
  reportFollow: ajaxRoot + 'disease-report-follow',     //慢病报告-随访报告列表

  doctorAdviceDetails: ajaxRoot + 'disease-doctor-advice-detail',     //医生建议-医生建议列表
  doctorAdviceDetail: ajaxRoot + 'iot-doc-api-deal-opinion',     //医生建议-医生建议列表

  userGetTokenByAuthCode: ajaxRoot + 'userGetTokenByAuthCode',   //根据code换token
  // 体征测量
  // iotV2HealthDataList: ajaxRoot + 'iotV2HealthDataList',   //血糖
  // url: "/gw/iotV2HealthDataList?uid=" + localStorage.getItem('uid') + "&measure_type=glu&pgFlag=0",

};