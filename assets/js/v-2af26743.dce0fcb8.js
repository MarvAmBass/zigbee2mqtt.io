"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36988],{1453:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-2af26743",path:"/devices/WG001.html",title:"Aeotec WG001 control via MQTT",lang:"en-US",frontmatter:{title:"Aeotec WG001 control via MQTT",description:"Integrate your Aeotec WG001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-09-16T15:00:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WG001.md",git:{updatedTime:1665512464e3}}},38:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="aeotec-wg001" tabindex="-1"><a class="header-anchor" href="#aeotec-wg001" aria-hidden="true">#</a> Aeotec WG001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WG001</td></tr><tr><td>Vendor</td><td>Aeotec</td></tr><tr><td>Description</td><td>Range extender Zi</td></tr><tr><td>Exposes</td><td>linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WG001.jpg" alt="Aeotec WG001"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>The Range Extender Zi is in pairing mode straight out of the box - allow new devices and the device will join the network. To push it back in paring mode just push the device button once. The led will fast blinking. Once the device is paired the led will be always on (or always off. You can select it acting on the button). If the device led is faiding in an out slowly, this means is not paired with any zigbee network.</p><p>To be sure the device correctly join the network, as the Aeotec documentation is saying, you need to be closer to the coordinator. Once it joins the network you can move it in its final location.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),n={},d=(0,i(83744).Z)(n,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);