import{_ as t,c as r,o as a,a8 as e}from"./chunks/framework.Uk78KS4B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"canvas/转换.md","filePath":"canvas/转换.md"}'),o={name:"canvas/转换.md"},d=e('<h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><h4 id="_1-scale" tabindex="-1">1. scale() <a class="header-anchor" href="#_1-scale" aria-label="Permalink to &quot;1. scale()&quot;">​</a></h4><p><strong>作用</strong>：缩放当前绘图至更大或更小</p><p><strong>注意</strong>：如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。如果您 scale(2, 2)，那么绘图将定位于距离画布左上角两倍远的位置</p><p><strong>JavaScript 语法</strong>：<code>context.scale(scaleWidth, scaleHeight);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>scaleWidth</td><td>缩放当前绘图的宽度(1 = 100%， 0.5 = 50% , 2 = 200%，依次类推)。</td></tr><tr><td>scaleHeight</td><td>缩放当前绘图的高度(1 = 100%， 0.5 = 50% , 2 = 200%，依次类推)。</td></tr></tbody></table><h4 id="_2-rotate" tabindex="-1">2. rotate() <a class="header-anchor" href="#_2-rotate" aria-label="Permalink to &quot;2. rotate()&quot;">​</a></h4><p><strong>作用</strong>：旋转当前绘图</p><p><strong>注意</strong>：旋转只会影响到旋转完成后的绘图</p><p><strong>JavaScript 语法</strong>：<code>context.rotate(angle);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>angle</td><td>旋转角度，以弧度计。</td></tr></tbody></table><h4 id="_3-translate" tabindex="-1">3. translate() <a class="header-anchor" href="#_3-translate" aria-label="Permalink to &quot;3. translate()&quot;">​</a></h4><p><strong>作用</strong>：重新映射画布上的(0,0)位置</p><p><strong>注意</strong>：当您在<code>translate()</code>之后调用诸如<code>fillRect()</code>之类的方法时，值会添加到 x 和 y 坐标值上。</p><p><img src="https://raw.githubusercontent.com/xuchp/typora-pics/main/canvas/img_translate.gif" alt="Illustration of the translate() method"></p><p><strong>JavaScript 语法</strong>：<code>context.translate(x, y);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td>添加到水平坐标(x)上的值。</td></tr><tr><td>y</td><td>添加到水平坐标(y)上的值。</td></tr></tbody></table><h4 id="_4-transform" tabindex="-1">4. transform() <a class="header-anchor" href="#_4-transform" aria-label="Permalink to &quot;4. transform()&quot;">​</a></h4><p><strong>作用</strong>：替换当前绘图的变换矩阵。它以下面描述的矩阵来操作当前的变换矩阵：</p><p>a c e</p><p>b d f</p><p>0 0 1</p><p>换句话说，<code>transform()</code> 允许您缩放、旋转、移动并倾斜当前的环境。</p><p><strong>注意</strong>：该变换只会影响<code>transform()</code> 方法调用之后的绘图</p><p><strong>注意</strong>：<code>transform()</code>方法的行为相对于由<code>rotate()</code>、<code>scale()</code>、<code>translate()</code>或<code>transform()</code>完成的其他变换。例如：如果您已经将绘图设置为放大两倍，则 <code>transform()</code> 方法会把绘图放大两倍，您的绘图最终将放大四倍。</p><p><strong>提示</strong>请查看 <a href="#_5-settransfrom">setTransform()</a> 方法，它不会相对于其他变换来发生行为。</p><p><strong>JavaScript 语法</strong>：<code>context.transform(a, b, c, d, e, f)</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>a</td><td>水平缩放绘图</td></tr><tr><td>b</td><td>水平倾斜绘图</td></tr><tr><td>c</td><td>垂直倾斜绘图</td></tr><tr><td>d</td><td>垂直缩放绘图</td></tr><tr><td>e</td><td>水平移动绘图</td></tr><tr><td>f</td><td>垂直移动绘图</td></tr></tbody></table><h4 id="_5-settransfrom" tabindex="-1">5. setTransfrom() <a class="header-anchor" href="#_5-settransfrom" aria-label="Permalink to &quot;5. setTransfrom()&quot;">​</a></h4><p><strong>作用</strong>：把当前的变换矩阵重置为单位矩阵，然后以相同的参数运行 <a href="#_4-transform">transform()</a> .</p><p>换句话说，<code>setTransform()</code>允许您缩放、旋转、移动并倾斜当前的环境</p><p><strong>注意</strong>：该变换只会影响<code>setTransform()</code>方法调用之后的绘图</p><p><strong>JavaScript 语法</strong>：<code>context.setTransform(a, b, c, d, e, f);</code></p><p><strong>参数值</strong></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>a</td><td>水平缩放绘图</td></tr><tr><td>b</td><td>水平倾斜绘图</td></tr><tr><td>c</td><td>垂直倾斜绘图</td></tr><tr><td>d</td><td>垂直缩放绘图</td></tr><tr><td>e</td><td>水平移动绘图</td></tr><tr><td>f</td><td>垂直移动绘图</td></tr></tbody></table>',39),s=[d];function n(c,h,p,l,i,g){return a(),r("div",null,s)}const m=t(o,[["render",n]]);export{_ as __pageData,m as default};
