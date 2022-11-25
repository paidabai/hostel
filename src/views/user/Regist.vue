<template>
  <div class="regist">
    <div class="login_box">
      <h1>
        <a href="./">
          <img src="../../assets/logo/logo.png" alt="" />
        </a>
      </h1>
      <div class="login_registry_form">
        <h2>
          <span>欢迎注册YHA<sup>®</sup>青年旅舍<sup>®</sup></span>
        </h2>

        <form action="" method="post">
          <ul>
            <li :class="emailFalse ? '' : 'fail'">
              <label class="label_email"></label>
              <input
                type="text"
                placeholder="电子邮箱（必填）"
                v-model="form.email"
                @blur="checkEmail"
              />
            </li>
            <li>
              <label class="label_pwd"></label>
              <div>
                <input
                  type="password"
                  placeholder="密码（6-16位英文数字）"
                  v-model="form.password"
                />
                <input
                  type="password"
                  placeholder="确认密码"
                  v-model="checkPwd"
                  @blur="pwdCheck"
                />
              </div>
            </li>
            <li :class="reFalse ? '' : 'fail'">
              <label class="label_phone"></label>
              <input
                type="text"
                placeholder="手机号码（必填）"
                v-model="form.phone"
                @blur="checkPhone"
                maxlength="11"
              />
            </li>
            <li class="verify">
              <label class="label_verify"></label>
              <input type="text" placeholder="验证码" v-model="viriInp" />
              <a @click="getVerify">{{ virify_code }}</a>
            </li>
          </ul>
          <div class="about_vip">
            <input type="checkbox" /><a href="#">申请会员服务</a
            >&nbsp;拥有会员卡可以以更优惠的会员价预订旅舍服务
          </div>
          <div class="agree">
            <input
              type="checkbox"
              v-model="isAgree"
            />&nbsp;我已阅读并同意&nbsp;
            <a href="#">《青年旅舍<sup>®</sup>用户注册协议》</a>
          </div>
          <button @click.prevent="submit">注册</button>
        </form>
        <p>我已有账号， <a @click="$router.push('/user/login')">返回登录</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqRegist } from '../../api'
export default {
  mounted() {
    this.getVerify()
  },
  data() {
    return {
      form: {
        email: '',
        phone: '',
        password: '',
      },
      virify_code: '',
      isAgree: false,
      reFalse: true,
      emailFalse: true,
      checkPwd: '',
      viriInp: '',
    }
  },
  methods: {
    checkPhone() {
      const regexPhone = /^1[3-9]\d{9}$/
      if (regexPhone.test(this.form.phone)) {
        this.reFalse = true
      } else {
        this.reFalse = false
      }
    },
    // 验证码
    checkVeri() {
      if (this.viriInp != this.virify_code) {
        alert('验证码错误')
      }
    },
    pwdCheck() {
      if (this.checkPwd != this.form.password) {
        alert('密码不一致')
      }
    },
    checkEmail() {
      const regexEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (regexEmail.test(this.form.email)) {
        this.emailFalse = true
      } else {
        this.emailFalse = false
      }
    },
    submit() {
      this.checkVeri()
      if (
        this.form.phone &&
        this.form.password &&
        this.form.email &&
        this.isAgree
      ) {
        let params = this.form
        reqRegist(params).then(res => {
          if (res.data.status == 200) {
            alert('注册成功，点击跳转登录界面')
            this.$router.push('/user/login')
          }
        })
      }
    },
    getVerify() {
      this.virify_code = ''
      const chars = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
      ]

      for (let i = 0; i < 4; i++) {
        let j = Math.floor(Math.random() * 36)
        this.virify_code += chars[j]
      }
    },
  },
}
</script>

<style lang="less" scoped>
.regist {
  width: 100%;
  height: 100vh;
  background: url('../../assets/img/user/registration-bg.jpg') no-repeat center;
  > .login_box {
    width: 540px;
    margin: 0 auto;
    padding: 10vh 0 4vh;
    > h1 {
      height: 76px;
      width: 100%;
      text-align: center;
      > a {
        > img {
          width: 157px;
          height: 76px;
        }
      }
    }
    > .login_registry_form {
      > h2 {
        height: 58px;
        text-align: center;
        border-bottom: 1px solid #dcdcdc;
        > span {
          display: inline-block;
          height: inherit;
          font-size: 30px;
          font-weight: 400;
          border-bottom: 3px solid #87c524;
          > sup {
            font-size: 14px;
          }
        }
      }
      form {
        ul {
          width: 100%;
          margin-top: 15px;
          > .verify {
            position: relative;
            > a {
              position: absolute;
              right: 10px;
              color: #fff;
              border-radius: 14px;
              text-align: center;
              min-width: 30px;
              height: 27px;
              line-height: 27px;
              padding: 0 5px;
              background: #87c524;
              user-select: none;
            }
          }
          .fail {
            border: 1px solid red;
          }
          > li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            background: #fff;
            border: 1px solid #d9d9d9;
            label {
              display: inline-block;
              width: 30px;
              height: 30px;
              margin: 0 15px;
              background: url('../../assets/sprite/app_z.png') no-repeat;
            }
            .label_email {
              background-position: -359px -422px;
            }
            .label_pwd {
              background-position: -476px -30px;
            }
            .label_phone {
              background-position: -426px -388px;
            }
            .label_verify {
              background-position: -381px -281px;
            }
            > input {
              height: 40px;
              width: 398px;
              font-size: 14px;
            }
            > div {
              width: 398px;
              input:first-child {
                border-bottom: 1px solid #d9d9d9;
              }
              input {
                width: 100%;
                height: 40px;
                font-size: 14px;
              }
            }
          }
        }
        > .about_vip,
        .agree {
          display: flex;
          align-items: center;
          font-size: 14px;
          height: 35px;
          input {
            width: 15px;
            height: 15px;
            border: 1px solid #d9d9d9;
          }
          a {
            margin: 0 5px;
            font-size: 14px;
          }
        }
        > .about_vip {
          a {
            color: #f7941c;
            font-weight: 600;
          }
        }
        > .agree {
          a {
            color: #4b8fcc;
            sup {
              color: #4b8fcc;
              font-size: 12px;
            }
          }
        }

        > button {
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          text-align: center;
          border-radius: 25px;
          width: 100%;
          border: none;
          outline: none;
          cursor: pointer;
          font-family: '微软雅黑';
          background: #87c524;
          color: #fff;
          margin-top: 10px;
        }
      }

      > p {
        margin-top: 5px;
        text-align: left;
        font-size: 14px;
        float: right;
        a {
          color: #f7941c;
          margin: 0 5px;
          font-size: 14px;
        }
      }
      > .other_login {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        a {
          width: 48%;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          text-align: center;
          border-radius: 25px;
          i {
            background: url('../../assets/sprite/app_z.png') no-repeat;
            width: 32px;
            height: 25px;
            display: inline-block;
            vertical-align: -4px;
            margin-right: 5px;
          }
        }
        a:first-child {
          color: #df2121;
          border: 1px solid #df2121;
          i {
            background-position: -469px -328px;
          }
        }
        a:last-child {
          color: #87c524;
          border: 1px solid #87c524;
          i {
            background-position: 0 -460px;
          }
        }
      }
    }
  }
}
</style>
