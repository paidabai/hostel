import ajax from './axios'
import {BASE_URL} from "../utils/constants";
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`,{})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`,{})

// 获取宿舍公益卡片信息
export const reqHostelPublicGoodList = () => ajax(`${BASE_URL}/hostelPublicGoodList`,{})

// 会员卡  会员优惠
export const reqMemberBenefits=()=>ajax(`${BASE_URL}/memberBenefits`,{})

// 获取会员卡类型 /membercardType
export const reqMembercardType=()=>ajax(`${BASE_URL}/membercardType`,{})
