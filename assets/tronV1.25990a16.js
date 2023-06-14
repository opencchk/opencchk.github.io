import{_ as W,aE as f,r as h,o as m,c as b,b as c,w as l,j as g,h as s,t,n as w,l as k,m as z,F as L,e as I,k as d,p as C,q as F}from"./index.4fbbd1b1.js";import{u as S,g as H,a as $}from"./tron.7b4e6029.js";import{f as _}from"./ethers.ef74de73.js";import"./index.e59295c6.js";const q={name:"TronBandwidth&Energy",data(){return{utils:S,tabActive:1,resource:"BANDWIDTH",value:"",tabActive2:1,address:"",accountResource:{freeNetUsed:0,freeNetLimit:0,NetUsed:0,NetLimit:0,TotalNetLimit:0,EnergyUsed:0,EnergyLimit:0,TotalEnergyLimit:0,TotalEnergyWeight:0},account:{acquired_delegated_frozen_balance_for_bandwidth:0,delegated_frozen_balance_for_bandwidth:0,frozen:[],balance:0},frozenAmount:"",unfrozenAmount:"",receiverAddress:"",loading:!1}},computed:{BPrice(){return this.accountResource.TotalNetWeight?this.accountResource.TotalNetLimit/this.accountResource.TotalNetWeight:0},freeB(){return(this.accountResource.freeNetLimit||0)-(this.accountResource.freeNetUsed||0)},NetB(){return(this.accountResource.NetLimit||0)-(this.accountResource.NetUsed||0)},totalB(){return this.freeB+this.NetB},totalAllB(){return(this.accountResource.freeNetLimit||0)+(this.accountResource.NetLimit||0)},pB(){return this.totalAllB?this.totalB*100/this.totalAllB:0},EnergyBalance(){return(this.accountResource.EnergyLimit||0)-(this.accountResource.EnergyUsed||0)},EnergyPrice(){return this.accountResource.TotalEnergyWeight?this.accountResource.TotalEnergyLimit/this.accountResource.TotalEnergyWeight:0},pE(){return this.accountResource.EnergyLimit?this.EnergyBalance*100/(this.accountResource.EnergyLimit||0):0},lockBTRX(){return this.accountResource.TotalNetLimit?(this.accountResource.TotalNetWeight||0)*(this.accountResource.NetLimit||0)/this.accountResource.TotalNetLimit:0},frozenBTRX(){var e,r,a;return((a=(r=(e=this.account)==null?void 0:e.frozen)==null?void 0:r.reduce)==null?void 0:a.call(r,(i,n)=>n.frozen_balance+i,0))||0},totalFrozenBTRX(){return _(this.frozenBTRX+(this.account.acquired_delegated_frozen_balance_for_bandwidth||0),6)},totalFrozenETRX(){var e,r,a,i,n;return _((((a=(r=(e=this.account)==null?void 0:e.account_resource)==null?void 0:r.frozen_balance_for_energy)==null?void 0:a.frozen_balance)||0)+(((n=(i=this.account)==null?void 0:i.account_resource)==null?void 0:n.acquired_delegated_frozen_balance_for_energy)||0),6)},unfreezableBTRX(){var r,a,i;let e=((a=(r=this.account)==null?void 0:r.frozen)==null?void 0:a.filter(n=>Date.now()>n.expire_time))||[];return _((i=e.reduce)==null?void 0:i.call(e,(n,o)=>((o==null?void 0:o.frozen_balance)||0)+n,0),6)||0},unfreezableETRX(){var r,a;let e=(a=(r=this.account)==null?void 0:r.account_resource)==null?void 0:a.frozen_balance_for_energy;return e&&(e==null?void 0:e.frozen_balance)&&Date.now()>e.expire_time?_((e==null?void 0:e.frozen_balance)||0,6):0},disabled(){var i;let e=_(((i=this.account)==null?void 0:i.balance)||0,6),r=this.unfreezableBTRX||0,a=this.unfreezableETRX||0;return console.log("unfreezableBTRX",r),console.log("unfreezableETRX",a),this.tabActive===1&&(!this.frozenAmount||new f(this.frozenAmount).gt(e))||this.tabActive===2&&(this.resource==="BANDWIDTH"&&new f(r).lte(0)||this.resource==="ENERGY"&&new f(a).lte(0))},errMessage(){var e;if(this.tabActive===1){let r=_(((e=this.account)==null?void 0:e.balance)||0,6);return this.frozenAmount&&new f(this.frozenAmount).gt(r)?this.$t("insufficientBalance"):""}else{let r=this.unfreezableBTRX||0,a=this.unfreezableETRX||0;return this.unfrozenAmount&&(this.resource==="BANDWIDTH"&&new f(this.unfrozenAmount).gt(r)||this.resource==="ENERGY"&&new f(this.unfrozenAmount).gt(a))?this.$t("insufficientBalance"):""}}},methods:{async init(){this.address=await this.$f.callApp("getWalletAddress")||"",console.log("address",this.address),this.getAccountResource(),this.getAccount()},getAccountResource(){!this.address||H(this.address).then(e=>{this.accountResource=e})},getAccount(){!this.address||$(this.address).then(e=>{console.log(e),this.account=e})},freezeBalance(){this.$dialog.alert({title:this.$t("tips"),message:this.$t("tronUpdateTips"),confirmButtonText:this.$t("confirm1"),confirmButtonColor:"#3F80F7"})},unfreezeBalance(){let e={owner_address:this.address,frozen_duration:3,resource:this.resource,receiver_address:this.tabActive2===2?this.receiverAddress:void 0,visible:!0};this.loading=!0,console.log("unfreezeBalance",e),this.$f.callApp("unfreezeBalance",e).then(r=>{console.log("unfreezeBalance---result",r),r&&(this.getAccountResource(),this.getAccount())}).catch(r=>{console.log(r)}).finally(()=>{this.loading=!1})},onSubmit(){this.tabActive===1?this.freezeBalance():this.unfreezeBalance()}},activated(){this.init()}},V=e=>(C("data-v-6144080c"),e=e(),F(),e),P={key:0,class:"tron-switch-version"},Y={class:"tron-container"},G={class:"t-card"},M={class:"flex-between-center"},j={class:"font-1"},J={class:"font-3"},K={class:"range-c"},O={class:"range-t"},Q={class:"flex-between-center"},Z={class:"font-2"},x={class:"font-3"},ee={class:"flex-between-center mt-10"},te={class:"font-1"},ne={class:"font-3"},se={class:"t-card mt-10"},re={class:"flex-between-center"},oe={class:"font-1"},ae={class:"font-3"},ie={class:"range-c"},ce={class:"range-t"},le={class:"flex-between-center"},ue={class:"font-2"},de={class:"font-3"},fe={class:"flex-between-center mt-10"},he={class:"font-1"},me={class:"font-3"},_e={class:"t-card mt-10 pb-15"},be={class:"tabs"},ge={class:"font-2"},ve={class:"font-3"},ze={class:"tabs-b"},pe={class:"font-2"},Re={key:1,class:"font-2"},Te={key:2,class:"font-3"},Be={class:"flex-between-center mt-10"},Ae=V(()=>s("i",{class:"iconfont icon-tongxunlu",style:{"font-size":"0.36rem",color:"#ccc"}},null,-1)),Ne=V(()=>s("div",{class:"d-line"},null,-1));function ye(e,r,a,i,n,o){var B,A,N,y,E,X;const D=h("router-link"),p=h("van-divider"),v=h("van-radio"),R=h("van-radio-group"),T=h("van-field"),U=h("van-button");return m(),b(L,null,[e.$route.name!=="Tron"?(m(),b("div",P,[c(D,{to:"/tron_v2",class:"link"},{default:l(()=>[d(t(e.$t("switch"))+" Stake2.0 >",1)]),_:1})])):g("",!0),s("div",Y,[s("div",G,[s("div",M,[s("span",j,t(e.$t("bandwidth")),1),s("span",J,t(e.$t("price"))+": "+t(e.$f.formatNumber2(o.BPrice))+" B/TRX",1)]),c(p,{style:{"--van-divider-margin":"0.2rem 0"}}),s("div",K,[s("div",{class:"range-v",style:w({width:o.pB+"%"})},null,4),s("div",O,t(e.$t("available"))+": "+t(e.$f.formatNumber2(o.totalB))+"/"+t(e.$f.formatNumber2(o.totalAllB))+"B",1)]),s("div",Q,[s("span",Z,t(e.$t("frozen")),1),s("span",x,t(e.$t("freezeYourself"))+": "+t(e.$f.formatNumber2(n.utils.formatUnits(o.frozenBTRX,6)))+" TRX",1)]),s("div",ee,[s("span",te,t(e.$f.formatNumber2(o.totalFrozenBTRX))+" TRX",1),s("span",ne,t(e.$t("others-frozen"))+": "+t(n.account.acquired_delegated_frozen_balance_for_bandwidth||0)+" TRX",1)])]),s("div",se,[s("div",re,[s("span",oe,t(e.$t("energy")),1),s("span",ae,t(e.$t("price"))+": "+t(e.$f.formatNumber2(o.EnergyPrice))+" \xB5s/TRX",1)]),c(p,{style:{"--van-divider-margin":"0.2rem 0"}}),s("div",ie,[s("div",{class:"range-v",style:w({width:o.pE+"%"})},null,4),s("div",ce,t(e.$t("available"))+": "+t(e.$f.formatNumber2(o.EnergyBalance))+"/"+t(e.$f.formatNumber2(n.accountResource.EnergyLimit||0))+"\xB5s",1)]),s("div",le,[s("span",ue,t(e.$t("frozen")),1),s("span",de,t(e.$t("freezeYourself"))+": "+t(e.$f.formatNumber2(n.utils.formatUnits(((N=(A=(B=n.account)==null?void 0:B.account_resource)==null?void 0:A.frozen_balance_for_energy)==null?void 0:N.frozen_balance)||0,6)))+" TRX",1)]),s("div",fe,[s("span",he,t(e.$f.formatNumber2(o.totalFrozenETRX))+" TRX",1),s("span",me,t(e.$t("others-frozen"))+": "+t(e.$f.formatNumber2(n.utils.formatUnits(((E=(y=n.account)==null?void 0:y.account_resource)==null?void 0:E.acquired_delegated_frozen_balance_for_energy)||0,6)))+" TRX",1)])]),s("div",_e,[s("div",be,[c(R,{modelValue:n.tabActive,"onUpdate:modelValue":r[0]||(r[0]=u=>n.tabActive=u),direction:"horizontal"},{default:l(()=>[c(v,{name:1},{default:l(()=>[d(t(e.$t("freeze")),1)]),_:1}),c(v,{name:2},{default:l(()=>[d(t(e.$t("unfrozen")),1)]),_:1})]),_:1},8,["modelValue"])]),s("div",null,[s("span",ge,t(e.$t("selectFreezeType")),1),s("span",ve," ("+t(e.$t("freezeTips"))+")",1)]),s("div",ze,[s("button",{class:k({active:n.resource==="BANDWIDTH"}),type:"button",onClick:r[1]||(r[1]=z(u=>n.resource="BANDWIDTH",["stop"]))},t(e.$t("bandwidth")),3),s("button",{class:k({active:n.resource==="ENERGY"}),type:"button",onClick:r[2]||(r[2]=z(u=>n.resource="ENERGY",["stop"]))},t(e.$t("energy")),3)]),n.tabActive===1?(m(),b(L,{key:0},[s("div",pe,t(e.$t("balance"))+": "+t(n.utils.formatUnits(((X=n.account)==null?void 0:X.balance)||0,6))+" TRX",1),c(T,{class:"input-n",modelValue:n.frozenAmount,"onUpdate:modelValue":r[3]||(r[3]=u=>n.frozenAmount=u),label:"",clearable:"",placeholder:e.$t("plsEnterAmount"),type:"number"},{button:l(()=>[d("TRX")]),_:1},8,["modelValue","placeholder"])],64)):g("",!0),n.tabActive===2?(m(),b("div",Re,t(e.$t("unfreezable"))+": "+t(e.$f.formatNumber2(n.resource==="BANDWIDTH"?o.unfreezableBTRX||0:o.unfreezableETRX||0))+" TRX",1)):g("",!0),n.tabActive===1?(m(),b("div",Te,"\u2248 "+t(e.$f.formatNumber2(n.resource==="BANDWIDTH"?o.BPrice*(n.frozenAmount||0):o.EnergyPrice*(n.frozenAmount||0)))+" "+t(n.resource),1)):g("",!0),s("div",Be,[s("span",null,t(e.$t("receivingAccount")),1),c(R,{modelValue:n.tabActive2,"onUpdate:modelValue":r[4]||(r[4]=u=>n.tabActive2=u),direction:"horizontal"},{default:l(()=>[c(v,{name:1},{default:l(()=>[d(t(e.$t("self")),1)]),_:1}),c(v,{name:2},{default:l(()=>[d(t(e.$t("other1")),1)]),_:1})]),_:1},8,["modelValue"])]),n.tabActive2===2?(m(),I(T,{key:3,class:"input-n",modelValue:n.receiverAddress,"onUpdate:modelValue":r[5]||(r[5]=u=>n.receiverAddress=u),label:"",clearable:"",placeholder:e.$t("receivingAddress")},{"left-icon":l(()=>[Ae,Ne]),_:1},8,["modelValue","placeholder"])):g("",!0)]),c(U,{class:"btn-36",round:"",block:"",type:"primary",size:"small",disabled:o.disabled,loading:n.loading,onClick:z(o.onSubmit,["stop"])},{default:l(()=>[d(t(o.errMessage||e.$t("confirm")),1)]),_:1},8,["disabled","loading","onClick"])])],64)}var Le=W(q,[["render",ye],["__scopeId","data-v-6144080c"]]);export{Le as default};
