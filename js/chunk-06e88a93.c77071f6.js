(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06e88a93"],{3022:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const i=Object(o["withScopeId"])("data-v-38a5b6e8");Object(o["pushScopeId"])("data-v-38a5b6e8");const s={class:"sign_up_box"},a={class:"sign_up_body"},n=Object(o["createVNode"])("span",{class:"sign_up_title"},"SIGN UP",-1),_=Object(o["createVNode"])("svg",{class:"sign_up_icon",xmlns:"http://www.w3.org/2000/svg",width:"121",height:"121",viewBox:"0 0 121 121"},[Object(o["createVNode"])("path",{id:"Icon_simple-spacemacs","data-name":"Icon simple-spacemacs",d:"M60,.054A60.229,60.229,0,0,0,35.16,5.521h.023c18.19,10.13,34.776,28.169,44.666,41.2,2,2.667,3.763,5.03,5.39,7.17l.02-.093c2.06-8.69-1.563-26.193-7.59-36.666a7.333,7.333,0,0,1-.937-1.96h.03v-.033A57.8,57.8,0,0,1,83.626,22.3a30.069,30.069,0,0,1,5.81,11.15,293.873,293.873,0,0,1,9.5,36.246c1.193,6.14,3.377,17.29,3.667,19.42a3,3,0,0,1-.05.717q-.7-.687-1.45-1.333a103.631,103.631,0,0,0-15.913-10.57c-7.85-4.35-15.59-8.07-32.876-15.81-15.78-7.063-23.05-10.43-28.756-13.3l-5.12-2.55c.6,1.5,1.243,3.12,2,5.023a76.685,76.685,0,0,1,10.87,7.04S42.92,80.169,48.076,93.109c3.837,9.746,8.17,21.333,10.773,24.519l.3.333c-5.13-1.253-28.726-13-28.726-13-2.59-22-9.843-48.049-19.273-74.7q-.333-.667-.623-1.353a10.89,10.89,0,0,1,1.553,1.517C21.583,40.61,41.86,49.86,63.393,53.836A82.4,82.4,0,0,0,81.059,54.95c-1.537-1.96-3.2-4.1-5.047-6.51C58.906,26.2,42.123,16.851,27.093,11.134c-.393-.133-.76-.3-1.153-.44A60.085,60.085,0,0,0,0,60.436V60a60.035,60.035,0,0,0,60.429,60h-.44A60.035,60.035,0,0,0,120,59.56V60A60.035,60.035,0,0,0,59.556,0H60ZM90.666,30.6v.033h0V30.6a65.032,65.032,0,0,0,11.666,10.31c3.947,4.95,6.08,9.813,8.74,13.146-1.093-.94-5.557-4.86-5.557-4.86s-6.89-6.527-10.706-10.763a17,17,0,0,1-2.39-3.14c-.31-.487-1.377-4.127-1.77-4.667h0V30.6Z",transform:"translate(0.5 0.501)",fill:"#3b4356",stroke:"#d1cfd0","stroke-width":"1"})],-1),r=Object(o["createVNode"])("span",{class:"sign_up_span"},"立即注册",-1),l={class:"sign_up_enter"},p={key:0,class:"tip_box"},d=Object(o["createVNode"])("span",{class:"tip_span"},"手机号已被注册",-1),h={key:1,class:"tip_box"},b=Object(o["createVNode"])("span",{class:"tip_span"},"昵称已存在",-1),g={key:2,class:"tip_box"},u=Object(o["createVNode"])("span",{class:"tip_span"},"8-16个字符,需包含大、小写字母和数字",-1),w=Object(o["createTextVNode"])("获取验证码"),v={key:0,style:{"text-align":"center"}},j={class:"sign_up_button"},O={key:0,class:"sign_up_button_not_ready"},f={class:"sign_up_tail"},k=Object(o["createVNode"])("div",{class:"load_box"},[Object(o["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"4rem",height:"4rem",viewBox:"0 0 101.5 102.993"},[Object(o["createVNode"])("path",{id:"路径_247","data-name":"路径 247",d:"M71.037,124.293l31.278,20.892-5.7,8.9a44.119,44.119,0,0,0,24.178,7.256c19.437,0,36-12.646,42.579-30.451,2.3-6.235,5.92-7.754,9.051-6.86a51.44,51.44,0,0,1-101.389.259Zm101.5-16.831L141.05,84.612l5-8.365a44.54,44.54,0,0,0-23.725-6.881c-19.923,0-36.84,13.119-43.171,31.438-1.131,2.013-4.418,3.641-7.613,3.125a51.442,51.442,0,0,1,101,3.533Z",transform:"translate(-71.037 -63.884)",fill:"#fff"})])],-1);Object(o["popScopeId"])();const m=i((e,t,c,m,x,V)=>{const N=Object(o["resolveComponent"])("van-overlay");return Object(o["openBlock"])(),Object(o["createBlock"])("div",s,[Object(o["createVNode"])("div",a,[n,_,r,Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",{class:"acc"==x.input_focus?"sign_up_enter_box_focus":"sign_up_enter_box"},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>x.sign_acc=e),type:"text",class:"sign_up_account",placeholder:"输入手机号",onFocus:t[2]||(t[2]=e=>V.enter_box_focus("acc")),onBlur:t[3]||(t[3]=e=>V.enter_box_blur(1))},null,544),[[o["vModelText"],x.sign_acc]])],2),x.acc_tip_show?(Object(o["openBlock"])(),Object(o["createBlock"])("div",p,[d])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",{class:"nic"==x.input_focus?"sign_up_enter_box_focus":"sign_up_enter_box"},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>x.sign_nickname=e),type:"text",class:"sign_up_password",placeholder:"输入昵称",onFocus:t[5]||(t[5]=e=>V.enter_box_focus("nic")),onBlur:t[6]||(t[6]=e=>V.enter_box_blur(2))},null,544),[[o["vModelText"],x.sign_nickname]])],2),x.nickname_tip_show?(Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[b])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",{class:"paw"==x.input_focus?"sign_up_enter_box_focus":"sign_up_enter_box"},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>x.sign_paw=e),type:"password",class:"sign_up_password",placeholder:"输入密码",onFocus:t[8]||(t[8]=e=>V.enter_box_focus("paw")),onBlur:t[9]||(t[9]=e=>V.enter_box_blur(3))},null,544),[[o["vModelText"],x.sign_paw]])],2),x.paw_tip_show?(Object(o["openBlock"])(),Object(o["createBlock"])("div",g,[u])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",{class:"ver"==x.input_focus?"sign_up_enter_two_box_focus":"sign_up_enter_two_box"},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>x.sign_verification_code=e),type:"password",class:"sign_verification_code",placeholder:"验证码",onFocus:t[11]||(t[11]=e=>V.enter_box_focus("ver")),onBlur:t[12]||(t[12]=(...e)=>V.enter_box_blur&&V.enter_box_blur(...e))},null,544),[[o["vModelText"],x.sign_verification_code]]),Object(o["createVNode"])("div",{onClick:t[13]||(t[13]=(...e)=>V.get_verification_code&&V.get_verification_code(...e)),class:[x.get_verification_code_cd?"get_verification_code_cd":"get_verification_code"]},[Object(o["createVNode"])("span",null,[w,x.get_verification_code_cd?(Object(o["openBlock"])(),Object(o["createBlock"])("p",v,"("+Object(o["toDisplayString"])(x.verification_code_cd)+"s)",1)):Object(o["createCommentVNode"])("",!0)])],2)],2),Object(o["createVNode"])("div",j,[""==x.sign_acc||""==x.sign_paw||""==x.sign_nickname||""==x.sign_verification_code||x.acc_tip_show||x.nickname_tip_show||x.paw_tip_show?(Object(o["openBlock"])(),Object(o["createBlock"])("span",O,"Sign up now")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",{key:1,class:"sign_up_button_ready",onClick:t[14]||(t[14]=(...e)=>V.register&&V.register(...e))},"Sign up now"))])])]),Object(o["createVNode"])("div",f,[Object(o["createVNode"])("button",{class:"revert",onClick:t[15]||(t[15]=(...e)=>V.revert_page&&V.revert_page(...e))},"返回")]),Object(o["createVNode"])(N,{show:x.load_box,onClick:t[16]||(t[16]=e=>x.load_box=!1)},{default:i(()=>[k]),_:1},8,["show"])])});var x=c("db04"),V={name:"Sign",data(){return{sign_acc:"",sign_paw:"",sign_nickname:"",sign_verification_code:"",get_verification_code_cd:!1,verification_code_cd:60,acc_tip_show:!1,nickname_tip_show:!1,paw_tip_show:!1,sv_code_correct:!1,input_focus:"",load_box:!1}},computed:{},methods:{enter_box_focus(e){switch(this.input_focus=e,e){case"acc":this.acc_tip_show=!1;break;case"nic":this.nickname_tip_show=!1;break;case"paw":this.paw_tip_show=!1;break}},enter_box_blur(e){switch(this.input_focus="",e){case 1:Object(x["a"])(this.$store.state.api_url+"cellphone/existence/check",{phone:this.sign_acc}).then(e=>{console.log(e),-1!=e.exist?this.acc_tip_show=!0:this.acc_tip_show=!1}).catch(e=>{console.log(e)});break;case 2:Object(x["a"])(this.$store.state.api_url+"nickname/check",{nickname:this.sign_nickname}).then(e=>{console.log(e),this.nickname_tip_show=e.duplicated}).catch(e=>{console.log(e)});break;case 3:if(this.sign_paw.length<8)this.paw_tip_show=!0;else if(this.sign_paw.length>16)this.paw_tip_show=!0;else{let e=this.sign_paw,t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;t.test(e)?this.paw_tip_show=!1:this.paw_tip_show=!0}break}},kk(){let e=this.sign_paw,t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;t.test(e)?console.log("格式正确"):console.log("格式错误")},revert_page(){this.$store.commit("router_back"),this.$router.replace("/login")},async register(){this.sv_code_correct?this.sv_code_correct&&this.$toast("验证码错误"):(this.load_box=!0,await Object(x["a"])(this.$store.state.api_url+"register/cellphone",{phone:this.sign_acc,password:this.sign_paw,captcha:this.sign_verification_code,nickname:this.sign_nickname}).then(e=>{console.log(e),this.load_box=!1,this.$toast("注册成功,请登录"),this.$router.replace("/login/log")}).catch(e=>{console.log(e),this.load_box=!1,this.$toast("发生错误")}))},get_verification_code(){11==this.sign_acc.length?(this.get_verification_code_cd=!0,setTimeout(()=>{this.verification_code_cd=this.verification_code_cd-1},1e3),Object(x["a"])(this.$store.state.api_url+"captcha/sent",{phone:this.sign_acc}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})):this.$dialog.alert({message:"请输入正确手机号"})}},watch:{verification_code_cd(e){e>0&&this.get_verification_code_cd?setTimeout(()=>{this.verification_code_cd=this.verification_code_cd-1},1e3):(this.get_verification_code_cd=!1,this.verification_code_cd=60)},sign_verification_code(e){4!=e.length?this.sv_code_correct=!0:Object(x["a"])(this.$store.state.api_url+"captcha/verify",{phone:this.sign_acc,captcha:e}).then(e=>{console.log(e),this.sv_code_correct=!1}).catch(e=>{console.log(e),this.sv_code_correct=!0})}},mounted(){}};c("4349");V.render=m,V.__scopeId="data-v-38a5b6e8";t["default"]=V},4349:function(e,t,c){"use strict";c("e891")},e891:function(e,t,c){}}]);
//# sourceMappingURL=chunk-06e88a93.c77071f6.js.map