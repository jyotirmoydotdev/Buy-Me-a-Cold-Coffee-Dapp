"use strict";(self.webpackChunkbuymeacoldcoffe_dapp=self.webpackChunkbuymeacoldcoffe_dapp||[]).push([[1832],{11832:function(t,e,r){r.r(e),r.d(e,{MarketplaceV3:function(){return p}});var n=r(74165),i=r(15861),a=r(15671),s=r(43144),c=r(92609),o=r(76047),p=(r(64166),r(60862),r(89806),r(79955),r(87962),r(7605),function(){function t(e,r,n){(0,a.Z)(this,t);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.da(e,r,s,i);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=p,this.abi=o.e.parse(s||[]),this.contractWrapper=h,this.storage=n,this.metadata=new o.ag(this.contractWrapper,o.dn,this.storage),this.app=new o.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new o.ah(this.contractWrapper,t.contractRoles),this.encoder=new o.af(this.contractWrapper),this.estimator=new o.aP(this.contractWrapper),this.events=new o.aQ(this.contractWrapper),this.platformFees=new o.aS(this.contractWrapper),this.interceptor=new o.aR(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.bZ)(this.detectDirectListings(),o.dp)}},{key:"englishAuctions",get:function(){return(0,o.bZ)(this.detectEnglishAuctions(),o.dq)}},{key:"offers",get:function(){return(0,o.bZ)(this.detectOffers(),o.dr)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:i}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,i));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.b_)(this.contractWrapper,"DirectListings"))return new o.aM(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.b_)(this.contractWrapper,"EnglishAuctions"))return new o.aN(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.b_)(this.contractWrapper,"Offers"))return new o.aO(this.contractWrapper,this.storage)}}]),t}());(0,c._)(p,"contractRoles",["admin","lister","asset"])}}]);