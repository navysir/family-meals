<template>
  <div class="n-header">
    <el-row :gutter="15">
    <el-col :span="8"><geo/></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import geo from './geo.vue'
export default {
    components:{
        geo
    },
};
</script>>
<style scoped lang="scss">
@import "@/assets/css/public/layout.scss"
</style>