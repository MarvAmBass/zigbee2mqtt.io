"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18271],{91012:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-f1b959e6",path:"/devices/PEHPL0X.html",title:"Perenio PEHPL0X control via MQTT",lang:"en-US",frontmatter:{title:"Perenio PEHPL0X control via MQTT",description:"Integrate your Perenio PEHPL0X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-01T15:08:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Default_on_off_state (enum)",slug:"default-on-off-state-enum",children:[]},{level:3,title:"Rms_voltage (numeric)",slug:"rms-voltage-numeric",children:[]},{level:3,title:"Active_power (numeric)",slug:"active-power-numeric",children:[]},{level:3,title:"Consumed_energy (numeric)",slug:"consumed-energy-numeric",children:[]},{level:3,title:"Alarm_voltage_min (binary)",slug:"alarm-voltage-min-binary",children:[]},{level:3,title:"Alarm_voltage_max (binary)",slug:"alarm-voltage-max-binary",children:[]},{level:3,title:"Alarm_power_max (binary)",slug:"alarm-power-max-binary",children:[]},{level:3,title:"Alarm_consumed_energy (binary)",slug:"alarm-consumed-energy-binary",children:[]},{level:3,title:"Voltage_min (numeric)",slug:"voltage-min-numeric",children:[]},{level:3,title:"Voltage_max (numeric)",slug:"voltage-max-numeric",children:[]},{level:3,title:"Power_max (numeric)",slug:"power-max-numeric",children:[]},{level:3,title:"Consumed_energy_limit (numeric)",slug:"consumed-energy-limit-numeric",children:[]},{level:3,title:"Rssi (numeric)",slug:"rssi-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PEHPL0X.md",git:{updatedTime:1665512464e3}}},49006:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});const a=(0,o(66252).uE)('<h1 id="perenio-pehpl0x" tabindex="-1"><a class="header-anchor" href="#perenio-pehpl0x" aria-hidden="true">#</a> Perenio PEHPL0X</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PEHPL0X</td></tr><tr><td>Vendor</td><td>Perenio</td></tr><tr><td>Description</td><td>Power link</td></tr><tr><td>Exposes</td><td>switch (state), default_on_off_state, rms_voltage, active_power, consumed_energy, alarm_voltage_min, alarm_voltage_max, alarm_power_max, alarm_consumed_energy, voltage_min, voltage_max, power_max, consumed_energy_limit, rssi, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PEHPL0X.jpg" alt="Perenio PEHPL0X"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="default-on-off-state-enum" tabindex="-1"><a class="header-anchor" href="#default-on-off-state-enum" aria-hidden="true">#</a> Default_on_off_state (enum)</h3><p>Value can be found in the published state on the <code>default_on_off_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;default_on_off_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;default_on_off_state&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>previous</code>.</p><h3 id="rms-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#rms-voltage-numeric" aria-hidden="true">#</a> Rms_voltage (numeric)</h3><p>RMS voltage. Value can be found in the published state on the <code>rms_voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="active-power-numeric" tabindex="-1"><a class="header-anchor" href="#active-power-numeric" aria-hidden="true">#</a> Active_power (numeric)</h3><p>Active power. Value can be found in the published state on the <code>active_power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="consumed-energy-numeric" tabindex="-1"><a class="header-anchor" href="#consumed-energy-numeric" aria-hidden="true">#</a> Consumed_energy (numeric)</h3><p>Consumed energy. Value can be found in the published state on the <code>consumed_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W*h</code>.</p><h3 id="alarm-voltage-min-binary" tabindex="-1"><a class="header-anchor" href="#alarm-voltage-min-binary" aria-hidden="true">#</a> Alarm_voltage_min (binary)</h3><p>Indicates if the alarm is triggered on the voltage drop below the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_voltage_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_voltage_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_voltage_min&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm_voltage_min is ON, if <code>false</code> OFF.</p><h3 id="alarm-voltage-max-binary" tabindex="-1"><a class="header-anchor" href="#alarm-voltage-max-binary" aria-hidden="true">#</a> Alarm_voltage_max (binary)</h3><p>Indicates if the alarm is triggered on the voltage rise above the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_voltage_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_voltage_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_voltage_max&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm_voltage_max is ON, if <code>false</code> OFF.</p><h3 id="alarm-power-max-binary" tabindex="-1"><a class="header-anchor" href="#alarm-power-max-binary" aria-hidden="true">#</a> Alarm_power_max (binary)</h3><p>Indicates if the alarm is triggered on the active power rise above the limit, allows to reset alarms. Value can be found in the published state on the <code>alarm_power_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_power_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_power_max&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm_power_max is ON, if <code>false</code> OFF.</p><h3 id="alarm-consumed-energy-binary" tabindex="-1"><a class="header-anchor" href="#alarm-consumed-energy-binary" aria-hidden="true">#</a> Alarm_consumed_energy (binary)</h3><p>Indicates if the alarm is triggered when the consumption energy limit is reached, allows to reset alarms. Value can be found in the published state on the <code>alarm_consumed_energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_consumed_energy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_consumed_energy&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm_consumed_energy is ON, if <code>false</code> OFF.</p><h3 id="voltage-min-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-min-numeric" aria-hidden="true">#</a> Voltage_min (numeric)</h3><p>Minimum allowable voltage limit for alarms.. Value can be found in the published state on the <code>voltage_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;voltage_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>253</code>.</p><h3 id="voltage-max-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-max-numeric" aria-hidden="true">#</a> Voltage_max (numeric)</h3><p>Maximum allowable voltage limit for alarms.. Value can be found in the published state on the <code>voltage_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;voltage_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>253</code>.</p><h3 id="power-max-numeric" tabindex="-1"><a class="header-anchor" href="#power-max-numeric" aria-hidden="true">#</a> Power_max (numeric)</h3><p>Maximum allowable power limit for alarms.. Value can be found in the published state on the <code>power_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>.</p><h3 id="consumed-energy-limit-numeric" tabindex="-1"><a class="header-anchor" href="#consumed-energy-limit-numeric" aria-hidden="true">#</a> Consumed_energy_limit (numeric)</h3><p>Limit of electric energy consumption in kW*h. 0 value represents no limit. Value can be found in the published state on the <code>consumed_energy_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;consumed_energy_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;consumed_energy_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>.</p><h3 id="rssi-numeric" tabindex="-1"><a class="header-anchor" href="#rssi-numeric" aria-hidden="true">#</a> Rssi (numeric)</h3><p>RSSI seen by the device. Value can be found in the published state on the <code>rssi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-128</code> and the maximum value is <code>127</code>. The unit of this value is <code>dB</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',33),i={},d=(0,o(83744).Z)(i,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);