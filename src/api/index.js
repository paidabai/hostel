import ajax from './axios'
import { BASE_URL } from '../utils/constants'
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`, {})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`,{})

// 最新资讯 
export const reqLatestNews = () => ajax(`${BASE_URL}/latestNews`,{})


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
export const reqMemberBenefits=()=>ajax(`${BASE_URL}/memberBenefits`,{})

// 获取会员卡类型 /membercardType
export const reqMembercardType=()=>ajax(`${BASE_URL}/membercardType`,{})


// 最新资讯的分类
export const reqLatestNewsType = () => ajax(`${BASE_URL}/latestnewsType`,{})

// 根据Id查询每条信息
export const reqNewsDetails=(id) => ajax(`${BASE_URL}/newsDetails/${id}`,{})

