import{_ as le,aE as b,r as m,u as re,o as i,c as h,h as n,b as d,w as f,t as a,n as se,m as g,l as T,F as y,j as v,e as E,k as _,d as W,v as I,y as ne,p as ce,q as ie}from"./index.4fbbd1b1.js";import{u as de,g as ue,a as he,b as oe,c as fe,d as ge,e as be}from"./tron.7b4e6029.js";import{i as _e}from"./utils.116e99ec.js";import{f as p,b as Y}from"./ethers.ef74de73.js";import"./index.e59295c6.js";var ve="/assets/c.b90ca9b2.svg";const pe={name:"TronBandwidth&Energy",data(){var e;return{utils:de,tabActive:"wallet",accounts:{wallet:[],contact:[]},resource:"BANDWIDTH",value:"",tabActive2:1,tabActive3:1,tabActive4:1,tabActive5:1,address:"",accountResource:{freeNetUsed:0,freeNetLimit:0,NetUsed:0,NetLimit:0,TotalNetLimit:0,EnergyUsed:0,EnergyLimit:0,TotalEnergyLimit:0,TotalEnergyWeight:0},account:{acquired_delegated_frozen_balance_for_bandwidth:0,delegated_frozen_balance_for_bandwidth:0,frozen:[],frozenV2:[],balance:0},canDelegatedMaxSizeB:0,canDelegatedMaxSizeE:0,frozenAmount:"",unfrozenAmount:"",receiverAddress:"",loading:!1,lock:!1,delegatedResourceV2List:[],canUndelegatedBAmount:0,canUndelegatedEAmount:0,show:!1,canWithdrawUnFreezeAmount:0,delegateAmount:"",resource1:"BANDWIDTH",loading1:!1,show1:!1,isAppGetContactList:(e=window==null?void 0:window._tw_)==null?void 0:e.appGetContactList}},computed:{BPrice(){return this.accountResource.TotalNetWeight?this.accountResource.TotalNetLimit/this.accountResource.TotalNetWeight:0},freeB(){return(this.accountResource.freeNetLimit||0)-(this.accountResource.freeNetUsed||0)},NetB(){return(this.accountResource.NetLimit||0)-(this.accountResource.NetUsed||0)},totalB(){return this.freeB+this.NetB},totalAllB(){return(this.accountResource.freeNetLimit||0)+(this.accountResource.NetLimit||0)},pB(){return this.totalAllB?this.totalB*100/this.totalAllB:0},EnergyBalance(){return(this.accountResource.EnergyLimit||0)-(this.accountResource.EnergyUsed||0)},EnergyPrice(){return this.accountResource.TotalEnergyWeight?this.accountResource.TotalEnergyLimit/this.accountResource.TotalEnergyWeight:0},pE(){return this.accountResource.EnergyLimit?this.EnergyBalance*100/(this.accountResource.EnergyLimit||0):0},lockBTRX(){return this.accountResource.TotalNetLimit?(this.accountResource.TotalNetWeight||0)*(this.accountResource.NetLimit||0)/this.accountResource.TotalNetLimit:0},frozenBTRX(){var e,t,c;return p(((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[0])==null?void 0:c.amount)||0,6)},frozenBTRXOther(){var e;return p(((e=this.account)==null?void 0:e.delegated_frozenV2_balance_for_bandwidth)||0,6)},frozenBTRXFromOther(){var e;return p(((e=this.account)==null?void 0:e.acquired_delegated_frozenV2_balance_for_bandwidth)||0,6)},totalFrozenBTRX(){var e,t,c,u;return p((((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[0])==null?void 0:c.amount)||0)+(((u=this.account)==null?void 0:u.delegated_frozenV2_balance_for_bandwidth)||0),6)},frozenETRX(){var e,t,c;return p(((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[1])==null?void 0:c.amount)||0,6)},frozenETRXOther(){var e,t;return p(((t=(e=this.account)==null?void 0:e.account_resource)==null?void 0:t.delegated_frozenV2_balance_for_energy)||0,6)},frozenETRXFromOther(){var e,t;return p(((t=(e=this.account)==null?void 0:e.account_resource)==null?void 0:t.acquired_delegated_frozenV2_balance_for_energy)||0,6)},totalFrozenETRX(){var e,t,c,u,s;return p((((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[1])==null?void 0:c.amount)||0)+(((s=(u=this.account)==null?void 0:u.account_resource)==null?void 0:s.delegated_frozenV2_balance_for_energy)||0),6)},unfreezableBTRX(){var e,t,c;return p(((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[0])==null?void 0:c.amount)||0,6)},unfreezableETRX(){var e,t,c;return p(((c=(t=(e=this.account)==null?void 0:e.frozenV2)==null?void 0:t[1])==null?void 0:c.amount)||0,6)},disabled(){var l;let e=p(((l=this.account)==null?void 0:l.balance)||0,6),t=this.unfreezableBTRX||0,c=this.unfreezableETRX||0,u=new b(this.canDelegatedMaxSizeB).div(new b(10).pow(6)).toFixed(),s=new b(this.canDelegatedMaxSizeE).div(new b(10).pow(6)).toFixed();return this.tabActive3===1&&this.tabActive4===1&&(!this.frozenAmount||new b(this.frozenAmount).gt(e))||this.tabActive4===2&&(!this.unfrozenAmount||this.resource==="BANDWIDTH"&&new b(this.unfrozenAmount).gt(t)||this.resource==="ENERGY"&&new b(this.unfrozenAmount).gt(c))||this.tabActive3===2&&(!this.delegateAmount||this.resource1==="BANDWIDTH"&&new b(this.delegateAmount).gt(u)||this.resource1==="ENERGY"&&new b(this.delegateAmount).gt(s))},errMessage(){var e;if(this.tabActive3===1)if(this.tabActive4===1){let t=p(((e=this.account)==null?void 0:e.balance)||0,6);return this.frozenAmount&&new b(this.frozenAmount).gt(t)?this.$t("insufficientBalance"):""}else{let t=this.unfreezableBTRX||0,c=this.unfreezableETRX||0;return this.unfrozenAmount&&(this.resource==="BANDWIDTH"&&new b(this.unfrozenAmount).gt(t)||this.resource==="ENERGY"&&new b(this.unfrozenAmount).gt(c))?this.$t("insufficientBalance"):""}else{let t=new b(this.canDelegatedMaxSizeB).div(new b(10).pow(6)).toFixed(),c=new b(this.canDelegatedMaxSizeE).div(new b(10).pow(6)).toFixed();return this.delegateAmount&&(this.resource1==="BANDWIDTH"&&new b(this.delegateAmount).gt(t)||this.resource1==="ENERGY"&&new b(this.delegateAmount).gt(c))?this.$t("insufficientBalance"):""}}},methods:{async init(){this.address=await this.$f.callApp("getWalletAddress")||"",this.address,console.log("address",this.address),this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2(),this.appGetContactList()},getAccountResource(){!this.address||ue(this.address).then(e=>{console.log("accountResource",e),this.accountResource=e})},getAccount(){!this.address||he(this.address).then(e=>{console.log(e),this.account=e})},getCanDelegatedMaxSize(){!this.address||(oe(this.address,0).then(e=>{console.log(e),this.canDelegatedMaxSizeB=(e==null?void 0:e.max_size)||0}),oe(this.address,1).then(e=>{console.log(e),this.canDelegatedMaxSizeE=(e==null?void 0:e.max_size)||0}))},getCanWithdrawUnFreezeAmount(){!this.address||fe(this.address).then(e=>{console.log("getCanWithdrawUnFreezeAmount",e),this.canWithdrawUnFreezeAmount=(e==null?void 0:e.amount)||0})},getDelegatedResourceAccountIndexV2(){!this.address||ge(this.address).then(e=>{console.log("getDelegatedResourceAccountIndexV2",e);let t=(e==null?void 0:e.toAccounts)||[];Promise.all(t.map(c=>be(this.address,c))).then(c=>{this.delegatedResourceV2List=c==null?void 0:c.reduce((u,s)=>s.delegatedResource&&Array.isArray(s.delegatedResource)?[...u,...s.delegatedResource]:u,[]),this.canUndelegatedBAmount=this.delegatedResourceV2List.reduce((u,s)=>{let l=Date.now()>(s.expire_time_for_bandwidth||0)&&(s==null?void 0:s.frozen_balance_for_bandwidth)||0;return u+l},0),this.canUndelegatedEAmount=this.delegatedResourceV2List.reduce((u,s)=>{let l=Date.now()>((s==null?void 0:s.expire_time_for_energy)||0)&&(s==null?void 0:s.frozen_balance_for_energy)||0;return u+l},0)})})},freezeBalanceV2(){let e={owner_address:this.address,frozen_balance:Y(this.frozenAmount||"0",6).toNumber(),resource:this.resource,visible:!0};this.loading=!0,console.log("freezeBalanceV2",e),this.$f.callApp("freezeBalanceV2",e).then(t=>{console.log("freezeBalanceV2---result",t),t&&(this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2())}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},unfreezeBalanceV2(){let e={owner_address:this.address,unfreeze_balance:Y(this.unfrozenAmount||"0",6).toString(),resource:this.resource,visible:!0};this.loading=!0,console.log("unfreezeBalanceV2",e),this.$f.callApp("unfreezeBalanceV2",e).then(t=>{console.log("unfreezeBalanceV2---result",t),t&&(this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2())}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},delegateResource(e=this.delegateAmount){let t={owner_address:this.address,receiver_address:this.receiverAddress,balance:Y(e||"0",6).toNumber(),resource:this.resource1,lock:this.lock,visible:!0};this.loading=!0,console.log("delegateResource",t),this.$f.callApp("delegateResource",t).then(c=>{console.log("delegateResource---result",c),c&&(this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2())}).catch(c=>{console.log(c)}).finally(()=>{this.loading=!1})},unDelegateResource(e,t,c){let u={owner_address:this.address,receiver_address:c,balance:Number(e),resource:t,visible:!0};this.loading=!0,console.log("unDelegateResource",u),this.$f.callApp("unDelegateResource",u).then(s=>{console.log("unDelegateResource---result",s),s&&(this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2())}).catch(s=>{console.log(s)}).finally(()=>{this.loading=!1})},withdrawExpireUnfreeze(){let e={owner_address:this.address,visible:!0};this.loading1=!0,console.log("withdrawExpireUnfreeze",e),this.$f.callApp("withdrawExpireUnfreeze",e).then(t=>{console.log("withdrawExpireUnfreeze---result",t),t&&(this.getAccountResource(),this.getAccount(),this.getCanDelegatedMaxSize(),this.getCanWithdrawUnFreezeAmount(),this.getDelegatedResourceAccountIndexV2())}).catch(t=>{console.log(t)}).finally(()=>{this.loading1=!1})},onSubmit(){this.tabActive3===1?this.tabActive4===1?this.freezeBalanceV2():this.unfreezeBalanceV2():this.delegateResource()},showDelegateHistory(e){this.tabActive5=e,this.show=!0},appGetContactList(){var e,t,c,u,s;if((e=window==null?void 0:window._tw_)!=null&&e.appGetContactList){let l=(c=(t=window==null?void 0:window._tw_)==null?void 0:t.appGetContactList)==null?void 0:c.call(t);console.log("accounts",l),this.accounts=l&&_e(l)?JSON.parse(l):{wallet:[],contact:[]},console.log("this.accounts",this.accounts),this.tabActive=(s=(u=this.accounts)==null?void 0:u.contact)!=null&&s.some(M=>M.contact_address===this.toAddress)?"contact":"wallet",console.log("tabActive",this.tabActive)}},handleSelectAccount(e){this.receiverAddress=(e==null?void 0:e.contact_address)||"",this.show1=!1},formatIsExpire(e,t="bandwidth"){return t==="bandwidth"?Date.now()>(e.expire_time_for_bandwidth||0):Date.now()>(e.expire_time_for_energy||0)},getExpire(e,t="bandwidth"){return t==="bandwidth"?(e.expire_time_for_bandwidth||0)-Date.now():(e.expire_time_for_energy||0)-Date.now()}},activated(){this.init()}},P=e=>(ce("data-v-2bed73ca"),e=e(),ie(),e),me={class:"tron-switch-version"},Ae={class:"tron-container"},we={class:"t-card"},ze={class:"flex-between-center"},Re={class:"font-1"},ye={class:"font-3"},De={class:"range-c"},ke={class:"range-t"},Te={class:"flex-between-center"},Ee={class:"flex-co-between-center"},Be={class:"font-4"},Ne={class:"font-5"},Ve={class:"flex-co-between-center"},Ce={class:"font-4"},Fe={class:"flex-co-between-center font-3"},Ue={class:"mt-10"},Xe={class:"mt-10"},Se={class:"t-card mt-10"},Le={class:"flex-between-center"},We={class:"font-1"},Ie={class:"font-3"},Me={class:"range-c"},He={class:"range-t"},Ge={class:"flex-between-center"},Oe={class:"flex-co-between-center"},Ye={class:"font-4"},Pe={class:"font-5"},qe={class:"flex-co-between-center"},$e={class:"font-4"},Je={class:"flex-co-between-center font-3"},je={class:"mt-10"},Ke={class:"mt-10"},Qe={class:"tabs-box"},Ze={class:"tabs-list"},xe={class:"t-card mt-10 pb-15"},et={class:"tabs"},tt={class:"font-2"},st={class:"tabs-b"},nt={class:"font-2"},ot={class:"font-2"},at={key:2,class:"tips"},lt={key:3,class:"tips"},rt={key:4,class:"flex-between-center center mt-10"},ct={class:"tabs"},it={class:"flex-between-center"},dt={class:"font-2"},ut={class:"font-3"},ht={class:"font-2 mt-15"},ft={class:"font-2 flex-between-center center mt-15"},gt=P(()=>n("span",{class:"flex-1"},null,-1)),bt={class:"pop-content"},_t={class:"tabs-box"},vt={class:"tabs-list"},pt=P(()=>n("div",{class:"tabs-box-ph"},null,-1)),mt={key:0,class:"table-list"},At={class:"flex-between-center center font-2"},wt={class:"flex-between-center center mt-10 font-3"},zt={key:1,class:"table-list"},Rt={class:"flex-between-center center font-2"},yt={class:"flex-between-center center mt-10 font-3"},Dt={class:"select-container"},kt={class:"select-title"},Tt=P(()=>n("div",{class:"select-placeholder"},null,-1)),Et={key:0,class:"select-content"},Bt=["onClick"],Nt={class:"select-item_left"},Vt={class:"select-item_left-top"},Ct={class:"select-item_left-bottom"},Ft={key:1,class:"select-content"},Ut=["onClick"],Xt={class:"select-item_left"},St={class:"select-item_left-top"},Lt={class:"select-item_left-bottom"};function Wt(e,t,c,u,s,l){var Q,Z,x,ee;const M=m("router-link"),q=m("van-divider"),B=m("van-radio"),H=m("van-radio-group"),S=m("van-field"),V=m("van-button"),G=m("van-icon"),$=m("van-count-down"),J=m("van-action-sheet"),j=m("van-empty"),K=re("copy");return i(),h(y,null,[n("div",me,[d(M,{to:"/tron_v1",class:"link"},{default:f(()=>[_(a(e.$t("switch"))+" Stake1.0 >",1)]),_:1})]),n("div",Ae,[n("div",we,[n("div",ze,[n("span",Re,a(e.$t("bandwidth")),1),n("span",ye,a(e.$t("price"))+": "+a(e.$f.formatNumber2(l.BPrice))+" B/TRX",1)]),d(q,{style:{"--van-divider-margin":"0.2rem 0"}}),n("div",De,[n("div",{class:"range-v",style:se({width:l.pB+"%"})},null,4),n("div",ke,a(e.$t("available"))+": "+a(e.$f.formatNumber2(l.totalB))+"/"+a(e.$f.formatNumber2(l.totalAllB))+"B",1)]),n("div",Te,[n("div",Ee,[n("div",Be,a(e.$t("frozen")),1),n("div",Ne,a(e.$f.formatNumber2(l.totalFrozenBTRX))+" TRX",1)]),n("div",Ve,[n("div",Ce,a(e.$t("undelegated")),1),n("div",{class:"font-5 link",onClick:t[0]||(t[0]=g(o=>l.showDelegateHistory(1),["stop"]))},a(e.$f.formatNumber2(s.utils.formatUnits(s.canUndelegatedBAmount,6)))+" TRX >",1)]),n("div",Fe,[n("div",null,a(e.$t("delegateSelf"))+": "+a(e.$f.formatNumber2(l.frozenBTRX))+" TRX",1),n("div",Ue,a(e.$t("delegateOthers"))+": "+a(e.$f.formatNumber2(l.frozenBTRXOther))+" TRX",1),n("div",Xe,a(e.$t("delegateFromOthers"))+": "+a(e.$f.formatNumber2(l.frozenBTRXFromOther))+" TRX",1)])])]),n("div",Se,[n("div",Le,[n("span",We,a(e.$t("energy")),1),n("span",Ie,a(e.$t("price"))+": "+a(e.$f.formatNumber2(l.EnergyPrice))+" \xB5s/TRX",1)]),d(q,{style:{"--van-divider-margin":"0.2rem 0"}}),n("div",Me,[n("div",{class:"range-v",style:se({width:l.pE+"%"})},null,4),n("div",He,a(e.$t("available"))+": "+a(e.$f.formatNumber2(l.EnergyBalance))+"/"+a(e.$f.formatNumber2(s.accountResource.EnergyLimit||0))+"\xB5s",1)]),n("div",Ge,[n("div",Oe,[n("div",Ye,a(e.$t("frozen")),1),n("div",Pe,a(e.$f.formatNumber2(l.totalFrozenETRX))+" TRX",1)]),n("div",qe,[n("div",$e,a(e.$t("undelegated")),1),n("div",{class:"font-5 link",onClick:t[1]||(t[1]=g(o=>l.showDelegateHistory(2),["stop"]))},a(e.$f.formatNumber2(s.utils.formatUnits(s.canUndelegatedEAmount,6)))+" TRX >",1)]),n("div",Je,[n("div",null,a(e.$t("delegateSelf"))+": "+a(e.$f.formatNumber2(l.frozenETRX))+" TRX",1),n("div",je,a(e.$t("delegateOthers"))+": "+a(e.$f.formatNumber2(l.frozenETRXOther))+" TRX",1),n("div",Ke,a(e.$t("delegateFromOthers"))+": "+a(e.$f.formatNumber2(l.frozenETRXFromOther))+" TRX",1)])])]),n("div",Qe,[n("div",Ze,[n("button",{class:T({active:s.tabActive3===1}),onClick:t[2]||(t[2]=g(o=>s.tabActive3=1,["stop"]))},a(e.$t("stakingManagement")),3),n("button",{class:T({active:s.tabActive3===2}),onClick:t[3]||(t[3]=g(o=>s.tabActive3=2,["stop"]))},a(e.$t("resourceManagement")),3)])]),n("div",xe,[s.tabActive3===1?(i(),h(y,{key:0},[n("div",et,[d(H,{modelValue:s.tabActive4,"onUpdate:modelValue":t[4]||(t[4]=o=>s.tabActive4=o),direction:"horizontal","icon-size":"0.4rem","checked-color":"#3F80F7"},{default:f(()=>[d(B,{name:1},{default:f(()=>[_(a(e.$t("freeze")),1)]),_:1}),d(B,{name:2},{default:f(()=>[_(a(e.$t("unfrozen")),1)]),_:1})]),_:1},8,["modelValue"])]),n("div",null,[n("span",tt,a(e.$t("selectFreezeType")),1)]),n("div",st,[n("button",{class:T({active:s.resource==="BANDWIDTH"}),type:"button",onClick:t[5]||(t[5]=g(o=>s.resource="BANDWIDTH",["stop"]))},a(e.$t("bandwidth")),3),n("button",{class:T({active:s.resource==="ENERGY"}),type:"button",onClick:t[6]||(t[6]=g(o=>s.resource="ENERGY",["stop"]))},a(e.$t("energy")),3)]),s.tabActive4===1?(i(),h(y,{key:0},[n("div",nt,a(e.$t("balance"))+": "+a(s.utils.formatUnits(((Q=s.account)==null?void 0:Q.balance)||0,6))+" TRX",1),d(S,{class:"input-n",modelValue:s.frozenAmount,"onUpdate:modelValue":t[7]||(t[7]=o=>s.frozenAmount=o),label:"",clearable:"",placeholder:e.$t("plsEnterAmount"),type:"number"},{button:f(()=>[_("TRX")]),_:1},8,["modelValue","placeholder"])],64)):v("",!0),s.tabActive4===2?(i(),h(y,{key:1},[n("div",ot,a(e.$t("unfreezable"))+": "+a(e.$f.formatNumber2(s.resource==="BANDWIDTH"?l.unfreezableBTRX||0:l.unfreezableETRX||0))+" TRX",1),d(S,{class:"input-n",modelValue:s.unfrozenAmount,"onUpdate:modelValue":t[8]||(t[8]=o=>s.unfrozenAmount=o),label:"",clearable:"",placeholder:e.$t("plsEnterAmount"),type:"number"},{button:f(()=>[_("TRX")]),_:1},8,["modelValue","placeholder"])],64)):v("",!0),s.tabActive4===1?(i(),h("div",at,a(e.$t("stakeTips")),1)):v("",!0),s.tabActive4===2?(i(),h("div",lt,a(e.$t("unStakeTips")),1)):v("",!0),s.tabActive4===2?(i(),h("div",rt,[n("span",null,a(e.$t("withdrawable"))+": "+a(e.$f.formatNumber2(s.utils.formatUnits(s.canWithdrawUnFreezeAmount,6)))+" TRX",1),((Z=s.canWithdrawUnFreezeAmount)!=null?Z:0)<=0?(i(),E(V,{key:0,type:"default",size:"small",round:"",class:"button-1",disabled:((x=s.canWithdrawUnFreezeAmount)!=null?x:0)<=0},{default:f(()=>[_(a(e.$t("withdraw")),1)]),_:1},8,["disabled"])):(i(),E(V,{key:1,color:"#3F80F7",size:"small",round:"",class:"button-1",disabled:((ee=s.canWithdrawUnFreezeAmount)!=null?ee:0)<=0,onClick:l.withdrawExpireUnfreeze},{default:f(()=>[_(a(e.$t("withdraw")),1)]),_:1},8,["disabled","onClick"]))])):v("",!0)],64)):v("",!0),s.tabActive3===2?(i(),h(y,{key:1},[n("div",ct,[d(H,{modelValue:s.resource1,"onUpdate:modelValue":t[9]||(t[9]=o=>s.resource1=o),direction:"horizontal","icon-size":"0.4rem","checked-color":"#3F80F7"},{default:f(()=>[d(B,{name:"BANDWIDTH"},{default:f(()=>[_(a(e.$t("bandwidth")),1)]),_:1}),d(B,{name:"ENERGY"},{default:f(()=>[_(a(e.$t("energy")),1)]),_:1})]),_:1},8,["modelValue"])]),n("div",it,[n("span",dt,a(e.$t("delegateTo")),1),n("button",{class:"link",onClick:t[10]||(t[10]=g(o=>l.showDelegateHistory(1),["stop"]))},a(e.$t("delegateHistory")),1)]),d(S,{class:"input-n",modelValue:s.delegateAmount,"onUpdate:modelValue":t[11]||(t[11]=o=>s.delegateAmount=o),label:"",clearable:"",placeholder:e.$t("plsEnterDelegatedAmount"),type:"number"},{button:f(()=>[_("TRX")]),_:1},8,["modelValue","placeholder"]),n("div",ut,a(e.$t("delegable"))+": "+a(s.resource1==="BANDWIDTH"?e.$f.formatNumber2(s.utils.formatUnits(s.canDelegatedMaxSizeB,6)):e.$f.formatNumber2(s.utils.formatUnits(s.canDelegatedMaxSizeE,6)))+" TRX",1),n("div",ht,a(e.$t("receivingAccount")),1),d(S,{class:"input-n",modelValue:s.receiverAddress,"onUpdate:modelValue":t[13]||(t[13]=o=>s.receiverAddress=o),label:"",clearable:"",placeholder:e.$t("plsEnterReceiveAccount")},{"right-icon":f(()=>[s.isAppGetContactList?(i(),h("img",{key:0,src:ve,style:{height:"0.36rem"},class:"clickable",alt:"",srcset:"",onClick:t[12]||(t[12]=g(o=>s.show1=!0,["stop"]))})):v("",!0)]),_:1},8,["modelValue","placeholder"]),n("div",ft,[n("span",null,a(e.$t("withLockUpPeriod")),1),d(G,{class:"ml-5 icon-tips",name:"question-o",color:"#A4A4A4",size:"0.32rem",onClick:t[14]||(t[14]=g(o=>e.$dialog.alert({title:e.$t("tips"),message:e.$t("lockTips"),confirmButtonText:this.$t("confirm1"),confirmButtonColor:"#3F80F7"}),["stop"]))}),gt,d(H,{modelValue:s.lock,"onUpdate:modelValue":t[15]||(t[15]=o=>s.lock=o),direction:"horizontal","icon-size":"0.4rem","checked-color":"#3F80F7"},{default:f(()=>[d(B,{name:!0},{default:f(()=>[_(a(e.$t("yes")),1)]),_:1}),d(B,{name:!1},{default:f(()=>[_(a(e.$t("no")),1)]),_:1})]),_:1},8,["modelValue"])])],64)):v("",!0)]),d(V,{class:"btn-36",round:"",block:"",color:"#3F80F7",size:"small",disabled:l.disabled,loading:s.loading,onClick:g(l.onSubmit,["stop"])},{default:f(()=>[_(a(l.errMessage||e.$t("confirm")),1)]),_:1},8,["disabled","loading","onClick"])]),d(J,{show:s.show,"onUpdate:show":t[18]||(t[18]=o=>s.show=o),title:e.$t("delegateHistory1"),style:{height:"60%","--van-popup-background-color":"#fff"}},{default:f(()=>[n("div",bt,[n("div",_t,[n("div",vt,[n("button",{class:T({active:s.tabActive5===1}),onClick:t[16]||(t[16]=g(o=>s.tabActive5=1,["stop"]))},a(e.$t("bandwidth")),3),n("button",{class:T({active:s.tabActive5===2}),onClick:t[17]||(t[17]=g(o=>s.tabActive5=2,["stop"]))},a(e.$t("energy")),3)])]),pt,s.tabActive5===1?(i(),h("ul",mt,[(i(!0),h(y,null,W(s.delegatedResourceV2List.filter(o=>o==null?void 0:o.frozen_balance_for_bandwidth),(o,N)=>{var D,k;return i(),h("li",{key:N},[n("div",At,[n("span",null,a(e.$t("bandwidthDelegation")),1),n("span",null,a(e.$f.formatNumber2(s.utils.formatUnits((o==null?void 0:o.frozen_balance_for_bandwidth)||0,6)))+" TRX",1)]),n("div",wt,[n("span",null,a(e.$t("receiveAddress"))+": "+a(o!=null&&o.to?((D=o==null?void 0:o.to)==null?void 0:D.slice(0,6))+"..."+((k=o==null?void 0:o.to)==null?void 0:k.slice(-4)):""),1),l.formatIsExpire(o)?(i(),E(V,{key:1,class:"btn-s",type:"primary",size:"mini",round:"",color:"#3F80F7",disabled:!l.formatIsExpire(o),loading:s.loading1,onClick:g(L=>l.unDelegateResource((o==null?void 0:o.frozen_balance_for_bandwidth)||0,"BANDWIDTH",o==null?void 0:o.to),["stop"])},{default:f(()=>[_(a(e.$t("undelegate")),1)]),_:2},1032,["disabled","loading","onClick"])):(i(),E($,{key:0,time:l.getExpire(o),format:`DD${e.$t("days")} HH:mm:ss`,class:"count-down"},null,8,["time","format"]))])])}),128))])):v("",!0),s.tabActive5===2?(i(),h("ul",zt,[(i(!0),h(y,null,W(s.delegatedResourceV2List.filter(o=>o==null?void 0:o.frozen_balance_for_energy),(o,N)=>{var D,k;return i(),h("li",{key:N},[n("div",Rt,[n("span",null,a(e.$t("energyDelegation")),1),n("span",null,a(e.$f.formatNumber2(s.utils.formatUnits((o==null?void 0:o.frozen_balance_for_energy)||0,6)))+" TRX",1)]),n("div",yt,[n("span",null,a(e.$t("receiveAddress"))+": "+a(o!=null&&o.to?((D=o==null?void 0:o.to)==null?void 0:D.slice(0,6))+"..."+((k=o==null?void 0:o.to)==null?void 0:k.slice(-4)):""),1),l.formatIsExpire(o,"energy")?(i(),E(V,{key:1,class:"btn-s",type:"primary",size:"mini",round:"",color:"#3F80F7",disabled:!l.formatIsExpire(o,"energy"),loading:s.loading1,onClick:g(L=>l.unDelegateResource((o==null?void 0:o.frozen_balance_for_energy)||0,"ENERGY",o==null?void 0:o.to),["stop"])},{default:f(()=>[_(a(e.$t("undelegate")),1)]),_:2},1032,["disabled","loading","onClick"])):(i(),E($,{key:0,time:l.getExpire(o,"energy"),format:`DD${e.$t("days")} HH:mm:ss`,class:"count-down"},null,8,["time","format"]))])])}),128))])):v("",!0)])]),_:1},8,["show","title"]),d(J,{show:s.show1,"onUpdate:show":t[23]||(t[23]=o=>s.show1=o),title:" ",style:{height:"50%","--van-popup-background-color":"#fff"},class:"select-action-pop"},{default:f(()=>{var o,N,D,k,L,te;return[n("div",Dt,[n("div",kt,[n("button",{class:T({active:s.tabActive==="contact"}),onClick:t[19]||(t[19]=g(r=>s.tabActive="contact",["stop"]))},a(e.$t("contacts")),3),n("button",{class:T({active:s.tabActive==="wallet"}),onClick:t[20]||(t[20]=g(r=>s.tabActive="wallet",["stop"]))},a(e.$t("myWallet")),3)]),Tt,s.tabActive==="contact"?(i(),h("ul",Et,[(i(!0),h(y,null,W(s.accounts.contact,(r,O)=>{var A,C,w,F,z,U,R,X;return i(),h("li",{key:O,class:"select-item clickable",onClick:g(ae=>l.handleSelectAccount(r),["stop"])},[n("div",Nt,[n("div",Vt,a((r==null?void 0:r.contact_name)||""),1),n("div",Ct,[n("span",null,a(r!=null&&r.contact_address?((C=(A=r==null?void 0:r.contact_address)==null?void 0:A.slice)==null?void 0:C.call(A,0,10))+"..."+((F=(w=r==null?void 0:r.contact_address)==null?void 0:w.slice)==null?void 0:F.call(w,-5)):""),1),I(n("i",{class:"iconfont icon-copy clickable",onClick:t[21]||(t[21]=g(()=>{},["stop"]))},null,512),[[K,(r==null?void 0:r.contact_address)||""]])])]),((U=(z=r==null?void 0:r.contact_address)==null?void 0:z.toLowerCase)==null?void 0:U.call(z))===((X=(R=s.receiverAddress)==null?void 0:R.toLowerCase)==null?void 0:X.call(R))?(i(),E(G,{key:0,size:"0.32rem",color:"#3F80F7",name:"success"})):v("",!0)],8,Bt)}),128)),I(d(j,{class:"empty",image:e.emptyNoDataLight,description:e.$t("emptyData")},null,8,["image","description"]),[[ne,((o=s.accounts)==null?void 0:o.contact)&&((D=(N=s.accounts)==null?void 0:N.contact)==null?void 0:D.length)===0]])])):v("",!0),s.tabActive==="wallet"?(i(),h("ul",Ft,[(i(!0),h(y,null,W(s.accounts.wallet,(r,O)=>{var A,C,w,F,z,U,R,X;return i(),h("li",{key:O,class:"select-item clickable",onClick:g(ae=>l.handleSelectAccount(r),["stop"])},[n("div",Xt,[n("div",St,a((r==null?void 0:r.contact_name)||""),1),n("div",Lt,[n("span",null,a(r!=null&&r.contact_address?((C=(A=r==null?void 0:r.contact_address)==null?void 0:A.slice)==null?void 0:C.call(A,0,10))+"..."+((F=(w=r==null?void 0:r.contact_address)==null?void 0:w.slice)==null?void 0:F.call(w,-5)):""),1),I(n("i",{class:"iconfont icon-copy clickable",onClick:t[22]||(t[22]=g(()=>{},["stop"]))},null,512),[[K,(r==null?void 0:r.contact_address)||""]])])]),((U=(z=r==null?void 0:r.contact_address)==null?void 0:z.toLowerCase)==null?void 0:U.call(z))===((X=(R=e.toAddress)==null?void 0:R.toLowerCase)==null?void 0:X.call(R))?(i(),E(G,{key:0,size:"0.32rem",color:"#3F80F7",name:"success"})):v("",!0)],8,Ut)}),128)),I(d(j,{class:"empty",image:e.emptyNoDataLight,description:e.$t("emptyData")},null,8,["image","description"]),[[ne,((k=s.accounts)==null?void 0:k.wallet)&&((te=(L=s.accounts)==null?void 0:L.wallet)==null?void 0:te.length)===0]])])):v("",!0)])]}),_:1},8,["show"])],64)}var Yt=le(pe,[["render",Wt],["__scopeId","data-v-2bed73ca"]]);export{Yt as default};
