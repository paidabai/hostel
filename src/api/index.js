import ajax from './axios'
import {BASE_URL} from "../utils/constants";
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`,{})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`,{})

// 最新资讯 
export const reqLatestNews = () => ajax(`${BASE_URL}/latestNews`,{})

// 最新资讯的分类
export const reqLatestNewsType = () => ajax(`${BASE_URL}/latestnewsType`,{})

// 根据Id查询每条信息
export const reqNewsDetails=(id) => ajax(`${BASE_URL}/newsDetails/${id}`,{})