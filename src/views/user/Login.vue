<template>
	<div class="login">
		<div class="login_box">
			<h1>
				<a href="./">
					<img src="../../assets/logo/logo.png" alt="" />
				</a>
			</h1>
			<div class="login_registry_form">
				<h2>
					<span>欢迎登录YHA<sup>®</sup>青年旅舍<sup>®</sup></span>
				</h2>

				<form method="post">
					<ul>
						<li :class="reFalse ? '' : 'fail'">
							<label class="label_user"></label>
							<input
								type="text"
								placeholder="请输入手机号"
								v-model="form.phone"
								@blur="checkPhone"
								maxlength="11"
							/>
						</li>
						<li :class="pwdFalse ? '' : 'fail'">
							<label class="label_pwd"></label>
							<input
								type="password"
								placeholder="密码"
								v-model="form.password"
								@blur="checkPassword"
							/>
						</li>
					</ul>
					<div class="about_pwd">
						<div>
							<input type="checkbox" v-model="autoLogin" />&nbsp;自动登录
						</div>
						<div>忘记密码？<a href="#">点击重置>></a></div>
					</div>
					<button @click.prevent="submit">登录</button>
				</form>
				<p>
					还没有注册？使用第三方帐号登录 或
					<a @click="$router.push('/user/regist')">注册账号>></a>
				</p>
				<div class="other_login">
					<a href="#"><i></i>QQ登录</a>
					<a href="#"><i></i>微信登录</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reqLogin } from '../../api/index';
export default {
	data() {
		return {
			form: {
				phone: '',
				password: '',
			},
			reFalse: true,
			pwdFalse: true,
			autoLogin: false,
			regexPwd: /^.{6,20}$/,
			regexPhone: /^1[3-9]\d{9}$/,
		};
	},
	methods: {
		checkPhone() {
			if (this.regexPhone.test(this.form.phone)) {
				this.reFalse = true;
			} else {
				this.reFalse = false;
			}
		},
		checkPassword() {
			if (this.regexPwd.test(this.form.password)) {
				this.pwdFalse = true;
			} else {
				this.pwdFalse = false;
			}
		},
		submit() {
			if (
				this.form.phone &&
				this.form.password &&
				this.regexPwd.test(this.form.password) &&
				this.regexPhone.test(this.form.phone)
			) {
				let params = this.form;
				reqLogin(params).then(res => {
					if (res.data.status == 200) {
						let user = res.data.data;
						sessionStorage.setItem('user', JSON.stringify(user));
						// 自动登录是否勾选

						if (this.autoLogin) {
							localStorage.setItem('user', JSON.stringify(user));
						}
						this.$router.push('/');
					}
				});
			} else {
				alert('账号密码不能为空');
			}
		},
	},
};
</script>

<style lang="less" scoped>
.login {
	width: 100%;
	height: 100vh;
	background: url('../../assets/img/user/login-bg.jpg') no-repeat center;
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
					border-bottom: 3px solid #f7941c;
					> sup {
						font-size: 14px;
					}
				}
			}
			form {
				ul {
					width: 100%;
					margin-top: 15px;
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
						.label_user {
							background-position: -476px 0;
						}
						.label_pwd {
							background-position: -476px -30px;
						}
						input {
							height: 40px;
							width: 398px;
							font-size: 14px;
						}
					}
				}
				> .about_pwd {
					display: flex;
					justify-content: space-between;
					align-items: center;

					> div:first-child {
						display: flex;
						align-items: center;
						font-size: 14px;
						height: 30px;
						input {
							width: 15px;
							height: 15px;
							border: 1px solid #d9d9d9;
						}
					}
					> div:last-child {
						font-size: 14px;
						a {
							color: #f7941c;
							margin: 0 5px;
							font-size: 14px;
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
					background: #f7941c;
					color: #fff;
					margin-top: 10px;
				}
			}

			> p {
				margin-top: 30px;
				text-align: left;
				font-size: 14px;
				a {
					cursor: pointer;
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
