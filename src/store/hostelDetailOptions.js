import {BASE_URL} from "../utils/constants";

export default {
    namespaced: true,
    // 准备actions对象 响应hostelDetail组件的动作
    actions: {
        saveHostelDetail(content, value) {
            content.commit('SAVE_HOSTELDETAIL', value)
        }
    },
    // 准备mutations对象 操作state中的数据
    mutations: {
        SAVE_HOSTELDETAIL(state, value) {
            state.hostelDetailData = value
        }
    },
    // 准备state对象 储存共享的数据（状态）
    state: {
        hostelDetailData: []
    },
    // 准备getters对象 对state里的数据进行加工
    getters: {
        hostelImgList(state) {
            // 格式化后的img数组
            const formatImgList = []
            // 遍历hostelImg添加img的地址前缀，添加到formatImgList
            if (state.hostelDetailData.length !== 0){
                state.hostelDetailData[0].hostelImg.forEach(item => {
                    item = `${BASE_URL}/hostelImg/${item}`
                    formatImgList.push(item)
                })
                // 修改hostelDetailData的数据
                state.hostelDetailData[0].hostelImg = formatImgList
            }
            // 返回格式化后的图片列表
            return formatImgList
        }
    }
}