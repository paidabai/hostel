<template>
  <div class="publicgood">
    <div class="bgImg">
      <img src="../../assets/img/exhibition-banner5.jpg" alt="" />
    </div>
    <!-- 卡片 -->
    <div class="main">
      <HostelCard></HostelCard>
    </div>
  </div>
</template>

<script>
import {reqHostelPublicGoodList} from "../../api";
import HostelCard from "../../components/HostelCard/index.vue";
export default {
  name: "HostelPublicGood",
  components: {
    HostelCard,
  },
  data() {
    return {
      tableData: [],
    };
  },
  // 将要挂载时
  mounted() {
    this.getHostelPublicGoodList();
  },
  methods: {
    getHostelPublicGoodList() {
      reqHostelPublicGoodList().then((value) => {
        console.log(value);
        const result = value.data;
        if (result.status === 200) {
          this.tableData = result.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>