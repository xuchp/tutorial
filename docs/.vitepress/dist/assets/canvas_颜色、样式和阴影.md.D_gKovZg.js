import{_ as t,c as r,o as a,a8 as e}from"./chunks/framework.Uk78KS4B.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"canvas/颜色、样式和阴影.md","filePath":"canvas/颜色、样式和阴影.md"}'),o={name:"canvas/颜色、样式和阴影.md"},d=e('<h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><h4 id="_1-fillstyle" tabindex="-1">1. fillStyle <a class="header-anchor" href="#_1-fillstyle" aria-label="Permalink to &quot;1. fillStyle&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于填充绘画的颜色、渐变或模式。</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.fillStyle = color|gradient|pattern;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>指定绘图填充色的 css 颜色值，默认值是#000000</td></tr><tr><td>gradient</td><td>用于填充绘图的渐变对象 (线性或者放射性)</td></tr><tr><td>pattern</td><td>用于填充绘图的 pattern 对象</td></tr></tbody></table><h4 id="_2-strokestyle" tabindex="-1">2. strokeStyle <a class="header-anchor" href="#_2-strokestyle" aria-label="Permalink to &quot;2. strokeStyle&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于笔触的颜色、渐变或模式。</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.strokeStyle = color|gradient|pattern;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>指定绘图填充色的 css 颜色值，默认值是#000000</td></tr><tr><td>gradient</td><td>用于填充绘图的渐变对象 (线性或者放射性)</td></tr><tr><td>pattern</td><td>用于填充绘图的 pattern 对象</td></tr></tbody></table><h4 id="_3-shadowcolor" tabindex="-1">3. shadowColor <a class="header-anchor" href="#_3-shadowcolor" aria-label="Permalink to &quot;3. shadowColor&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于阴影的颜色</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.shadowColor=color;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>用于阴影的 css 颜色值。默认是#000000</td></tr></tbody></table><h4 id="_4-shadowblur" tabindex="-1">4. shadowBlur <a class="header-anchor" href="#_4-shadowblur" aria-label="Permalink to &quot;4. shadowBlur&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于阴影的模糊级别</p><p><strong>默认值</strong>：</p><p><strong>JavaScript 语法</strong>：<code>context.shadowBlur=number</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>属性</th></tr></thead><tbody><tr><td>number</td><td>属性的模糊级别</td></tr></tbody></table><h4 id="_5-shadowoffsetx" tabindex="-1">5. shadowOffsetX <a class="header-anchor" href="#_5-shadowoffsetx" aria-label="Permalink to &quot;5. shadowOffsetX&quot;">​</a></h4><p><strong>作用</strong>：设置或返回阴影与形状的水平距离</p><p>shadowOffsetX = 0 指示阴影位于形状的正下方</p><p>shadowOffsetX = 20 指示阴影位于形状 left 位置右侧的 20 像素处</p><p>shadowOffsetX = -20 指示阴影位于形状 left 位置左侧的 20 像素处</p><p><strong>默认值</strong>：0</p><p><strong>JavaScript 语法</strong>：<code>context.shadowOffsetX = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正值或者负值，定义形状与阴影的水平距离</td></tr></tbody></table><h4 id="_6-shadowoffsety" tabindex="-1">6. shadowOffsetY <a class="header-anchor" href="#_6-shadowoffsety" aria-label="Permalink to &quot;6. shadowOffsetY&quot;">​</a></h4><p><strong>作用</strong>：设置或返回阴影与形状的垂直距离</p><p>shadowOffsetY = 0 指示阴影位于形状的正下方</p><p>shadowOffsetY = 20 指示阴影位于形状 top 位置下方的 20 像素处</p><p>shadowOffsetY = -20 指示阴影位于形状 top 位置上方的 20 像素处</p><p><strong>默认值</strong>：0</p><p><strong>JavaScript 语法</strong>：<code>context.shadowOffsetY = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正值或者负值，定义形状与阴影的垂直距离</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><h4 id="_1-createlinegradient" tabindex="-1">1. createLineGradient() <a class="header-anchor" href="#_1-createlinegradient" aria-label="Permalink to &quot;1. createLineGradient()&quot;">​</a></h4><p><strong>作用</strong>：创建线性渐变(用在画布内容上)，渐变可用于填充矩形、圆形、线条、文本等等</p><p>该对象作为 <a href="#_2-strokestyle">strokeStyle</a> 或 <a href="#_1-fillstyle">fillStyle</a> 属性的值，需要配合 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色</p><p><strong>JavaScript 语法</strong>：<code>context.createLinearGradient(x0, y0, x1, y1)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x0</td><td>渐变开始点的 x 坐标</td></tr><tr><td>y0</td><td>渐变开始点的 y 坐标</td></tr><tr><td>x1</td><td>渐变结束点的 x 坐标</td></tr><tr><td>y1</td><td>渐变结束点的 y 坐标</td></tr></tbody></table><h4 id="_2-createpattern" tabindex="-1">2. createPattern() <a class="header-anchor" href="#_2-createpattern" aria-label="Permalink to &quot;2. createPattern()&quot;">​</a></h4><p><strong>作用</strong>：在指定的方向上重复制定的元素</p><p>元素可以是图片、视频，或者其他 &lt;canvas&gt; 元素</p><p>被重复的元素可用于绘制/填充矩形、圆形或者线条等等。</p><p><strong>JavaScript 语法</strong>：<code>context.createPattern(image, &quot;repeat|repeat-x|repeat-y|no-repeat&quot;);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>image</td><td>规定要使用的模式的图片、画布或视频元素</td></tr><tr><td>repeat</td><td>默认。该模式下在水平和垂直方向重复</td></tr><tr><td>repeat-x</td><td>该模式只在水平方向重复</td></tr><tr><td>repeat-y</td><td>该模式只在垂直方向重复</td></tr><tr><td>no-repeat</td><td>该模式只显示一次（不重复）</td></tr></tbody></table><h4 id="_3-createradialgradient" tabindex="-1">3. createRadialGradient() <a class="header-anchor" href="#_3-createradialgradient" aria-label="Permalink to &quot;3. createRadialGradient()&quot;">​</a></h4><p><strong>作用</strong>：创建放射状/环形的渐变(用在画布内容上)，渐变可用于填充矩形、圆形、线条、文本等等</p><p>该对象作为 <a href="#_2-strokestyle">strokeStyle</a> 或 <a href="#_1-fillstyle">fillStyle</a> 属性的值，需要配合 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色</p><p><strong>JavaScript 语法</strong>：<code>context.createRadialGradient(x0, y0, r0, x1, y1, r1)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x0</td><td>渐变开始圆的 x 坐标</td></tr><tr><td>y0</td><td>渐变开始圆的 y 坐标</td></tr><tr><td>r0</td><td>开始圆的半径</td></tr><tr><td>x1</td><td>渐变结束圆的 x 坐标</td></tr><tr><td>y1</td><td>渐变结束圆的 y 坐标</td></tr><tr><td>r1</td><td>结束圆的半径</td></tr></tbody></table><h4 id="_4-addcolorstop" tabindex="-1">4. addColorStop() <a class="header-anchor" href="#_4-addcolorstop" aria-label="Permalink to &quot;4. addColorStop()&quot;">​</a></h4><p><strong>作用</strong>：规定渐变对象中的颜色和停止位置</p><p>addColorStop() 方法与 <a href="#_1-createlinegradient">createLinearGradient()</a> 和 <a href="#_3-createradialgradient">createRadialGradient()</a> 一起使用</p><p><strong>注意</strong>：您可以多次调用 addColorStop()方法来改变渐变，如果您不对渐变的对象使用该方法，那么渐变将不可见。为了获得可见的渐变，您需要创建至少一个色标。</p><p><strong>JavaScript 语法</strong>:<code>gradient.addColorStop(stop,color)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>stop</td><td>介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置</td></tr><tr><td>color</td><td>在 stop 位置显示的 CSS 颜色值</td></tr></tbody></table>',70),s=[d];function n(h,l,p,c,i,g){return a(),r("div",null,s)}const _=t(o,[["render",n]]);export{f as __pageData,_ as default};
