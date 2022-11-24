import ajax from './axios'
import {
  BASE_URL,
  GAODE_WEBKEY,
  LatitudeAndLongitude_URL,
  PAY_URL,
} from '../utils/constants'
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`, {})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`, {})

// 获取旅舍详情
export const reqHostelDetail = hostelId =>
  ajax(`${BASE_URL}/hostelDetail`, { hostelId })

// 获取旅舍房间类型
export const reqHostelType = hostelId =>
  ajax(`${BASE_URL}/hostelType`, { hostelId })

// 获取宿舍公益卡片信息
export const reqHostelPublicGoodList = () =>
  ajax(`${BASE_URL}/hostelPublicGoodList`, {})
// 最新资讯
export const reqLatestNews = () => ajax(`${BASE_URL}/latestNews`, {})

// 获取加盟分类
export const reqCooperation = () => ajax(`${BASE_URL}/cooperation/catlist`, {})

// 通过cid查询 加盟分类
export const reqoneCooperation = cid =>
  ajax(`${BASE_URL}/cooperation/onecatlist`, { cid })

// 获取加盟详情
export const reqCooperationlists = () =>
  ajax(`${BASE_URL}/cooperation/lists`, {})

// 单独一条 通过lid查询
export const getcoplist = lid => ajax(`${BASE_URL}/cooperation/list`, { lid })

// 单独一条 通过cat_id查询
export const listclass = cat_id =>
  ajax(`${BASE_URL}/cooperation/classify`, { cat_id })

// 会员卡  会员优惠
export const reqMemberBenefits = () => ajax(`${BASE_URL}/memberBenefits`, {})

// 获取会员卡类型 /membercardType
export const reqMembercardType = () => ajax(`${BASE_URL}/membercardType`, {})

// 最新资讯的分类
export const reqLatestNewsType = () => ajax(`${BASE_URL}/latestnewsType`, {})

// 根据Id查询每条信息
export const reqNewsDetails = id => ajax(`${BASE_URL}/newsDetails`, { id })

// 获取旅舍的设施和服务
export const reqHostelServices = hostelId =>
  ajax(`${BASE_URL}/hostelServices`, { hostelId })

// 高德逆地理编码获取旅舍的经纬度
export const reqLatitudeAndLongitude = address =>
  ajax(`${LatitudeAndLongitude_URL}/api?address=${address}&key=${GAODE_WEBKEY}`)

// 支付
export const reqPay = orderPay => ajax(`${PAY_URL}/api/pay`, orderPay)

// 查询订单状态
export const reqOrderStatus = out_trade_no =>
  ajax(`${PAY_URL}/api/queryOrder`, { out_trade_no }, 'POST')

// 添加订单
export const reqAddOrder = order =>
  ajax(`${BASE_URL}/hostelOrder`, order, 'POST')

// 修改订单状态
export const reqUpdataOrder = order =>
  ajax(`${BASE_URL}/hostelOrder/updataOrder`, { order }, 'POST')

// 查询用户订单
export const reqUserOrder = user_phone =>
  ajax(`${BASE_URL}/hostelOrder/getOrder`, { user_phone })

// 删除订单
export const reqDeleteOrder = order =>
  ajax(`${BASE_URL}/hostelOrder/deleteOrder`, { order })

// 获取关于我们分类
export const reqAboutme = () => ajax(`${BASE_URL}/aboutme/lists`, {})

// 单独一条关于我们 通过lid查询
export const getmelist = lid => ajax(`${BASE_URL}/aboutme/list`, { lid })

// 通过cid查询 关于我们分类
export const reqoneAboutme = cid =>
  ajax(`${BASE_URL}/aboutme/oneamlist`, { cid })

// 单独一条 通过cat_id查询
export const listmeclass = cat_id =>
  ajax(`${BASE_URL}/aboutme/aboutyih`, { cat_id })
