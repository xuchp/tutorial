import{_ as t,c as e,o as a,a8 as l}from"./chunks/framework.Uk78KS4B.js";const m=JSON.parse('{"title":"Canvas API","description":"","frontmatter":{},"headers":[],"relativePath":"canvas/index.md","filePath":"canvas/index.md"}'),d={name:"canvas/index.md"},r=l('<h1 id="canvas-api" tabindex="-1">Canvas API <a class="header-anchor" href="#canvas-api" aria-label="Permalink to &quot;Canvas API&quot;">​</a></h1><h2 id="一、颜色、样式和阴影" tabindex="-1">一、颜色、样式和阴影 <a class="header-anchor" href="#一、颜色、样式和阴影" aria-label="Permalink to &quot;一、颜色、样式和阴影&quot;">​</a></h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><a href="./颜色、样式和阴影.html#_1-fillstyle">fillStyle</a></td><td>设置或返回用于填充绘画的颜色、渐变或模式。</td></tr><tr><td><a href=".//颜色、样式和阴影.html#_2-strokestyle">strokeStyle</a></td><td>设置或返回用于笔触的颜色、渐变或模式。</td></tr><tr><td><a href="./颜色、样式和阴影.html#_3-shadowcolor">shadowColor</a></td><td>设置或返回用于阴影的颜色</td></tr><tr><td><a href="./颜色、样式和阴影.html#_4-shadowblur">shadowBlur</a></td><td>设置或返回用于阴影的模糊级别</td></tr><tr><td><a href="./颜色、样式和阴影.html#_5-shadowoffsetx">shadowOffsetX</a></td><td>设置或返回阴影与形状的水平距离</td></tr><tr><td><a href="./颜色、样式和阴影.html#_6-shadowoffsety">shadowOffsetY</a></td><td>设置或返回阴影与形状的垂直距离</td></tr></tbody></table><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><a href="./颜色、样式和阴影.html#_1-createlinegradient">createLineGradient()</a></td><td>创建线性渐变（用在画布内容上）。</td></tr><tr><td><a href="./颜色、样式和阴影.html#_2-createpattern">createPattern()</a></td><td>在指定的方向上重复指定的元素。</td></tr><tr><td><a href="./颜色、样式和阴影.html#_3-createradialgradient">createRadialGradient</a></td><td>创建放射状/环形的渐变(用在画布内容上).</td></tr><tr><td><a href="./颜色、样式和阴影.html#_4-addcolorstop">addColorStop()</a></td><td>规定渐变对象中的颜色和停止位置。</td></tr></tbody></table><h2 id="二、线条样式" tabindex="-1">二、线条样式 <a class="header-anchor" href="#二、线条样式" aria-label="Permalink to &quot;二、线条样式&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./线条样式.html#_1-linecap">lineCap</a></td><td style="text-align:left;">设置或返回线条的结束端点样式。</td></tr><tr><td style="text-align:left;"><a href="./线条样式.html#_2-linejoin">lineJoin</a></td><td style="text-align:left;">设置或返回两条线相交时，所创建的拐角类型。</td></tr><tr><td style="text-align:left;"><a href="./线条样式.html#_3-linewidth">lineWidth</a></td><td style="text-align:left;">设置或返回当前的线条宽度。</td></tr><tr><td style="text-align:left;"><a href="./线条样式.html#_4-miterlimit">miterLimit</a></td><td style="text-align:left;">设置或返回最大斜接长度。</td></tr></tbody></table><h2 id="三、矩形" tabindex="-1">三、矩形 <a class="header-anchor" href="#三、矩形" aria-label="Permalink to &quot;三、矩形&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./矩形.html#_1-rect">rect()</a></td><td style="text-align:left;">创建矩形。</td></tr><tr><td style="text-align:left;"><a href="./矩形.html#_2-fillrect">fillRect()</a></td><td style="text-align:left;">绘制&quot;被填充&quot;的矩形。</td></tr><tr><td style="text-align:left;"><a href="./矩形.html#_3-strokerect">strokeRect()</a></td><td style="text-align:left;">绘制矩形（无填充）。</td></tr><tr><td style="text-align:left;"><a href="./矩形.html#_4-clearrect">clearRect()</a></td><td style="text-align:left;">在给定的矩形内清除指定的像素。</td></tr></tbody></table><h2 id="四、路径" tabindex="-1">四、路径 <a class="header-anchor" href="#四、路径" aria-label="Permalink to &quot;四、路径&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./路径.html#_1-fill">fill()</a></td><td style="text-align:left;">填充当前绘图（路径）。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_2-stroke">stroke()</a></td><td style="text-align:left;">绘制已定义的路径。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_3-beginpath">beginPath()</a></td><td style="text-align:left;">起始一条路径，或重置当前路径。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_4-moveto">moveTo()</a></td><td style="text-align:left;">把路径移动到画布中的指定点，不创建线条。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_5-closepath">closePath()</a></td><td style="text-align:left;">创建从当前点回到起始点的路径。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_6-lineto">lineTo()</a></td><td style="text-align:left;">添加一个新点，然后在画布中创建从该点到最后指定点的线条。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_7-clip">clip()</a></td><td style="text-align:left;">从原始画布剪切任意形状和尺寸的区域。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_8-quadraticcurveto">quadraticCurveTo()</a></td><td style="text-align:left;">创建二次贝塞尔曲线。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_9-beziercurveto">bezierCurveTo()</a></td><td style="text-align:left;">创建三次贝塞尔曲线。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_10-arc">arc()</a></td><td style="text-align:left;">创建弧/曲线（用于创建圆形或部分圆）。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_11-arcto">arcTo()</a></td><td style="text-align:left;">创建两切线之间的弧/曲线。</td></tr><tr><td style="text-align:left;"><a href="./路径.html#_12-ispointpath">isPointInPath()</a></td><td style="text-align:left;">如果指定的点位于当前路径中，则返回 true，否则返回 false。</td></tr></tbody></table><h2 id="五、转换" tabindex="-1">五、转换 <a class="header-anchor" href="#五、转换" aria-label="Permalink to &quot;五、转换&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./转换.html#_1-scale">scale()</a></td><td style="text-align:left;">缩放当前绘图至更大或更小。</td></tr><tr><td style="text-align:left;"><a href="./转换.html#_2-rotate">rotate()</a></td><td style="text-align:left;">旋转当前绘图。</td></tr><tr><td style="text-align:left;"><a href="./转换.html#_3-translate">translate()</a></td><td style="text-align:left;">重新映射画布上的 (0,0) 位置。</td></tr><tr><td style="text-align:left;"><a href="./转换.html#_4-transform">transform()</a></td><td style="text-align:left;">替换绘图的当前转换矩阵。</td></tr><tr><td style="text-align:left;"><a href="./转换.html#_5-settransform">setTransform()</a></td><td style="text-align:left;">将当前转换重置为单位矩阵。然后运行 transform()。</td></tr></tbody></table><h2 id="六、文本" tabindex="-1">六、文本 <a class="header-anchor" href="#六、文本" aria-label="Permalink to &quot;六、文本&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./文本.html#_1-font">font</a></td><td style="text-align:left;">设置或返回文本内容的当前字体属性。</td></tr><tr><td style="text-align:left;"><a href="./文本.html#_2-textalign">textAlign</a></td><td style="text-align:left;">设置或返回文本内容的当前对齐方式。</td></tr><tr><td style="text-align:left;"><a href="./文本.html#_3-textbaseline">textBaseline</a></td><td style="text-align:left;">设置或返回在绘制文本时使用的当前文本基线。</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./文本.html#_1-filltext">fillText()</a></td><td style="text-align:left;">在画布上绘制&quot;被填充的&quot;文本。</td></tr><tr><td style="text-align:left;"><a href="./文本.html#_2-stroketext">strokeText()</a></td><td style="text-align:left;">在画布上绘制文本（无填充）。</td></tr><tr><td style="text-align:left;"><a href="./文本.html#_3-measuretext">measureText()</a></td><td style="text-align:left;">返回包含指定文本宽度的对象。</td></tr></tbody></table><h2 id="七、图像绘制" tabindex="-1">七、图像绘制 <a class="header-anchor" href="#七、图像绘制" aria-label="Permalink to &quot;七、图像绘制&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./图像绘制.html#_1-drawimage">drawImage()</a></td><td style="text-align:left;">向画布上绘制图像、画布或视频。</td></tr></tbody></table><h2 id="八、像素操作" tabindex="-1">八、像素操作 <a class="header-anchor" href="#八、像素操作" aria-label="Permalink to &quot;八、像素操作&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./像素操作.html#_1-width">width</a></td><td style="text-align:left;">返回 ImageData 对象的宽度。</td></tr><tr><td style="text-align:left;"><a href="./像素操作.html#_2-height">height</a></td><td style="text-align:left;">返回 ImageData 对象的高度。</td></tr><tr><td style="text-align:left;"><a href="./像素操作.html#_3-data">data</a></td><td style="text-align:left;">返回一个对象，其包含指定的 ImageData 对象的图像数据。</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./像素操作.html#_1-createimagedata">createImageData()</a></td><td style="text-align:left;">创建新的、空白的 ImageData 对象。</td></tr><tr><td style="text-align:left;"><a href="./像素操作.html#_2-getimagedata">getImageData()</a></td><td style="text-align:left;">返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。</td></tr><tr><td style="text-align:left;"><a href="./像素操作.html#_3-putimagedata">putImageData()</a></td><td style="text-align:left;">把图像数据（从指定的 ImageData 对象）放回画布上。</td></tr></tbody></table><h2 id="九、合成" tabindex="-1">九、合成 <a class="header-anchor" href="#九、合成" aria-label="Permalink to &quot;九、合成&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./合成.html#_1-globalalpha">globalAlpha</a></td><td style="text-align:left;">设置或返回绘图的当前 alpha 或透明值。</td></tr><tr><td style="text-align:left;"><a href="./合成.html#_2-globalcompositeoperation">globalCompositeOperation</a></td><td style="text-align:left;">设置或返回新图像如何绘制到已有的图像上。</td></tr></tbody></table><h2 id="十、其他" tabindex="-1">十、其他 <a class="header-anchor" href="#十、其他" aria-label="Permalink to &quot;十、其他&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./其他.html#_1-save">save()</a></td><td style="text-align:left;">保存当前环境的状态。</td></tr><tr><td style="text-align:left;"><a href="./其他.html#_2-restore">restore()</a></td><td style="text-align:left;">返回之前保存过的路径状态和属性。</td></tr><tr><td style="text-align:left;"><a href="./其他.html#_3-createevent">createEvent()</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./其他.html#_4-getcontext">getContext()</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./其他.html#_5-todataurl">toDataURL()</a></td><td style="text-align:left;"></td></tr></tbody></table>',24),h=[r];function i(n,s,f,o,g,x){return a(),e("div",null,h)}const c=t(d,[["render",i]]);export{m as __pageData,c as default};