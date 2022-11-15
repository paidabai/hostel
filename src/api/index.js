import ajax from './axios'
import {BASE_URL} from "../utils/constants";
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`,{})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`,{})

// 获取旅舍详情
export const reqHostelDetail = (hostelId) => ajax(`${BASE_URL}/hostelDetail`, {hostelId})

// 获取旅舍房间类型
export const reqHostelType = (hostelId) => ajax(`${BASE_URL}/hostelType`, {hostelId})

// 获取宿舍公益卡片信息
export const reqHostelPublicGoodList = () => ajax(`${BASE_URL}/hostelPublicGoodList`,{})