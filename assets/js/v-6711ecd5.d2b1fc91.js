"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69114],{10523:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-6711ecd5",path:"/devices/mTouch_One.html",title:"CTM Lyng mTouch_One control via MQTT",lang:"en-US",frontmatter:{title:"CTM Lyng mTouch_One control via MQTT",description:"Integrate your CTM Lyng mTouch_One via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Load (numeric)",slug:"load-numeric",children:[]},{level:3,title:"Display_text (text)",slug:"display-text-text",children:[]},{level:3,title:"Regulator_mode (binary)",slug:"regulator-mode-binary",children:[]},{level:3,title:"Mean_power (numeric)",slug:"mean-power-numeric",children:[]},{level:3,title:"Floor_temp (numeric)",slug:"floor-temp-numeric",children:[]},{level:3,title:"Frost_guard (binary)",slug:"frost-guard-binary",children:[]},{level:3,title:"Regulator_setpoint (numeric)",slug:"regulator-setpoint-numeric",children:[]},{level:3,title:"Air_temp (numeric)",slug:"air-temp-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/mTouch_One.md",git:{updatedTime:1665512464e3}}},79910:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var d=o(66252);const a=(0,d.uE)('<h1 id="ctm-lyng-mtouch-one" tabindex="-1"><a class="header-anchor" href="#ctm-lyng-mtouch-one" aria-hidden="true">#</a> CTM Lyng mTouch_One</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>mTouch_One</td></tr><tr><td>Vendor</td><td>CTM Lyng</td></tr><tr><td>Description</td><td>mTouch One OP, touch thermostat</td></tr><tr><td>Exposes</td><td>lock (state), climate (occupied_heating_setpoint, local_temperature, system_mode, preset), load, display_text, regulator_mode, mean_power, floor_temp, frost_guard, regulator_setpoint, air_temp, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/mTouch_One.jpg" alt="CTM Lyng mTouch_One"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),i=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>preset</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>40</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>away</code>, <code>sleep</code>, <code>home</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="load-numeric" tabindex="-1"><a class="header-anchor" href="#load-numeric" aria-hidden="true">#</a> Load (numeric)</h3><p>Load in W when heating is on (between 0-3600 W). The thermostat uses the value as input to the mean_power calculation.. Value can be found in the published state on the <code>load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>W</code>.</p><h3 id="display-text-text" tabindex="-1"><a class="header-anchor" href="#display-text-text" aria-hidden="true">#</a> Display_text (text)</h3><p>Displayed text on thermostat display (zone). Max 19 characters. Value can be found in the published state on the <code>display_text</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_text&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_text&quot;: NEW_VALUE}</code>.</p><h3 id="regulator-mode-binary" tabindex="-1"><a class="header-anchor" href="#regulator-mode-binary" aria-hidden="true">#</a> Regulator_mode (binary)</h3><p>Device in regulator or thermostat mode.. Value can be found in the published state on the <code>regulator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_mode&quot;: NEW_VALUE}</code>. If value equals <code>regulator</code> regulator_mode is ON, if <code>thermostat</code> OFF.</p><h3 id="mean-power-numeric" tabindex="-1"><a class="header-anchor" href="#mean-power-numeric" aria-hidden="true">#</a> Mean_power (numeric)</h3><p>Reports average power usage last 10 minutes. Value can be found in the published state on the <code>mean_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mean_power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="floor-temp-numeric" tabindex="-1"><a class="header-anchor" href="#floor-temp-numeric" aria-hidden="true">#</a> Floor_temp (numeric)</h3><p>Current temperature measured from the floor sensor. Value can be found in the published state on the <code>floor_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_temp&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="frost-guard-binary" tabindex="-1"><a class="header-anchor" href="#frost-guard-binary" aria-hidden="true">#</a> Frost_guard (binary)</h3><p>When frost guard is ON, it is activated when the thermostat is switched OFF with the ON/OFF button.At the same time, the display will fade and the text &quot;Frostsikring x °C&quot; appears in the display and remains until the thermostat is switched on again.. Value can be found in the published state on the <code>frost_guard</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;frost_guard&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_guard&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost_guard is ON, if <code>OFF</code> OFF.</p><h3 id="regulator-setpoint-numeric" tabindex="-1"><a class="header-anchor" href="#regulator-setpoint-numeric" aria-hidden="true">#</a> Regulator_setpoint (numeric)</h3><p>Setpoint in %, use only when the thermostat is in regulator mode.. Value can be found in the published state on the <code>regulator_setpoint</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_setpoint&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_setpoint&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p><h3 id="air-temp-numeric" tabindex="-1"><a class="header-anchor" href="#air-temp-numeric" aria-hidden="true">#</a> Air_temp (numeric)</h3><p>Current temperature measured from the air sensor. Value can be found in the published state on the <code>air_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;air_temp&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),r={},s=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[a,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[i])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);