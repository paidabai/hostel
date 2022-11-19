import ajax from './axios'
import { BASE_URL } from '../utils/constants'
// 默认GET，POST为ajax(`${BASE_URL}/hostelList`,{}，’POST‘)

// 获取导航栏数据
export const reqHostelNav = () => ajax(`${BASE_URL}/hostelNav`, {})

// 获取全部的旅舍
export const reqHostelList = () => ajax(`${BASE_URL}/hostelList`, {})
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

// listclass
