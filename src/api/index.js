import ajax from './axios'
import { BASE_URL } from '../utils/constants'
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`, {})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`, {})

// 获取加盟分类数据
export const reqCooperation = () => ajax(`${BASE_URL}/cooperation/catlist`, {})
// 获取加盟列表数据
export const reqDetaillist = () => ajax(`${BASE_URL}/cooperation/list`, {})
