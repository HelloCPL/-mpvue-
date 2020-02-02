<template>
  <div class="notification">
    <!-- 通知 -->
    <van-notice-bar mode="closeable" :left-icon="notifyImg1" :text="notifyWord" />

    <!-- 头部 -->
    <div class="we-bg-white we-padding-10 header">
      <div class="we-margin-bottom-20 header-footer">
        <div class="notify" v-if="!notificationList.length">
          <img :src="notifyNoneImg">
          <span class="we-tips we-margin-right-2">我的消息</span>
          <van-tag type="danger" round>未读5</van-tag>
          <!-- <van-tag type="danger" round>1</van-tag> -->
        </div>
        <div class="notify" v-else>
          <img :src="notifyImg">
          <span class="we-tips we-margin-right-2">我的消息</span>
        </div>

        <div class="notify">
          <img :src="settingImg">
        </div>
      </div>

      <div class="img-wrapper">
        <img :src="unLoginImg" class="header-img" v-if="!login">
        <img :src="loginImg" class="header-img" v-else-if="login && !userImg">
        <img :src="userImg" class="header-img" v-if="login && userImg">
        <span class="we-tips we-margin-top-15" v-if="!login">点击登录</span>
        <span class="we-tips we-margin-top-15" v-else>小明同学</span>
      </div>
    </div>

    <!-- 我的信息 -->
    <div class="we-divider"></div>
    <van-cell-group>
      <van-cell value="去认证" is-link>
        <div slot="title" class="">
          <span class="van-cell-text we-margin-right-5">实名认证</span>
          <van-tag type="danger" round>未认证</van-tag>
        </div>
      </van-cell>
      <van-cell title="个人信息" value="修改" is-link />
    </van-cell-group>

    <!-- 学校信息 -->
    <div class="we-divider"></div>
    <van-cell-group>
      <van-cell title="我的宿舍" value="北一999" is-link />
      <van-cell title="我的学校" value="广东技术师范学院" is-link />
      </van-cell>
      <van-cell title="规章制度" is-link />
    </van-cell-group>

  </div>
</template>

<script>

export default {
  data() {
    return {
      unLoginImg: require('@img/icon_user_unlogin.png'),
      loginImg: require('@img/icon_user_login.png'),
      notifyNoneImg: require('@img/icon_notify.png'),
      notifyImg: require('@img/icon_notify_red.png'),
      notifyImg1: require('@img/icon_notify1.png'),
      settingImg: require('@img/icon_setting.png'),
      userImg: '',
      login: false, //是否登录

      notificationList: [], //消息
      notifyWord: '如果未实名，这个通知就会显示，快点去认证吧。。。'
    }
  }
}
</script>

<style lang="scss">
.notification {
  .van-notice-bar {
    height: auto;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .van-notice-bar__right-icon {
    top: 6px;
  }
}
</style>

<style lang="scss" scope>
// 头部
.header {
  width: 100%;
  min-height: 120px;
  padding-bottom: 20px;

  .header-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .notify {
      display: flex;
      align-items: center;
      padding: 2px 4px;

      .tips {
        color: red;
        padding-left: 2px;
      }

      img {
        width: 16px;
        height: 16px;
        margin-right: 2px;
      }
    }
  }

  .img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .header-img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>