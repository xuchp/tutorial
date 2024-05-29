import{_ as t,c as a,o as r,a8 as e}from"./chunks/framework.Uk78KS4B.js";const u=JSON.parse('{"title":"Canvas API","description":"","frontmatter":{},"headers":[],"relativePath":"canvas/2.Canvas API.md","filePath":"canvas/2.Canvas API.md"}'),o={name:"canvas/2.Canvas API.md"},n=e('<h1 id="canvas-api" tabindex="-1">Canvas API <a class="header-anchor" href="#canvas-api" aria-label="Permalink to &quot;Canvas API&quot;">​</a></h1><h2 id="一、颜色、样式和阴影" tabindex="-1">一、颜色、样式和阴影 <a class="header-anchor" href="#一、颜色、样式和阴影" aria-label="Permalink to &quot;一、颜色、样式和阴影&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><h4 id="_1-fillstyle" tabindex="-1">1. fillStyle <a class="header-anchor" href="#_1-fillstyle" aria-label="Permalink to &quot;1. fillStyle&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于填充绘画的颜色、渐变或模式。</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.fillStyle = color|gradient|pattern;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>指定绘图填充色的 css 颜色值，默认值是#000000</td></tr><tr><td>gradient</td><td>用于填充绘图的渐变对象 (线性或者放射性)</td></tr><tr><td>pattern</td><td>用于填充绘图的 pattern 对象</td></tr></tbody></table><h4 id="_2-strokestyle" tabindex="-1">2. strokeStyle <a class="header-anchor" href="#_2-strokestyle" aria-label="Permalink to &quot;2. strokeStyle&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于笔触的颜色、渐变或模式。</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.strokeStyle = color|gradient|pattern;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>指定绘图填充色的 css 颜色值，默认值是#000000</td></tr><tr><td>gradient</td><td>用于填充绘图的渐变对象 (线性或者放射性)</td></tr><tr><td>pattern</td><td>用于填充绘图的 pattern 对象</td></tr></tbody></table><h4 id="_3-shadowcolor" tabindex="-1">3. shadowColor <a class="header-anchor" href="#_3-shadowcolor" aria-label="Permalink to &quot;3. shadowColor&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于阴影的颜色</p><p><strong>默认值</strong>：#000000</p><p><strong>JavaScript 语法</strong>：<code>context.shadowColor=color;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>用于阴影的 css 颜色值。默认是#000000</td></tr></tbody></table><h4 id="_4-shadowblur" tabindex="-1">4. shadowBlur <a class="header-anchor" href="#_4-shadowblur" aria-label="Permalink to &quot;4. shadowBlur&quot;">​</a></h4><p><strong>作用</strong>：设置或返回用于阴影的模糊级别</p><p><strong>默认值</strong>：</p><p><strong>JavaScript 语法</strong>：<code>context.shadowBlur=number</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>属性</th></tr></thead><tbody><tr><td>number</td><td>属性的模糊级别</td></tr></tbody></table><h4 id="_5-shadowoffsetx" tabindex="-1">5. shadowOffsetX <a class="header-anchor" href="#_5-shadowoffsetx" aria-label="Permalink to &quot;5. shadowOffsetX&quot;">​</a></h4><p><strong>作用</strong>：设置或返回阴影与形状的水平距离</p><p>shadowOffsetX = 0 指示阴影位于形状的正下方</p><p>shadowOffsetX = 20 指示阴影位于形状 left 位置右侧的 20 像素处</p><p>shadowOffsetX = -20 指示阴影位于形状 left 位置左侧的 20 像素处</p><p><strong>默认值</strong>：0</p><p><strong>JavaScript 语法</strong>：<code>context.shadowOffsetX = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正值或者负值，定义形状与阴影的水平距离</td></tr></tbody></table><h4 id="_6-shadowoffsety" tabindex="-1">6. shadowOffsetY <a class="header-anchor" href="#_6-shadowoffsety" aria-label="Permalink to &quot;6. shadowOffsetY&quot;">​</a></h4><p><strong>作用</strong>：设置或返回阴影与形状的垂直距离</p><p>shadowOffsetY = 0 指示阴影位于形状的正下方</p><p>shadowOffsetY = 20 指示阴影位于形状 top 位置下方的 20 像素处</p><p>shadowOffsetY = -20 指示阴影位于形状 top 位置上方的 20 像素处</p><p><strong>默认值</strong>：0</p><p><strong>JavaScript 语法</strong>：<code>context.shadowOffsetY = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正值或者负值，定义形状与阴影的垂直距离</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><h4 id="_1-createlinegradient" tabindex="-1">1. createLineGradient() <a class="header-anchor" href="#_1-createlinegradient" aria-label="Permalink to &quot;1. createLineGradient()&quot;">​</a></h4><p><strong>作用</strong>：创建线性渐变(用在画布内容上)，渐变可用于填充矩形、圆形、线条、文本等等</p><p>该对象作为 <a href="#_2-strokestyle">strokeStyle</a> 或 <a href="#_1-fillstyle">fillStyle</a> 属性的值，需要配合 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色</p><p><strong>JavaScript 语法</strong>：<code>context.createLinearGradient(x0, y0, x1, y1)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x0</td><td>渐变开始点的 x 坐标</td></tr><tr><td>y0</td><td>渐变开始点的 y 坐标</td></tr><tr><td>x1</td><td>渐变结束点的 x 坐标</td></tr><tr><td>y1</td><td>渐变结束点的 y 坐标</td></tr></tbody></table><h4 id="_2-createpattern" tabindex="-1">2. createPattern() <a class="header-anchor" href="#_2-createpattern" aria-label="Permalink to &quot;2. createPattern()&quot;">​</a></h4><p><strong>作用</strong>：在指定的方向上重复制定的元素</p><p>元素可以是图片、视频，或者其他 &lt;canvas&gt; 元素</p><p>被重复的元素可用于绘制/填充矩形、圆形或者线条等等。</p><p><strong>JavaScript语法</strong>：<code>context.createPattern(image, &quot;repeat|repeat-x|repeat-y|no-repeat&quot;);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>image</td><td>规定要使用的模式的图片、画布或视频元素</td></tr><tr><td>repeat</td><td>默认。该模式下在水平和垂直方向重复</td></tr><tr><td>repeat-x</td><td>该模式只在水平方向重复</td></tr><tr><td>repeat-y</td><td>该模式只在垂直方向重复</td></tr><tr><td>no-repeat</td><td>该模式只显示一次（不重复）</td></tr></tbody></table><h4 id="_3-createradialgradient" tabindex="-1">3. createRadialGradient() <a class="header-anchor" href="#_3-createradialgradient" aria-label="Permalink to &quot;3. createRadialGradient()&quot;">​</a></h4><p><strong>作用</strong>：创建放射状/环形的渐变(用在画布内容上)，渐变可用于填充矩形、圆形、线条、文本等等</p><p>该对象作为 <a href="#_2-strokestyle">strokeStyle</a> 或 <a href="#_1-fillstyle">fillStyle</a> 属性的值，需要配合 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色</p><p><strong>JavaScript 语法</strong>：<code>context.createRadialGradient(x0, y0, r0, x1, y1, r1)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x0</td><td>渐变开始圆的 x 坐标</td></tr><tr><td>y0</td><td>渐变开始圆的 y 坐标</td></tr><tr><td>r0</td><td>开始圆的半径</td></tr><tr><td>x1</td><td>渐变结束圆的 x 坐标</td></tr><tr><td>y1</td><td>渐变结束圆的 y 坐标</td></tr><tr><td>r1</td><td>结束圆的半径</td></tr></tbody></table><h4 id="_4-addcolorstop" tabindex="-1">4. addColorStop() <a class="header-anchor" href="#_4-addcolorstop" aria-label="Permalink to &quot;4. addColorStop()&quot;">​</a></h4><p><strong>作用</strong>：规定渐变对象中的颜色和停止位置</p><p>addColorStop() 方法与 <a href="#_1-createlinegradient">createLinearGradient()</a> 和 <a href="#_3-createradialgradient">createRadialGradient()</a> 一起使用</p><p><strong>注意</strong>：您可以多次调用addColorStop()方法来改变渐变，如果您不对渐变的对象使用该方法，那么渐变将不可见。为了获得可见的渐变，您需要创建至少一个色标。</p><p><strong>JavaScript语法</strong>:<code>gradient.addColorStop(stop,color)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>stop</td><td>介于0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置</td></tr><tr><td>color</td><td>在 stop 位置显示的CSS颜色值</td></tr></tbody></table><h1 id="二、线条样式" tabindex="-1">二、线条样式 <a class="header-anchor" href="#二、线条样式" aria-label="Permalink to &quot;二、线条样式&quot;">​</a></h1><h2 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="_1-linecap" tabindex="-1">1. lineCap <a class="header-anchor" href="#_1-linecap" aria-label="Permalink to &quot;1. lineCap&quot;">​</a></h3><p><strong>作用</strong>：设置或返回线条的结束端点样式</p><p>&quot;round&quot; 和 &quot;square&quot; 会使线条略微变长</p><p><strong>默认值</strong>：butt</p><p><strong>JavaScript语法</strong>：<code>context.lineCap = &quot;butt | round | square&quot;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>butt</td><td>默认。向线条的每个末端添加平直的边缘</td></tr><tr><td>round</td><td>向线条的每个末端添加圆形线帽</td></tr><tr><td>square</td><td>向线条的每个末端添加正方形线帽</td></tr></tbody></table><h3 id="_2-linejoin" tabindex="-1">2. lineJoin <a class="header-anchor" href="#_2-linejoin" aria-label="Permalink to &quot;2. lineJoin&quot;">​</a></h3><p><strong>作用</strong>：设置或返回两条线相交时，所创建的拐角类型</p><p><strong>注意</strong>：&quot;miter&quot; 值受 &quot;<a href="#_4-miterlimit">miterLimit</a>&quot; 属性的影响</p><p><strong>默认值</strong>：miter</p><p><strong>JavaScript语法</strong>：<code>context.lineJoin=&quot;bevel|round|miter&quot;;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>bevel</td><td>创建斜角</td></tr><tr><td>round</td><td>创建圆角</td></tr><tr><td>miter</td><td>默认。创建尖角</td></tr></tbody></table><h3 id="_3-linewidth" tabindex="-1">3. lineWidth <a class="header-anchor" href="#_3-linewidth" aria-label="Permalink to &quot;3. lineWidth&quot;">​</a></h3><p><strong>作用</strong>：设置或返回当前的线条宽度</p><p><strong>默认值</strong>：1</p><p><strong>JavaScript语法</strong>：<code>context.lineWidth = number</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>当前线条的宽度，以像素计</td></tr></tbody></table><h3 id="_4-miterlimit" tabindex="-1">4. miterLimit <a class="header-anchor" href="#_4-miterlimit" aria-label="Permalink to &quot;4. miterLimit&quot;">​</a></h3><p><strong>作用</strong>：设置或返回最大斜接长度</p><p>斜接长度指的是在两条线交汇处内角和外角之间的距离</p><p><strong>提示</strong>：只有当 lineJoin 属性为 &quot;miter&quot; 时， miterLimit 才有效。</p><p>边角的角度越小，斜接长度就会越大。</p><p>为了避免斜接长度过长，我们可以使用 miterLimit 属性。</p><p>如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 &quot;bevel&quot; 类型来显示(Fig3)</p><p><img src="https://raw.githubusercontent.com/xuchp/typora-pics/main/canvas/img_miterlimitBevelFig.gif" alt="Miter Limit figure 2"></p><p><strong>默认值</strong>：10</p><p><strong>JavaScript语法</strong>：<code>context.miterLimit = number</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正数。规定最大斜接长度，如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 &quot;bevel&quot; 类型来显示</td></tr></tbody></table><h1 id="矩形" tabindex="-1">矩形 <a class="header-anchor" href="#矩形" aria-label="Permalink to &quot;矩形&quot;">​</a></h1><h2 id="方法-1" tabindex="-1">方法 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-rect" tabindex="-1">1. rect() <a class="header-anchor" href="#_1-rect" aria-label="Permalink to &quot;1. rect()&quot;">​</a></h3><p><strong>作用</strong>：创建矩形</p><p><strong>提示</strong>：请使用 <a href="#_2-stroke">stroke()</a> 或 <a href="#_1-fill">fill()</a> 方法在画布上实际地绘制矩形。</p><p><strong>JavaScript语法</strong>：<code>context.rect(x, y, width, height)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>矩形左上角的 x 坐标</td></tr><tr><td>y</td><td>矩形左上角的 y 坐标</td></tr><tr><td>width</td><td>矩形的宽度，以像素计</td></tr><tr><td>height</td><td>矩形的高度，以像素计</td></tr></tbody></table><h3 id="_2-fillrect" tabindex="-1">2. fillRect() <a class="header-anchor" href="#_2-fillrect" aria-label="Permalink to &quot;2. fillRect()&quot;">​</a></h3><p><strong>作用</strong>：创建“被填充”的矩形。默认的填充颜色是黑色</p><p><strong>提示</strong>：请使用 <a href="#_1-fillstyle">fillStyle</a> 属性来设置用于填充绘图的颜色、渐变或模式</p><p><strong>JavaScript语法</strong>：<code>context.fillRect(x, y, width, height)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>矩形左上角的 x 坐标</td></tr><tr><td>y</td><td>矩形左上角的 y 坐标</td></tr><tr><td>width</td><td>矩形的宽度，以像素计</td></tr><tr><td>height</td><td>矩形的高度，以像素计</td></tr></tbody></table><h3 id="_3-strokerect" tabindex="-1">3. strokeRect() <a class="header-anchor" href="#_3-strokerect" aria-label="Permalink to &quot;3. strokeRect()&quot;">​</a></h3><p><strong>作用</strong>：绘制矩形（无填充）。笔触的默认颜色是黑色</p><p><strong>提示</strong>：请使用 <a href="#_2-strokestyle">strokeStyle</a> 属性来设置笔触的颜色、渐变或模式</p><p><strong>JavaScript语法</strong>：<code>context.strokeRect(x, y, width, height)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>矩形左上角的 x 坐标</td></tr><tr><td>y</td><td>矩形左上角的 y 坐标</td></tr><tr><td>width</td><td>矩形的宽度，以像素计</td></tr><tr><td>height</td><td>矩形的高度，以像素计</td></tr></tbody></table><h3 id="_4-clearrect" tabindex="-1">4. clearRect() <a class="header-anchor" href="#_4-clearrect" aria-label="Permalink to &quot;4. clearRect()&quot;">​</a></h3><p><strong>作用</strong>：在给定的矩形内清除指定的像素</p><p><strong>JavaScript语法</strong>：<code>context.clearRect(x, y, width, height)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>要清除的矩形左上角的 x 坐标</td></tr><tr><td>y</td><td>要清除的矩形左上角的 y 坐标</td></tr><tr><td>width</td><td>要清除的矩形的宽度，以像素计</td></tr><tr><td>height</td><td>要清除的矩形的高度，以像素计</td></tr></tbody></table><h1 id="路径" tabindex="-1">路径 <a class="header-anchor" href="#路径" aria-label="Permalink to &quot;路径&quot;">​</a></h1><h2 id="方法-2" tabindex="-1">方法 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-fill" tabindex="-1">1. fill() <a class="header-anchor" href="#_1-fill" aria-label="Permalink to &quot;1. fill()&quot;">​</a></h3><p><strong>作用</strong>：填充当前的图像/路径。默认是黑色。</p><p><strong>提示</strong>：请使用 <a href="#_1-fillstyle">fillStyle</a> 属性来填充另一种颜色/渐变</p><p><strong>注意</strong>：如果路径未关闭，那么 fIll() 方法会从路径结束点到开始点之间添加一条线，已关闭路径（正如 <a href="#_5-closepath">closePath()</a>一样），然后填充该路径。</p><p><strong>JavaScript语法</strong>：<code>context.fill()</code></p><h3 id="_2-stroke" tabindex="-1">2. stroke() <a class="header-anchor" href="#_2-stroke" aria-label="Permalink to &quot;2. stroke()&quot;">​</a></h3><p><strong>作用</strong>：实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。</p><p><strong>提示</strong>：请使用 <a href="#_2-strokestyle">strokeStyle</a> 属性来填充另一种颜色/渐变</p><p><strong>JavaScript语法</strong>：<code>context.stroke()</code></p><h3 id="_3-beginpath" tabindex="-1">3. beginPath() <a class="header-anchor" href="#_3-beginpath" aria-label="Permalink to &quot;3. beginPath()&quot;">​</a></h3><p><strong>作用</strong>：开始一条路径，或者重置当前的路径</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_4-moveto" tabindex="-1">4. moveTo() <a class="header-anchor" href="#_4-moveto" aria-label="Permalink to &quot;4. moveTo()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_5-closepath" tabindex="-1">5. closePath() <a class="header-anchor" href="#_5-closepath" aria-label="Permalink to &quot;5. closePath()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_6-lineto" tabindex="-1">6. lineTo() <a class="header-anchor" href="#_6-lineto" aria-label="Permalink to &quot;6. lineTo()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_7-clip" tabindex="-1">7. clip() <a class="header-anchor" href="#_7-clip" aria-label="Permalink to &quot;7. clip()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_8-quadraticcurveto" tabindex="-1">8. quadraticCurveTo() <a class="header-anchor" href="#_8-quadraticcurveto" aria-label="Permalink to &quot;8. quadraticCurveTo()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_9-beziercurveto" tabindex="-1">9. bezierCurveTo() <a class="header-anchor" href="#_9-beziercurveto" aria-label="Permalink to &quot;9. bezierCurveTo()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_10-arc" tabindex="-1">10. arc() <a class="header-anchor" href="#_10-arc" aria-label="Permalink to &quot;10. arc()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_11-arcto" tabindex="-1">11. arcTo() <a class="header-anchor" href="#_11-arcto" aria-label="Permalink to &quot;11. arcTo()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_12-ispointpath" tabindex="-1">12. isPointPath() <a class="header-anchor" href="#_12-ispointpath" aria-label="Permalink to &quot;12. isPointPath()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h1 id="转换" tabindex="-1">转换 <a class="header-anchor" href="#转换" aria-label="Permalink to &quot;转换&quot;">​</a></h1><h2 id="方法-3" tabindex="-1">方法 <a class="header-anchor" href="#方法-3" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-scale" tabindex="-1">1. scale() <a class="header-anchor" href="#_1-scale" aria-label="Permalink to &quot;1. scale()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-rotate" tabindex="-1">2. rotate() <a class="header-anchor" href="#_2-rotate" aria-label="Permalink to &quot;2. rotate()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_3-translate" tabindex="-1">3. translate() <a class="header-anchor" href="#_3-translate" aria-label="Permalink to &quot;3. translate()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_4-settransfrom" tabindex="-1">4. setTransfrom() <a class="header-anchor" href="#_4-settransfrom" aria-label="Permalink to &quot;4. setTransfrom()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h1 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h1><h2 id="属性-2" tabindex="-1">属性 <a class="header-anchor" href="#属性-2" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="_1-font" tabindex="-1">1. font <a class="header-anchor" href="#_1-font" aria-label="Permalink to &quot;1. font&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-textalign" tabindex="-1">2. textAlign <a class="header-anchor" href="#_2-textalign" aria-label="Permalink to &quot;2. textAlign&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_3-textbaseline" tabindex="-1">3. textBaseline <a class="header-anchor" href="#_3-textbaseline" aria-label="Permalink to &quot;3. textBaseline&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h2 id="方法-4" tabindex="-1">方法 <a class="header-anchor" href="#方法-4" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-filltext" tabindex="-1">1. fillText() <a class="header-anchor" href="#_1-filltext" aria-label="Permalink to &quot;1. fillText()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-stroketext" tabindex="-1">2. strokeText() <a class="header-anchor" href="#_2-stroketext" aria-label="Permalink to &quot;2. strokeText()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_3-measuretext" tabindex="-1">3. measureText() <a class="header-anchor" href="#_3-measuretext" aria-label="Permalink to &quot;3. measureText()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h1 id="图像绘制" tabindex="-1">图像绘制 <a class="header-anchor" href="#图像绘制" aria-label="Permalink to &quot;图像绘制&quot;">​</a></h1><h2 id="方法-5" tabindex="-1">方法 <a class="header-anchor" href="#方法-5" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-drawimage" tabindex="-1">1. drawImage() <a class="header-anchor" href="#_1-drawimage" aria-label="Permalink to &quot;1. drawImage()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h1 id="像素操作" tabindex="-1">像素操作 <a class="header-anchor" href="#像素操作" aria-label="Permalink to &quot;像素操作&quot;">​</a></h1><h2 id="属性-3" tabindex="-1">属性 <a class="header-anchor" href="#属性-3" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="_1-width" tabindex="-1">1. width <a class="header-anchor" href="#_1-width" aria-label="Permalink to &quot;1. width&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-height" tabindex="-1">2. height <a class="header-anchor" href="#_2-height" aria-label="Permalink to &quot;2. height&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_3-data" tabindex="-1">3. data <a class="header-anchor" href="#_3-data" aria-label="Permalink to &quot;3. data&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h2 id="方法-6" tabindex="-1">方法 <a class="header-anchor" href="#方法-6" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="_1-createimagedata" tabindex="-1">1. createImageData() <a class="header-anchor" href="#_1-createimagedata" aria-label="Permalink to &quot;1. createImageData()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-getimagedata" tabindex="-1">2. getImageData() <a class="header-anchor" href="#_2-getimagedata" aria-label="Permalink to &quot;2. getImageData()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_3-putimagedata" tabindex="-1">3. putImageData() <a class="header-anchor" href="#_3-putimagedata" aria-label="Permalink to &quot;3. putImageData()&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h1 id="合成" tabindex="-1">合成 <a class="header-anchor" href="#合成" aria-label="Permalink to &quot;合成&quot;">​</a></h1><h2 id="属性-4" tabindex="-1">属性 <a class="header-anchor" href="#属性-4" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="_1-globalalpha" tabindex="-1">1. globalAlpha <a class="header-anchor" href="#_1-globalalpha" aria-label="Permalink to &quot;1. globalAlpha&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p><h3 id="_2-globalcompositeoperation" tabindex="-1">2. globalCompositeOperation <a class="header-anchor" href="#_2-globalcompositeoperation" aria-label="Permalink to &quot;2. globalCompositeOperation&quot;">​</a></h3><p><strong>作用</strong>：</p><p><strong>JavaScript语法</strong>：</p><p><strong>参数值</strong></p>',270),d=[n];function s(i,h,l,p,g,c){return r(),a("div",null,d)}const q=t(o,[["render",s]]);export{u as __pageData,q as default};
